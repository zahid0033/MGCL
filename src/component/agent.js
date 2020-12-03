import React,{Component} from 'react';
import {connect} from "react-redux";
import * as authActions from '../redux/actions/authActions'

class Agent extends Component {
    componentDidMount() {
        this.props.setUsers()
    }

    logout = () => {
        this.props.logoutuser()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Hello - {this.props.data.action}</h1>
                <button onClick={() => this.logout}>logout</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data : state.auth
    }
}

export default connect(mapStateToProps,authActions)(Agent);