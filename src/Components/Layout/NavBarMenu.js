//import { useContext } from 'react';
//import { Link } from 'react-router-dom';

//import AuthContext from '../../store/auth-context';
import classes from './NavBarMenu.module.css';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

const NavBarMenu = () => {
    //const authCtx = useContext(AuthContext);

    const isLoggedIn = false;//authCtx.isLoggedIn;

    const logoutHandler = () => {
        //authCtx.logout();
        // optional: redirect the user
    };

    return (
        <Navbar collapseOnSelect expand="md" bg="primary" Style="background-color: #50c7db !important" variant="dark">
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/profile">Sites</Nav.Link>
                    <NavDropdown title="MANAGE" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">one</NavDropdown.Item>
                         <NavDropdown.Item href="#action/3.2">two action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">three</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">four</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#pricing">ADD-ONS</Nav.Link>
                    <Nav.Link href="#pricing">GET-HELP</Nav.Link>
                    <button className={classes.button}>+ NEW SITE</button>
                </Nav>
                <Nav>
                    {!isLoggedIn ?
                        <Nav.Link href='/auth' >Login</Nav.Link> :
                        <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default NavBarMenu;
