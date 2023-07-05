import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { PrijavaComponent } from "./prijava/prijava.component"
import { AdminComponent } from "./admin/admin.component"
import { KlijentComponent } from "./klijent/klijent.component"
import { AgencijaComponent } from "./agencija/agencija.component"
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http"
import { HeaderComponent } from "./header/header.component"
import { FooterComponent } from "./footer/footer.component"
import { PrijavaAdminComponent } from "./prijava-admin/prijava-admin.component"
import { NeregistrovaniComponent } from "./neregistrovani/neregistrovani.component"
import { KomentariComponent } from "./komentari/komentari.component"
import { RegistracijaKlijentComponent } from "./registracija-klijent/registracija-klijent.component"
import { RegistracijaAgencijaComponent } from "./registracija-agencija/registracija-agencija.component";
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { ObjektiComponent } from './objekti/objekti.component';
import { PosloviKlijentComponent } from './poslovi-klijent/poslovi-klijent.component';
import { AgencijeComponent } from './agencije/agencije.component';
import { KomentariKlijentComponent } from './komentari-klijent/komentari-klijent.component';
import { RadniciComponent } from './radnici/radnici.component';
import { PosloviAgencijaComponent } from './poslovi-agencija/poslovi-agencija.component';
import { PosloviAdminComponent } from './poslovi-admin/poslovi-admin.component';
import { KlijentAdminComponent } from './klijent-admin/klijent-admin.component';
import { AgencijaAdminComponent } from './agencija-admin/agencija-admin.component'

@NgModule({
    declarations: [
        AppComponent,
        PrijavaComponent,
        AdminComponent,
        KlijentComponent,
        AgencijaComponent,
        HeaderComponent,
        FooterComponent,
        PrijavaAdminComponent,
        NeregistrovaniComponent,
        KomentariComponent,
        RegistracijaKlijentComponent,
        RegistracijaAgencijaComponent,
        PromenaLozinkeComponent,
        ObjektiComponent,
        PosloviKlijentComponent,
        AgencijeComponent,
        KomentariKlijentComponent,
        RadniciComponent,
        PosloviAgencijaComponent,
        PosloviAdminComponent,
        KlijentAdminComponent,
        AgencijaAdminComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
