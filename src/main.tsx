import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './components/Application';
import { HelmetProvider } from 'react-helmet-async';

// Say something
console.log('[ERWT] : Renderer execution started');

// Application to Render
const app =
    <HelmetProvider>
        <Application />
    </HelmetProvider>;

// Render application in DOM
createRoot(document.getElementById('app')).render(app);
