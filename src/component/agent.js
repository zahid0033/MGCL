import React,{Component} from 'react';
import {connect} from "react-redux";
import * as authActions from '../redux/actions/authActions'
import {Link} from "react-router-dom";

class Agent extends Component {
    componentDidMount() {
        this.props.setUsers()
    }

    logout = () => {
        this.props.logoutuser();
        this.props.history.push('/login')
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Hello - {this.props.data.action}</h1>
                <button onClick={() => this.logout()}>logout</button>
                <Link to={"/agent"} >Agent Home </Link>
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