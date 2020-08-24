import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }


  searchRetPage(){
    this.route.navigate(['retreatant-checkin']);
  }

  RetListPage(){
    this.route.navigate(['retreatant']);
  }

}
