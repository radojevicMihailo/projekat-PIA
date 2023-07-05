import { Component, OnInit } from "@angular/core"
import { KorisnikService } from "../services/korisnik.service"
import { Korisnik } from "../model/korisnik"
import { Router } from "@angular/router"

@Component({
    selector: "app-prijava",
    templateUrl: "./prijava.component.html",
    styleUrls: ["./prijava.component.css"],
})
export class PrijavaComponent implements OnInit {
    constructor(private korisnikServis: KorisnikService, private ruter: Router) {}

    ngOnInit(): void {}

    korIme: string
    lozinka: string
    poruka: string

    prijava() {
        if (this.korIme == "" || this.lozinka == "") {
            this.poruka = "Niste uneli sve podatke!"
            return
        }
        this.poruka = ""
        this.korisnikServis.prijava(this.korIme, this.lozinka).subscribe((k: Korisnik) => {
            if (k) {
                localStorage.setItem("ulogovan", k.korIme)
                if (k.tip == "klijent") {
                    this.ruter.navigate(["klijent"])
                } else if (k.tip == "agencija") {
                    this.ruter.navigate(["agencija"])
                } else {
                    this.poruka = "Administrator se prijavljuje preko druge forme."
                }
            } else {
                this.poruka = "Losi podaci!"
            }
        })
    }
}
