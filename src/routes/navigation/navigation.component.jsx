import './navigation.styles.scss'
import { Fragment } from "react";
import { Outlet,Link } from "react-router-dom";
import { ReactComponent as Slogo } from '../assets/stylezy-high-resolution-logo-transparent-background.svg';


function Navigation() {
    return ( 
    //   <div>
    <Fragment>
        <div className="navigation">
          <Link className="logo-container" to='/'>
            <Slogo className="logo"/>
          </Link>
          <div className="nav-links-container">
            {/* Creates a hyperlink thats wrapped inside the link; acts like anchor tag in html */}
            <Link className="nav-link" to='/home'>
                Shop
            </Link>
            <Link className="nav-link" to='/auth'>
                Sign In
            </Link>
            <Link className='nav-link' to='/SignUp'>
              SignUp
            </Link>
          </div>
        </div>
        {/* Outlet is used here, as we want the navigation bar to be present when the sub routers are called. So when the website 
        is rendered, we will see the contents of the sub routers in place where the Outlet is placed i.e. after the navigation bar*/}
        <Outlet />
    </Fragment>
    //   </div>
    )
}

export default Navigation;