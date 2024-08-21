import { put, call } from 'redux-saga/effects';
import { type SagaIterator } from 'redux-saga';
import { getOperators } from '../../api/getOperators';
import { getOperatorsSuccess } from '../slices/operator';

export function* workGetOperatorsFetch(): SagaIterator {
    const response = yield call(getOperators);
    const operators = response.data;
    yield put(getOperatorsSuccess(operators));
}