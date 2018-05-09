import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';

import { BusinessComponent } from './Business/Business.component';


import { UserComponent } from './User/User.component';
import { AuthorityComponent } from './Authority/Authority.component';


import { ApproveUserComponent } from './ApproveUser/ApproveUser.component';
import { BlackListUserComponent } from './BlackListUser/BlackListUser.component';
import { ApproveBusinessComponent } from './ApproveBusiness/ApproveBusiness.component';
import { BlackListBusinessComponent } from './BlackListBusiness/BlackListBusiness.component';

import { UserLoginComponent } from './user-login/user-login.component';
import { AuthorityLoginComponent } from './authority-login/authority-login.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    FormsModule, ReactiveFormsModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    FormsModule, ReactiveFormsModule,
    RouterModule,
    
    HomeComponent,
    // TransactionComponent,

    AuthorityComponent
    ,

    ApproveUserComponent,
    BlackListUserComponent,
    ApproveBusinessComponent,

    BlackListBusinessComponent,

    UserLoginComponent,

    AuthorityLoginComponent,

    LoginComponent
  ],
  declarations: [
    HomeComponent,
    // TransactionComponent,

    AuthorityComponent
    ,

    ApproveUserComponent,
    BlackListUserComponent,
    ApproveBusinessComponent,

    BlackListBusinessComponent,

    UserLoginComponent,

    AuthorityLoginComponent,

    LoginComponent
  ]
})
export class SharedModule { }
