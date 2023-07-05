import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"

@Injectable({
    providedIn: "root",
})
export class AgencijaService {
    constructor(private http: HttpClient) {}

    uri = "http://localhost:4000/agencija"

    azurirajNaziv(korIme, naziv) {
        const data = {
            korIme: korIme,
            naziv: naziv,
        }
        return this.http.post(`${this.uri}/azurirajNaziv`, data)
    }

    azurirajAdresa(korIme, adresa) {
        const data = {
            korIme: korIme,
            adresa: adresa,
        }
        return this.http.post(`${this.uri}/azurirajAdresa`, data)
    }

    azurirajOpis(korIme, opis) {
        const data = {
            korIme: korIme,
            opis: opis,
        }
        return this.http.post(`${this.uri}/azurirajOpis`, data)
    }

    azurirajMaticniBroj(korIme, maticniBroj) {
        const data = {
            korIme: korIme,
            maticniBroj: maticniBroj,
        }
        return this.http.post(`${this.uri}/azurirajMaticniBroj`, data)
    }

    azurirajEmail(korIme, email) {
        const data = {
            korIme: korIme,
            email: email,
        }
        return this.http.post(`${this.uri}/azurirajEmail`, data)
    }

    azurirajTelefon(korIme, telefon) {
        const data = {
            korIme: korIme,
            telefon: telefon,
        }
        return this.http.post(`${this.uri}/azurirajTelefon`, data)
    }

    azurirajLogotip(korIme, logotip) {
        const data = {
            korIme: korIme,
            logotip: logotip,
        }
        return this.http.post(`${this.uri}/azurirajLogotip`, data)
    }

    dohvatiZahteve(agencija) {
        const data = {
            agencija: agencija,
        }
        return this.http.post(`${this.uri}/dohvatiZahteve`, data)
    }

    dohvatiPoslove(agencija) {
        const data = {
            agencija: agencija,
        }
        return this.http.post(`${this.uri}/dohvatiPoslove`, data)
    }

    prihvatiZahtev1(idP, ponuda) {
        console.log("prihvati s", ponuda)

        const data = {
            idP: idP,
            ponuda: ponuda,
        }
        return this.http.post(`${this.uri}/prihvatiZahtev1`, data)
    }

    prihvatiZahtev2(idP, ponuda) {
        console.log("prihvati s", ponuda)

        const data = {
            idP: idP,
            ponuda: ponuda,
        }
        return this.http.post(`${this.uri}/prihvatiZahtev2`, data)
    }

    odbiZahtev(idP) {
        const data = {
            idP: idP,
        }
        return this.http.post(`${this.uri}/odbiZahtev`, data)
    }
}
