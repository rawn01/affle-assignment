import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";

import './index.css';
import store from "./store/store";
import App from './App';
import MeetingRoom from './components/MeetingRoom';
import Confirm from "./components/Confirm";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/book/:id" component={MeetingRoom} />
                    <Route path="/confirm/:id" component={Confirm} />
                    <Route path="/" component={App} />
                </Switch>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);