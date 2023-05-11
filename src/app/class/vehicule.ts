import { Injectable } from "@angular/core";
import { Marque } from "./marque";

@Injectable({
	providedIn: 'root'
  })
export class Vehicule {
    type!: String;
	matricule!: String;	
	statut!: String;
	ancienKm!: String;
	nouveauKm!: String;
	marque:Marque;
    
}
