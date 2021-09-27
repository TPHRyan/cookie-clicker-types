/// <reference path="../common.d.ts" />

declare namespace Game {
	interface Achievement extends CookieClicker.GameObject {}
	class Achievement implements CookieClicker.HasType {
		constructor(
			name: string,
			description: string,
			icon: CookieClicker.Icon,
		);

		click(): void;
		/**
		 * Cheating only!
		 */
		toggle(): void;

		public order: number;
		public type: "achievement";
		public desc: string;
		public baseDesc: string;
		public icon: CookieClicker.Icon;
		public won: 0 | 1;
		public disabled: 0 | 1;
		public pool: Achievement.AchievementPool;
		public vanilla: 0 | 1;
	}

	namespace Achievement {
		type AchievementPool =
			| ""
			| "normal"
			| "cookie"
			| "debug"
			| "prestige"
			| "shadow"
			| "tech"
			| "toggle"
			| "unused";
	}
}

interface Game {
	Achievements: Record<Game.Achievement["name"], Game.Achievement>;
	AchievementsById: Game.Achievement[];
	AchievementsN: number;
	AchievementsOwned: number;

	CountsAsAchievementOwned(pool: Game.Achievement.AchievementPool): boolean;
	HasAchiev(achievementName: string): boolean;
	RemoveAchiev(achievementName: string): void;
	Win(achievementName: string | string[]): void;

	TieredAchievement(
		name: string,
		description: string,
		building: string,
		tier: number,
	): Game.Achievement;
	ProductionAchievement(
		name: string,
		building: string,
		tier: number,
		quote?: string,
		multiplier?: number,
	): Game.Achievement;

	BankAchievements: Game.Achievement[];
	BankAchievement(name: string, quote?: string): Game.Achievement;

	CpsAchievements: Game.Achievement[];
	CpsAchievement(name: string, quote?: string): Game.Achievement;
}
