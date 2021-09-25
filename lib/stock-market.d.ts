/// <reference path="./minigame.d.ts" />

declare namespace StockMarketMinigame {
	interface Good {
		name: string;
		symbol: string;
		company: string;
		desc: string;
	}

	interface Office {
		name: string;
		icon: IconPosition;
		cost: [cursors: number, cursorLevel: number];
		desc: string;
	}
}

interface StockMarketMinigame extends Minigame {
	tick(): void;
}
