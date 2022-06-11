// REDUX
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import rootReducer from './slices';

// ROUTER
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

// STYLE
import { ThemeProvider } from '@mui/material';
import theme from './assets/styles/theme';
import './assets/styles/style.css';

const store = configureStore({ reducer: rootReducer, middleware: [logger] });

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
}

export default App;


