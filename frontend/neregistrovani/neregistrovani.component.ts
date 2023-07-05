import { Component, OnInit } from "@angular/core"
import { KorisnikService } from "../services/korisnik.service"
import { Router } from "@angular/router"
import { Korisnik } from "../model/korisnik"

@Component({
    selector: "app-neregistrovani",
    templateUrl: "./neregistrovani.component.html",
    styleUrls: ["./neregistrovani.component.css"],
})
export class NeregistrovaniComponent implements OnInit {
    constructor(private korisnikServis: KorisnikService, private ruter: Router) {}

    agencije: Korisnik[]
    nazivPretraga: string = ""
    adresaPretraga: string = ""

    ngOnInit(): void {
        this.korisnikServis
            .dohvatiAgencije(this.nazivPretraga, this.adresaPretraga)
            .subscribe((a: Korisnik[]) => {
                this.agencije = a
            })
    }

    nazad() {
        localStorage.clear()
        this.ruter.navigate([""])
    }

    pretraga() {
        this.ngOnInit()
    }

    komentari(korIme) {
        localStorage.setItem("komentari", korIme)
        this.ruter.navigate(["komentari"])
    }

    nazivno() {
        this.korisnikServis
            .dohvatiAgencije(this.nazivPretraga, this.adresaPretraga)
            .subscribe((a: Korisnik[]) => {
                this.agencije = a
                this.agencije.sort((p, q) => {
                    if (p.naziv > q.naziv) {
                        return 1
                    } else {
                        return -1
                    }
                })
            })
    }

    nazivnr() {
        this.korisnikServis
            .dohvatiAgencije(this.nazivPretraga, this.adresaPretraga)
            .subscribe((a: Korisnik[]) => {
                this.agencije = a
                this.agencije.sort((p, q) => {
                    if (p.naziv < q.naziv) {
                        return 1
                    } else {
                        return -1
                    }
                })
            })
    }

    opisno() {
        this.korisnikServis
            .dohvatiAgencije(this.nazivPretraga, this.adresaPretraga)
            .subscribe((a: Korisnik[]) => {
                this.agencije = a
                this.agencije.sort((p, q) => {
                    if (p.opis > q.opis) {
                        return 1
                    } else {
                        return -1
                    }
                })
            })
    }

    opisnr() {
        this.korisnikServis
            .dohvatiAgencije(this.nazivPretraga, this.adresaPretraga)
            .subscribe((a: Korisnik[]) => {
                this.agencije = a
                this.agencije.sort((p, q) => {
                    if (p.opis < q.opis) {
                        return 1
                    } else {
                        return -1
                    }
                })
            })
    }
}
