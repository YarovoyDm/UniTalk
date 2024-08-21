import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import operatorsReducer from '../store/slices/operator'
import operatorsAddonReducer from '../store/slices/operatorAddon'
import {workGetOperatorsFetch} from '../store/sagas/operatorsSaga'
import createSagaMiddleware from 'redux-saga'
import { takeEvery } from 'redux-saga/effects';
import { workGetOperatorsAddonFetch } from './sagas/operatorsAddonSaga';
import { GET_OPERATORS_ADDON_START, GET_OPERATORS_START } from '../constants';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  devTools: true,
  reducer: {operatorsReducer, operatorsAddonReducer},
  middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({ thunk: false}).concat(sagaMiddleware)
});

function* sagas() {
  yield takeEvery(GET_OPERATORS_START, workGetOperatorsFetch)
  yield takeEvery(GET_OPERATORS_ADDON_START, workGetOperatorsAddonFetch)
}

sagaMiddleware.run(sagas)

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

