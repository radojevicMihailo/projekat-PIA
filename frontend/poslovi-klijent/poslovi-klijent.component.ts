import { Component, ElementRef, OnInit, ViewChild } from "@angular/core"
import { KorisnikService } from "../services/korisnik.service"
import { KlijentService } from "../services/klijent.service"
import { Router } from "@angular/router"
import { Korisnik } from "../model/korisnik"
import { Posao } from "../model/posao"
import { fabric } from "fabric"
import { Objekat } from "../model/objekat"

@Component({
    selector: "app-poslovi-klijent",
    templateUrl: "./poslovi-klijent.component.html",
    styleUrls: ["./poslovi-klijent.component.css"],
})
export class PosloviKlijentComponent implements OnInit {
    constructor(
        private korisnikServis: KorisnikService,
        private klijentServis: KlijentService,
        private ruter: Router
    ) {}

    @ViewChild("canvas", { static: false }) canvas: ElementRef

    klijent: Korisnik
    zavrseniPoslovi: Posao[]
    aktivniPoslovi: Posao[]
    zahtevi: Posao[]

    ngOnInit(): void {
        let ulogovan: string = localStorage.getItem("ulogovan")
        this.korisnikServis.dohvatiKorisnika(ulogovan).subscribe((k: Korisnik) => {
            this.klijent = k
        })
    }

    odjava() {
        localStorage.clear()
        this.ruter.navigate([""])
    }

    prikaz1: boolean = false
    prikaz2: boolean = false
    prikaz3: boolean = false

    prikazZavrseniPoslovi() {
        this.prikaz1 = true
        this.prikaz2 = false
        this.prikaz3 = false
        this.klijentServis.dohvatiZavrsenePoslove(this.klijent.korIme).subscribe((p: Posao[]) => {
            this.zavrseniPoslovi = p
        })
    }

    prikazAktivniPoslovi() {
        this.prikaz1 = false
        this.prikaz2 = true
        this.prikaz3 = false
        this.klijentServis.dohvatiAktivnePoslove(this.klijent.korIme).subscribe((p: Posao[]) => {
            this.aktivniPoslovi = p
        })
    }

    prikazZahtevi() {
        this.prikaz1 = false
        this.prikaz2 = false
        this.prikaz3 = true
        this.klijentServis.dohvatiZahteve(this.klijent.korIme).subscribe((p: Posao[]) => {
            this.zahtevi = p
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
}
