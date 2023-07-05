import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { AdminService } from "../services/admin.service"
import { Posao } from "../model/posao"
import { Korisnik } from "../model/korisnik"
import { KlijentService } from "../services/klijent.service"
import { AgencijaService } from "../services/agencija.service"

@Component({
    selector: "app-admin",
    templateUrl: "./admin.component.html",
    styleUrls: ["./admin.component.css"],
})
export class AdminComponent implements OnInit {
    constructor(
        private adminServis: AdminService,
        private klijentServis: KlijentService,
        private agencijaServis: AgencijaService,
        private ruter: Router
    ) {}

    klijenti: Korisnik[]
    agencije: Korisnik[]
    registracijeKlijenti: Korisnik[]
    registracijeAgencije: Korisnik[]

    ngOnInit(): void {
        this.adminServis.dohvatiKlijente().subscribe((k: Korisnik[]) => {
            this.klijenti = k
        })
        this.adminServis.dohvatiAgencije().subscribe((a: Korisnik[]) => {
            this.agencije = a
        })
        this.adminServis.dohvatiRegistracijeKlijenti().subscribe((rk: Korisnik[]) => {
            this.registracijeKlijenti = rk
        })
        this.adminServis.dohvatiRegistracijeAgencije().subscribe((ra: Korisnik[]) => {
            this.registracijeAgencije = ra
        })
    }

    odjava() {
        localStorage.clear()
        this.ruter.navigate(["prijavaAdmin"])
    }

    poruka: string

    odobri(korIme) {
        this.adminServis.odobriRegistraciju(korIme).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.poruka = "Uspelo"
                this.ngOnInit()
            } else {
                this.poruka = "Greska"
            }
        })
    }

    odbi(korIme) {
        this.adminServis.odbiRegistraciju(korIme).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.poruka = "Uspelo"
                this.ngOnInit()
            } else {
                this.poruka = "Greska"
            }
        })
    }

    azurirajK(k: Korisnik) {
        this.klijentServis.azurirajIme(k.korIme, k.ime).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.ngOnInit()
            } else {
                this.poruka = "Greska"
            }
        })
        this.klijentServis.azurirajPrezime(k.korIme, k.prezime).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.ngOnInit()
            } else {
                this.poruka = "Greska"
            }
        })
        this.klijentServis.azurirajTelefon(k.korIme, k.telefon).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.ngOnInit()
            } else {
                this.poruka = "Greska"
            }
        })
        this.klijentServis.azurirajEmail(k.korIme, k.email).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.ngOnInit()
            } else {
                this.poruka = "Greska"
            }
        })
    }

    azurirajA(a: Korisnik) {
        this.agencijaServis.azurirajNaziv(a.korIme, a.naziv).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.ngOnInit()
            } else {
                this.poruka = "Greska"
            }
        })
        this.agencijaServis.azurirajAdresa(a.korIme, a.adresa).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.ngOnInit()
            } else {
                this.poruka = "Greska"
            }
        })
        this.agencijaServis.azurirajOpis(a.korIme, a.opis).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.ngOnInit()
            } else {
                this.poruka = "Greska"
            }
        })
        this.agencijaServis.azurirajMaticniBroj(a.korIme, a.maticniBroj).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.ngOnInit()
            } else {
                this.poruka = "Greska"
            }
        })
        this.agencijaServis.azurirajTelefon(a.korIme, a.telefon).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.ngOnInit()
            } else {
                this.poruka = "Greska"
            }
        })
        this.agencijaServis.azurirajEmail(a.korIme, a.email).subscribe((resp) => {
            if (resp["poruka"] == "ok") {
                this.ngOnInit()
            } else {
                this.poruka = "Greska"
            }
        })
    }
}
