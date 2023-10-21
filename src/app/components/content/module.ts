import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { NgForOf, NgIf } from "@angular/common";
import { ContentEntryModule } from "./entry/module";


@NgModule({
  declarations: [
	  ContentComponent,
  ],
	exports: [
		ContentComponent,
	],
	imports: [
		MatExpansionModule,
		MatChipsModule,
		MatNativeDateModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatIconModule,
		MatTableModule,
		NgForOf,
		NgIf,
		ContentEntryModule,
		CommonModule,
	],
  providers: [],
})
export class ContentModule {
}
