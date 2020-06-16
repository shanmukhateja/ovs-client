import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ManageTopicsComponent } from './components/manage-topics/manage-topics.component';
import { DashboardGlueComponent } from './components/dashboard-glue/dashboard-glue.component';
import { CollapseModule } from 'ngx-bootstrap/collapse'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ManagePostsComponent } from './components/manage-posts/manage-posts.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AddPostComponent } from './components/add-post/add-post.component'
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { SharedModule } from '../shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal'


@NgModule({
  declarations: [ManageTopicsComponent, DashboardGlueComponent, ManagePostsComponent, AddPostComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CollapseModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    SharedModule,
    ModalModule.forRoot()
  ]
})
export class DashboardModule { }
