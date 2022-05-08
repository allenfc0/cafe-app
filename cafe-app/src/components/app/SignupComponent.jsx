//react
import React, {Component} from 'react';

//router
import {Link} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';

class SignupComponent extends Component {
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form>
                    {/* <label for="name">Name</label> */}
                    <input type="text" id="name" name="name"/>

                    {/* <label for="username">Create username</label> */}
                    <input type="text" id="username" name="username"/>

                    {/* <label for="email">Enter email address</label> */}
                    <input type="text" id="email" name="email"/>

                    {/* <label for="password">Enter password</label> */}
                    <input type="text" id="password" name="password"/>

                    <button type="submit">Submit</button>
                </form>
            </div>
            
        );
    }
}


export default SignupComponent;