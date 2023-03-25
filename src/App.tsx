import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import useCounter from './context/counter/useCounter';
import useTheme from './context/theme/useTheme';

function App() {
	// const [count, setCount] = useState(0);

	const {
		state: { count },
		actions: { increment: incrementCount },
	} = useCounter();
	const { theme, queries: themeQueries, actions: themeActions } = useTheme();

	useEffect(() => {
		// Unsafe method!!
		console.log('Setting up styles');
		const htmlBody: HTMLElement = document.getElementsByTagName('body')[0];
		htmlBody.setAttribute('style', `background-color: ${theme.background}`);
		console.log(themeQueries.getThemesList());
	}, [theme]);

	return (
		<div
			style={{ color: theme.text }} //
			className='App'
		>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://reactjs.org' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button
					onClick={() => {
						incrementCount();
						themeActions.changeTheme(
							themeQueries.getCurrentTheme() === 'dark' ? 'light' : 'dark'
						);
					}}
				>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;
