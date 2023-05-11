import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MarqueService } from 'app/Service/marque-service';
import { TypeVehiculeService } from 'app/Service/type-vehicule-service';
import { VehiculeService } from 'app/Service/vehicule-service';
import { Vehicule } from 'app/class/vehicule';

@Component({
  selector: 'app-modefier-vehicules',
  templateUrl: './modefier-vehicules.component.html',
  styleUrls: ['./modefier-vehicules.component.scss']
})
export class ModefierVehiculesComponent implements OnInit {
  recievedID:any
  recieve:any
  constructor(public dialogRef: MatDialogRef<ModefierVehiculesComponent>,private formBuilder: FormBuilder, private   vehiculeService:VehiculeService,@Inject(MAT_DIALOG_DATA) public data: any ,private marqueService:MarqueService,private typeVehiculeService:TypeVehiculeService,)
   {{ this.recievedID = data} }

  ngOnInit(): void {
    this.affichevehicule();
    this.listMarques()
    this.liststypevehicule();
     this.loginForm= this.formBuilder.group({
      type:['',Validators.required],
      matricule:['',Validators.required],
      typeVehicule:['',Validators.required],
      marques:['',Validators.required],
      statut:['',Validators.required],
      ancienKm:['',Validators.required],
      nouveauKm:['',Validators.required],
      designation:['',Validators.required],

      })
  }
  typevehicule(vehicule:any){
    this.FicheMarque.typeVehicule.id= vehicule.target.value
// alert(this.FicheMarque.typeVehicule.id)
   }
  marqueChange(vehicule:any){
    this.FicheMarque.marques.id= vehicule.target.value
  // alert(this.FicheMarque.marques.id)
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
      typeVehicule:{
        id:'',
      }
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
  loginForm:FormGroup
  closedialog(){
    this.dialogRef.close();
  }
  vehicule =  new Vehicule()
  formSubmitted=false
  userRegisterlistVicule(){
    this.formSubmitted=true
    this.vehiculeService.modefierlistvehicule(this.FicheMarque,this.recievedID.id).subscribe(
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
message: string;

compareNumbers() {
  if(this.FicheMarque.ancienKm < this.FicheMarque.nouveauKm) {
    this.userRegisterlistVicule()
  } else if(this.FicheMarque.ancienKm  >  this.FicheMarque.nouveauKm) {
    this.message = "Nouveau_Km numéro doit être grand numéro de Ancien_Km  ";
  } else if(this.FicheMarque.ancienKm  ==  this.FicheMarque.nouveauKm){
    this.userRegisterlistVicule()
  }
  //
}
     affichevehicule(){
      this.vehiculeService.ListVehiculeFindById(this.recievedID.id).subscribe(
        (data: any)=>{

            this.FicheMarque=data
        console.log(" this.vehicule"+ JSON.stringify(this.vehicule))
        },(err: any)=>{
          console.log(err)
        }
      )
    }
    onInputChange(event) {
      const pattern = /[0-9]/; // regular expression to match only numbers
      const inputChar = String.fromCharCode(event.keyCode);
      if (!pattern.test(inputChar)) {
        event.preventDefault();
      }
    }
}
