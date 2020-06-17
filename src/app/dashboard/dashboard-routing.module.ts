import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageTopicsComponent } from './components/manage-topics/manage-topics.component';
import { DashboardGlueComponent } from './components/dashboard-glue/dashboard-glue.component';
import { PostsUiComponent } from './components/posts-ui/posts-ui.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardGlueComponent,
    children: [
      {
        path: 'manage-topics',
        component: ManageTopicsComponent
      },
      {
        path: 'manage-posts',
        component: PostsUiComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
