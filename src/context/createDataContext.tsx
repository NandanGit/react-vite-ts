import React, { createContext, Dispatch, useReducer } from 'react';

export type $GeneralState = object | any[];
export type $GeneralActionObj = {
	type: string;
	payload?: any;
};
export type $GeneralReducer = (
	state: any, // $GeneralState,
	action: $GeneralActionObj
) => any; //$GeneralState;
export type $GeneralGetActions = (
	dispatch: Dispatch<$GeneralActionObj>
) => object;
export type $GeneralGetQueries = (state: any) => object;
export interface iProviderValue {
	state: any; //$GeneralState;
	actions: object;
}

export interface iReceiverValue extends iProviderValue {
	queries: object;
}

interface Props {
	children: React.ReactNode;
}

const createDataContext = (
	reducer: $GeneralReducer,
	getActions: $GeneralGetActions,
	initialState: any //$GeneralState
) => {
	const Context = createContext(initialState);

	const Provider: React.FC<Props> = ({ children }) => {
		const [state, dispatch] = useReducer(reducer, initialState);
		const actions = getActions(dispatch);
		const providerValue: iProviderValue = { state, actions };
		return (
			<Context.Provider value={providerValue}>{children}</Context.Provider>
		);
	};

	return { Context, Provider };
};

export default createDataContext;
