import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux"
import './index.css';
import { thunk } from "redux-thunk";
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from "./store/reducers";
import { AppProvider } from './context';

const store: Store<GameState, GameAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <AppProvider>
        <App />
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
