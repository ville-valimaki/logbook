import { Component, OnInit } from '@angular/core';
import { logProvider, ILogResponse } from '../../providers/log/provider';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content-component.scss'],
	providers: [logProvider]
})

export class ContentComponent implements OnInit {

	private readonly logProvider: logProvider;
	public creating: boolean = false;

	public entries: ILogResponse;

	constructor(logProvider: logProvider) {
		this.logProvider = logProvider;
		this.entries = [];
	}

	ngOnInit(): void {
		this.entries = this.logProvider.getLatestEntries();
		console.log(this.entries);
	}

	setSelectedOption(option: string): void
	{
		console.log(option);
	}
}
