import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModefierVehiculesComponent } from 'app/Modal/modefier-vehicules/modefier-vehicules.component';
import { VehiculesChaufeurComponent } from 'app/Modal/Ajouter-vehicules/vehicules-chaufeur.component';
import { VehiculeService } from 'app/Service/vehicule-service';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public dialog:MatDialog,public vehiculeservice:VehiculeService,public route:Router,private omp:MatPaginatorModule) { }

  ngOnInit() {
    this.listvehicules();
    this.countn=10;
  }
  FicheMarque =
  {
    type: '',
    matricule: '',
    statut: '',
    ancienKm: '',
    nouveauKm: '',

    marques: {
        id:  '0',
      },

  }

  p : number=1;
  countn!:number

  itemsPerPage:number=this.countn

  opendialog(){
  const dialogConfig = new MatDialogConfig();
 dialogConfig.disableClose = true; // Disable click outside of the dialog area to close
 const dialogRef=this.dialog.open(VehiculesChaufeurComponent, dialogConfig);
 dialogRef.afterClosed().subscribe(() => {
  this.listvehicules();
});
   }
   opendialogModefier(id:any){
 const dialogConfig = new MatDialogConfig();
 dialogConfig.disableClose = true; // Disable click outside of the dialog area to close
 //this.dialog.open(ModefierVehiculesComponent, dialogConfig);

 const dialogRef= this.dialog.open(ModefierVehiculesComponent, {

  data: {id:id},
  disableClose: true
 });
 dialogRef.afterClosed().subscribe(result => {
   console.log(`Dialog result: ${result}`);
   this.listvehicules();
 });
   }
   changea(n:any){
    this.countn=n.target.value
    console.log(this.countn)
     console.log(n.target.value)
   }


   listvehicule:any
   listvehicules(){
      this.vehiculeservice.ListVehicule().subscribe(
        (data: any)=>{
          console.log(data)
            this.listvehicule=data

          console.log("listvehicule"+JSON.stringify(this.listvehicule))
        },(err: any)=>{
          console.log(err)
        }
      )
    }
    deletvehicule(fich:any) {
      //alert(fich)
      this.vehiculeservice.deletplistvehicule(fich).subscribe({
       next:()=>{
        this.listvehicules()
        // window.location.reload();

       },
      error:err=>{
      //  alert(fich.id)
       // alert("error")
      }

      })

     }

  }
