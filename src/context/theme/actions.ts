import { Dispatch } from 'react';
import { ADD_THEME, CHANGE_THEME, RESET_THEME } from './actionTypes';
import { iTheme } from './index';
import { $AddTheme, $ChangeTheme, $ResetTheme } from './types';

export type $ThemeAction = $ChangeTheme | $AddTheme | $ResetTheme;

export interface iThemeActions {
	changeTheme: (themeName: string) => void;
	addTheme: (theme: iTheme) => void;
	resetTheme: () => void;
}

const getThemeActions = (dispatch: Dispatch<$ThemeAction>): iThemeActions => ({
	changeTheme: (themeName) => {
		dispatch({ type: CHANGE_THEME, payload: themeName });
	},

	addTheme(theme) {
		dispatch({ type: ADD_THEME, payload: theme });
	},

	resetTheme() {
		dispatch({ type: RESET_THEME });
	},
});

export default getThemeActions;
