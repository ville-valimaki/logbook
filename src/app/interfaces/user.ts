export interface IUnits {
	userId: number;
	boatLengthType: number;
	boatWidthType: number;
	powerType: number;
	depthType: number;
	boatSpeedType: number;
	windSpeedType: number;
	temperatureType: number;
}

export interface IAccount {
	accountId: number;
	userId: number;
	type: number;
	validFrom: number;
	validUntil: number;
	status: number;
}

export interface IUser {
	userId: number;
	account: IAccount;
	units: IUnits;
	boatIds: number[];
	name: string;
	email: string;
	country: string;
	created: string;
	lastModified: string;
	lastLogin: string;
	status: number;
}
