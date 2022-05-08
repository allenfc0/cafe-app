//react
import React, {Component} from 'react';

//custom components
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

class ContactComponent extends Component {
    render() {
        return(
            <div id="background">
                <HeaderComponent/>
                <div class="content">
                    <h1 id="site-title">Contact Us</h1>
                    <p id="site-desc">
                        Maecenas non justo condimentum, faucibus arcu quis, tempor mi. 
                        Maecenas molestie egestas velit, quis tristique ipsum elementum a. In at sollicitudin leo. 
                        Proin neque nisi, aliquam posuere pellentesque eget, iaculis consectetur metus. 
                        Vivamus scelerisque tortor volutpat orci faucibus rhoncus. Nullam pretium ante ac tincidunt posuere. 
                        Morbi rutrum ultrices ipsum at porttitor. Donec eu tellus massa. In fringilla tincidunt leo in suscipit.
                    </p>

                    <div class="contact">
                        <div class="contact-phone">
                            <h2 class="contact-header">Call Us</h2>
                            <a href="tel:9999999999">(999) 999-999</a>
                        </div>
                        <br/>
                        {/*thymeleaf th:action="@{/sendEmail}" class="contact-email"  method="post" */}
                        <form>
                            <fieldset id="email-info">
                                <legend><h2 class="contact-header">Send us an email</h2></legend>
                                <div id="all-inputs">
                                    <label for="email" class="email-input">Email</label>
                                    <input type="text" placeholder="Enter your email" id="email" name="email"/>
                                    
                                    <label for="title" class="email-input">Title</label>
                                    <input type="text" placeholder="Enter title" id="title" name="title"/>
                                    
                                    <label for="message" class="email-input">Enter message</label>
                                    <input type="text" placeholder="Enter message" id="message" name="message"/>

                                    <input type="submit"/>
                                </div>
                                
                            </fieldset>
                            
                        </form>
                    </div>

                </div>
                
                <FooterComponent/>
            </div>
        );
    }
}

export default ContactComponent