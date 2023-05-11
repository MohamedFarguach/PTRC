import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { AjouteChaufeurComponent } from './Modal/ajoute-chaufeur/ajoute-chaufeur.component';
import { AjouteLivraisonComponent } from './Modal/ajoute-livraison/ajoute-livraison.component';
import { ModefierChaufeurComponent } from './Modal/modefier-chaufeur/modefier-chaufeur.component';
import { ModefierLivraisonComponent } from './Modal/modefier-livraison/modefier-livraison.component';
import { VehiculesChaufeurComponent } from './Modal/Ajouter-vehicules/vehicules-chaufeur.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AjouterUserComponent } from './Modal/ajouter-user/ajouter-user.component';
import { ModefierUserComponent } from './Modal/modefier-user/modefier-user.component';
import { ModefierVehiculesComponent } from './Modal/modefier-vehicules/modefier-vehicules.component';
import { TestComponent } from './ResponsableChargement/test.component';
import { DatePipe } from '@angular/common';
import { AuthGuard } from './AuthRout/auth-guard';
import { AuthInterceptor } from './auth.interceptor';
//import { AjouerChaufeursComponent } from './Modal/a/ajouer-chaufeurs.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatSortModule} from '@angular/material/sort';
import { OnlyNumberDirective } from './only-number.directive';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AjouterMarqueComponent } from './Modal/ajouter-marque/ajouter-marque.component';
import { ModifierMarqueComponent } from './Modal/modifier-marque/modifier-marque.component';
import { AjouteLieuxComponent } from './Modal/ajoute-lieux/ajoute-lieux.component';
import { ModefierLieuxComponent } from './Modal/modefier-lieux/modefier-lieux.component';
import { AjouterTypeLieuxComponent } from './Modal/ajouter-type-lieux/ajouter-type-lieux.component';
import { ModifierTypeLieuxComponent } from './Modal/modifier-type-lieux/modifier-type-lieux.component';
import { AjouterTypeVehiculeComponent } from './Modal/ajouter-type-vehicule/ajouter-type-vehicule.component';
import { ModifierTypeVehiculeComponent } from './Modal/modifier-type-vehicule/modifier-type-vehicule.component';
import { AjouterResponsableChargeComponent } from './Modal/ajouter-responsable-charge/ajouter-responsable-charge.component';
import { ModifierResponsableChargeComponent } from './Modal/modifier-responsable-charge/modifier-responsable-charge.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    MatSortModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatDatepickerModule,
    BrowserAnimationsModule,

  ],
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLayoutComponent,
    AjouteLivraisonComponent,
    AjouteChaufeurComponent,
    VehiculesChaufeurComponent,
    ModefierChaufeurComponent,
    ModefierLivraisonComponent,
    AjouterUserComponent,
    ModefierUserComponent,
    ModefierVehiculesComponent,
    TestComponent,
    OnlyNumberDirective,
    AjouterMarqueComponent,
    ModifierMarqueComponent,
    AjouteLieuxComponent,
    ModefierLieuxComponent,
    AjouterTypeLieuxComponent,
    ModifierTypeLieuxComponent,
    AjouterTypeVehiculeComponent,
    ModifierTypeVehiculeComponent,
    AjouterResponsableChargeComponent,
    ModifierResponsableChargeComponent,
   // AjouerChaufeursComponent,
  ],
  providers: [DatePipe, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
}, [AuthGuard]],
bootstrap: [AppComponent],
schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add the schema here

})
export class AppModule { }
