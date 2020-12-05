import React,{Component} from 'react'
import {Navbar,Nav,NavDropdown} from "react-bootstrap";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Topbar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <div className="container">
                        <Navbar.Brand as={Link} to="/">
                            <img
                                alt=""
                                src="/logo.svg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            MGCL
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className="ml-auto">
                                <Nav.Link as={Link} to="/granite/list">Granite List</Nav.Link>
                                {
                                    this.props.auth.isAuthenticated ?
                                        (
                                            <>
                                                <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                                                <Nav.Link as={Link} to="/agent">Agent</Nav.Link>
                                            </>
                                        ) : (
                                            <>
                                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                            </>
                                        )
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </div>

                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Topbar)