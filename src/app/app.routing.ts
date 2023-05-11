import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuard } from './AuthRout/auth-guard';
import { HomeComponent } from './Livraison/home.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import path = require('path');
import { TestComponent } from './ResponsableChargement/test.component';


const routes: Routes =[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,canActivate: [AuthGuard],
    children: [
        {
      path: '', 
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'

  }  
  ,{
     path: 'login', component: LoginComponent},{
      path: 'dashboard', component: HomeComponent,canActivate: [AuthGuard]},
     
     

  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
