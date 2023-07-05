import { Component, OnInit } from "@angular/core"
import { KorisnikService } from "../services/korisnik.service"
import { Router } from "@angular/router"
import { Korisnik } from "../model/korisnik"
import { Posao } from "../model/posao"
import { KlijentService } from "../services/klijent.service"

@Component({
    selector: "app-komentari",
    templateUrl: "./komentari.component.html",
    styleUrls: ["./komentari.component.css"],
})
export class KomentariComponent implements OnInit {
    constructor(
        private korisnikServis: KorisnikService,
        private klijentServis: KlijentService,
        private ruter: Router
    ) {}

    agencija: Korisnik
    poslovi: Posao[]

    ngOnInit(): void {
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
    }

    nazad() {
        localStorage.clear()
        this.ruter.navigate(["neregistrovani"])
    }
}
