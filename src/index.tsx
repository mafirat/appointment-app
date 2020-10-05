import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import './style/site.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Store } from 'redux';
import { Provider } from "react-redux";
import configureStore, { IApplicationState } from './stores/store';

interface IProps {
  store: Store<IApplicationState>;
}
const Root: React.FunctionComponent<IProps> = ({ store }) => {
  return <Provider store={store}>
    <App />
  </Provider>
}

const store = configureStore();
const { dispatch } = store;

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
export { dispatch as g_dispatcher };

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
