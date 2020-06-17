import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { ManagePostsComponent } from './components/manage-posts/manage-posts.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostedByUserPipe } from './pipes/posted-by-user.pipe';


@NgModule({
  declarations: [RelativeTimePipe, ManagePostsComponent, NavbarComponent, PostedByUserPipe],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
  ],
  exports: [RelativeTimePipe, ManagePostsComponent, NavbarComponent]
})
export class SharedModule { }
