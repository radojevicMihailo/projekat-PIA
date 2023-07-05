import mongoose from "mongoose"

const Schema = mongoose.Schema

let Objekat = new Schema({
    id: {
        type: String,
    },
    klijent: {
        type: String,
    },
    tip: {
        type: String,
    },
    adresa: {
        type: String,
    },
    brojProstorija: {
        type: Number,
    },
    kvadratura: {
        type: Number,
    },
    prostorije: {
        type: Array,
    },
})

export default mongoose.model("ObjekatModel", Objekat, "objekti")
