import { DECREMENT, INCREMENT } from './actionTypes';
import { Dispatch } from 'react';
import { CounterActionObj } from './reducer';
import { CounterActions } from './types';

const getCounterActions = (
	dispatch: Dispatch<CounterActionObj>
): CounterActions => ({
	increment: (inc: number = 1) => {
		dispatch({ type: INCREMENT, payload: inc });
	},

	decrement: (dec: number = 1) => {
		dispatch({ type: DECREMENT, payload: dec });
	},
});

export default getCounterActions;
