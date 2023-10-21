import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from "@angular/common";
import { HeaderComponent } from './header.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
	declarations: [
		HeaderComponent,
	],
	exports: [
		HeaderComponent,
	],
	imports: [
		MatIconModule,
		MatButtonModule,
		NgIf,
		CommonModule,
	],
	providers: [],
})
export class HeaderModule { }
