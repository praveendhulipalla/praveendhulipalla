import { useContext } from "react";

import classes from "./NavBarMenu.module.css";
import { Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import { Toast } from "../../utils/notifications";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const NavBarMenu = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = (event) => {
    event.preventDefault();
    try {
      Auth.signOut();
      Toast("Success!!", "Logged out successfully!", "success");
      authCtx.logout();
      history.push("/login");
    } catch (error) {
      Toast("Error!!", error.message, "danger");
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="primary"
      style={{ color: "#50c7db !important" }}
      variant="dark"
      sticky="top"
    >
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
          {!isLoggedIn ? (
            <Nav.Link href="/auth">Login</Nav.Link>
          ) : (
            <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarMenu;
