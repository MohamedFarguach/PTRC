import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../Livraison/home.component';
import { UserComponent } from '../../Vehicule/user.component';
import { TablesComponent } from '../../Chaufeurs/tables.component';
import { TypographyComponent } from '../../Users/typography.component';
import { IconsComponent } from '../../Marque/icons.component';
import { MapsComponent } from '../../Lieu/maps.component';
import { NotificationsComponent } from '../../TypeLieux/notifications.component';
import { UpgradeComponent } from '../../TypeVehicule/upgrade.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    NgxPaginationModule,
    MatDatepickerModule,
  ],
  declarations: [
   // OnlyNumberDirective,

    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent
  ]
})

export class AdminLayoutModule {}
