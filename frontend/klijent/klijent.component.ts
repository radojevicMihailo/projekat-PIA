import { Component, OnInit } from "@angular/core"
import { KorisnikService } from "../services/korisnik.service"
import { Router } from "@angular/router"
import { Korisnik } from "../model/korisnik"
import { KlijentService } from "../services/klijent.service"
import { saveAs } from "file-saver"

@Component({
    selector: "app-klijent",
    templateUrl: "./klijent.component.html",
    styleUrls: ["./klijent.component.css"],
})
export class KlijentComponent implements OnInit {
    constructor(
        private korisnikServis: KorisnikService,
        private klijentServis: KlijentService,
        private ruter: Router
    ) {}

    klijent: Korisnik
    ime: string
    prezime: string
    email: string
    telefon: string
    profilnaSlika: string

    ngOnInit(): void {
        this.korisnikServis
            .dohvatiKorisnika(localStorage.getItem("ulogovan"))
            .subscribe((k: Korisnik) => {
                this.klijent = k
                this.ime = k.ime
                this.prezime = k.prezime
                this.email = k.email
                this.telefon = k.telefon
                this.profilnaSlika = k.profilnaSlika
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
            this.profilnaSlika = this.izabranaSlika.name
        } else {
            this.profilnaSlika = this.klijent.profilnaSlika
        }
        this.klijentServis.azurirajIme(this.klijent.korIme, this.ime).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.ngOnInit()
            } else {
                this.poruka = "Greska"
            }
        })
        this.klijentServis.azurirajPrezime(this.klijent.korIme, this.prezime).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.ngOnInit()
            } else {
                this.poruka = "Greska"
            }
        })
        this.klijentServis.azurirajTelefon(this.klijent.korIme, this.telefon).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.ngOnInit()
            } else {
                this.poruka = "Greska"
            }
        })
        this.klijentServis.azurirajEmail(this.klijent.korIme, this.email).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.ngOnInit()
            } else {
                this.poruka = "Greska"
            }
        })
        this.klijentServis
            .azurirajEmail(this.klijent.korIme, this.profilnaSlika)
            .subscribe((resp) => {
                if (resp["poruka"] == "ok") {
                    this.ngOnInit()
                } else {
                    this.poruka = "Greska"
                }
            })
    }
}
