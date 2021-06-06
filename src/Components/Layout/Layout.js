import { Fragment } from 'react';
import NavBarMenu from './NavBarMenu';


const Layout = (props) => {
  return (
    <Fragment>
      <NavBarMenu />
      <main>{props.children}</main>
    </Fragment>
    
  );
};

export default Layout;
