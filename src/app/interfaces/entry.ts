export interface IWeatherLog {
	weatherLogId: number;
	temperature: number | null;
	windspeed: number | null;
	windDirection: number | null;
	type: number | null;
}

export interface IEngine {
	engineId: number;
	manufacturer: string | null;
	model: string | null;
	serialNumber: string | null;
	hours: number | null;
	description: string | null;
	buildYear: number | null;
}

export interface IBoat {
	boatId: number;
	engines: IEngine[] | null;
	manufacturer: string | null;
	model: string | null;
	serialNumber: string | null;
	name: string | null;
	buildYear: number | null;
}

export interface ILogEntry {
	logEntryId: number;
	boat: IBoat | null;
	weather: IWeatherLog | null;
	engines: IEngine[] | null;
	type: number;
	created: string;
	date: string;
	time: string | null;
	title: string;
	description: string | null;
	captain: string | null;
	crew: string | null;
}
