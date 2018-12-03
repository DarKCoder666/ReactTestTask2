import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Container
} from 'reactstrap'
import { Router, Link } from 'react-router-dom'
import history from '../history';
import { connect } from 'react-redux'

import { logout } from '../actions/authAction'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    /**
     * This function came from reactstrap documentation
     * Workd in mobile scrins, to hide the menu
     */
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <Navbar color="light" light expand="md" style={{ marginBottom: "50px" }}>
                        <Container>
                            <Link style={{
                                fontWeight: 'bold',
                                fontSize: '22px'
                            }} to="/">React Test Task</Link>
                            
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem style={{
                                        fontSize: '18px',
                                        padding: '0 10px'
                                    }}>
                                        <Link to="/news/">News</Link>
                                    </NavItem>
                                    <NavItem style={{
                                        fontSize: '18px',
                                        padding: '0 10px'
                                    }}>
                                        <Link to="/addPost/">Add Post</Link>
                                    </NavItem>
                                    
                                    {/* Templates for authinticated users and not */}
                                    {(!this.props.auth.loggedIn) ? (
                                        <NavItem style={{
                                            fontSize: '18px',
                                            padding: '0 10px'
                                        }}>
                                            <Link to="/login/">Log In</Link>
                                        </NavItem>
                                    ) : (
                                            <div>
                                                <NavItem style={{
                                                    fontSize: '18px',
                                                    padding: '0 10px'
                                                }}>
                                                    {this.props.auth.username}
                                                </NavItem>
                                                <NavItem style={{
                                                    fontSize: '18px',
                                                    padding: '0 10px',
                                                    cursor: 'pointer'
                                                }} onClick={this.props.logout}>
                                                    Log out
                                                </NavItem>
                                            </div>
                                        )}
                                </Nav>
                            </Collapse>
                        </Container>
                    </Navbar>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: { ...state.auth }
    }
}

export default connect(mapStateToProps, { logout })(Header);