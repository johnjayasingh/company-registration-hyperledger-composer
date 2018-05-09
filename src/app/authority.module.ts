import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManageComponent } from './user-manage/user-manage.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared.module';
import { BusinessManageComponent } from './business-manage/business-manage.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: UserManageComponent },
      { path: 'business', component: BusinessManageComponent },
    ])
  ],
  declarations: [UserManageComponent, BusinessManageComponent]
})
export class AuthorityModule { }
