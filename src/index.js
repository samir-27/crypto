
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import {
  ChakraProvider, theme,

} from '@chakra-ui/react';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider >
    
    <App />
    </ChakraProvider>
    
  </StrictMode>
);
export const server='https://api.coingecko.com/api/v3'