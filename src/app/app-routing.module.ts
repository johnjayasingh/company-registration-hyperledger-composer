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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
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

const routes: Routes = [
  //{ path: 'transaction', component: TransactionComponent },
  { path: '', component: LoginComponent },
  // { path: '', component: HomeComponent },

  { path: 'User', component: UserLoginComponent, loadChildren: 'app/user.module#UserModule' },

  { path: 'Authority', component: AuthorityLoginComponent, loadChildren: 'app/authority.module#AuthorityModule' },


  { path: 'ApproveUser', component: ApproveUserComponent },

  { path: 'BlackListUser', component: BlackListUserComponent },

  { path: 'ApproveBusiness', component: ApproveBusinessComponent },

  { path: 'BlackListBusiness', component: BlackListBusinessComponent },

  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
