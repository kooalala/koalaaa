import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { sdk } from '@farcaster/miniapp-sdk'; // ADD THIS IMPORT

// Safe Base Mini App initialization
const initBaseApp = async () => {
  try {
    await sdk.actions.ready();
    console.log('✅ Base Mini App SDK ready');
  } catch (error) {
    // This only runs when NOT in Base app (normal web browser)
    console.log('Web mode - not in Base app');
  }
};

// Initialize Base SDK
initBaseApp();

// Create root element
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found!');
  
  // Create root div if it doesn't exist
  const newRoot = document.createElement('div');
  newRoot.id = 'root';
  document.body.appendChild(newRoot);
  
  const root = ReactDOM.createRoot(newRoot);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
