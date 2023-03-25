import { iThemeContext, ThemeContext } from '.';
import useUnpack from '../useUnpack';
import getThemeQueries from './queries';

const useTheme = () => {
	const unpacked = useUnpack(ThemeContext, getThemeQueries) as iThemeContext;
	return {
		...unpacked,
		theme: unpacked.state.theme.colors,
	};
};

export default useTheme;
