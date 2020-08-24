import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

//import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

import { LoginRoutingModule } from './login.router.module';
//import { RouterModule,Routes } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginRoutingModule
    //LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
