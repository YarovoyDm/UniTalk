import { put, call } from 'redux-saga/effects';
import { type SagaIterator } from 'redux-saga';
import { getOperatorsAddon } from '../../api/getOperatorsAddon';
import { getOperatorsAddonSuccess } from '../slices/operatorAddon';

export function* workGetOperatorsAddonFetch(): SagaIterator {
    const response = yield call(getOperatorsAddon);
    const operators = response.data;
    yield put(getOperatorsAddonSuccess(operators));
}