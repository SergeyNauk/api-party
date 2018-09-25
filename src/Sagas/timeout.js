import { put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { toast } from 'react-toastify';

function* timeout(history, actionConst) {
	yield delay(5000);
	yield toast.error('session timeout');
	yield put({ type: actionConst });
	yield delay(5000);
	yield history.push('/home');
}

export default timeout;
