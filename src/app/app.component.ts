import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
	protected showProfile: boolean;

	constructor() {
		this.showProfile = false;
	}

	toggleShowProfile(): void
	{
		this.showProfile = !this.showProfile;
	}
}
