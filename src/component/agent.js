import React,{Component} from 'react';
import {connect} from "react-redux";
import * as authActions from '../redux/actions/authActions'
import {Link} from "react-router-dom";
import axios from 'axios'
import {Table} from "react-bootstrap";

class Agent extends Component {
    state = {
        dev : {},
        list: [
            {
                name : "white stone",
                price: 10,
                size : "0-5 mm"
            },
            {
                name : "red stone",
                price: 10,
                size : "0-5 mm"
            },
            {
                name : "gray stone",
                price: 10,
                size : "0-5 mm"
            }
        ]
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
            <div className="container-fluid">
                <h1>Hello - {this.props.data.action}</h1>
                <button onClick={() => this.logout()}>logout</button>
                <Link to={"/agent"} >Agent Home </Link>
                <p><b>Name :</b> {dev.name} </p>
                <p><b>Name :</b> {dev.profession} </p>
                <p>Granite List</p>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>পাথরের নাম </th>
                        <th>বিক্রয়মূল্য (প্রতি মে.টন) (মার্কিন ডলার)</th>
                        <th>গ্রানাইট পাথরের আকার</th>
                        <th>লোডিং চার্জ</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.list.map((item,key) => (
                            <tr key={key}>
                                <td>{key + 1}</td>
                                <td> {item.name} </td>
                                <td> {item.price} </td>
                                <td> {item.size} </td>
                                <td>
                                    প্রতি মেট্রিক টন ক্রাস্ড পাথরের লোডিং চার্জ ৬০.০০ এবং বোল্ডার পাথরের লোডিং চার্জ ৮০.০০ টাকা।
                                    ১ মার্কিন ডলার = ৮৪.৯৫ টাকা
                                    (৩১ ‍ডিসেম্বর ২০২০ পর্যন্ত)
                                </td>
                                <td><Link to={`/agent/edit/${key}`}>Edit</Link></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
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