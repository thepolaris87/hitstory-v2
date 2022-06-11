import { combineReducers } from 'redux';
import slice from './slice';
import contents from './contents';
import components from './components';

const rootReducer = combineReducers({ slice, contents, components });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
