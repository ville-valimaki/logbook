import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { MenuComponent } from './menu.component';
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
	declarations: [
		HeaderComponent,
		MenuComponent,
	],
	exports: [
		HeaderComponent,
	],
	imports: [
		MatMenuModule,
		MatIconModule,
		MatButtonModule,
	],
	providers: [],
})
export class HeaderModule { }
