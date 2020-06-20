import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ManageTopicsComponent } from './components/manage-topics/manage-topics.component';
import { DashboardGlueComponent } from './components/dashboard-glue/dashboard-glue.component';
import { CollapseModule } from 'ngx-bootstrap/collapse'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddPostComponent } from './components/add-post/add-post.component'
import { SharedModule } from '../shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PostsUiComponent } from './components/posts-ui/posts-ui.component';
import { ViewPostResponsesComponent } from './components/view-post-responses/view-post-responses.component'


@NgModule({
  declarations: [ManageTopicsComponent, DashboardGlueComponent, AddPostComponent, PostsUiComponent, ViewPostResponsesComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CollapseModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ModalModule.forRoot()
  ]
})
export class DashboardModule { }
