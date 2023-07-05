import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"

@Injectable({
    providedIn: "root",
})
export class AdminService {
    constructor(private http: HttpClient) {}

    uri = "http://localhost:4000/admin"

    dohvatiKlijente() {
        return this.http.get(`${this.uri}/dohvatiKlijente`)
    }

    dohvatiAgencije() {
        return this.http.get(`${this.uri}/dohvatiAgencije`)
    }

    dohvatiRegistracijeKlijenti() {
        return this.http.get(`${this.uri}/dohvatiRegistracijeKlijenti`)
    }

    dohvatiRegistracijeAgencije() {
        return this.http.get(`${this.uri}/dohvatiRegistracijeAgencije`)
    }

    odobriRegistraciju(korIme) {
        const data = {
            korIme: korIme,
        }
        return this.http.post(`${this.uri}/odobriRegistraciju`, data)
    }

    odbiRegistraciju(korIme) {
        const data = {
            korIme: korIme,
        }
        return this.http.post(`${this.uri}/odbiRegistraciju`, data)
    }

    dohvatiAktivne() {
        return this.http.get(`${this.uri}/dohvatiAktivne`)
    }

    dohvatiZavrsene() {
        return this.http.get(`${this.uri}/dohvatiZavrsene`)
    }

    dohvatiOtkazivanja() {
        return this.http.get(`${this.uri}/dohvatiOtkazivenja`)
    }
}
