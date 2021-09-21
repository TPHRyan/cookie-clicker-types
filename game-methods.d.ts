type PromptOption = [label: string] | [label: string, onClickStr: string];

interface Game {
	LoadMod(url: string): void;
	Notify(
		title: string,
		description: string,
		icon?: number | unknown[],
		quick?: number,

		noLog?: boolean,
	): void;

	/**
	 * Prompt the user to make a decision.
	 * @param {string} content The content for the dialog box (interpreted as HTML)
	 * @param {([string]|[string, string])[]} options An array of arrays with either one or two elements.
	 *                                                  The first element is the label to be used for the button.
	 *                                                  The second element, optionally, is the code to be executed.
	 *                                                      If not provided, the button will just close the dialog box.
	 * @param {Function | 0 | undefined} updateFunc A function periodically called which may be used to update the prompt content.
	 * @param {string} className Additional classes to add to the prompt box, separated by spaces.
	 * @constructor
	 */
	Prompt(
		content: string,
		options: PromptOption[],
		updateFunc?: () => void | 0,
		className?: string,
	): void;
	ClosePrompt(): void;

	/**
	 * Shows/hides the specified menu.
	 * @param {?string} menuName If no menu or the current menu is specified, closes the current menu.
	 * @constructor
	 */
	ShowMenu(menuName?: string): void;
	UpdateMenu(): void;
}
