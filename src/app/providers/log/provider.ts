import {ILogEntry} from "../../interfaces/entry";
import {LOG_ENTRY, LOG_ENTRY_FUEL, LOG_ENTRY_MAINTENANCE} from "../../constants/common";

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
				type: LOG_ENTRY,
				created: '2022-07-09',
				date: '2022-07-09',
				time: '12:00',
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
				type: LOG_ENTRY,
				created: '2022-07-09',
				date: '2022-07-12',
				time: '18:00',
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
				type: LOG_ENTRY_FUEL,
				created: '2022-07-09',
				date: '2022-07-21',
				time: '16:45',
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
				type: LOG_ENTRY_MAINTENANCE,
				created: '2022-07-09',
				date: '2022-07-21',
				time: null,
				title: 'Vetolaitteen öljynvaihto',
				description: 'Kaikki falskasi, vetolaitteesta maitoa.',
				captain: 'Ville',
				crew: 'Pekka'
			},
			{
				logEntryId: 5,
				boat: null,
				weather:  {
					weatherLogId: 1,
					temperature: 20,
					windspeed: 8,
					windDirection: 91,
					type: 81,
				},
				engines: null,
				type: LOG_ENTRY,
				created: '2022-07-09',
				date: '2022-07-12',
				time: '18:00',
				title: 'Bomarsklobben',
				description: 'Mentiin saarelle isän veneellä.',
				captain: 'Ville',
				crew: 'Lilia, William, Ersi'
			},
		]
	}
}
export default logProvider;
