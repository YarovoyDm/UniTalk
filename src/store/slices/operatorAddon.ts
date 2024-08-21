import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OPERATORS_ADDON_SLICE_NAME } from '../../constants';
import { OperatorAddon } from '../../types/types';

interface OperatorsAddonState {
  operatorsAddon: OperatorAddon[];
  loading: boolean;
  error: string | null;
}

const initialState: OperatorsAddonState = {
  operatorsAddon: [],
  loading: false,
  error: null,
};

const operatorsAddonSlice = createSlice({
  name: OPERATORS_ADDON_SLICE_NAME,
  initialState,
  reducers: {
    getOperatorsAddonStart(state) {
      state.loading = true;
      state.error = null;
    },
    getOperatorsAddonSuccess(state, action: PayloadAction<OperatorAddon[]>) {
      state.operatorsAddon = action.payload;
      state.loading = false;
    },
    getOperatorsAddonFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getOperatorsAddonStart, getOperatorsAddonSuccess, getOperatorsAddonFailure } = operatorsAddonSlice.actions;
export default operatorsAddonSlice.reducer;