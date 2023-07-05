import { Prostorija } from "./prostorija"

export class Objekat {
    id: string
    klijent: string
    tip: string
    adresa: string
    brojProstorija: number
    kvadratura: number
    skica: Array<Prostorija>
}
