// REDUX
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './slices';
import logger from 'redux-logger';

// ROUTER
import Router from './Router';

const store = configureStore({ reducer: rootReducer, middleware: [logger] });

function App() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}

export default App;
