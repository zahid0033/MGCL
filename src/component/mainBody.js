import React,{Component} from 'react';
import {Route} from "react-router-dom";
import Agent from "./agent";
import {connect} from 'react-redux'
import Login from "./login";
import Logout from "./logout";

class MainBody extends Component {
    render() {
        return (
            <div>
                <div className="mainBody">
                    <Route exact path="/" component={Agent}/>
                    {
                        this.props.data ?
                            <Route exact path="/login" component={Login}/>
                        :
                            <Route exact path="/logout" component={Logout}/>
                    }

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data : state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps,null)(MainBody);