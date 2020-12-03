import React,{Component} from 'react';
import {connect} from "react-redux";
import * as authActions from '../redux/actions/authActions'

class Logout extends Component {
    componentDidMount() {
        this.props.setUsers()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Logout - {this.props.data.action}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data : state.auth
    }
}

export default connect(mapStateToProps,authActions)(Logout);