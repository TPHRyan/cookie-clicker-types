/// <reference path="./common.d.ts" />

interface Minigame extends CookieClicker.CanReset, CookieClicker.CanSave {
	draw(): void;
	launch(): void;
	logic(): void;

	onLevel?(): void;
	onResize?(): void;

	effs: CookieClicker.Effects;
	name: string;
}
