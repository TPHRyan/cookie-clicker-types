/// <reference path="./common.d.ts" />
/// <reference path="./objects.d.ts" />

interface CookieClickerMod extends HandleSave {
	[key: string]: unknown;
	init(): void;
}

interface Game extends HandleReset {}

declare class Game {
	[key: string]: unknown;

	version: number;
	beta: number;
	https: boolean;

	mods: Record<string, CookieClickerMod>;
	ready?: boolean;

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
	LoadMod(url: string): void;
	Notify(
		title: string,
		description: string,
		icon?: number | unknown[],
		quick?: number,
		noLog?: boolean,
	): void;

	isMinigameReady(forObject: Game.Object): boolean;
	registerHook(
		name: "cookiesPerClick",
		hook: (cookiesPerClick: number) => number,
	): void;
	registerHook(name: "cps", hook: (cps: number) => number): void;
	registerHook(name: "reset", hook: (hardReset: boolean) => void): void;
	registerHook(name: "ticker", hook: () => string[]): void;
	registerHook(
		name: "check" | "click" | "create" | "draw" | "logic" | "reincarnate",
		hook: () => void,
	): void;
	registerMod(name: string, mod: CookieClickerMod): void;
	removeHook(name: Parameters<Game["registerHook"]>[0], hook: Function): void;
}
