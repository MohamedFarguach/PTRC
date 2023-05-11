import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TypeVehiculeService } from 'app/Service/type-vehicule-service';

@Component({
  selector: 'app-modifier-type-vehicule',
  templateUrl: './modifier-type-vehicule.component.html',
  styleUrls: ['./modifier-type-vehicule.component.scss']
})
export class ModifierTypeVehiculeComponent implements OnInit {
  recievedID: any;

  constructor(public dialogRef: MatDialogRef<ModifierTypeVehiculeComponent>,private formBuilder: FormBuilder,public route:Router, private httpclient :HttpClient,private typeVehiculeService:TypeVehiculeService, @Inject(MAT_DIALOG_DATA) public data: any,) { 
    { this.recievedID = data}
  }

  FormTypeVehicule!:FormGroup
  ngOnInit(): void {
    this.afficheTypeVehicule()
  this.FormTypeVehicule= this.formBuilder.group({
   
    type:['',Validators.required],
   
    
    }) 
  }
  TypeVehicule ={
    type:'',
  }

  closedialog(){
    this.dialogRef.close();
  }
  formSubmitted=false
  afficheTypeVehicule(){
    this.formSubmitted=true
    this.typeVehiculeService.afficheTypeVehicule(this.recievedID.id).subscribe(
      (data: any)=>{
    
          this.TypeVehicule=data 
      console.log(" this.TypeVehicule"+ JSON.stringify(this.TypeVehicule))
      },(err: any)=>{
        console.log(err)
      }
    )
  }
  Modefierlisttypevehicule(){
    this.typeVehiculeService.modefierlisttypevehicule(this.TypeVehicule,this.recievedID.id).subscribe(
 {

  
     next :(data:any )=>{
      console.log("goog"+this.TypeVehicule.type)
     
      this.dialogRef.close();
    if(this.FormTypeVehicule.valid){
       console.log("goog"+this.TypeVehicule.type)
      }else{ 
      
       }
             
       }, 
      error:(err)=>{
        console.log(err.status);
        
     }
   });
  

}
}

