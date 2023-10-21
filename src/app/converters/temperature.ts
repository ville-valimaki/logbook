import {TEMPERATURE_C, TEMPERATURE_F} from "../constants/units";

export function getTempTranslated(value: number, convertToUnit: number): string
{
	switch (convertToUnit) {
		case TEMPERATURE_C:
			return value + " ℃";
		case TEMPERATURE_F:
			return Math.round(value * 9/5 + 32) + ' ℉';
		default:
			return value.toString();
	}
}
