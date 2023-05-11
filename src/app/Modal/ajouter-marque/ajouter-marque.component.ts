import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MarqueService } from 'app/Service/marque-service';
import { Marque } from 'app/class/marque';

@Component({
  selector: 'app-ajouter-marque',
  templateUrl: './ajouter-marque.component.html',
  styleUrls: ['./ajouter-marque.component.scss']
})
export class AjouterMarqueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AjouterMarqueComponent>,private formBuilder: FormBuilder,public route:Router,
    private marqueService:MarqueService,  
    ) { }
    formSubmitted=false
    FormMarque!:FormGroup
  ngOnInit(): void {
    this.FormMarque= this.formBuilder.group({
      marque:['',Validators.required],
     
      
      }) 
    }

  
  closedialog(){
    this.dialogRef.close();
  }
  marque = new Marque()
   
   AjouterlistMarque(){
     this.formSubmitted=true
      console.log("tojsoo"+JSON.stringify(this.marque))
         this.marqueService.ajoutelistMarquer(this.marque).subscribe(
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
