import createDataContext from '../createDataContext';
import getThemeActions, { iThemeActions } from './actions';
import { iThemeQueries } from './queries';
import themeReducer from './reducer';
import * as themes from './themes';

export interface iThemeColors {
	primary: string;
	secondary: string;

	success: string;
	danger: string;
	warning: string;
	info: string;

	background: string;
	backgroundAccent?: string;

	text: string;
	mute: string;
	// fontColor: string;
}

export interface iTheme {
	name: string;
	colors: iThemeColors;
}

export interface iThemeState {
	theme: iTheme;
	availableThemes: iTheme[];
	defaultTheme: string;
}

export interface iThemeContext {
	state: iThemeState;
	actions: iThemeActions;
	queries: iThemeQueries;
}

const INITIAL_STATE: iThemeState = {
	defaultTheme: 'dark',
	theme: themes.darkTheme,
	availableThemes: Object.values({ ...themes }),
};

export const { Context: ThemeContext, Provider: ThemeProvider } =
	createDataContext(themeReducer, getThemeActions, INITIAL_STATE);
