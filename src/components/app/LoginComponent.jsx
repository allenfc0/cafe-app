//react
import React, {Component} from 'react';

//router
//import {useNavigate} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';


class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '', 
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);

    }

    handleChange(event) {
        
        this.setState({
            [event.target.name]: event.target.value
            
        })
        console.log(this.state.username);
        console.log(this.state.password);
    }

    loginClicked() {
        //console.log('inside login button lol')
        if(this.state.username === 'allenfc' && this.state.password === 'pass') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            
            
            this.props.navigate(`/home/${this.state.username}`);
            
        } 
        else if(this.state.username === 'admin') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, "password");
            this.props.navigate(`/${this.state.username}-admin`);
        }

        else {
            this.setState({showSuccessMessage: false});
            this.setState({hasLoginFailed: true})
            console.log('failed authentication');
        }
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                
                    {/* <label for="username">Username</label> */}
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            
                    {/* <label for="password">Password</label> */}
                    <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
            
                    <button name="submit" onClick={this.loginClicked}>Login</button>
            
                
            </div>
            
        );
    }
}


export default LoginComponent;