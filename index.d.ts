/// <reference path="./game.d.ts" />

declare interface Window {
	Game: Game;
}

declare function choose<T>(options: T[]): T;

declare function l(elementId: string): Element;

declare function AddEvent<
	E extends Element,
	K extends keyof HTMLElementEventMap,
>(el: E, name: K, handler: (this: E, ev: HTMLElementEventMap[K]) => void): void;
