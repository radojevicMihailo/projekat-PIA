import { Component, OnInit } from "@angular/core"
import { KorisnikService } from "../services/korisnik.service"
import { KlijentService } from "../services/klijent.service"
import { Router } from "@angular/router"
import { Korisnik } from "../model/korisnik"
import { Objekat } from "../model/objekat"
import { Posao } from "../model/posao"

@Component({
    selector: "app-komentari-klijent",
    templateUrl: "./komentari-klijent.component.html",
    styleUrls: ["./komentari-klijent.component.css"],
})
export class KomentariKlijentComponent implements OnInit {
    constructor(
        private korisnikServis: KorisnikService,
        private klijentServis: KlijentService,
        private ruter: Router
    ) {}

    klijent: Korisnik
    agencija: Korisnik
    objekti: Objekat[]
    poslovi: Posao[]

    ngOnInit(): void {
        this.korisnikServis
            .dohvatiKorisnika(localStorage.getItem("ulogovan"))
            .subscribe((k: Korisnik) => {
                this.klijent = k
            })
        this.korisnikServis
            .dohvatiKorisnika(localStorage.getItem("komentari"))
            .subscribe((a: Korisnik) => {
                this.agencija = a
                this.klijentServis
                    .dohvatiZavrsenePosloveAgencije(a.korIme)
                    .subscribe((p: Posao[]) => {
                        this.poslovi = p
                    })
            })
        this.klijentServis
            .dohvatiObjekte(localStorage.getItem("ulogovan"))
            .subscribe((o: Objekat[]) => {
                this.objekti = o
            })
    }

    nazad() {
        localStorage.removeItem("komentari")
        this.ruter.navigate(["agencije"])
    }

    objekat: string
    vreme: string = ""
    poruka: string = ""

    posalji() {
        this.klijentServis.dohvatiObjekat(this.objekat).subscribe((o: Objekat) => {
            let objekatNaziv =
                o.tip +
                ", " +
                o.adresa +
                ", " +
                o.brojProstorija +
                " prostorije, " +
                o.kvadratura +
                " m2"
            this.klijentServis
                .posaljiZahtev(
                    this.objekat,
                    objekatNaziv,
                    this.klijent.korIme,
                    this.agencija.korIme,
                    this.agencija.naziv,
                    this.vreme,
                    0,
                    0,
                    0,
                    ""
                )
                .subscribe((respObj) => {
                    if (respObj["poruka"] == "ok") {
                        this.poruka = "Zahtev za saradnju je uspesno upisan."
                    } else {
                        this.poruka = "greska"
                    }
                })
        })
    }
}
