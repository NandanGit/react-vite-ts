import { iThemeState } from './index';

export interface iThemeQueries {
	getThemesList: () => string[];
	getCurrentTheme: () => string;
}

const getThemeQueries = (state: iThemeState): iThemeQueries => ({
	getThemesList() {
		return state.availableThemes.map((theme) => theme.name);
	},

	getCurrentTheme() {
		return state.theme.name;
	},
});

export default getThemeQueries;
