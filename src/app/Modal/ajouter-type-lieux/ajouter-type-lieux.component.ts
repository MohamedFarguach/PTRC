import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AjouteChaufeurComponent } from '../ajoute-chaufeur/ajoute-chaufeur.component';
import { TypeLieuxService } from 'app/Service/type-lieux-service';

@Component({
  selector: 'app-ajouter-type-lieux',
  templateUrl: './ajouter-type-lieux.component.html',
  styleUrls: ['./ajouter-type-lieux.component.scss']
})
export class AjouterTypeLieuxComponent implements OnInit {
 

  constructor(public dialogRef: MatDialogRef<AjouterTypeLieuxComponent>,private formBuilder: FormBuilder,public route:Router, private httpclient :HttpClient,private typeLieuxService:TypeLieuxService) { }

  FormTypelieux!:FormGroup
  ngOnInit(): void {
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
  formSubmitted=false
  RegisterlistTypelieux(){
    this.formSubmitted=true

    console.log("tojsoo"+JSON.stringify(this.TypeLieux))
       this.typeLieuxService.ajoutelisttypelieux(this.TypeLieux).subscribe(
         {
      
          
             next :(data:any )=>{
              console.log("goog")
              this.dialogRef.close();      
               }, 
              error:(err)=>{
                console.log(err.status);
                
             }
           });
          
     
     }
}
