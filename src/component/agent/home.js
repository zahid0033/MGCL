import React,{Component} from "react";
import {connect} from "react-redux"

class Home extends Component {

    componentDidMount() {
        console.log("home")
    }

    render() {
        return(
            <div>
                <h1>AGent Home page</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth : state.auth
})

export default connect(mapStateToProps)(Home)