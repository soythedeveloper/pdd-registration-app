import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-retreatant-checkin',
  templateUrl: './retreatant-checkin.page.html',
  styleUrls: ['./retreatant-checkin.page.scss'],
})
export class RetreatantCheckinPage implements OnInit {
code : string;
prenom: string;
nom:string;
niveau:string;
categorie:string;
dortoire:string;
hall:string;
refectoire:string;
gpartage:string;
id:string;

busy: boolean = false;
valider: boolean = false;

infoRetraitant ;
  constructor(public afd:AngularFireDatabase, private http:HttpClient) {

  }

  ngOnInit() {
    this.getDataFromFB();
  }

  search(){
    this.busy = true;
    var {code,nom,niveau,categorie,dortoire,hall,refectoire,gpartage,prenom}=this
    this.http
    .get('https://us-central1-project-pdd-registration.cloudfunctions.net/verifCode?code='+code)
    .subscribe((data: any)=>{
      this.infoRetraitant = data[0];
      this.nom = data[0]['Nom'];
      this.prenom = data[0]['Prenom'];
      this.niveau = data[0]['Niveau'];
      this.categorie = data[0]['Categorie'];
      this.hall = data[0]['Hall'];
      this.dortoire = data[0]['Dortoir'];
      this.refectoire = data[0]['Refectoire'];
      this.gpartage = data[0]['Groupe de Partage'];
      this.id = data[0]['retraitantID'];
      console.log(data[0]);
      console.log(data[0]['Nom']);
      console.log(this.id);
      this.busy = false;
      this.valider = true;
    });
  }

  getDataFromFB(){
    this.afd.list('retraitants/').valueChanges().subscribe(
      data =>{
        console.log(data);
      }
    )
  }

  

}
