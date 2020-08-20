import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-retreatant',
  templateUrl: './retreatant.page.html',
  styleUrls: ['./retreatant.page.scss'],
})
export class RetreatantPage implements OnInit {

  listRetraitant ;
  busy: boolean = false;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getRetraitantList();
  }

  getRetraitantList(){
    this.busy=true;
    this.http
    .get('https://us-central1-project-pdd-registration.cloudfunctions.net/getRetraitants')
    .subscribe((data: any)=>{
      console.log(data);
      this.listRetraitant = data;
      this.busy=false;
    });
  }

}
