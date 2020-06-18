import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { ManagePostsComponent } from './components/manage-posts/manage-posts.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostedByUserPipe } from './pipes/posted-by-user.pipe';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchHintModalComponent } from './components/search-hint-modal/search-hint-modal.component';

@NgModule({
  declarations: [RelativeTimePipe, ManagePostsComponent, NavbarComponent, PostedByUserPipe, SearchHintModalComponent],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RelativeTimePipe, ManagePostsComponent, NavbarComponent]
})
export class SharedModule { }
