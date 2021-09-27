declare namespace CookieClicker {
	interface ArtAsset {
		pic: string | (() => string);
		bg: string | (() => string);
		base?: string;
		xV?: number;
		yV?: number;
		w?: number;
		x?: number;
		y?: number;
		rows?: number;
		frames?: number;
	}

	interface Effects {
		[key: string]: number;
	}

	type IconPosition = [number, number];
	type Icon = number | IconPosition;

	interface GameObject {
		id: number;
		name: string;
	}

	interface CanSave {
		save(): string;
		load(data: string): void;
	}

	interface CanReset {
		reset(hardReset?: boolean): void;
	}

	interface HasType {
		type: string;
	}
}
