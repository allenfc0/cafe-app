import React, {Component} from 'react';

class FooterComponent extends Component {
    render() {
        return(
            <div id="follow">
                        <h4>Follow us!</h4>
                        <div className="media-icons">
                            <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                        </div> 
            </div>
        );
    }
}

export default FooterComponent