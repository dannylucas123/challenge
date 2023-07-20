import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const container: HTMLElement = document.getElementById('react-root');

const root: ReactDOM.Root = ReactDOM.createRoot(container);
root.render(<App />);
