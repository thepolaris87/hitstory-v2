import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

const name = 'slice';

const initialState = {};

const slice = createSlice({
    name,
    initialState,
    reducers: {
        reducer(state, action: PayloadAction<any>) {
            state = action.payload;
        }
    }
});

export const { reducer } = slice.actions;

export const selectSlice = (state: RootState) => state[name];

export default slice.reducer;
