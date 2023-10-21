import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from "./components/header/module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentModule } from "./components/content/module";
import {ProfileModule} from "./components/profile/module";

@NgModule({
  declarations: [
	AppComponent
  ],
  imports: [
	BrowserModule,
	AppRoutingModule,
	BrowserAnimationsModule,
	HeaderModule,
	ContentModule,
	ProfileModule,
	CommonModule,
  ],
  providers: [],
  bootstrap: [
	  AppComponent
  ]
})
export class AppModule { }
