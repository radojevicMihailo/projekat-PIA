import express from "express"
import KorisnikModel from "../models/korisnik"
import PosaoModel from "../models/posao"

export class AgencijaController {
    azurirajNaziv = (req: express.Request, res: express.Response) => {
        let korIme = req.body.korIme
        let naziv = req.body.naziv

        KorisnikModel.updateOne({ korIme: korIme }, { $set: { naziv: naziv } }, (err, resp) => {
            if (err) console.log(err)
            else res.json({ poruka: "ok" })
        })
    }

    azurirajAdresa = (req: express.Request, res: express.Response) => {
        let korIme = req.body.korIme
        let adresa = req.body.adresa

        KorisnikModel.updateOne({ korIme: korIme }, { $set: { adresa: adresa } }, (err, resp) => {
            if (err) console.log(err)
            else res.json({ poruka: "ok" })
        })
    }

    azurirajOpis = (req: express.Request, res: express.Response) => {
        let korIme = req.body.korIme
        let opis = req.body.opis

        KorisnikModel.updateOne({ korIme: korIme }, { $set: { opis: opis } }, (err, resp) => {
            if (err) console.log(err)
            else res.json({ poruka: "ok" })
        })
    }

    azurirajMaticniBroj = (req: express.Request, res: express.Response) => {
        let korIme = req.body.korIme
        let maticniBroj = req.body.maticniBroj

        KorisnikModel.updateOne(
            { korIme: korIme },
            { $set: { maticniBroj: maticniBroj } },
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

    dohvatiZahteve = (req: express.Request, res: express.Response) => {
        let agencija = req.body.agencija

        PosaoModel.find({ $and: [{ agencija: agencija }, { status: 0 }] }, (err, poslovi) => {
            if (err) console.log(err)
            else res.json(poslovi)
        })
    }

    dohvatiPoslove = (req: express.Request, res: express.Response) => {
        let agencija = req.body.agencija

        PosaoModel.find({ $and: [{ agencija: agencija }, { status: 2 }] }, (err, poslovi) => {
            if (err) console.log(err)
            else res.json(poslovi)
        })
    }

    prihvatiZahtev1 = (req: express.Request, res: express.Response) => {
        let idP = req.body.idP
        let ponuda = req.body.ponuda
        console.log("prihvati c", idP, ponuda)

        PosaoModel.updateOne({ idP: idP }, { $set: { status: 2 } }, (err, resp) => {
            if (err) console.log(err)
            else res.json({ poruka: "ok" })
        })
    }

    prihvatiZahtev2 = (req: express.Request, res: express.Response) => {
        let idP = req.body.idP
        let ponuda = req.body.ponuda
        console.log("prihvati c", idP, ponuda)

        PosaoModel.updateOne({ idP: idP }, { $set: { ponuda: ponuda } }, (err, resp) => {
            if (err) console.log(err)
            else res.json({ poruka: "ok" })
        })
    }

    odbiZahtev = (req: express.Request, res: express.Response) => {
        let idP = req.body.idP

        PosaoModel.updateOne({ idP: idP }, { $set: { status: 4 } }, (err, resp) => {
            if (err) console.log(err)
            else {
                res.json({ poruka: "ok" })
            }
        })
    }
}
