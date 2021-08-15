import { useContext } from "react";
import classes from "./NavBarMenu.module.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Badge,
} from "react-bootstrap";
import { Toast } from "../../utils/notifications";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import Avatar from "react-avatar";
import { Bell } from "react-bootstrap-icons";

const NavBarMenu = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;
  let userName = "";
  let navColor = "#ecf1f1 !important";
  let navBg = "";
  let isSignup = false;
  if (isLoggedIn === true && authCtx.currentUser) {
    userName = authCtx.currentUser.attributes.name;
    navColor = "#50c7db !important";
    navBg = "third";
  }

  if (history.location.pathname === "/signup") {
    isSignup = true;
  }

  const logoutHandler = (event) => {
    event.preventDefault();
    try {
      Auth.signOut();
      Toast("Success!!", "Logged out successfully!", "success");
      authCtx.logout();
      history.push("/");
    } catch (error) {
      Toast("Error!!", error.message, "danger");
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg={navBg}
      style={{ color: navColor }}
      variant="dark"
      sticky="top"
    >
      {isLoggedIn && (
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      )}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        style={{ justifyContent: "flex-end" }}
      >
        {isLoggedIn && (
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
            <Nav.Link>
              <Bell size="25px"></Bell>
              <Badge
                variant="light"
                className="ml-n2 rounded-circle badge-pink"
              >
                {"9"}
              </Badge>
            </Nav.Link>
            <NavDropdown
              title={
                <Avatar
                  color="rgb(223,54,140)"
                  maxInitials={1}
                  name={userName}
                  size="30"
                  round={true}
                />
              }
              alignRight
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        )}
        {!isLoggedIn && (
          <Nav>
            <Nav.Link disabled style={{ color: "gray", paddingLeft: "0" }}>
              {isSignup ? "Already have an account?" : "Don't have an account?"}
            </Nav.Link>
            <Nav.Link
              href={isSignup ? "/login" : "/signup"}
              style={{
                float: "right",
                color: "mediumturquoise",
                paddingLeft: "0",
              }}
            >
              {isSignup ? "SIGN IN" : "SIGN UP"}
            </Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarMenu;
