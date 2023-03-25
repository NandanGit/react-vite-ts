import { DECREMENT, INCREMENT } from './actionTypes';
import { CounterState, IncrementActionObj, DecrementActionObj } from './types';

export type CounterActionObj = IncrementActionObj | DecrementActionObj;

const counterReducer = (state: CounterState, action: CounterActionObj) => {
	switch (action.type) {
		case INCREMENT:
			return { ...state, count: state.count + action.payload };
		case DECREMENT:
			return { ...state, count: state.count - action.payload };
		default:
			return state;
	}
};

export default counterReducer;
