import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageTopicsComponent } from './components/manage-topics/manage-topics.component';
import { DashboardGlueComponent } from './components/dashboard-glue/dashboard-glue.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardGlueComponent,
    children: [
      {
        path: 'manage-topics',
        component: ManageTopicsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
