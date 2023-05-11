import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { AjouterResponsableChargeComponent } from 'app/Modal/ajouter-responsable-charge/ajouter-responsable-charge.component';
import { ModifierResponsableChargeComponent } from 'app/Modal/modifier-responsable-charge/modifier-responsable-charge.component';
import { ResponsableService } from 'app/Service/responsable-service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private   responsableService:ResponsableService,private httpclient :HttpClient,
    public dialog:MatDialog,public route:Router,private omp:MatPaginatorModule) { }


  ngOnInit() {
    this.listResponsables();
    this.countn=10;
  }
  listchaufeurs() {
    throw new Error('Method not implemented.');
  }
  p : number=1;
  countn!:number
  itemsPerPage:number=this.countn
  opendialog(){
  //this.dialog.open(AjouteChaufeurComponent)
   const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = true; // Disable click outside of the dialog area to close
   const dialogRef=this.dialog.open(AjouterResponsableChargeComponent, dialogConfig);
 dialogRef.afterClosed().subscribe(() => {
  this.listResponsables();
});
 }

   opendialogModefier(id:number){

  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true; // Disable click outside of the dialog area to close

   const dialogRef= this.dialog.open(ModifierResponsableChargeComponent, {

   data: {id:id},
   disableClose: true
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    this.listResponsables();
  });
   }

     changea(n:any){
      this.countn=n.target.value
      console.log(this.countn)
       console.log(n.target.value)
     }
     listResponsable:any
   listResponsables(){
      this.responsableService.ListResponsable().subscribe(
        (data: any)=>{
          console.log(data)
            this.listResponsable=data

          console.log("listResponsable"+JSON.stringify(this.listResponsable))
        },(err: any)=>{
          console.log(err)
        }
      )
    }
    listsResponsables:any
    afficheResponsable(fich:any){
       this.responsableService.afficheResponsable(fich).subscribe(
         (data: any)=>{
           console.log(data)
             this.listsResponsables=data

           console.log("listsResponsables"+JSON.stringify(this.listsResponsables))
         },(err: any)=>{
           console.log(err)
         }
       )
     }
    deletResponsable(fich:any) {

      this.responsableService.deleteResponsable(fich).subscribe({
       next:()=>{
        this.listResponsables()

       },
      error:err=>{
      console.log("delete Responsable error")
      }

      })

     }
}
