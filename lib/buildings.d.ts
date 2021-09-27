/// <reference path="./common.d.ts" />
/// <reference path="./minigame.d.ts" />
/// <reference path="./stock-market.d.ts" />

declare namespace Game {
	interface Object extends CookieClicker.GameObject {}
	class Object {
		constructor(
			name: string,
			commonName: `${string}|${string}|${string}|${string}|${string}`,
			description: string,
			iconRow: number,
			iconColumn: number,
			art: CookieClicker.ArtAsset,
			price: number,
			cps: number,
			buyFunction?: () => void,
		);

		getPrice(): number;
		getSumPrice(amount: number): number;
		getReverseSumPrice(amount: number): number;
		getSellMultiplier(): number;

		buy(amount?: number): void;
		buyFree(amount: number): void;
		getFree(amount: number): void;
		getFreeRanks(amount: number): void;
		sell(amount?: number, bypass?: boolean): void;
		sacrifice(amount?: number): void;

		tooltip(): string;
		levelTooltip(): string;

		levelUp(): void;
		/**
		 * Show/hide the building display based on its amount, then redraw it.
		 */
		refresh(): void;
		rebuild(): void;
		mute(shouldBeMuted: boolean): void;

		switchMinigame(on: boolean | -1): void;

		draw(): void;

		displayName: string;
		single: string;
		plural: string;
		actionName: string;
		extraName: string;
		extraPlural: string;
		desc: string;
		basePrice: number;
		price: number;
		bulkPrice: number;
		cps: number;
		baseCps: number;
		mouseOn: boolean;
		mousePos: [number, number];
		productionAchievs: { pow: number; achiev: Game.Achievement }[];
		n: number;

		totalCookies: number;
		storedCps: number;
		storedTotalCps: number;
		icon: number;
		iconColumn: number;
		art: CookieClicker.ArtAsset;
		buyFunction: () => void;
		locked: 0 | 1;
		level: number;
		vanilla: 0 | 1;
		muted: boolean | 0 | 1;

		tieredUpgrades: CookieClicker.GameObject[];
		tieredAchievs: Game.Achievement[];
		synergies: CookieClicker.GameObject[];
		fortune: number;

		amount: number;
		bought: number;
		highest: number;
		free: number;

		eachFrame: number;

		minigameUrl: 0 | string;
		minigameName: 0 | string;
		onMinigame: boolean;
		minigameLoaded: boolean;
		minigame?: Minigame;
	}

	interface Cursor extends Object {}
	interface Grandma extends Object {}
	interface Farm extends Object {}
	interface Mine extends Object {}
	interface Factory extends Object {}
	interface Bank extends Object {
		minigame: StockMarketMinigame;
	}
	interface Temple extends Object {}
	interface WizardTower extends Object {}
	interface Shipment extends Object {}
	interface AlchemyLab extends Object {}
	interface Portal extends Object {}
	interface TimeMachine extends Object {}
	interface AntimatterCondenser extends Object {}
	interface Prism extends Object {}
	interface Chancemaker extends Object {}
	interface FractalEngine extends Object {}
	interface JavascriptConsole extends Object {}
	interface Idleverse extends Object {}
}

interface Game {
	Objects: Record<string, Game.Object> & {
		Cursor: Game.Cursor;
		Grandma: Game.Grandma;
		Farm: Game.Farm;
		Mine: Game.Mine;
		Factory: Game.Factory;
		Bank: Game.Bank;
		Temple: Game.Temple;
		WizardTower: Game.WizardTower;
		Shipment: Game.Shipment;
		"Alchemy lab": Game.AlchemyLab;
		Portal: Game.Portal;
		"Time machine": Game.TimeMachine;
		"Antimatter condenser": Game.AntimatterCondenser;
		Prism: Game.Prism;
		Chancemaker: Game.Chancemaker;
		"Fractal engine": Game.FractalEngine;
		"Javascript console": Game.JavascriptConsole;
		Idleverse: Game.Idleverse;
	};
	ObjectsById: Game.Object[];
	ObjectsN: number;
	BuildingsOwned: number;
}
