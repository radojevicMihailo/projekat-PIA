import express from "express"
import { KlijentController } from "../controllers/klijent.controller"

const klijentRuter = express.Router()

klijentRuter
    .route("/azurirajIme")
    .post((req, res) => new KlijentController().azurirajIme(req, res))

klijentRuter
    .route("/azurirajPrezime")
    .post((req, res) => new KlijentController().azurirajPrezime(req, res))

klijentRuter
    .route("/azurirajTelefon")
    .post((req, res) => new KlijentController().azurirajTelefon(req, res))

klijentRuter
    .route("/azurirajEmail")
    .post((req, res) => new KlijentController().azurirajEmail(req, res))

klijentRuter
    .route("/dohvatiObjekte")
    .post((req, res) => new KlijentController().dohvatiObjekte(req, res))

klijentRuter
    .route("/posaljiZahtev")
    .post((req, res) => new KlijentController().posaljiZahtev(req, res))

klijentRuter
    .route("/dohvatiZavrsenePoslove")
    .post((req, res) => new KlijentController().dohvatiZavrsenePoslove(req, res))

klijentRuter
    .route("/dohvatiAktivnePoslove")
    .post((req, res) => new KlijentController().dohvatiAktivnePoslove(req, res))

klijentRuter
    .route("/dohvatiZahteve")
    .post((req, res) => new KlijentController().dohvatiZahteve(req, res))

klijentRuter
    .route("/dohvatiObjekat")
    .post((req, res) => new KlijentController().dohvatiObjekat(req, res))

klijentRuter
    .route("/dohvatiZavrsenePosloveAgencije")
    .post((req, res) => new KlijentController().dohvatiZavrsenePosloveAgencije(req, res))

export default klijentRuter
