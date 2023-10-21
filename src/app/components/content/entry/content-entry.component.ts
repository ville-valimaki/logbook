import { Component, Input} from '@angular/core';
import { ILogResponse } from '../../../providers/log/provider';
import { getTempTranslated } from '../../../converters/temperature';
import * as CONSTANTS from '../../../constants/common';

@Component({
	selector: 'app-content-entry',
	templateUrl: './content-entry.html',
	styleUrls: ['./content-entry.scss'],
})

export class ContentEntryComponent {
	protected readonly CONSTANTS = CONSTANTS;
	@Input() entries: ILogResponse;

	constructor() {
		this.entries = [];
	}

	protected readonly getTempTranslated = getTempTranslated;
}
