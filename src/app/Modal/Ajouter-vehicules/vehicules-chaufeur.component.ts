import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AjouteLivraisonComponent } from '../ajoute-livraison/ajoute-livraison.component';
import { Vehicule } from 'app/class/vehicule';
import { VehiculeService } from 'app/Service/vehicule-service';
import { TablesComponent } from 'app/Chaufeurs/tables.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Chaufeur } from 'app/class/chaufeur';
import { UserComponent } from 'app/Vehicule/user.component';
import { Router } from '@angular/router';
import { MarqueService } from 'app/Service/marque-service';
import { TypeVehiculeService } from 'app/Service/type-vehicule-service';

@Component({
  selector: 'app-vehicules-chaufeur',
  templateUrl: './vehicules-chaufeur.component.html',
  styleUrls: ['./vehicules-chaufeur.component.scss']
})
export class VehiculesChaufeurComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<VehiculesChaufeurComponent>,private formBuilder: FormBuilder,private   vehiculeService:VehiculeService,private httpclient :HttpClient,public route:Router,private el: ElementRef,
    private marqueService:MarqueService,private typeVehiculeService:TypeVehiculeService,) { }

  ngOnInit(): void {
    this.listMarques();
    this.liststypevehicule();
  this.loginForm= this.formBuilder.group({
      type:['',Validators.required],
      matricule:['',Validators.required],
      marques:['',Validators.required],
      statut:['',Validators.required],
      ancienKm:['',Validators.required],
      nouveauKm:['',Validators.required],
      designation:['',Validators.required],


      })
  }
  marqueChange(vehicule:any){
    this.FicheMarque.marques.id= vehicule.target.value
  // alert(this.FicheMarque.marques.id)
   }
   typevehicule(vehicule:any){
    this.FicheMarque.typeVehicule.id= vehicule.target.value
 //alert(this.FicheMarque.typeVehicule.id)
   }

  loginForm:FormGroup
  closedialog(){
   this.dialogRef.close();

  }
  TypeVehicule ={
    type:'',
  }

  FicheMarque =
  {
    type: '',
    matricule: '',
    statut: '',
    ancienKm: '',
    nouveauKm: '',
    designation: '',
    marques: {
        id:  '0',
      },
      typeVehicule: {
        id:  '0',
      },

  }
  message: string;

  compareNumbers() {
    if(this.FicheMarque.ancienKm < this.FicheMarque.nouveauKm) {
      this.userRegisterlistVicule()
    } else if(this.FicheMarque.ancienKm  >  this.FicheMarque.nouveauKm) {
      this.message = "Nouveau_Km numéro doit être grand numéro de Ancien_Km   ";
    } else if(this.FicheMarque.ancienKm  ==  this.FicheMarque.nouveauKm){
      this.userRegisterlistVicule()
    }
  }

  listMarque:any
  listMarques(){
     this.marqueService.ListMarque().subscribe(
       (data: any)=>{
         console.log(data)
           this.listMarque=data

         console.log("listMarque"+JSON.stringify(this.listMarque))
       },(err: any)=>{
         console.log(err)
       }
     )
   }
   listtypevehicule={
    id:'',
    type:'',
   }
   liststypevehicule(){
      this.typeVehiculeService.GetTypeVehicule().subscribe(
        (data: any)=>{
          console.log(data)
            this.listtypevehicule=data

          console.log("listtypevehicule"+JSON.stringify(this.listtypevehicule))
        },(err: any)=>{
          console.log(err)
        }
      )
    }


 // vehicule =  new Vehicule()
 formSubmitted=false
  userRegisterlistVicule(){
    this.formSubmitted=true
    console.log("tojsoo"+JSON.stringify(this.FicheMarque))

            this.vehiculeService.registerlistVehicule(this.FicheMarque).subscribe(
         {


             next :(data:any )=>{
              console.log("goog"+this.FicheMarque.type)

              this.dialogRef.close();
            if(this.loginForm.valid){
               console.log("goog"+this.FicheMarque.type)
              }else{

               }

               },
              error:(err)=>{
                console.log(err.status);

             }
           });


     }
     onInputChange(event) {
      const pattern = /[0-9]/; // regular expression to match only numbers
      const inputChar = String.fromCharCode(event.keyCode);
      if (!pattern.test(inputChar)) {
        event.preventDefault();
      }
    }

    }
