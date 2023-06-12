import React from 'react';
import { createRoot } from 'react-dom/client'; // Добавьте импорт функции createRoot
import './index.css';
import App from './App';
import {ContextProvider} from "./contexts/ContextProvider";

// Замените вызов ReactDOM.render на createRoot
const root = createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
);
