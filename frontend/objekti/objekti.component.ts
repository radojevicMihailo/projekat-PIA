import { Component, ElementRef, OnInit, ViewChild } from "@angular/core"
import { KorisnikService } from "../services/korisnik.service"
import { KlijentService } from "../services/klijent.service"
import { Router } from "@angular/router"
import { Korisnik } from "../model/korisnik"
import { Objekat } from "../model/objekat"
import { fabric } from "fabric"

@Component({
    selector: "app-objekti",
    templateUrl: "./objekti.component.html",
    styleUrls: ["./objekti.component.css"],
})
export class ObjektiComponent implements OnInit {
    constructor(
        private korisnikServis: KorisnikService,
        private klijentServis: KlijentService,
        private ruter: Router
    ) {}

    @ViewChild("canvas", { static: true }) canvas: ElementRef
    klijent: Korisnik
    objekti: Objekat[]

    ngOnInit(): void {
        this.korisnikServis
            .dohvatiKorisnika(localStorage.getItem("ulogovan"))
            .subscribe((k: Korisnik) => {
                this.klijent = k
            })
        this.klijentServis
            .dohvatiObjekte(localStorage.getItem("ulogovan"))
            .subscribe((o: Objekat[]) => {
                this.objekti = o
            })
    }

    odjava() {
        localStorage.clear()
        this.ruter.navigate([""])
    }

    poruka: string = ""

    prikaziSkicu(o: Objekat) {
        const canvas = new fabric.Canvas(this.canvas.nativeElement)
        for (let p of o.skica) {
            const soba = new fabric.Rect({
                left: p.x,
                top: p.y,
                width: p.w,
                height: p.h,
                fill: "transparent",
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
    }

    izmeniObjekat(o: Objekat) {}

    obrisiObjekat(o: Objekat) {}

    tip: string = ""
    adresa: string = ""
    brojProstorija: number = 0
    kvadratura: string = ""

    unesi() {
        for (let i: number = 0; i < this.brojProstorija; i++) {}
    }

    izabranFajl: File | null

    ucitajJSON(event: any) {
        const file = event.target.files[0]
        const fileName = file.name
        if (fileName.endsWidth(".json")) {
            this.izabranFajl = event.target.files[0]
        } else {
            this.poruka = "Niste uneli ispravan format slike."
            this.izabranFajl = null
            return
        }
    }

    unesiJSON() {
        const reader = new FileReader()

        reader.onload = () => {}
    }
}
