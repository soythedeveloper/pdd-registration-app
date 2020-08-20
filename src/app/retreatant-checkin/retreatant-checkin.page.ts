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
  constructor(public afd:AngularFireDatabase, private http:HttpClient) {

  }

  ngOnInit() {
    this.getDataFromFB();
  }

  search(){
    const {code}=this
    console.log(code);
  }

  getDataFromFB(){
    this.afd.list('retraitants/').valueChanges().subscribe(
      data =>{
        console.log(data);
      }
    )
  }

  

}
