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

interface HandleSave {
	save(): string;
	load(data: string): void;
}

interface HandleReset {
	reset(hardReset?: boolean): void;
}
