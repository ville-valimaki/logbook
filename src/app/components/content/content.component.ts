import { Component, OnInit } from '@angular/core';
import { logProvider, ILogResponse } from '../../providers/log/provider';
import { ILogEntry } from '../../interfaces/entry';
import * as CONSTANTS from '../../constants/common';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content-component.scss'],
	providers: [logProvider]
})

export class ContentComponent implements OnInit {

	private selectedOption: number | null;
	private readonly logProvider: logProvider;
	public creating: boolean = false;

	public entries: ILogResponse;
	public filteredEntries: ILogResponse;

	constructor(logProvider: logProvider) {
		this.logProvider = logProvider;
		this.entries = [];
		this.filteredEntries = [];
		this.selectedOption = null;
	}

	ngOnInit(): void {
		this.entries = this.logProvider.getLatestEntries();
		this.filteredEntries = this.entries;
	}

	setSelectedOption(option: number): void
	{
		if (this.selectedOption === option) {
			this.selectedOption = null;
			this.filteredEntries = this.entries;
			return;
		}
		this.selectedOption = option;
		this.filteredEntries = this.entries.filter((entry: ILogEntry) => entry.type === option);
	}

	protected readonly CONSTANTS = CONSTANTS;
}
