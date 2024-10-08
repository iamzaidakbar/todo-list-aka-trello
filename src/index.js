import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import './styles/global.scss';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store';
import router from './utils/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
    </Provider>

);

reportWebVitals();
