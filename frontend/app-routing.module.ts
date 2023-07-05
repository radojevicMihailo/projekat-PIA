import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { PrijavaComponent } from "./prijava/prijava.component"
import { PrijavaAdminComponent } from "./prijava-admin/prijava-admin.component"
import { NeregistrovaniComponent } from "./neregistrovani/neregistrovani.component"
import { RegistracijaKlijentComponent } from "./registracija-klijent/registracija-klijent.component"
import { RegistracijaAgencijaComponent } from "./registracija-agencija/registracija-agencija.component"
import { KlijentComponent } from "./klijent/klijent.component"
import { AgencijaComponent } from "./agencija/agencija.component"
import { AdminComponent } from "./admin/admin.component"
import { KomentariComponent } from "./komentari/komentari.component"
import { PromenaLozinkeComponent } from "./promena-lozinke/promena-lozinke.component"
import { ObjektiComponent } from "./objekti/objekti.component"
import { AgencijeComponent } from "./agencije/agencije.component"
import { PosloviKlijentComponent } from "./poslovi-klijent/poslovi-klijent.component"
import { KomentariKlijentComponent } from "./komentari-klijent/komentari-klijent.component"
import { RadniciComponent } from "./radnici/radnici.component"
import { PosloviAgencijaComponent } from "./poslovi-agencija/poslovi-agencija.component"
import { PosloviAdminComponent } from "./poslovi-admin/poslovi-admin.component"
import { KlijentAdminComponent } from "./klijent-admin/klijent-admin.component"
import { AgencijaAdminComponent } from "./agencija-admin/agencija-admin.component"

const routes: Routes = [
    { path: "", component: PrijavaComponent },
    { path: "prijavaAdmin", component: PrijavaAdminComponent },
    { path: "neregistrovani", component: NeregistrovaniComponent },
    { path: "registracijaKlijent", component: RegistracijaKlijentComponent },
    { path: "registracijaAgencija", component: RegistracijaAgencijaComponent },
    { path: "klijent", component: KlijentComponent },
    { path: "agencija", component: AgencijaComponent },
    { path: "admin", component: AdminComponent },
    { path: "komentari", component: KomentariComponent },
    { path: "promenaLozinke", component: PromenaLozinkeComponent },
    { path: "objekti", component: ObjektiComponent },
    { path: "agencije", component: AgencijeComponent },
    { path: "posloviKlijent", component: PosloviKlijentComponent },
    { path: "komentariKlijent", component: KomentariKlijentComponent },
    { path: "radnici", component: RadniciComponent },
    { path: "posloviAgencija", component: PosloviAgencijaComponent },
    { path: "posloviAdmin", component: PosloviAdminComponent },
    { path: "klijentAdmin", component: KlijentAdminComponent },
    { path: "agencijaAdmin", component: AgencijaAdminComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
