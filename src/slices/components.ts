import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

type INITIALSTATE = {
    component: string;
};

const name = 'components';
const initialState: INITIALSTATE = {
    component: 'carousel'
};

const slice = createSlice({
    name,
    initialState,
    reducers: {
        setComponent(state, action: PayloadAction<any>) {
            state.component = action.payload;
        }
    }
});

export const { setComponent } = slice.actions;

export const selectComponents = (state: RootState) => state[name];

export default slice.reducer;
