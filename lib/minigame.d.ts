/// <reference path="./common.d.ts" />

interface Minigame extends HandleReset, HandleSave {
	draw(): void;
	launch(): void;
	logic(): void;

	onLevel?(): void;
	onResize?(): void;

	effs: Effects;
	name: string;
}
