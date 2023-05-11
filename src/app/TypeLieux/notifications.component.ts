import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { VehiculesChaufeurComponent } from 'app/Modal/Ajouter-vehicules/vehicules-chaufeur.component';
import { AjouterTypeLieuxComponent } from 'app/Modal/ajouter-type-lieux/ajouter-type-lieux.component';
import { ModefierVehiculesComponent } from 'app/Modal/modefier-vehicules/modefier-vehicules.component';
import { ModifierTypeLieuxComponent } from 'app/Modal/modifier-type-lieux/modifier-type-lieux.component';
import { MarqueService } from 'app/Service/marque-service';
import { TypeLieuxService } from 'app/Service/type-lieux-service';

declare var $:any;

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(public dialog:MatDialog,public route:Router,private omp:MatPaginatorModule,private typeLieuxService:TypeLieuxService) { }

  ngOnInit() {
    this.listtypelieux();
    this.countn=10
  }
  // showNotification(from, align){
  //     const type = ['','info','success','warning','danger'];

  //     var color = Math.floor((Math.random() * 4) + 1);
  //     $.notify({
  //         icon: "pe-7s-gift",
  //         message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."
  //     },{
  //         type: type[color],
  //         timer: 1000,
  //         placement: {
  //             from: from,
  //             align: align
  //         }
  //     });
  // }
  p : number=1;
  countn!:number

  itemsPerPage:number=this.countn

  opendialog(){
  const dialogConfig = new MatDialogConfig();
 dialogConfig.disableClose = true; // Disable click outside of the dialog area to close
 const dialogRef=this.dialog.open(AjouterTypeLieuxComponent, dialogConfig);
 dialogRef.afterClosed().subscribe(() => {
  this.listtypelieux();
});
   }
   opendialogModefier(id:any){
 const dialogConfig = new MatDialogConfig();
 dialogConfig.disableClose = true; // Disable click outside of the dialog area to close
 //this.dialog.open(ModefierVehiculesComponent, dialogConfig);
 
 const dialogRef= this.dialog.open(ModifierTypeLieuxComponent, {
   
  data: {id:id},
  disableClose: true 
 }); 
 dialogRef.afterClosed().subscribe(result => {
   console.log(`Dialog result: ${result}`);
   this.listtypelieux();
 });
   }
   TypeLieux ={
    code:'',
    designation:'',
  }
   changea(n:any){
    this.countn=n.target.value
    console.log(this.countn)
     console.log(n.target.value)
   }
   listtype:any
   listtypelieux(){
      this.typeLieuxService.Listtypelieux().subscribe(
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
       this.typeLieuxService.affichetypelieuxbyid(fich).subscribe(
         (data: any)=>{
           console.log(data)
             this.liststype=data 
           console.log("liststype Find"+JSON.stringify(this.liststype))
         },(err: any)=>{
           console.log(err)
         }
       )
     }
     deletMarque(fich:any) {
    
      this.typeLieuxService.delettypelieux(fich).subscribe({
       next:()=>{
        this.listtypelieux()
       
       },
      error:err=>{
      console.log("deletMarque error")
      }
  
      })
       
     }
}
