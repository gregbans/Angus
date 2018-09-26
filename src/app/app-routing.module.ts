import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PasswordComponent} from './password/password.component';
import { ListingComponent } from './listing/listing.component'
import { TaskComponent } from './task/task.component'

const routes: Routes =[
  {path:'', redirectTo: '/password', pathMatch: 'full'},
  {path:'password', component: PasswordComponent},
  {path:'listing', component: ListingComponent},
  {path:'listing/:idTask', component: TaskComponent},
]

@NgModule({
  exports:[ RouterModule],
  imports: [ RouterModule.forRoot(routes)],

})
export class AppRoutingModule { }
