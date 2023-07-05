import express from "express"
import { KorisnikController } from "../controllers/korisnik.controller"

const korisnikRuter = express.Router()

korisnikRuter.route("/prijava").post((req, res) => new KorisnikController().prijava(req, res))

korisnikRuter
    .route("/registracijaKorisnik")
    .post((req, res) => new KorisnikController().registracijaKorisnik(req, res))

korisnikRuter
    .route("/dohvatiAgencije")
    .post((req, res) => new KorisnikController().dohvatiAgencije(req, res))

korisnikRuter
    .route("/dohvatiKorisnika")
    .post((req, res) => new KorisnikController().dohvatiKorisnika(req, res))

korisnikRuter
    .route("/promeniLozinku")
    .post((req, res) => new KorisnikController().promeniLozinku(req, res))

export default korisnikRuter
