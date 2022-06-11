import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

type INITIALSTATE = {
    frameId: string;
};

const name = 'contents';
const initialState: INITIALSTATE = {
    frameId: 'DM000001'
};

const slice = createSlice({
    name,
    initialState,
    reducers: {
        setFrameId(state, action: PayloadAction<any>) {
            state.frameId = action.payload;
        }
    }
});

export const { setFrameId } = slice.actions;

export const selectContents = (state: RootState) => state[name];

export default slice.reducer;
