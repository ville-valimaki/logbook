import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { MenuComponent } from './menu.component';
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
		MatIconModule,
		MatButtonModule,
	],
	providers: [],
})
export class HeaderModule { }
