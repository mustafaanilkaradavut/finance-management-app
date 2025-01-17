import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';


createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
