import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ManageTopicsComponent } from './components/manage-topics/manage-topics.component';
import { DashboardGlueComponent } from './components/dashboard-glue/dashboard-glue.component';
import { CollapseModule } from 'ngx-bootstrap/collapse'


@NgModule({
  declarations: [ManageTopicsComponent, DashboardGlueComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CollapseModule.forRoot()
  ]
})
export class DashboardModule { }
