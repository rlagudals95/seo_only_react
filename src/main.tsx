import React from 'react';
import Application from './components/Application';
import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { About } from './pages/About';




const container = document.getElementById('app') as HTMLElement;
const root = ReactDOM.createRoot(container);

const App = () =>
    <HelmetProvider>
        <BrowserRouter>
            <Routes >
                <Route index element={<Application />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    </HelmetProvider>

if (container?.hasChildNodes()) {
    ReactDOM.hydrateRoot(
        container,
        <App />
    );
} else {
    root.render(
        <App />
    );
}