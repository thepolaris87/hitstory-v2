import { combineReducers } from 'redux';
import slice from './slice';

const rootReducer = combineReducers({ slice });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
