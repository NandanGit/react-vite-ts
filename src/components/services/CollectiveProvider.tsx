import React from 'react';
import { CounterProvider } from '../../context/counter';
import { ThemeProvider } from '../../context/theme';

interface Props {
	children: React.ReactNode;
}

const CollectiveProvider: React.FC<Props> = ({ children }) => {
	return (
		<React.Fragment>
			<ThemeProvider>
				<CounterProvider>{children}</CounterProvider>
			</ThemeProvider>
		</React.Fragment>
	);
};

export default CollectiveProvider;
