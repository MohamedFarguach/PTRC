import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { LivraisonSerive } from 'app/Service/livraison-serive';
import { ChaufeurService } from 'app/Service/chaufeur-service';
import { VehiculeService } from 'app/Service/vehicule-service';
import { HttpClient } from '@angular/common/http';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { LieuxService } from 'app/Service/lieux-service';
import { TypeVehiculeService } from 'app/Service/type-vehicule-service';
import { ResponsableService } from 'app/Service/responsable-service';

@Component({
  selector: 'app-ajoute-livraison',
  templateUrl: './ajoute-livraison.component.html',
  styleUrls: ['./ajoute-livraison.component.scss']
})
export class AjouteLivraisonComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AjouteLivraisonComponent>,private formBuilder: FormBuilder,private livraisonservice:LivraisonSerive,private chaufeurService:ChaufeurService,private vehiculeService:VehiculeService,private lieuxService:LieuxService,private typeVehiculeService:TypeVehiculeService,private responsableService:ResponsableService,
    private http: HttpClient) {

     }
  selectedFile: File;
  formSubmitted = false;

  ngOnInit(): void {

  /*  $('#FicheLivraison.dateDemande').dateDemande({
      format: 'YYYY-MM-DD HH:mm:ss'
    });  */
    this.listLieuxlivraison();
    this.MlistResponsables();
    this.listtypeLieux();
    this.listtypevehicules();
   this.listLieux();
    this.listchaufeurs();
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
    data:['',Validators.required],
    vehicule:['',Validators.required],
    chauffeur:['',Validators.required],
    chantier:['',Validators.required],
    typeVehicule:['',Validators.required],

      })
  }
  loginForm:FormGroup


  ChauffeurChange(chaufeur:any){
    this.FicheLivraison.chauffeur.id= chaufeur.target.value
  // alert(this.FicheLivraison.chauffeur.id)
   }
   vehiculesChange(vehicule:any){
    this.FicheLivraison.vehicule.id= vehicule.target.value
   //alert(this.FicheLivraison.vehicule.id)
   }
   typevehiculesChange(vehicule:any){
    this.FicheLivraison.typeVehicule.id= vehicule.target.value
   //alert(this.FicheLivraison.vehicule.id)
   this.listvehiculeBytypeIds( this.FicheLivraison.typeVehicule.id);

   }
   lieuxlivraisonChange(lieu:any){
    this.FicheLivraison.lieuxlivraison.id= lieu.target.value
  // alert(this.FicheLivraison.lieux.id)
   }
   typelieuxChargeChange(lieu:any){
    this.FicheLivraison.lieucharge.id= lieu.target.value
   //alert(this.FicheLivraison.lieucharge.id)
   }
   lieucharge(lieux:any){
    this.FicheLivraison.lieucharge= lieux.target.value
 // alert( this.FicheLivraison.lieucharge)
   }
   responsablechange(responsable:any){
    this.FicheLivraison.responsableCharge.id= responsable.target.value
 // alert( this.FicheLivraison.lieucharge)
   }
   onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }
  FicheLivraison =
    {
     // idlivraison: '',
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
      vehicule: {
          id:  '0',
        },
        chauffeur: {
          id: '0',

        },
        lieuxlivraison: {
         id:'0',
         designation:''
         },
         filelivraison: {
          id:'0',

          },
          typeVehicule:{
            id:'',
          },
          lieucharge:{
            id:'',
          },
          responsableCharge:{
            id:''
          }

    }


  closedialog(){
    this.dialogRef.close();
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
    listchantiers:any
   listchantier(){
      this.livraisonservice.ListChantier().subscribe(
        (data: any)=>{
          console.log(data)
            this.listchantiers=data

          console.log("listchantiers"+JSON.stringify(this.listchantiers))
        },(err: any)=>{
          console.log(err)
        }
      )
    }
    listlieux:any
   listLieux(){
      this.lieuxService.ListLieux().subscribe(
        (data: any)=>{
          console.log(data)
            this.listlieux=data

          console.log("listlieux"+JSON.stringify(this.listlieux))
        },(err: any)=>{
          console.log(err)
        }
      )
    }
    listlieuxlivraison:any
    listLieuxlivraison(){
       this.lieuxService.ListLieux().subscribe(
         (data: any)=>{
           console.log(data)
             this.listlieuxlivraison=data

           console.log("listlieuxlivraison"+JSON.stringify(this.listlieuxlivraison))
         },(err: any)=>{
           console.log(err)
         }
       )
     }
    listtypelieux:any
    listtypeLieux(){
       this.lieuxService.ListTypeLieux().subscribe(
         (data: any)=>{
           console.log(data)
             this.listtypelieux=data

           console.log("listtypelieux"+JSON.stringify(this.listlieux))
         },(err: any)=>{
           console.log(err)
         }
       )
     }
    listvehicule:any
    listvehicules(){
       this.vehiculeService.ListVehicule().subscribe(
         (data: any)=>{
           console.log(data)
             this.listvehicule=data

           console.log("listvehicule"+JSON.stringify(this.listvehicule))
         },(err: any)=>{
           console.log(err)
         }
       )
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
      changedate(){
        if (this.FicheLivraison.dateLivraison < this.FicheLivraison.dateDemande) {
          this.FicheLivraison.dateLivraison = ""; // Clear the input
        }
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
          this.ajouterlistlivraison()
        }else{
          this.MessageDate=true

        }

      }else {
          this.Message=true
         // alert("pas bien")
      }

    }
    Messagevehicule=false
    Messagelieux=false
    compareString(){
      if(this.FicheLivraison.lieucharge.id == this.FicheLivraison.lieuxlivraison.id ) {

       this.Messagelieux=true
      }if(this.FicheLivraison.vehicule.id == null){
        this.Messagevehicule=true
      }else{
                this.ajouterlistlivraison();

      }

      }

  ajouterlistlivraison(){
    console.log("tojsoo"+JSON.stringify(this.FicheLivraison))
    this.formSubmitted= true
       this.livraisonservice.ajoutelistlivraison(this.FicheLivraison).subscribe(
         {


             next :(data:any )=>{

              this.dialogRef.close();


              if(this.loginForm.valid){
               console.log("goog"+this.FicheLivraison)
                  }else{

                }

               },
              error:(err)=>{
                console.log(err.status);

             }
           });


     }

   /*  onUpload() {
      const fd = new FormData();
      fd.append('file', this.selectedFile, this.selectedFile.name);
      this.http.post('http://example.com/upload', fd)
        .subscribe(res => {
          console.log(res);
        });
    } */
    controlExecutionTimeReport() {
      setTimeout(() => {
        this.compareString();
      }, 1000); // 5000 milliseconds = 5 seconds
    }
    onUploadfile() {
      this.livraisonservice.uploadFile(this.selectedFile)
        .subscribe(res => {
          console.log(res);
        });
    }

     }
