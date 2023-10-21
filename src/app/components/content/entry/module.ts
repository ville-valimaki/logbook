import { NgModule } from '@angular/core';
import { ContentEntryComponent } from "./content-entry.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatChipsModule} from "@angular/material/chips";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {NgForOf, NgIf} from "@angular/common";


@NgModule({
  declarations: [
	  ContentEntryComponent,
  ],
	exports: [
		ContentEntryComponent,
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
	],
  providers: [],
})
export class ContentEntryModule {
}
