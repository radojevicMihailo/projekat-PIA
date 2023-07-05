import express from "express"
import KorisnikModel from "../models/korisnik"
import ObjekatModel from "../models/objekat"
import PosaoModel from "../models/posao"

export class KlijentController {
    azurirajIme = (req: express.Request, res: express.Response) => {
        let korIme = req.body.korIme
        let ime = req.body.ime

        KorisnikModel.updateOne({ korIme: korIme }, { $set: { ime: ime } }, (err, resp) => {
            if (err) console.log(err)
            else res.json({ poruka: "ok" })
        })
    }

    azurirajPrezime = (req: express.Request, res: express.Response) => {
        let korIme = req.body.korIme
        let prezime = req.body.prezime

        KorisnikModel.updateOne(
            { korIme: korIme },
            { $set: { prezime: prezime } },
            (err, resp) => {
                if (err) console.log(err)
                else res.json({ poruka: "ok" })
            }
        )
    }

    azurirajTelefon = (req: express.Request, res: express.Response) => {
        let korIme = req.body.korIme
        let telefon = req.body.telefon

        KorisnikModel.updateOne(
            { korIme: korIme },
            { $set: { telefon: telefon } },
            (err, resp) => {
                if (err) console.log(err)
                else res.json({ poruka: "ok" })
            }
        )
    }

    azurirajEmail = (req: express.Request, res: express.Response) => {
        let korIme = req.body.korIme
        let email = req.body.email

        KorisnikModel.updateOne({ korIme: korIme }, { $set: { email: email } }, (err, resp) => {
            if (err) console.log(err)
            else res.json({ poruka: "ok" })
        })
    }

    dohvatiObjekte = (req: express.Request, res: express.Response) => {
        let korIme = req.body.korIme

        ObjekatModel.find({ klijent: korIme }, (err, objekti) => {
            if (err) console.log(err)
            else res.json(objekti)
        })
    }

    posaljiZahtev = (req: express.Request, res: express.Response) => {
        let posao = new PosaoModel(req.body)

        posao.save((err, resp) => {
            if (err) {
                console.log(err)
                res.status(400).json({ poruka: "Greska!" })
            } else {
                res.json({ poruka: "ok" })
            }
        })
    }

    dohvatiZavrsenePoslove = (req: express.Request, res: express.Response) => {
        let klijent = req.body.klijent

        PosaoModel.find({ $and: [{ klijent: klijent }, { status: 3 }] }, (err, poslovi) => {
            if (err) console.log(err)
            else res.json(poslovi)
        })
    }

    dohvatiAktivnePoslove = (req: express.Request, res: express.Response) => {
        let klijent = req.body.klijent

        PosaoModel.find({ $and: [{ klijent: klijent }, { status: 2 }] }, (err, poslovi) => {
            if (err) console.log(err)
            else res.json(poslovi)
        })
    }

    dohvatiZahteve = (req: express.Request, res: express.Response) => {
        let klijent = req.body.klijent

        PosaoModel.find(
            { $and: [{ klijent: klijent }, { $or: [{ status: 1 }, { status: 4 }] }] },
            (err, poslovi) => {
                if (err) console.log(err)
                else res.json(poslovi)
            }
        )
    }

    dohvatiObjekat = (req: express.Request, res: express.Response) => {
        let id = req.body.id

        ObjekatModel.findOne({ id: id }, (err, objekti) => {
            if (err) console.log(err)
            else res.json(objekti)
        })
    }

    dohvatiZavrsenePosloveAgencije = (req: express.Request, res: express.Response) => {
        let agencija = req.body.agencija

        PosaoModel.find({ $and: [{ agencija: agencija }, { status: 3 }] }, (err, poslovi) => {
            if (err) console.log(err)
            else res.json(poslovi)
        })
    }
}
