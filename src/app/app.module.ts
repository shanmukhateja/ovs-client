import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingModule } from './landing/landing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserHomeModule } from './user-home/user-home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LandingModule,
    DashboardModule,
    UserHomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
