import React from "react";
import Home from "./Home";
import Income from './Income';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Expense from "./Expense";
import { Login } from "./Login";
import Landing from "./Landing";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path="/" exact component={Landing}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/home" component={Home} />
                    <Route path="/income" component={Income} />
                    <Route path="/expense" component={Expense} />
                </Router>
            </div>
        );
    }
}