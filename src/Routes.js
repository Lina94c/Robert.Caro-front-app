import React from "react";
import {Switch, Route} from "react-router-dom";
import AuthContainer from "./containers/authcontainer/Auth"
import SignupContainer from "./containers/authcontainer/SignUp"
import Home from "./containers/homecontainer/Home";



//Mis vistas --> Containers
const Routes = () => (
    <Switch>
        {/* https://www.ironshop.com/  */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={AuthContainer} />
        <Route exact path="/signup"  component={SignupContainer}/>
    </Switch>
);


export default Routes;