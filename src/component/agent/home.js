import React,{Component} from "react";
import {setUsers} from '../../redux/actions/authActions'
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";
import {Table} from "react-bootstrap";

class Home extends Component {

    componentDidMount() {
        // this.props.setUsers();
        console.log("home")
    }

    render() {
        return(
            <div className="container">
                <h1>Agent Home Page</h1>
                <p>Granite List For all sort of granites</p>

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

const mapStateToProps = state => ({
    auth : state.auth
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setUsers},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)