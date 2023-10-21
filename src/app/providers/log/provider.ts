import {ILogEntry} from "../../interfaces/entry";

export type ILogResponse = Array<ILogEntry>;

export class logProvider {

	getLatestEntries(): ILogResponse {
		return [
			{
				logEntryId: 1,
				boat: null,
				weather: {
					weatherLogId: 1,
					temperature: 20,
					windspeed: 9,
					windDirection: 91,
					type: 81,
				},
				engines: null,
				type: 1,
				created: '2022-07-09',
				time: '2022-07-09',
				title: 'Sakkeli',
				description: 'Hyvä GT hyvässä seurassa',
				captain: 'Ville',
				crew: 'Lilia, William, Ersi'
			},
			{
				logEntryId: 1,
				boat: null,
				weather:  {
					weatherLogId: 1,
					temperature: 20,
					windspeed: 8,
					windDirection: 91,
					type: 81,
				},
				engines: null,
				type: 1,
				created: '2022-07-09',
				time: '2022-07-09',
				title: 'Sakkeli',
				description: 'Hyvä GT hyvässä seurassa',
				captain: 'Ville',
				crew: 'Lilia, William, Ersi'
			}
		]
	}
}
export default logProvider;
