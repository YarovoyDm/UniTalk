import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OPERATORS_SLICE_NAME } from '../../constants';
import { Operator } from '../../types/types';

interface OperatorsState {
  operators: Operator[];
  loading: boolean;
  error: string | null;
}

const initialState: OperatorsState = {
  operators: [],
  loading: false,
  error: null,
};

const operatorsSlice = createSlice({
  name: OPERATORS_SLICE_NAME,
  initialState,
  reducers: {
    getOperatorsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getOperatorsSuccess(state, action: PayloadAction<Operator[]>) {
      state.operators = action.payload;
      state.loading = false;
    },
    getOperatorsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getOperatorsStart, getOperatorsSuccess, getOperatorsFailure } = operatorsSlice.actions;
export default operatorsSlice.reducer;