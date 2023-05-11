import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AjouterMarqueComponent } from 'app/Modal/ajouter-marque/ajouter-marque.component';
import { ModifierMarqueComponent } from 'app/Modal/modifier-marque/modifier-marque.component';
import { MarqueService } from 'app/Service/marque-service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  p : number=1;
  countn!:number
  itemsPerPage:number=this.countn
  constructor(public dialog:MatDialog,private marqueService:MarqueService) { }

  ngOnInit( ) {
    this.listMarques();
    this.countn=10;
  }
  changea(n:any){
    this.countn=n.target.value
    console.log(this.countn)
     console.log(n.target.value)
   }
   opendialog(){
     const dialogConfig = new MatDialogConfig();
     dialogConfig.disableClose = true; 
     const dialogRef=this.dialog.open(AjouterMarqueComponent, dialogConfig);
   dialogRef.afterClosed().subscribe(() => {
    this.listMarques()
  });
   }
   opendialogModefier(id:number){
 
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true; // Disable click outside of the dialog area to close
    
     const dialogRef= this.dialog.open(ModifierMarqueComponent, {
     
     data: {id:id},
     disableClose: true 
    }); 
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.listMarques()
    });
     }
     listMarque:any
   listMarques(){
      this.marqueService.ListMarque().subscribe(
        (data: any)=>{
          console.log(data)
            this.listMarque=data 
   
          console.log("listMarque"+JSON.stringify(this.listMarque))
        },(err: any)=>{
          console.log(err)
        }
      )
    }
    listsMarque:any
    afficheMarque(fich:any){
       this.marqueService.ListMarqueFindById(fich).subscribe(
         (data: any)=>{
           console.log(data)
             this.listsMarque=data 
           console.log("listsMarque Find"+JSON.stringify(this.listsMarque))
         },(err: any)=>{
           console.log(err)
         }
       )
     }
     deletMarque(fich:any) {
    
      this.marqueService.deletMarque(fich).subscribe({
       next:()=>{
        this.listMarques()
       
       },
      error:err=>{
      console.log("deletMarque error")
      }
  
      })
       
     }
}
