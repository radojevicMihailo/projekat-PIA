import express from "express"
import KorisnikModel from "../models/korisnik"

export class KorisnikController {
    prijava = (req: express.Request, res: express.Response) => {
        let korIme = req.body.korIme
        let lozinka = req.body.lozinka

        KorisnikModel.findOne({ korIme: korIme, lozinka: lozinka }, (err, korisnik) => {
            if (err) console.log(err)
            else res.json(korisnik)
        })
    }

    registracijaKorisnik = (req: express.Request, res: express.Response) => {
        let korisnik = new KorisnikModel(req.body)

        korisnik.save((err, resp) => {
            if (err) {
                console.log(err)
                res.status(400).json({ poruka: "Greska!" })
            } else {
                res.json({ poruka: "ok" })
            }
        })
    }

    dohvatiAgencije = (req: express.Request, res: express.Response) => {
        let nazivPretraga = req.body.nazivPretraga
        let adresaPretraga = req.body.adresaPretraga

        if (nazivPretraga == "" && adresaPretraga == "") {
            KorisnikModel.find({ tip: "agencija" }, (err, agencije) => {
                if (err) console.log(err)
                else res.json(agencije)
            })
        } else if (nazivPretraga != "" && adresaPretraga == "") {
            KorisnikModel.find(
                { $and: [{ tip: "agencija" }, { naziv: { $regex: nazivPretraga } }] },
                (err, agencije) => {
                    if (err) console.log(err)
                    else res.json(agencije)
                }
            )
        } else if (nazivPretraga == "" && adresaPretraga != "") {
            KorisnikModel.find(
                { $and: [{ tip: "agencija" }, { adresa: { $regex: adresaPretraga } }] },
                (err, agencije) => {
                    if (err) console.log(err)
                    else res.json(agencije)
                }
            )
        } else {
            KorisnikModel.find(
                {
                    $and: [
                        { tip: "agencija" },
                        { naziv: { $regex: nazivPretraga } },
                        { adresa: { $regex: adresaPretraga } },
                    ],
                },
                (err, agencije) => {
                    if (err) console.log(err)
                    else res.json(agencije)
                }
            )
        }
    }

    dohvatiKorisnika = (req: express.Request, res: express.Response) => {
        let korIme = req.body.korIme

        KorisnikModel.findOne({ korIme: korIme }, (err, korisnik) => {
            if (err) console.log(err)
            else res.json(korisnik)
        })
    }

    promeniLozinku = (req: express.Request, res: express.Response) => {
        let korIme = req.body.korIme
        let lozinka = req.body.lozinka

        KorisnikModel.updateOne(
            { korIme: korIme },
            { $set: { lozinka: lozinka } },
            (err, resp) => {
                if (err) console.log(err)
                else res.json({ poruka: "promenjena" })
            }
        )
    }
}
