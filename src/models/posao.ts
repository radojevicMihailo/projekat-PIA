import mongoose from "mongoose"

const Schema = mongoose.Schema

let Posao = new Schema({
    idP: {
        type: Number,
    },
    objekatId: {
        type: String,
    },
    klijent: {
        type: String,
    },
    objekat: {
        type: String,
    },
    klijentIme: {
        type: String,
    },
    agencija: {
        type: String,
    },
    agencijaNaziv: {
        type: String,
    },
    vreme: {
        type: String,
    },
    status: {
        type: Number,
    },
    ponuda: {
        type: Number,
    },
    ocena: {
        type: Number,
    },
    komentar: {
        type: String,
    },
})

export default mongoose.model("PosaoModel", Posao, "poslovi")
