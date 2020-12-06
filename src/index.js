import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from "react-redux";
import {createStore,applyMiddleware} from "redux";
import rootReducer from "./redux/reducers/rootReducers";
import { createBrowserHistory } from 'history'
import axios from 'axios';

const { REACT_APP_NOT_AXIOS_BASE_URL } = process.env;
axios.defaults.baseURL = REACT_APP_NOT_AXIOS_BASE_URL;

const createStoreWithMiddleware = applyMiddleware()(createStore);
const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
      <Provider store={createStoreWithMiddleware(rootReducer)}>
          <Router history={history}>
              <App />
          </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
