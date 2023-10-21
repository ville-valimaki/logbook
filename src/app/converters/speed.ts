import {SPEED_WIND_KMH, SPEED_WIND_KNOTS, SPEED_WIND_MPH, SPEED_WIND_MS} from "../constants/units";


export function getWindSpeedDecorated(value: number, convertToUnit: number): string
{
	switch (convertToUnit) {
		case SPEED_WIND_KNOTS:
			return Math.round(value * 1.944) + ' kn';
		case SPEED_WIND_MPH:
			return Math.round(value * 2.237) + ' mph';
		case SPEED_WIND_KMH:
			return Math.round(value * 3.6) + ' kmh';
		case SPEED_WIND_MS:
			return value + ' m/s';
		default:
			return value.toString();
	}
}

export function converWindSpeed(value: number, fromUnit: number): number
{
	switch (fromUnit) {
		case SPEED_WIND_KNOTS:
			return value / 1.944;
		case SPEED_WIND_MPH:
			return value / 2.237;
		case SPEED_WIND_KMH:
			return value / 3.6;
		case SPEED_WIND_MS:
		default:
			return value;
	}
}
