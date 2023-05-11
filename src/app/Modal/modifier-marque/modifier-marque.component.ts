import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MarqueService } from 'app/Service/marque-service';
import { Marque } from 'app/class/marque';

@Component({
  selector: 'app-modifier-marque',
  templateUrl: './modifier-marque.component.html',
  styleUrls: ['./modifier-marque.component.scss']
})
export class ModifierMarqueComponent implements OnInit {
  recievedID:any
  MarqueForm:FormGroup
  formSubmitted=false
  constructor(public dialogRef: MatDialogRef<ModifierMarqueComponent>,private formBuilder: FormBuilder,public route:Router,
    @Inject(MAT_DIALOG_DATA) public data: any,private marqueService:MarqueService, ) { 
      { this.recievedID = data}
    }

  ngOnInit(): void {
    this.afficheMarque();
    this.MarqueForm= this.formBuilder.group({
      marque:['',Validators.required],
      }) 
  }
  marque = new Marque()
  closedialog(){
    this.dialogRef.close();
  }
  afficheMarque(){
    this.marqueService.ListMarqueFindById(this.recievedID.id).subscribe(
      (data: any)=>{
    
          this.marque=data 
      console.log(" this.marque"+ JSON.stringify(this.marque))
      },(err: any)=>{
        console.log(err)
      }
    )
  }
  ModefierMarque(){
    this.formSubmitted=true
    this.marqueService.modefierlistMarque(this.marque,this.recievedID.id).subscribe(
 {

  
     next :(data:any )=>{
      console.log("goog"+this.marque.marque)
     
      this.dialogRef.close();
    if(this.MarqueForm.valid){
       console.log("goog"+this.marque.marque)
      }else{ 
      
       }
             
       }, 
      error:(err)=>{
        console.log(err.status);
        
     }
   });
  

}
}
