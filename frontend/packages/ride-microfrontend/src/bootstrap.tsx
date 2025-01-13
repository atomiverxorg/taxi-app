import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import AppLocal from './AppLocal';

const remoteElement = document.getElementById('root') as unknown as HTMLElement;
const remote = createRoot(remoteElement);
remote.render(
  <React.StrictMode>
    <AppLocal />
  </React.StrictMode>,
);
