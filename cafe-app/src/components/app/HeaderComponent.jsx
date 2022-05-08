//react
import React, {Component} from 'react';

//router
import {Link} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';

class HeaderComponent extends Component {
    
    render() {

        //changed when Authentication method is done
        let isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        let getLoggedInUserName = AuthenticationService.getLoggedInUserName();

        return (
            <div className="header">
                {/* navigation for phones is broken */}
                <input type="checkbox" id="check"/>
                <div className="nav-links">
                    {<Link className='' to={`/home/${getLoggedInUserName}`}>Home</Link>}
                    {<Link className='' to={`/about/${getLoggedInUserName}`}>About</Link>}
                    <Link className='' to={`/jobs/${getLoggedInUserName}`}>Jobs</Link>
                    <Link className='' to={`/contact/${getLoggedInUserName}`}>Contact</Link>
                    <Link className='' to={`/shop/${getLoggedInUserName}`}>Shop</Link>
                    {!isUserLoggedIn && <Link className='' to="/login">Log in</Link>}
                    {!isUserLoggedIn && <Link className='' to="/signup">Sign up</Link>}
                    {isUserLoggedIn && <Link className='' to="/home" onClick={AuthenticationService.logoutCurrentUser}>Log out</Link>}
                </div>

                <div>
                    {isUserLoggedIn && <h1>Welcome {AuthenticationService.getLoggedInUserName()}</h1>}
                </div>

                

                {/* <label for="check"> */}
                <label>
                    <i className="fas fa-bars menu-btn"></i>
                    <i className="fas fa-times close-btn"></i>
                </label>

            </div>
        );
    }
}


export default HeaderComponent;