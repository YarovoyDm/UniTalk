import { put, call } from 'redux-saga/effects';
import { getOperatorsAddon } from '../../api/getOperatorsAddon';
import { getOperatorsAddonSuccess } from '../slices/operatorAddon';
import { type SagaIterator } from 'redux-saga';

export function* workGetOperatorsAddonFetch(): SagaIterator {
    const response = yield call(getOperatorsAddon);
    const operators = response.data;
    yield put(getOperatorsAddonSuccess(operators));
}