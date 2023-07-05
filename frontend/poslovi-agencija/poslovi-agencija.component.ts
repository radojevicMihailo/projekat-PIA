import { Component, ElementRef, OnInit, ViewChild } from "@angular/core"
import { Korisnik } from "../model/korisnik"
import { KorisnikService } from "../services/korisnik.service"
import { AgencijaService } from "../services/agencija.service"
import { Router } from "@angular/router"
import { Posao } from "../model/posao"
import { fabric } from "fabric"
import { KlijentService } from "../services/klijent.service"
import { Objekat } from "../model/objekat"
import { Prostorija } from "../model/prostorija"

@Component({
    selector: "app-poslovi-agencija",
    templateUrl: "./poslovi-agencija.component.html",
    styleUrls: ["./poslovi-agencija.component.css"],
})
export class PosloviAgencijaComponent implements OnInit {
    constructor(
        private korisnikServis: KorisnikService,
        private agencijaServis: AgencijaService,
        private klijentServis: KlijentService,
        private ruter: Router
    ) {}

    @ViewChild("canvas", { static: false }) canvas: ElementRef

    agencija: Korisnik
    zahtevi: Posao[]
    poslovi: Posao[]

    ngOnInit(): void {
        let ulogovan = localStorage.getItem("ulogovan")
        this.korisnikServis.dohvatiKorisnika(ulogovan).subscribe((k: Korisnik) => {
            this.agencija = k
        })
        this.agencijaServis.dohvatiZahteve(ulogovan).subscribe((z: Posao[]) => {
            this.zahtevi = z
        })
        this.agencijaServis.dohvatiPoslove(ulogovan).subscribe((p: Posao[]) => {
            this.poslovi = p
        })
        this.prikazForma = false
    }

    odjava() {
        localStorage.clear()
        this.ruter.navigate([""])
    }

    poruka: string = ""
    ponuda: number = 0

    prihvati(z: Posao) {
        console.log("prihvati", z.ponuda)

        if (z.ponuda == 0) {
            this.poruka = "Morate uneti ponudu pre nego sto prihvatite"
            return
        }
        this.agencijaServis.prihvatiZahtev1(z.idP, z.ponuda).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.poruka = "Uspelo"
            } else {
                this.poruka = "Greska"
            }
        })
        this.agencijaServis.prihvatiZahtev2(z.idP, z.ponuda).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.poruka = "Uspelo"
            } else {
                this.poruka = "Greska"
            }
        })
        this.ngOnInit()
    }

    odbi(idP) {
        this.agencijaServis.odbiZahtev(idP).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.ngOnInit()
            } else {
                this.poruka = "Greska"
            }
        })
    }

    prikazi(objekatId) {
        const canvas = new fabric.Canvas(this.canvas.nativeElement)
        this.klijentServis.dohvatiObjekat(objekatId).subscribe((o: Objekat) => {
            for (let p of o.skica) {
                const soba = new fabric.Rect({
                    left: p.x,
                    top: p.y,
                    width: p.w,
                    height: p.h,
                    fill: p.status,
                    strokeWidth: 1,
                    stroke: "black",
                })
                const vrata = new fabric.Rect({
                    left: p.vx,
                    top: p.vy,
                    width: 10,
                    height: 10,
                    fill: "brown",
                })
                canvas.add(soba)
                canvas.add(vrata)
            }
        })
    }

    prikazForma: boolean
    objekat: Objekat

    promeni(objekatId) {
        this.klijentServis.dohvatiObjekat(objekatId).subscribe((o: Objekat) => {
            this.objekat = o
        })
        this.prikazForma = true
    }

    promeniStatus(p: Prostorija) {}
}
