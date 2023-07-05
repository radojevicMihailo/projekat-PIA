import mongoose from "mongoose"

const Schema = mongoose.Schema

let Korisnik = new Schema({
    korIme: {
        type: String,
    },
    lozinka: {
        type: String,
    },
    telefon: {
        type: String,
    },
    email: {
        type: String,
    },
    tip: {
        type: String,
    },
    ime: {
        type: String,
    },
    prezime: {
        type: String,
    },
    profilnaSlika: {
        type: String,
    },
    naziv: {
        type: String,
    },
    adresa: {
        type: String,
    },
    maticniBroj: {
        type: Number,
    },
    opis: {
        type: String,
    },
    logotip: {
        type: String,
    },
    privremenaLozinka: {
        type: String,
    },
    trajanjeLozinke: {
        type: String,
    },
    status: {
        type: Number,
    },
})

export default mongoose.model("KorisnikModel", Korisnik, "korisnici")
