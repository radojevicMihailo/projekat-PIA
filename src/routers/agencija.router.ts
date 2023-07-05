import express from "express"
import { AgencijaController } from "../controllers/agencija.controller"

const agencijaRuter = express.Router()

agencijaRuter
    .route("/azurirajNaziv")
    .post((req, res) => new AgencijaController().azurirajNaziv(req, res))

agencijaRuter
    .route("/azurirajAdresa")
    .post((req, res) => new AgencijaController().azurirajAdresa(req, res))

agencijaRuter
    .route("/azurirajOpis")
    .post((req, res) => new AgencijaController().azurirajOpis(req, res))

agencijaRuter
    .route("/azurirajMaticniBroj")
    .post((req, res) => new AgencijaController().azurirajMaticniBroj(req, res))

agencijaRuter
    .route("/azurirajTelefon")
    .post((req, res) => new AgencijaController().azurirajTelefon(req, res))

agencijaRuter
    .route("/azurirajEmail")
    .post((req, res) => new AgencijaController().azurirajEmail(req, res))

agencijaRuter
    .route("/dohvatiZahteve")
    .post((req, res) => new AgencijaController().dohvatiZahteve(req, res))

agencijaRuter
    .route("/dohvatiPoslove")
    .post((req, res) => new AgencijaController().dohvatiPoslove(req, res))

agencijaRuter
    .route("/prihvatiZahtev1")
    .post((req, res) => new AgencijaController().prihvatiZahtev1(req, res))

agencijaRuter
    .route("/prihvatiZahtev2")
    .post((req, res) => new AgencijaController().prihvatiZahtev2(req, res))

agencijaRuter
    .route("/odbiZahtev")
    .post((req, res) => new AgencijaController().odbiZahtev(req, res))

export default agencijaRuter
