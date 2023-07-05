import express from "express"
import { AdminController } from "../controllers/admin.controller"

const adminRuter = express.Router()

adminRuter
    .route("/dohvatiKlijente")
    .get((req, res) => new AdminController().dohvatiKlijente(req, res))

adminRuter
    .route("/dohvatiAgencije")
    .get((req, res) => new AdminController().dohvatiAgencije(req, res))

adminRuter
    .route("/dohvatiRegistracijeKlijenti")
    .get((req, res) => new AdminController().dohvatiRegistracijeKlijenti(req, res))

adminRuter
    .route("/dohvatiRegistracijeAgencije")
    .get((req, res) => new AdminController().dohvatiRegistracijeAgencije(req, res))

adminRuter
    .route("/odobriRegistraciju")
    .post((req, res) => new AdminController().odobriRegistraciju(req, res))

adminRuter
    .route("/odbiRegistraciju")
    .post((req, res) => new AdminController().odbiRegistraciju(req, res))

adminRuter
    .route("/dohvatiAktivne")
    .get((req, res) => new AdminController().dohvatiAktivne(req, res))

adminRuter
    .route("/dohvatiZavrsene")
    .get((req, res) => new AdminController().dohvatiZavrsene(req, res))

adminRuter
    .route("/dohvatiOtkazivanja")
    .get((req, res) => new AdminController().dohvatiOtkazivanja(req, res))

export default adminRuter
