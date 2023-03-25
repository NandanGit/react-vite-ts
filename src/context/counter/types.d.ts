import { Dispatch } from 'react';
import { INCREMENT, DECREMENT } from './actionTypes';

export interface CounterState {
	count: number;
}

// Action Object Types
export type IncrementActionObj = {
	type: INCREMENT;
	payload: number;
};

export type DecrementActionObj = {
	type: DECREMENT;
	payload: number;
};

// Action Types
export interface CounterActions {
	increment: (inc?: number) => void;
	decrement: (dec?: number) => void;
}

export interface CounterContextType {
	state: CounterState;
	actions: CounterActions;
}
