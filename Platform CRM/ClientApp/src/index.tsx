import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });
const store = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
          <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
