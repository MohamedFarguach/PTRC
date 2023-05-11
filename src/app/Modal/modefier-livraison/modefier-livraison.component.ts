import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ChaufeurService } from 'app/Service/chaufeur-service';
import { LieuxService } from 'app/Service/lieux-service';
import { LivraisonSerive } from 'app/Service/livraison-serive';
import { ResponsableService } from 'app/Service/responsable-service';
import { TypeVehiculeService } from 'app/Service/type-vehicule-service';
import { VehiculeService } from 'app/Service/vehicule-service';
import { Chaufeur } from 'app/class/chaufeur';

@Component({
  selector: 'app-modefier-livraison',
  templateUrl: './modefier-livraison.component.html',
  styleUrls: ['./modefier-livraison.component.scss']
})
export class ModefierLivraisonComponent implements OnInit {
  recievedID:any
  showButtone:false
  selectedFile: File;
  formSubmitted = false;

  //showButton = false;
  constructor(public dialogRef: MatDialogRef<ModefierLivraisonComponent>,private formBuilder: FormBuilder,private livraisonservice:LivraisonSerive,private chaufeurService:ChaufeurService,private vehiculeService:VehiculeService,private typeVehiculeService:TypeVehiculeService, private lieuxServic:LieuxService,private responsableService:ResponsableService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any ,) {{ this.recievedID = data } }
    @Input() showButton: boolean;
    @Input() fileid: number;
  ngOnInit(): void {

    this.MlistResponsables();

  // alert("cc"+this.recievedID.id)
  this.showButtone = this.recievedID.showButton
  this.fileid = this.recievedID.fileid
     this.listtypevehicules();
    this.listLieux();
    this.listLieuxlivraison();
    this.affichelivraison()
    this.listchaufeurs();
    this.listvehicules();
    this.listchantier();
    this.loginForm= this.formBuilder.group({
    idlivraison:['',Validators.required],
    datePrevuCharge:['',Validators.required],
    lieucharge:['',Validators.required],
    lieuxlivraison:['',Validators.required],
    responsableCharge:['',Validators.required],
    heurePrevuCharge:['',Validators.required],
    dateLivraison:['',Validators.required],
    heureLivraison:['',Validators.required],
    dateDemande:['',Validators.required],
    heureDemande:['',Validators.required],
    quantite:['',Validators.required],
    note:['',Validators.required],
    designation:['',Validators.required],
    unite:['',Validators.required],
    statut:['',Validators.required],
  //  vehicule:['',Validators.required],
  //  chauffeur:['',Validators.required],
  //  chantier:['',Validators.required],
     })
  }

  FicheLivraison =
    {
      //idlivraison: '',
      datePrevuCharge: '',
      heurePrevuCharge:'',
      dateLivraison:'',
      heureLivraison:'',
      dateDemande:'',
      heureDemande:'',
      quantite:'',
      designation:'',
      unite:'',

      note:'',
      statut:'',
      lieucharge:{
        id: '',
      },
      vehicule: {
          id:  '0',
        },
        chauffeur: {
          id: '0',

        },
        responsableCharge:{
          id:''
        },
        lieuxlivraison: {
         id:'0',

         },
         filelivraison: {
          id:'0',

          },
          typeVehicule:{
            id:'0',
          }

    }

  loginForm:FormGroup
  closedialog(){
    this.dialogRef.close();
  }

  ChauffeurChange(chaufeur:any){
    this.FicheLivraison.chauffeur.id= chaufeur.target.value
   //alert(this.FicheLivraison.chauffeur.id)
   }
   vehiculesChange(vehicule:any){
    this.FicheLivraison.vehicule.id= vehicule.target.value
  // alert(this.FicheLivraison.vehicule.id)
   }
   lieuxChange(lieu:any){
    this.FicheLivraison.lieuxlivraison.id= lieu.target.value
  // alert(this.FicheLivraison.vehicule.id)
   }
   lieucharge(lieux:any){
    this.FicheLivraison.lieucharge= lieux.target.value
 // alert( this.FicheLivraison.lieucharge)
   }
   Responsablechange(responsable:any){
    this.FicheLivraison.responsableCharge.id= responsable.target.value

   }
   typevehiculesChange(vehicule:any){
    this.FicheLivraison.typeVehicule.id= vehicule.target.value
   this.listvehiculeBytypeIds( this.FicheLivraison.typeVehicule.id)
    //alert(this.FicheLivraison.vehicule.id)
   }
   typelieuxChange(lieu:any){
    this.FicheLivraison.lieucharge.id= lieu.target.value
   //alert(this.FicheLivraison.lieucharge.id)
   }
  //  ChontierChange(lieux:any){
  //   this.FicheLivraison.lieux.id= lieux.target.value
  //  }

