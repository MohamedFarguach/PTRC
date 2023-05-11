import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TypeLieuxService } from 'app/Service/type-lieux-service';

@Component({
  selector: 'app-modifier-type-lieux',
  templateUrl: './modifier-type-lieux.component.html',
  styleUrls: ['./modifier-type-lieux.component.scss']
})
export class ModifierTypeLieuxComponent implements OnInit {
  recievedID: any;

  constructor(public dialogRef: MatDialogRef<ModifierTypeLieuxComponent>,private formBuilder: FormBuilder,public route:Router, private httpclient :HttpClient,private typeLieuxService:TypeLieuxService, @Inject(MAT_DIALOG_DATA) public data: any,) {
    { this.recievedID = data}
   }

  FormTypelieux!:FormGroup
  ngOnInit(): void {
    this.affichetypelieu()
  this.FormTypelieux= this.formBuilder.group({
    code:['',Validators.required],
    designation:['',Validators.required],
   
    
    }) 
  }

  TypeLieux ={
    code:'',
    designation:'',
  }
  closedialog(){
    this.dialogRef.close();
  }

  affichetypelieu(){
    this.typeLieuxService.affichetypelieuxbyid(this.recievedID.id).subscribe(
      (data: any)=>{
    
          this.TypeLieux=data 
      console.log(" this.marque"+ JSON.stringify(this.TypeLieux))
      },(err: any)=>{
        console.log(err)
      }
    )
  }
  
  formSubmitted=false
  ModefierTypelieu(){
    this.formSubmitted=true
    this.typeLieuxService.modefierlisttypelieux(this.TypeLieux,this.recievedID.id).subscribe(
 {

     next :(data:any )=>{
      console.log("goog"+this.TypeLieux.code)
     
      this.dialogRef.close();
    if(this.FormTypelieux.valid){
       console.log("goog"+this.TypeLieux.code)
      }else{ 
      
       }
             
       }, 
      error:(err)=>{
        console.log(err.status);
        
     }
   });
  

}
}