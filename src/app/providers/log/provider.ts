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
				title: 'Gula villan',
				description: 'Kauden avajaiset vähän myöhään. Otettiin isän kanssa G&T ja aurinko paistoi.',
				captain: 'Ville',
				crew: 'Lilia, William, Ersi'
			},
			{
				logEntryId: 2,
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
				time: '2022-07-12',
				title: 'Paven, Suomenlinna, Stora Härrö',
				description: 'Käytiin pienellä kiertoajelulla. Pavenissa lounas alle minkä jälkeen suomenlinnaan. Satamassa aika täyttä niin jouduttiin jättämään paikallisten kelluvaan laituriin. Sen jälkeen takaisin Pentalaan ja Sakkelin kerhon saunaan.',
				captain: 'Ville',
				crew: 'Lilia, William, Ersi'
			},
			{
				logEntryId: 3,
				boat: null,
				weather:  {
					weatherLogId: 1,
					temperature: 20,
					windspeed: 8,
					windDirection: 91,
					type: 81,
				},
				engines: null,
				type: 2,
				created: '2022-07-09',
				time: '2022-07-21',
				title: 'Suvisaaristo',
				description: 'Tankki täyteen, halpaa oli kun alle neljällä eurolla sai litran. G&T samalla Haukilahden paviliogista, ei meripelastuksia.',
				captain: 'Ville',
				crew: 'Pekka'
			},
			{
				logEntryId: 4,
				boat: null,
				weather:  {
					weatherLogId: 1,
					temperature: 20,
					windspeed: 8,
					windDirection: 91,
					type: 81,
				},
				engines: null,
				type: 3,
				created: '2022-07-09',
				time: '2022-09-19',
				title: 'Sepetlahti',
				description: 'Vene ylös, väljekumi vuotaa. Maitoa peräöljynä...',
				captain: 'Ville',
				crew: null,
			}
		]
	}
}
export default logProvider;