   listchaufeur:any
   chaufeur=new Chaufeur()
   listchaufeurs(){
      this.chaufeurService.Listchaufeur().subscribe(
        (data: any)=>{
            this.listchaufeur=data
          console.log("listchaufeur"+JSON.stringify(this.listchaufeur))
        },(err: any)=>{
          console.log(err)
        }
      )
    }
    listlieux:any
   listLieux(){
      this.lieuxServic.ListLieux().subscribe(
        (data: any)=>{
          console.log(data)
            this.listlieux=data

          console.log("listlieux"+JSON.stringify(this.listlieux))
        },(err: any)=>{
          console.log(err)
        }
      )
    }
    checkDates() {
      if (this.FicheLivraison.dateLivraison < this.FicheLivraison.dateDemande) {
        this.FicheLivraison.dateLivraison = ""; // Clear the input
      }
    }
    checkDates2() {
      if (this.FicheLivraison.dateLivraison < this.FicheLivraison.datePrevuCharge) {
        this.FicheLivraison.dateLivraison = ""; // Clear the input
      }
    }
    Message=false
    MessageDate=false
    compareNumbers() {
     if(this.FicheLivraison.heureDemande  < this.FicheLivraison.heureLivraison) {
       if(this.FicheLivraison.dateDemande  < this.FicheLivraison.dateLivraison) {
       }else{
         this.MessageDate=true

       }

     }else {
         this.Message=true
        // alert("pas bien")
     }

   }
   compareString(){
    //if(this.FicheLivraison.lieucharge  == this.FicheLivraison.) {
    //}
   }
    listtypevehicule:any
    listtypevehicules(){
       this.typeVehiculeService.GetTypeVehicule().subscribe(
         (data: any)=>{
           console.log(data)
             this.listtypevehicule=data

           console.log("listvehicule"+JSON.stringify(this.listvehicule))
         },(err: any)=>{
           console.log(err)
         }
       )
     }
    listchantiers:any
   listchantier(){
      this.livraisonservice.ListChantier().subscribe(
        (data: any)=>{
            this.listchantiers=data
          console.log("listchantiers modefier page"+JSON.stringify(this.listchantiers))
        },(err: any)=>{
          console.log(err)
        }
      )
    }
    listvehicule:any
    listvehicules(){
       this.vehiculeService.ListVehicule().subscribe(
         (data: any)=>{
             this.listvehicule=data
           console.log("listvehicule"+JSON.stringify(this.listvehicule))
         },(err: any)=>{
           console.log(err)
         }
       )
     }

     affichelivraison(){
      this.livraisonservice.FindByIdlivraison(this.recievedID.id).subscribe(
        (data: any)=>{
            this.FicheLivraison=data
        console.log("FicheLivraison"+ JSON.stringify(this.FicheLivraison))
        console.log("recievedID"+ JSON.stringify(this.recievedID))
        },(err: any)=>{
          console.log(err)
        }
      )
    }
    Messagevehicule=false
    Messagelieux=false
    compareStrin(){
      if(this.FicheLivraison.lieucharge.id == this.FicheLivraison.lieuxlivraison.id ) {

       this.Messagelieux=true
      }else{
        this.Messagelieux=false

                this.RegisterFicheLivraison();

      }

      }
      listvehiculeBytypeId:any
      listvehiculeBytypeIds(id:any){
         this.vehiculeService.ListVehiculeByTypeId(id).subscribe(
           (data: any)=>{
             console.log(data)
               this.listvehiculeBytypeId=data

             console.log("listvehiculeBytypeId"+JSON.stringify(this.listvehiculeBytypeId))
           },(err: any)=>{
             console.log(err)
           }
         )
       }
       listlieuxlivraison:any
       listLieuxlivraison(){
          this.lieuxServic.ListLieux().subscribe(
            (data: any)=>{
              console.log(data)
                this.listlieuxlivraison=data

              console.log("listlieux"+JSON.stringify(this.listlieux))
            },(err: any)=>{
              console.log(err)
            }
          )
        }
    RegisterFicheLivraison(){
     this.formSubmitted=true
      console.log("tojsoo"+JSON.stringify(this.FicheLivraison))

         this.livraisonservice.modefierlistlivraison(this.FicheLivraison,this.recievedID.id).subscribe(
           {

               next :(daa:any )=>{
                console.log("goog")
                this.dialogRef.close();
                 },
                error:(err)=>{
                  console.log(err.status);

               }
             });


       }
       onFileSelected(event) {
        this.selectedFile = event.target.files[0];
      }
       controlExecutionTimeReport() {
        setTimeout(() => {
          this.compareStrin();
        }, 1000); // 5000 milliseconds = 5 seconds
      }

      onModefierfile() {
        this.livraisonservice.ModefierFile(this.selectedFile,this.fileid)
          .subscribe(res => {
            console.log(res);
          });
      }
      listResponsables:any
   MlistResponsables(){
      this.responsableService.ListResponsable().subscribe(
        (data: any)=>{
          console.log(data)
            this.listResponsables=data

          console.log("listResponsables"+JSON.stringify(this.listResponsables))
        },(err: any)=>{
          console.log(err)
        }
      )
    }

    }


