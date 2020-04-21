import React from "react";
import {Route, Switch, Redirect} from "react-router";

export default function Main() {
    return (
        <Switch>
            
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/login" component={Login} />
            
            <Redirect to="/"/>
        
            <Redirect to={'/'} />
        </Switch>
    );
}