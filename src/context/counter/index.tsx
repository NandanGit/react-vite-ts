import React, { createContext, useReducer } from 'react';
import getCounterActions from './actions';
import counterReducer from './reducer';
import { CounterContextType, CounterState } from './types';

export const CounterContext = createContext<CounterContextType | null>(null);

const INITIAL_STATE: CounterState = {
	count: 0,
};

interface Props {
	children: React.ReactNode;
}
export const CounterProvider: React.FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);
	const counterActions = getCounterActions(dispatch);
	return (
		<CounterContext.Provider value={{ state, actions: counterActions }}>
			{children}
		</CounterContext.Provider>
	);
};
