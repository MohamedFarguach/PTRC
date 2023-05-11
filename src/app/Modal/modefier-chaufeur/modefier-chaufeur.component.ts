import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TablesComponent } from 'app/Chaufeurs/tables.component';
import { ChaufeurService } from 'app/Service/chaufeur-service';
import { Chaufeur } from 'app/class/chaufeur';

@Component({
  selector: 'app-modefier-chaufeur',
  templateUrl: './modefier-chaufeur.component.html',
  styleUrls: ['./modefier-chaufeur.component.scss']
})
export class ModefierChaufeurComponent implements OnInit {
  recievedID:any
  recieve:any
  constructor(public dialogRef: MatDialogRef<ModefierChaufeurComponent>, private chaufeurService:ChaufeurService,
    @Inject(MAT_DIALOG_DATA) public dat: any ,  private formBuilder: FormBuilder,private el: ElementRef
   ) { this.recievedID = dat}
  ChaufeurForm!:FormGroup
  ngOnInit(): void {
    this.affichechaufeurs();

    this.ChaufeurForm= this.formBuilder.group({
      prenom:['',Validators.required],
      matricule:['',Validators.required],
      nom:['',Validators.required],
      telephone:['',Validators.required],

      })



}
closedialog(){
  this.dialogRef.close();
}
chaufeur = new Chaufeur();

listChaufeurs:any

affichechaufeurs(){
   this.chaufeurService.affichechaufeur(this.recievedID.id).subscribe(
     (data: any)=>{

         this.chaufeur=data
       console.log("this.chaufeur"+this.chaufeur)
     },(err: any)=>{
       console.log(err)
     }
   )
 }
 chaufeurss:any
 formSubmitted=false
 userRegisterlistchaufeur(){
     this.formSubmitted=true
  console.log("tojsoo"+JSON.stringify(this.chaufeur))

     this.chaufeurService.modefierlistchaufeur(this.chaufeur,this.recievedID.id).subscribe(
       {

           next :(daa:any )=>{
            console.log("goog")
            this.dialogRef.close();
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
