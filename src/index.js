import react, { StrictMode } from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import '../src/styles/style.css';

const rootElement = document.getElementById('root');
const  root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)
