import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home/Home";
import Menu from "./core/Menu";
import Footer from "./core/Footer";
import Login from './pages/Login'


const MainRouter=() =>(
    <div>
        <Menu/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
        </Switch>
        <Footer/>
    </div>
)
    
export default MainRouter;
