import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-retreatant-checkin',
  templateUrl: './retreatant-checkin.page.html',
  styleUrls: ['./retreatant-checkin.page.scss'],
})
export class RetreatantCheckinPage implements OnInit {
code : string
  constructor(public afd:AngularFireDatabase) { 
    
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
