import React,{Component} from 'react';
import {connect} from "react-redux";
import * as authActions from '../redux/actions/authActions'
import {Link} from "react-router-dom";
import axios from 'axios'

class Agent extends Component {
    state = {
        dev : {}
    }

    componentDidMount() {
        this.props.setUsers()
        this.fetchDeveloper()
    }

    fetchDeveloper = async () => {
        await axios.get('/dev')
            .then(res => {
                console.log("Fetched",res.data)
                this.setState({
                    dev: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    logout = () => {
        this.props.logoutuser();
        this.props.history.push('/login')
    }

    render() {
        console.log(this.props)
        const {dev} = this.state;
        return (
            <div>
                <h1>Hello - {this.props.data.action}</h1>
                <button onClick={() => this.logout()}>logout</button>
                <Link to={"/agent"} >Agent Home </Link>
                <p><b>Name :</b> {dev.name} </p>
                <p><b>Name :</b> {dev.profession} </p>
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