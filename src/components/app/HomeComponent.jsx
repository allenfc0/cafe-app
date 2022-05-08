//react
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';

//custom components
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

class HomeComponent extends Component {
    render() {
        //changed when Authentication method is done
        //const isUserLoggedIn = false;
        let getLoggedInUserName = AuthenticationService.getLoggedInUserName();

        return(
            <div id="background">
                
                <HeaderComponent/>
                    <div className="content">
                        <h1 id="site-title">Gabby's Coffee<span><br/>Shop</span></h1>
                        <p id="site-desc">
                            In vitae odio viverra, placerat tortor sit amet, maximus ligula. Fusce ultricies eros metus, eget pharetra odio scelerisque a. 
                            Cras tincidunt ex non magna pellentesque euismod. Pellentesque a massa tristique, tristique sapien efficitur, tristique ante. 
                            Mauris risus arcu, auctor sed eleifend vitae, porttitor at diam. Maecenas non justo condimentum, faucibus arcu quis, tempor mi. 
                            Maecenas molestie egestas velit, quis tristique ipsum elementum a. In at sollicitudin leo. 
                            Proin neque nisi, aliquam posuere pellentesque eget, iaculis consectetur metus. 
                            Vivamus scelerisque tortor volutpat orci faucibus rhoncus. Nullam pretium ante ac tincidunt posuere. 
                            Morbi rutrum ultrices ipsum at porttitor. Donec eu tellus massa. In fringilla tincidunt leo in suscipit.
                        </p>
                        <Link to={`/shop/${getLoggedInUserName}`} id="btn">Place Order</Link>
                    </div>

                    <FooterComponent/>
                    

            </div>
        );
    }
}


export default HomeComponent