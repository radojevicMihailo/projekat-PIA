import { Component, OnInit } from "@angular/core"
import { KorisnikService } from "../services/korisnik.service"
import { Router } from "@angular/router"
import { Korisnik } from "../model/korisnik"

@Component({
    selector: "app-promena-lozinke",
    templateUrl: "./promena-lozinke.component.html",
    styleUrls: ["./promena-lozinke.component.css"],
})
export class PromenaLozinkeComponent implements OnInit {
    constructor(private korisnikServis: KorisnikService, private ruter: Router) {}

    korisnik: Korisnik

    ngOnInit(): void {
        this.korisnikServis
            .dohvatiKorisnika(localStorage.getItem("ulogovan"))
            .subscribe((k: Korisnik) => {
                this.korisnik = k
            })
    }

    odjava() {
        localStorage.clear()
        this.ruter.navigate([""])
    }

    stara_loz: string = ""
    nova_loz: string = ""
    nova_loz_pot: string = ""
    poruka: string = ""

    promeni() {
        if (this.stara_loz != this.korisnik.lozinka) {
            this.poruka = "Niste uneli ispravnu staru lozinku!"
            return
        }
        const oblikLozinke: string =
            "^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])(?!.*\\s)(?!.*[a-z]).{7,12}$"
        const regex: RegExp = new RegExp(oblikLozinke)
        if (regex.test(this.nova_loz)) {
            this.poruka = "Niste uneli novu lozinku u ispravnom formatu."
            return
        }
        if (this.nova_loz != this.nova_loz_pot) {
            this.poruka = "Niste uspesno potvrdili novu lozinku!"
            return
        }
        this.korisnikServis
            .promeniLozinku(this.korisnik.korIme, this.nova_loz)
            .subscribe((resp) => {
                localStorage.clear()
                this.ruter.navigate([""])
            })
    }
}
