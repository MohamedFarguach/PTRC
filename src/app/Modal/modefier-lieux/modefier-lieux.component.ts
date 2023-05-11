import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LieuxService } from 'app/Service/lieux-service';

@Component({
  selector: 'app-modefier-lieux',
  templateUrl: './modefier-lieux.component.html',
  styleUrls: ['./modefier-lieux.component.scss']
})
export class ModefierLieuxComponent implements OnInit {
  recievedID: any;

  constructor(public dialogRef: MatDialogRef<ModefierLieuxComponent>,private formBuilder: FormBuilder,public route:Router,
    public lieuxService:LieuxService,private httpclient :HttpClient,@Inject(MAT_DIALOG_DATA) public data: any,) {
      { this.recievedID = data}
     }
    LieuxForm!:FormGroup
  ngOnInit(): void {
    
   this.afficheLieuxByID();
    //alert(this.recievedID.id)
    this.listTypeLieu();
    this.LieuxForm= this.formBuilder.group({
      code:['',Validators.required],
      designation:['',Validators.required],

      adresse:['',Validators.required],
      statut:['',Validators.required],
      typelieux:['',Validators.required],


   
      
      }) 
   
  }
  closedialog(){
    this.dialogRef.close();
  }
  FicheLieux =
  {
    code: '',       
    designation: '',
   
    adresse: '',
    statut: '',

  
    typelieux: {
        id:  '0',
      }, 
     
  }
  list:any
  listTypeLieu(){
     this.lieuxService.ListTypeLieux().subscribe(
       (data: any)=>{
         console.log(data)
           this.list=data 
         console.log("listTypeLieux"+JSON.stringify(this.list))
       },(err: any)=>{
         console.log(err)
       }
     )
   }
   TypelieuxChange(vehicule:any){
    this.FicheLieux.typelieux.id= vehicule.target.value 
   }
   formSubmitted=false
   Modefierlieux(){
    this.formSubmitted=true

    this.lieuxService.modefierlistLieux(this.FicheLieux,this.recievedID.id).subscribe(
 {

  
     next :(data:any )=>{
      console.log("goog"+this.FicheLieux.code)
     
      this.dialogRef.close();
    if(this.LieuxForm.valid){
       console.log("goog"+this.FicheLieux.code)
      }else{ 
      
       }
             
       }, 
      error:(err)=>{
        console.log(err.status);
        
     }
   });
  

}
listlieux:any
afficheLieuxByID(){
   this.lieuxService.afficherLieuxById(this.recievedID.id).subscribe(
     (data: any)=>{
       console.log(data)
         this.FicheLieux=data 
       console.log("listlieux Find"+JSON.stringify(this.listlieux))
     },(err: any)=>{
       console.log(err)
     }
   )
 } 
}

