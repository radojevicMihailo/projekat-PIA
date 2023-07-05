import express from "express"
import KorisnikModel from "../models/korisnik"
import PosaoModel from "../models/posao"

export class AdminController {
    dohvatiKlijente = (req: express.Request, res: express.Response) => {
        KorisnikModel.find({ $and: [{ tip: "klijent" }, { status: 1 }] }, (err, poslovi) => {
            if (err) console.log(err)
            else res.json(poslovi)
        })
    }

    dohvatiAgencije = (req: express.Request, res: express.Response) => {
        KorisnikModel.find({ $and: [{ tip: "agencija" }, { status: 1 }] }, (err, poslovi) => {
            if (err) console.log(err)
            else res.json(poslovi)
        })
    }

    dohvatiRegistracijeKlijenti = (req: express.Request, res: express.Response) => {
        KorisnikModel.find({ $and: [{ tip: "klijent" }, { status: 0 }] }, (err, poslovi) => {
            if (err) console.log(err)
            else res.json(poslovi)
        })
    }

    dohvatiRegistracijeAgencije = (req: express.Request, res: express.Response) => {
        KorisnikModel.find({ $and: [{ tip: "agencija" }, { status: 0 }] }, (err, poslovi) => {
            if (err) console.log(err)
            else res.json(poslovi)
        })
    }

    odobriRegistraciju = (req: express.Request, res: express.Response) => {
        let korIme = req.body.korIme

        KorisnikModel.updateOne({ korIme: korIme }, { $set: { status: 1 } }, (err, resp) => {
            if (err) console.log(err)
            else {
                res.json({ poruka: "ok" })
            }
        })
    }

    odbiRegistraciju = (req: express.Request, res: express.Response) => {
        let korIme = req.body.korIme

        KorisnikModel.updateOne({ korIme: korIme }, { $set: { status: 2 } }, (err, resp) => {
            if (err) console.log(err)
            else {
                res.json({ poruka: "ok" })
            }
        })
    }

    dohvatiAktivne = (req: express.Request, res: express.Response) => {
        PosaoModel.find({ status: 2 }, (err, poslovi) => {
            if (err) console.log(err)
            else res.json(poslovi)
        })
    }

    dohvatiZavrsene = (req: express.Request, res: express.Response) => {
        PosaoModel.find({ status: 3 }, (err, poslovi) => {
            if (err) console.log(err)
            else res.json(poslovi)
        })
    }

    dohvatiOtkazivanja = (req: express.Request, res: express.Response) => {
        PosaoModel.find({ status: 5 }, (err, poslovi) => {
            if (err) console.log(err)
            else res.json(poslovi)
        })
    }
}
