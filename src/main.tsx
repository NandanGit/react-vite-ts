import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CollectiveProvider from './components/services/CollectiveProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<CollectiveProvider>
			<App />
		</CollectiveProvider>
	</React.StrictMode>
);
