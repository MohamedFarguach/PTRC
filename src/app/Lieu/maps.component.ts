import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { AjouteLieuxComponent } from 'app/Modal/ajoute-lieux/ajoute-lieux.component';
import { ModefierLieuxComponent } from 'app/Modal/modefier-lieux/modefier-lieux.component';
import { LieuxService } from 'app/Service/lieux-service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {

  constructor(public dialog:MatDialog,public route:Router,private omp:MatPaginatorModule,
    public lieuxService:LieuxService,private httpclient :HttpClient) { }

  ngOnInit() {
    this.countn=10
    this.afficheLieux();
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
  p : number=1;
  countn!:number

  itemsPerPage:number=this.countn
  changea(n:any){
    this.countn=n.target.value
    console.log(this.countn)
     console.log(n.target.value)
   }

  opendialog(){
    const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = true; // Disable click outside of the dialog area to close
   const dialogRef=this.dialog.open(AjouteLieuxComponent, dialogConfig);
   dialogRef.afterClosed().subscribe(() => {
    this.afficheLieux();
  });
     }
     opendialogModefier(id:number){
 
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true; // Disable click outside of the dialog area to close
      
       const dialogRef= this.dialog.open(ModefierLieuxComponent, {
       
       data: {id:id},
       disableClose: true 
      }); 
      
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        this.afficheLieux();
      });
       }
     listlieux:any
    afficheLieux(){
       this.lieuxService.ListLieux().subscribe(
         (data: any)=>{
           console.log(data)
             this.listlieux=data 
           console.log("listlieux Find"+JSON.stringify(this.listlieux))
         },(err: any)=>{
           console.log(err)
         }
       )
     } 
     deletLieux(fich:any) {
    
      this.lieuxService.deletLieux(fich).subscribe({
       next:()=>{
        this.afficheLieux()
       
       },
      error:err=>{
      console.log("deletMarque error")
      }
  
      })
       
     }
}
