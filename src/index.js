import React from 'react';
import ReactDOM from 'react-dom';
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import App from './App';
import './index.css';

(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: process.env.REACT_APP_LD_CLIENT_SIDE_ID,
    reactOptions: {
      useCamelCaseFlagKeys: false
    },
    user: {
      key: 'user_key',
      custom: {
        selection: 'DEFAULT'
      }
    },
    flags: {
      'demoTheme': 'Default'
    }
  });

  ReactDOM.render(
    <LDProvider>
      <App />
    </LDProvider>,
    document.getElementById('root')
  );
})();