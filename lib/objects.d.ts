/// <reference path="./common.d.ts" />
/// <reference path="./minigame.d.ts" />
/// <reference path="./stock-market.d.ts" />

declare namespace Game {
	export class Object {
		constructor(
			name: string,
			commonName: string,
			description: string,
			iconRow: number,
			iconColumn: number,
			art: ArtAsset,
			price: number,
			cps: number,
			buyFunction?: () => void,
		);

		minigame?: Minigame;
	}

	export interface Cursor extends Object {}
	export interface Grandma extends Object {}
	export interface Farm extends Object {}
	export interface Mine extends Object {}
	export interface Factory extends Object {}
	export interface Bank extends Object {
		minigame: StockMarketMinigame;
	}
	export interface Temple extends Object {}
	export interface WizardTower extends Object {}
	export interface Shipment extends Object {}
	export interface AlchemyLab extends Object {}
	export interface Portal extends Object {}
	export interface TimeMachine extends Object {}
	export interface AntimatterCondenser extends Object {}
	export interface Prism extends Object {}
	export interface Chancemaker extends Object {}
	export interface FractalEngine extends Object {}
	export interface JavascriptConsole extends Object {}
	export interface Idleverse extends Object {}
}
