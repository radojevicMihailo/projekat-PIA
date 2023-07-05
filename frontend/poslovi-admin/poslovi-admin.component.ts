import { Component, ElementRef, OnInit, ViewChild } from "@angular/core"
import { AdminService } from "../services/admin.service"
import { Router } from "@angular/router"
import { Posao } from "../model/posao"
import { fabric } from "fabric"
import { KlijentService } from "../services/klijent.service"
import { Objekat } from "../model/objekat"

@Component({
    selector: "app-poslovi-admin",
    templateUrl: "./poslovi-admin.component.html",
    styleUrls: ["./poslovi-admin.component.css"],
})
export class PosloviAdminComponent implements OnInit {
    constructor(
        private adminServis: AdminService,
        private klijentServis: KlijentService,
        private ruter: Router
    ) {}

    @ViewChild("canvas", { static: false }) canvas: ElementRef

    aktivni: Posao[]
    zavrseni: Posao[]
    otkazivanja: Posao[]

    ngOnInit(): void {
        this.adminServis.dohvatiAktivne().subscribe((a: Posao[]) => {
            this.aktivni = a
        })
        this.adminServis.dohvatiZavrsene().subscribe((z: Posao[]) => {
            this.zavrseni = z
        })
        this.adminServis.dohvatiOtkazivanja().subscribe((o: Posao[]) => {
            this.otkazivanja = o
        })
    }

    odjava() {
        localStorage.clear()
        this.ruter.navigate(["prijavaAdmin"])
    }

    prikazi(objekatId) {
        const canvas = new fabric.Canvas(this.canvas.nativeElement)
        this.klijentServis.dohvatiObjekat(objekatId).subscribe((o: Objekat) => {
            for (let p of o.skica) {
                const soba = new fabric.Rect({
                    left: p.x,
                    top: p.y,
                    width: p.w,
                    height: p.h,
                    fill: p.status,
                    strokeWidth: 1,
                    stroke: "black",
                })
                const vrata = new fabric.Rect({
                    left: p.vx,
                    top: p.vy,
                    width: 10,
                    height: 10,
                    fill: "brown",
                })
                canvas.add(soba)
                canvas.add(vrata)
            }
        })
    }
}
