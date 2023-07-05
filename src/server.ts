import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import korisnikRuter from "./routers/korisnik.router"
import klijentRuter from "./routers/klijent.router"
import agencijaRuter from "./routers/agencija.router"
import adminRuter from "./routers/admin.router"

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/pia_projekat")
const connection = mongoose.connection
connection.once("open", () => {
    console.log("db connected")
})

const router = express.Router()
router.use("/korisnik", korisnikRuter)
router.use("/klijent", klijentRuter)
router.use("/agencija", agencijaRuter)
router.use("/admin", adminRuter)

app.use("/", router)
app.listen(4000, () => console.log(`Express server running on port 4000`))
