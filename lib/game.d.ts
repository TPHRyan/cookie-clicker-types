/// <reference path="./buildings.d.ts" />
/// <reference path="./common.d.ts" />
/// <reference path="./collectible/index.d.ts" />
/// <reference path="./game-methods.d.ts" />
/// <reference path="./game-properties.d.ts" />

interface CookieClickerMod extends CookieClicker.CanSave {
	[key: string]: unknown;
	init(): void;
}

interface Game extends CookieClicker.CanReset {}

declare class Game {
	[key: string]: unknown;

	version: number;
	beta: number;
	https: boolean;

	mods: Record<string, CookieClickerMod>;
	onMenu: "prefs" | "main" | "log" | "stats" | "";
	ready?: boolean;
	vanilla: 0 | 1;

	isMinigameReady(forObject: Game.Object): boolean;
	registerHook(
		name: "cookiesPerClick",
		hook: (cookiesPerClick: number) => number,
	): void;
	registerHook(name: "cps", hook: (cps: number) => number): void;
	registerHook(
		name: "cookiesPerClick" | "cps",
		hook: (rate: number) => number,
	): void;
	registerHook(name: "reset", hook: (hardReset: boolean) => void): void;
	registerHook(name: "ticker", hook: () => string[]): void;
	registerHook(
		name: "check" | "click" | "create" | "draw" | "logic" | "reincarnate",
		hook: () => void,
	): void;
	registerMod(name: string, mod: CookieClickerMod): void;
	removeHook(name: Parameters<Game["registerHook"]>[0], hook: Function): void;
}
