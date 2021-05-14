import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App.js';
import * as serviceWorker from './serviceWorker';
// import * as Sentry from '@sentry/react';
// import { Integrations } from '@sentry/tracing';

// Sentry.init({
//   dsn:
//     'https://d98f16c7cc0f4230b7ba30f6a76ef259@o484792.ingest.sentry.io/5538538',
//   integrations: [new Integrations.BrowserTracing()],
//   tracesSampleRate: 1.0,
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
