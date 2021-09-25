interface Wrinkler {
	id: number;
	close: number;
	sucked: number;
	phase: number;
	x: number;
	y: number;
	r: number;
	hurt: number;
	hp: number;
	selected: number;
	type: number;
}

interface Game {
	cookies: number;
	heralds: number;
	lumps: number;
	resets: number;
	season: "valentines" | "fools" | "easter" | "halloween" | "christmas";
	wrinklers: Wrinkler[];

	fps: number;
	currentFps: number;
	previousFps: number;
	frameNumber: number;

	T: number;
	drawT: number;
	loopT: number;
	lumpT: number;
	pledgeT: number;
	researchT: number;
}
