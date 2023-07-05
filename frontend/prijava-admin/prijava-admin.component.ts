import { Component, OnInit } from "@angular/core"
import { KorisnikService } from "../services/korisnik.service"
import { Router } from "@angular/router"
import { Korisnik } from "../model/korisnik"

@Component({
    selector: "app-prijava-admin",
    templateUrl: "./prijava-admin.component.html",
    styleUrls: ["./prijava-admin.component.css"],
})
export class PrijavaAdminComponent implements OnInit {
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
                if (k.tip == "admin") {
                    this.ruter.navigate(["admin"])
                } else {
                    this.poruka = "Klijenti i agencije se prijavljuju preko druge forme."
                }
            } else {
                this.poruka = "Losi podaci!"
            }
        })
    }
}
