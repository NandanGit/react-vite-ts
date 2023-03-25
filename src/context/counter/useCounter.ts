import { useContext } from 'react';
import { CounterContext } from '.';

const useCounter = () => {
	const ctx = useContext(CounterContext);
	if (!ctx)
		throw new Error(`You can't use counterContext outside of CounterProvider`);
	return ctx;
};

export default useCounter;
