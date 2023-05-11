import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ResponsableService } from 'app/Service/responsable-service';

@Component({
  selector: 'app-ajouter-responsable-charge',
  templateUrl: './ajouter-responsable-charge.component.html',
  styleUrls: ['./ajouter-responsable-charge.component.scss']
})
export class AjouterResponsableChargeComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<AjouterResponsableChargeComponent>,private formBuilder: FormBuilder,public route:Router,private responsableService:ResponsableService,private httpclient :HttpClient) { }
  FormResponsable!:FormGroup
  formSubmitted=false
  ngOnInit(): void {
  this.FormResponsable= this.formBuilder.group({
    prenom:['',Validators.required],
    matricule:['',Validators.required],
    nom:['',Validators.required],
    telephone:['',Validators.required],
    
    }) 
  }

  ResponsableCharge={
    prenom: '',
    matricule: '',
    nom: '',
    telephone: '',
  }
  onInputChange(event: any) {
    const pattern = /[0-9]/; // regular expression to match only numbers
    const inputChar = String.fromCharCode(event.keyCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  closedialog(){
    this.dialogRef.close();
  }

  userRegisterlistResponsable(){
    this.formSubmitted=true

    console.log("tojsoo"+JSON.stringify(this.ResponsableCharge))
       this.responsableService.ajoutelistResponsable(this.ResponsableCharge).subscribe(
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
