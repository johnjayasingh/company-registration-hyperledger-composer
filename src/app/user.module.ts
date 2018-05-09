import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './User/User.component';
import { BusinessComponent } from './Business/Business.component';
import { SharedModule } from './shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: UserComponent },
      { path: 'company', component: BusinessComponent },
    ])
  ],
  declarations: [
    UserComponent, BusinessComponent
  ]
})
export class UserModule { }
