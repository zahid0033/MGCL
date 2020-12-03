import React,{Component} from 'react';
import {Route} from "react-router-dom";
import Agent from "./agent";

class MainBody extends Component {
    render() {
        return (
            <div>
                <div className="mainBody">
                    <Route exact path="/" component={Agent}/>
                </div>
            </div>
        )
    }
}

export default MainBody;