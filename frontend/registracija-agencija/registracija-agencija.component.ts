import { Component, OnInit } from "@angular/core"
import { KorisnikService } from "../services/korisnik.service"
import { Router } from "@angular/router"
import { saveAs } from "file-saver"
import { Korisnik } from "../model/korisnik"

@Component({
    selector: "app-registracija-agencija",
    templateUrl: "./registracija-agencija.component.html",
    styleUrls: ["./registracija-agencija.component.css"],
})
export class RegistracijaAgencijaComponent implements OnInit {
    constructor(private korisnikServis: KorisnikService, private ruter: Router) {}

    ngOnInit(): void {}

    korIme: string = ""
    lozinka: string = ""
    lozinkaPotvrda: string = ""
    telefon: string = ""
    email: string = ""
    naziv: string = ""
    adresa: string = ""
    maticniBroj: string = ""
    opis: string = ""
    logotip: string = ""
    poruka: string

    izabranaSlika: File | null

    izabranFajl(event: any) {
        const dozvoljeniFormati = ["image/jpeg", "image/jpg", "image/png"]
        if (dozvoljeniFormati.includes(this.izabranaSlika.type)) {
            this.izabranaSlika = event.target.files[0]
        } else {
            this.poruka = "Niste uneli ispravan format slike."
            this.izabranaSlika = null
            return
        }
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
    }

    registracija() {
        if (
            this.korIme == "" ||
            this.lozinka == "" ||
            this.lozinkaPotvrda == "" ||
            this.telefon == "" ||
            this.email == "" ||
            this.naziv == "" ||
            this.adresa == "" ||
            this.maticniBroj == "" ||
            this.opis == ""
        ) {
            this.poruka = "Morate uneti sve trazene podatke!"
            return
        }
        this.korisnikServis.dohvatiKorisnika(this.korIme).subscribe((k: Korisnik) => {
            if (k != null) {
                this.poruka = "Uneto korisnicko ime je zauzeto!"
                return
            }
        })
        const oblikLozinke: string =
            "^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])(?!.*\\s)(?!.*[a-z]).{7,12}$"
        const regex: RegExp = new RegExp(oblikLozinke)
        if (!regex.test(this.lozinka)) {
            this.poruka = "Niste uneli lozinku u ispravnom formatu."
            return
        }
        if (this.lozinka == this.lozinkaPotvrda) {
            if (this.izabranaSlika) {
                saveAs(this.izabranaSlika, this.izabranaSlika.name)
                this.logotip = this.izabranaSlika.name
            } else {
                this.logotip = "agencija.png"
            }
            this.korisnikServis
                .registracijaAgencija(
                    this.korIme,
                    this.lozinka,
                    this.telefon,
                    this.email,
                    this.naziv,
                    this.adresa,
                    this.maticniBroj,
                    this.opis,
                    this.logotip
                )
                .subscribe((respObj) => {
                    if (respObj["poruka"] == "ok") {
                        this.poruka = "Zahtev za registraciju je uspesno upisan."
                    } else {
                        this.poruka = "greska"
                    }
                })
        } else {
            this.poruka = "Niste uspesno potvrdili lozinku"
        }
        this.poruka = ""
    }
}
