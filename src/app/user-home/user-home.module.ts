import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeRoutingModule } from './user-home-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    UserHomeRoutingModule,
    SharedModule
  ]
})
export class UserHomeModule { }
