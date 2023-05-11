import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { AjouterUserComponent } from 'app/Modal/ajouter-user/ajouter-user.component';
import { ModefierUserComponent } from 'app/Modal/modefier-user/modefier-user.component';
import { ModefierVehiculesComponent } from 'app/Modal/modefier-vehicules/modefier-vehicules.component';
import { User } from 'app/Service/user';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  constructor(public dialog:MatDialog,public route:Router,private omp:MatPaginatorModule,private userservice:User) { }

  ngOnInit() {
    this.listUtilisateur();
    this.countn=10;

  }
  p : number=1;
  countn!:number

  itemsPerPage:number=this.countn
  opendialog(){
  const dialogConfig = new MatDialogConfig();
 dialogConfig.disableClose = true; // Disable click outside of the dialog area to close
  //this.dialog.open(AjouterUserComponent, dialogConfig);
  const dialogRef: MatDialogRef<AjouterUserComponent> = this.dialog.open(AjouterUserComponent,dialogConfig);
  dialogRef.afterClosed().subscribe(() => {
    this.listUtilisateur();
    // This will be executed after the dialog is closed
  });

   }


   opendialogModefier(id:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true; // Disable click outside of the dialog area to close
    //this.dialog.open(ModefierVehiculesComponent, dialogConfig);
    
    const dialogRef= this.dialog.open(ModefierUserComponent, {
      
     data: {id:id},
     disableClose: true 
    }); 
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.listUtilisateur();
    });
      }
   changea(n:any){
    this.countn=n.target.value
    console.log(this.countn)
     console.log(n.target.value)
   }
   appRole={
    id:'',
    roleName:'',
  }
   listUtilisateurs:any
   listUtilisateur(){
      this.userservice.ListtypeUtilisateurs().subscribe(
        (data: any)=>{
          console.log(data)
            this.listUtilisateurs=data 
   
          console.log("listUtilisateurs"+JSON.stringify(this.listUtilisateurs))
        },(err: any)=>{
          console.log(err)
        }
      )
    }
    deletUtilisateurs(fich:any) {
    
      this.userservice.delettypeUtilisateurs(fich).subscribe({
       next:()=>{
        this.listUtilisateur()
        
       },
      error:err=>{
      
      }
  
      })
       
     }
}


