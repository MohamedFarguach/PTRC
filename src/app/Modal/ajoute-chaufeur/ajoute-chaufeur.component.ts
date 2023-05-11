import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AjouteLivraisonComponent } from '../ajoute-livraison/ajoute-livraison.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Chaufeur } from 'app/class/chaufeur';
import { HttpClient } from '@angular/common/http';
import { ChaufeurService } from 'app/Service/chaufeur-service';
import { Vehicule } from 'app/class/vehicule';
import { Chaufeurs } from 'app/chaufeurs';

@Component({
  selector: 'app-ajoute-chaufeur',
  templateUrl: './ajoute-chaufeur.component.html',
  styleUrls: ['./ajoute-chaufeur.component.scss']
})
export class AjouteChaufeurComponent implements OnInit {
//
  constructor(public dialogRef: MatDialogRef<AjouteChaufeurComponent>,private formBuilder: FormBuilder,public route:Router,private chaufeurService:ChaufeurService,private httpclient :HttpClient) { }
  FormChaufeur!:FormGroup
  ngOnInit(): void {
  this.FormChaufeur= this.formBuilder.group({
    prenom:['',Validators.required],
    matricule:['',Validators.required],
    nom:['',Validators.required],
    telephone:['',Validators.required],

    })
  }




    loginForm:FormGroup
    closedialog(){
      this.dialogRef.close();
    }
   // vehicule =  new Vehicule()
    chaufeur = new Chaufeur()
    formSubmitted=false
    userRegisterlistchaufeur(){
      this.formSubmitted=true

      console.log("tojsoo"+JSON.stringify(this.chaufeur))
         this.chaufeurService.ajoutelistchaufeur(this.chaufeur).subscribe(
           {


               next :(data:any )=>{
                console.log("goog")
                this.dialogRef.close();

              //  if(this.loginForm.valid){
              //   console.log("goog"+this.fichh.type)
              //      }else{

              //    }

                 },
                error:(err)=>{
                  console.log(err.status);

               }
             });


       }
       onInputChange(event: any) {
        const pattern = /[0-9]/; // regular expression to match only numbers
        const inputChar = String.fromCharCode(event.keyCode);
        if (!pattern.test(inputChar)) {
          event.preventDefault();
        }
      }
      }

