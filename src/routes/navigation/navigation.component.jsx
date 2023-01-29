import "./navigation.styles.scss";
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Slogo } from "../assets/stylezy-high-resolution-logo-transparent-background.svg";
import { userContext } from "../../contexts/user.context";
import { signOutUser } from "../../utility/firebase/firebase.utility";
function Navigation() {
  //This is done to save the data of user when they login, which will be used to check whether is logged in or not
  const { currentUser,setCurrentUser } = useContext(userContext);
  // async function signOutHandler() {
  //   await signOutUser();
  //   setCurrentUser(null);
  // }

  return (
    //   <div>
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Slogo className="logo" />
        </Link>
        <div className="nav-links-container">
          {/* Creates a hyperlink thats wrapped inside the link; acts like anchor tag in html */}
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {" "}
              Sign Out {" "}
              </span>
          ) : (
            <div>
              <Link className="nav-link" to="/login">
                LogIn
              </Link>
              <Link className="nav-link" to="/SignUp">
                SignUp
              </Link>
            </div>
          )}
          
        </div>
      </div>
      {/* Outlet is used here, as we want the navigation bar to be present when any of the sub routers are called. So when the website 
        is rendered, we will see the contents of the sub routers in place where the Outlet is placed i.e. after the navigation bar*/}
      <Outlet />
    </Fragment>
    //   </div>
  );
}

export default Navigation;
