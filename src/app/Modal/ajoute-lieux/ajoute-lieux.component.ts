import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LieuxService } from 'app/Service/lieux-service';

@Component({
  selector: 'app-ajoute-lieux',
  templateUrl: './ajoute-lieux.component.html',
  styleUrls: ['./ajoute-lieux.component.scss']
})
export class AjouteLieuxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AjouteLieuxComponent>,private formBuilder: FormBuilder,public route:Router,
    public lieuxService:LieuxService,private httpclient :HttpClient) { }
    LieuxForm!:FormGroup
    formSubmitted=false
  ngOnInit(): void {
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

  RegisterlistFicheLieux(){
    this.formSubmitted=true
    console.log("tojsoo"+JSON.stringify(this.FicheLieux))

            this.lieuxService.registerlistLieux(this.FicheLieux).subscribe(
         {
      
          
             next :(data:any )=>{
              console.log("goog"+this.FicheLieux.designation)
             
              this.dialogRef.close();
            if(this.LieuxForm.valid){
               console.log("goog"+this.FicheLieux.designation)
              }else{ 
              
               }
                     
               }, 
              error:(err)=>{
                console.log(err.status);
                
             }
           });
          
     
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
  
}
