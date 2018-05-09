/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { TransactionComponent } from './Transaction/Transaction.component'

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
import { SharedModule } from './shared.module';
import { UserService } from './User/User.service';
import { BusinessService } from './Business/Business.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    UserService,
    BusinessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
