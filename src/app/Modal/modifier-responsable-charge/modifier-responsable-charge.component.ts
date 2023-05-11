import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ResponsableService } from 'app/Service/responsable-service';

@Component({
  selector: 'app-modifier-responsable-charge',
  templateUrl: './modifier-responsable-charge.component.html',
  styleUrls: ['./modifier-responsable-charge.component.scss']
})
export class ModifierResponsableChargeComponent implements OnInit {
  recievedID: any;

  constructor(public dialogRef: MatDialogRef<ModifierResponsableChargeComponent>,private formBuilder: FormBuilder,public route:Router,private responsableService:ResponsableService,private httpclient :HttpClient, @Inject(MAT_DIALOG_DATA) public data: any,) { {this.recievedID = data}}
  FormResponsable!:FormGroup
  formSubmitted=false
  ngOnInit(): void {
    this.MlistResponsables()
    this.afficheresponsableService()
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

  ModifierlistResponsable(){
    this.formSubmitted=true

    console.log("tojsoo"+JSON.stringify(this.ResponsableCharge,this.recievedID.id))
       this.responsableService.modefierlistResponsable(this.ResponsableCharge,this.recievedID.id).subscribe(
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
     afficheresponsableService(){
      this.responsableService.afficheResponsable(this.recievedID.id).subscribe(
        (data: any)=>{
      
            this.ResponsableCharge=data
          console.log("this.Responsable"+this.ResponsableCharge)
        },(err: any)=>{
          console.log(err)
        }
      )
    }
    listResponsables:any
    MlistResponsables(){
       this.responsableService.ListResponsable().subscribe(
         (data: any)=>{
           console.log(data)
             this.listResponsables=data 
    
           console.log("listResponsables"+JSON.stringify(this.listResponsables))
         },(err: any)=>{
           console.log(err)
         }
       )
     }
}

