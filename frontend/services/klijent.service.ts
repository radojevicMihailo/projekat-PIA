import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Objekat } from "../model/objekat"

@Injectable({
    providedIn: "root",
})
export class KlijentService {
    constructor(private http: HttpClient) {}

    uri = "http://localhost:4000/klijent"

    azurirajIme(korIme, ime) {
        const data = {
            korIme: korIme,
            ime: ime,
        }
        return this.http.post(`${this.uri}/azurirajIme`, data)
    }

    azurirajPrezime(korIme, prezime) {
        const data = {
            korIme: korIme,
            prezime: prezime,
        }
        return this.http.post(`${this.uri}/azurirajPrezime`, data)
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

    azurirajProfilnaSlika(korIme, profilnaSlika) {
        const data = {
            korIme: korIme,
            profilnaSlika: profilnaSlika,
        }
        return this.http.post(`${this.uri}/azurirajProfilnaSlika`, data)
    }

    dohvatiObjekte(korIme) {
        const data = {
            korIme: korIme,
        }
        return this.http.post(`${this.uri}/dohvatiObjekte`, data)
    }

    posaljiZahtev(
        objekatId,
        objekat,
        klijent,
        agencija,
        agencijaNaziv,
        vreme,
        status,
        ponuda,
        ocena,
        komentar
    ) {
        const data = {
            objekatId: objekatId,
            objekat: objekat,
            klijent: klijent,
            agencija: agencija,
            agencijaNaziv: agencijaNaziv,
            vreme: vreme,
            status: status,
            ponuda: ponuda,
            ocena: ocena,
            komentar: komentar,
        }
        return this.http.post(`${this.uri}/posaljiZahtev`, data)
    }

    dohvatiZavrsenePoslove(klijent) {
        const data = {
            klijent: klijent,
        }
        return this.http.post(`${this.uri}/dohvatiZavrsenePoslove`, data)
    }

    dohvatiAktivnePoslove(klijent) {
        const data = {
            klijent: klijent,
        }
        return this.http.post(`${this.uri}/dohvatiAktivnePoslove`, data)
    }

    dohvatiZahteve(klijent) {
        const data = {
            klijent: klijent,
        }
        return this.http.post(`${this.uri}/dohvatiZahteve`, data)
    }

    dohvatiObjekat(id) {
        const data = {
            id: id,
        }
        return this.http.post(`${this.uri}/dohvatiObjekat`, data)
    }

    dohvatiZavrsenePosloveAgencije(agencija) {
        const data = {
            agencija: agencija,
        }
        return this.http.post(`${this.uri}/dohvatiZavrsenePosloveAgencije`, data)
    }

    unesiObjekat(id, klijent, tip, adresa, brojProstorija, kvadratura) {}

    unseiObjekatJSON() {}
}
