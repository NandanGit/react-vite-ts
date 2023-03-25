import { $ThemeAction } from './actions';
import { ADD_THEME, CHANGE_THEME, RESET_THEME } from './actionTypes';
import { iThemeState } from './index';
import { $AddTheme, $ChangeTheme } from './types';

const themeReducer = (
	state: iThemeState,
	action: $ThemeAction
): iThemeState => {
	switch (action.type) {
		case CHANGE_THEME:
			console.log('Changing the theme to ', (action as $ChangeTheme).payload);
			const newTheme = state.availableThemes.find(
				(theme) => theme.name === (action as $ChangeTheme).payload
			);
			if (!newTheme) return state;
			return {
				...state,
				theme: newTheme,
			};
		case ADD_THEME:
			console.log('Adding theme: ', (action as $AddTheme).payload);
			return {
				...state,
				availableThemes: [
					...state.availableThemes,
					(action as $AddTheme).payload,
				],
			};
		case RESET_THEME:
			console.log('Resetting the Theme');
			const defaultTheme = state.availableThemes.find(
				(theme) => theme.name === state.defaultTheme
			);
			return { ...state, theme: defaultTheme ? defaultTheme : state.theme };
		default:
			return state;
	}
};

export default themeReducer;
