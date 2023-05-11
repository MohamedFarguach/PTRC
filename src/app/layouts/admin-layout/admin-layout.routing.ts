import { Routes } from '@angular/router';

import { HomeComponent } from '../../Livraison/home.component';
import { UserComponent } from '../../Vehicule/user.component';
import { TablesComponent } from '../../Chaufeurs/tables.component';
import { TypographyComponent } from '../../Users/typography.component';
import { IconsComponent } from '../../Marque/icons.component';
import { MapsComponent } from '../../Lieu/maps.component';
import { NotificationsComponent } from '../../TypeLieux/notifications.component';
import { UpgradeComponent } from '../../TypeVehicule/upgrade.component';
import { TestComponent } from 'app/ResponsableChargement/test.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'test',        component: TestComponent },
];
