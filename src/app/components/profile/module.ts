import { NgModule } from '@angular/core';
import {ProfileComponent} from "./profile.component";


@NgModule({
  declarations: [
	  ProfileComponent,
  ],
	exports: [
		ProfileComponent
	]
})
export class ProfileModule {
}
