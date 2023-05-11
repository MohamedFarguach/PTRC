import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { AjouterTypeVehiculeComponent } from 'app/Modal/ajouter-type-vehicule/ajouter-type-vehicule.component';
import { ModifierTypeVehiculeComponent } from 'app/Modal/modifier-type-vehicule/modifier-type-vehicule.component';
import { TypeVehiculeService } from 'app/Service/type-vehicule-service';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {

  constructor(public dialog:MatDialog,public route:Router,private omp:MatPaginatorModule,private typeVehiculeService:TypeVehiculeService) { }

  ngOnInit() {
    this.listtypevehicule()
    this.countn=10
  }
  p : number=1;
  countn!:number

  itemsPerPage:number=this.countn

  opendialog(){
  const dialogConfig = new MatDialogConfig();
 dialogConfig.disableClose = true; // Disable click outside of the dialog area to close
 const dialogRef=this.dialog.open(AjouterTypeVehiculeComponent, dialogConfig);
 dialogRef.afterClosed().subscribe(() => {
  this.listtypevehicule();
});
   }
   opendialogModefier(id:any){
 const dialogConfig = new MatDialogConfig();
 dialogConfig.disableClose = true; // Disable click outside of the dialog area to close
 //this.dialog.open(ModefierVehiculesComponent, dialogConfig);
 
 const dialogRef= this.dialog.open(ModifierTypeVehiculeComponent, {
   
  data: {id:id},
  disableClose: true 
 }); 
 dialogRef.afterClosed().subscribe(result => {
   console.log(`Dialog result: ${result}`);
   this.listtypevehicule();
  });
   }
  
   changea(n:any){
    this.countn=n.target.value
    console.log(this.countn)
     console.log(n.target.value)
   }
   listtype:any
   listtypevehicule(){
      this.typeVehiculeService.GetTypeVehicule().subscribe(
        (data: any)=>{
          console.log(data)
            this.listtype=data 
   
          console.log("listtype"+JSON.stringify(this.listtype))
        },(err: any)=>{
          console.log(err)
        }
      )
    }
    liststype:any
    affichetypelieuxbyId(fich:any){
       this.typeVehiculeService.afficheTypeVehicule(fich).subscribe(
         (data: any)=>{
           console.log(data)
             this.liststype=data 
           console.log("liststype Find"+JSON.stringify(this.liststype))
         },(err: any)=>{
           console.log(err)
         }
       )
     }
     deletTypeVehicule(fich:any) {
    
      this.typeVehiculeService.deleteTypeVehicule(fich).subscribe({
       next:()=>{
        this.listtypevehicule()
       
       },
      error:err=>{
      console.log("deletMarque error")
      }
  
      })
       
     }
}
