import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Homepage} from "./pages/Homepage";
import {Users} from "./pages/Users";
import {Navigation} from "./components/Navigation";
import {Counter} from "./pages/Counter";
import CssBaseline from "@material-ui/core/CssBaseline";
import {LoginWithFormik} from "./pages/Login";


export const App = () => {
    return (
        <React.Fragment>
            <CssBaseline />

            <Router>
                <Navigation/>

                <Switch>
                    <Route path="/" exact={true}>
                        <Homepage/>
                    </Route>

                    <Route path="/users">
                        <Users/>
                    </Route>

                    <Route path="/counter">
                        <Counter/>
                    </Route>

                    <Route path="/login">
                        <LoginWithFormik/>
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    )
}
