import React,{Component} from 'react'
import {Route} from "react-router-dom";
import Agent from "./component/agent";
import Login from "./component/login/login";
import Logout from "./component/logout";
import Home from "./component/agent/home";
import AgentRoute from "./component/ProtectedRoute/agentRoute";
import Topbar from "./component/template/topbar";
import GraniteList from "./component/graniteList/graniteList";

class Router extends Component {
    render() {
        return(
            <div>
                <Topbar/>
                <div className="mainBody">
                    <Route exact path="/" component={Agent}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/logout" component={Logout}/>
                    <Route exact path="/granite/list" component={GraniteList}/>
                    <AgentRoute exact path="/agent" component={Home}/>
                </div>
            </div>
        )
    }
}
export default Router