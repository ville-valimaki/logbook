import {Component, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['header.component.scss']
})
export class HeaderComponent {

	public showProfile: boolean = false;
	@Output() updateShowProfile = new EventEmitter<boolean>();

	constructor() {
	}

	setShowProfile() {
		this.showProfile = !this.showProfile;
		this.updateShowProfile.emit(this.showProfile);
	}
}
