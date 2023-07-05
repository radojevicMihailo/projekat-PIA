import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"

@Injectable({
    providedIn: "root",
})
export class KorisnikService {
    constructor(private http: HttpClient) {}

    uri = "http://localhost:4000/korisnik"

    prijava(korIme, lozinka) {
        const data = {
            korIme: korIme,
            lozinka: lozinka,
        }

        return this.http.post(`${this.uri}/prijava`, data)
    }

    registracijaKlijent(korIme, lozinka, ime, prezime, telefon, email, profilnaSlika) {
        const data = {
            korIme: korIme,
            lozinka: lozinka,
            telefon: telefon,
            email: email,
            tip: "klijent",
            ime: ime,
            prezime: prezime,
            profilnaSlika: profilnaSlika,
            privremenaLozinka: "",
            trajanjeLozinke: "",
            status: 0,
        }
        return this.http.post(`${this.uri}/registracijaKorisnik`, data)
    }

    registracijaAgencija(
        korIme,
        lozinka,
        telefon,
        email,
        naziv,
        adresa,
        maticniBroj,
        opis,
        logotip
    ) {
        const data = {
            korIme: korIme,
            lozinka: lozinka,
            telefon: telefon,
            email: email,
            tip: "agencija",
            naziv: naziv,
            adresa: adresa,
            maticniBroj: maticniBroj,
            opis: opis,
            logotip: logotip,
            privremenaLozinka: "",
            trajanjeLozinke: "",
            status: 0,
        }
        return this.http.post(`${this.uri}/registracijaKorisnik`, data)
    }

    dohvatiAgencije(nazivPretraga, adresaPretraga) {
        const data = {
            nazivPretraga: nazivPretraga,
            adresaPretraga: adresaPretraga,
        }
        return this.http.post(`${this.uri}/dohvatiAgencije`, data)
    }

    dohvatiKorisnika(korIme) {
        const data = {
            korIme: korIme,
        }
        return this.http.post(`${this.uri}/dohvatiKorisnika`, data)
    }

    promeniLozinku(korIme, lozinka) {
        const data = {
            korIme: korIme,
            lozinka: lozinka,
        }
        return this.http.post(`${this.uri}/promeniLozinku`, data)
    }
}
