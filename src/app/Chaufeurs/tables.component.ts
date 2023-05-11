import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
//import { AjouerChaufeursComponent } from 'app/Modal/a/ajouer-chaufeurs.component';
import { AjouteChaufeurComponent } from 'app/Modal/ajoute-chaufeur/ajoute-chaufeur.component';
import { ModefierChaufeurComponent } from 'app/Modal/modefier-chaufeur/modefier-chaufeur.component';
import { ChaufeurService } from 'app/Service/chaufeur-service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;

  constructor(public dialog:MatDialog, private chaufeurService:ChaufeurService) { }

  ngOnInit() {
    this.listchaufeurs();
    this.countn=10;
  }
  p : number=1;
  countn!:number
  itemsPerPage:number=this.countn
  opendialog(){
  //this.dialog.open(AjouteChaufeurComponent)
   const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = true; // Disable click outside of the dialog area to close
   const dialogRef=this.dialog.open(AjouteChaufeurComponent, dialogConfig);
 dialogRef.afterClosed().subscribe(() => {
  this.listchaufeurs();
});
 }

   opendialogModefier(id:number){

  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true; // Disable click outside of the dialog area to close

   const dialogRef= this.dialog.open(ModefierChaufeurComponent, {

   data: {id:id},
   disableClose: true
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    this.listchaufeurs();
  });
   }

     changea(n:any){
      this.countn=n.target.value
      console.log(this.countn)
       console.log(n.target.value)
     }
     listchaufeur:any
   listchaufeurs(){
      this.chaufeurService.Listchaufeur().subscribe(
        (data: any)=>{
          console.log(data)
            this.listchaufeur=data

          console.log("listchaufeur"+JSON.stringify(this.listchaufeur))
        },(err: any)=>{
          console.log(err)
        }
      )
    }
     listChaufeurs:any
    affichechaufeurs(fich:any){
       this.chaufeurService.affichechaufeur(fich).subscribe(
         (data: any)=>{
           console.log(data)
             this.listChaufeurs=data

           console.log("listchaufeur2"+JSON.stringify(this.listChaufeurs))
         },(err: any)=>{
           console.log(err)
         }
       )
     }
    deletchaufeurs(fich:any) {

      this.chaufeurService.deletchaufeur(fich).subscribe({
       next:()=>{
        this.listchaufeurs()

       },
      error:err=>{
      console.log("deletchaufeurs error")
      }

      })

     }
}
