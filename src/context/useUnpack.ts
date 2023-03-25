import { useContext } from 'react';
import {
	$GeneralGetQueries,
	iProviderValue,
	iReceiverValue,
} from './createDataContext';

const useUnpack = (
	context: any,
	getQueries: $GeneralGetQueries
): iReceiverValue => {
	const ctx: iProviderValue = useContext(context);
	return {
		...ctx,
		queries: getQueries(ctx.state),
	};
};

export default useUnpack;
