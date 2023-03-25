import { CHANGE_THEME, ADD_THEME, RESET_THEME } from './actionTypes';
import { iTheme } from './index';

export type $ChangeTheme = {
	type: CHANGE_THEME;
	payload: string;
};

export type $AddTheme = {
	type: ADD_THEME;
	payload: iTheme;
};

export type $ResetTheme = {
	type: RESET_THEME;
};
