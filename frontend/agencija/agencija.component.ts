import { Component, OnInit } from "@angular/core"
import { KorisnikService } from "../services/korisnik.service"
import { AgencijaService } from "../services/agencija.service"
import { Router } from "@angular/router"
import { Korisnik } from "../model/korisnik"
import { saveAs } from "file-saver"

@Component({
    selector: "app-agencija",
    templateUrl: "./agencija.component.html",
    styleUrls: ["./agencija.component.css"],
})
export class AgencijaComponent implements OnInit {
    constructor(
        private korisnikServis: KorisnikService,
        private agencijaServis: AgencijaService,
        private ruter: Router
    ) {}

    agencija: Korisnik
    naziv: string
    adresa: string
    opis: string
    maticniBroj: number
    email: string
    telefon: string
    logotip: string

    ngOnInit(): void {
        this.korisnikServis
            .dohvatiKorisnika(localStorage.getItem("ulogovan"))
            .subscribe((k: Korisnik) => {
                this.agencija = k
                this.naziv = k.naziv
                this.adresa = k.adresa
                this.opis = k.opis
                this.maticniBroj = k.maticniBroj
                this.email = k.email
                this.telefon = k.telefon
                this.logotip = k.logotip
            })
    }

    odjava() {
        localStorage.clear()
        this.ruter.navigate([""])
    }

    izabranaSlika: File | null
    poruka: string

    izabranFajl(event: any) {
        const img = new Image()
        img.src = URL.createObjectURL(this.izabranaSlika)
        img.onload = () => {
            URL.revokeObjectURL(img.src)
            if (img.width < 100 && img.height > 300) {
                this.poruka = "Dimenzije slike nisu ispravne."
                this.izabranaSlika = null
                return
            }
        }
        const dozvoljeniFormati = ["image/jpeg", "image/jpg", "image/png"]
        if (dozvoljeniFormati.includes(this.izabranaSlika.type)) {
            this.izabranaSlika = event.target.files[0]
        } else {
            this.poruka = "Niste uneli ispravan format slike."
            this.izabranaSlika = null
            return
        }
    }

    azuriraj() {
        if (this.izabranaSlika) {
            saveAs(this.izabranaSlika, this.izabranaSlika.name)
            this.logotip = this.izabranaSlika.name
        } else {
            this.logotip = this.agencija.logotip
        }
        this.agencijaServis.azurirajNaziv(this.agencija.korIme, this.naziv).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.ngOnInit()
            } else {
                this.poruka = "Greska"
            }
        })
        this.agencijaServis.azurirajAdresa(this.agencija.korIme, this.adresa).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.ngOnInit()
            } else {
                this.poruka = "Greska"
            }
        })
        this.agencijaServis.azurirajOpis(this.agencija.korIme, this.opis).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.ngOnInit()
            } else {
                this.poruka = "Greska"
            }
        })
        this.agencijaServis
            .azurirajMaticniBroj(this.agencija.korIme, this.maticniBroj)
            .subscribe((resp) => {
                if (resp["poruka"] == "ok") {
                    this.ngOnInit()
                } else {
                    this.poruka = "Greska"
                }
            })
        this.agencijaServis
            .azurirajTelefon(this.agencija.korIme, this.telefon)
            .subscribe((resp) => {
                if (resp["poruka"] == "ok") {
                    this.ngOnInit()
                } else {
                    this.poruka = "Greska"
                }
            })
        this.agencijaServis.azurirajEmail(this.agencija.korIme, this.email).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.ngOnInit()
            } else {
                this.poruka = "Greska"
            }
        })
        this.agencijaServis
            .azurirajLogotip(this.agencija.korIme, this.logotip)
            .subscribe((resp) => {
                if (resp["poruka"] == "ok") {
                    this.ngOnInit()
                } else {
                    this.poruka = "Greska"
                }
            })
    }
}
