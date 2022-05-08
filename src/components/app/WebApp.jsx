//react
import React, { Component } from 'react';

//routing and authentication
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';

//custom components
import HomeComponent from './HomeComponent';
import AboutComponent from './AboutComponent';
import JobsComponent from './JobsComponent';
import ContactComponent from './ContactComponent';
import LoginComponent from './LoginComponent';
import SignupComponent from './SignupComponent';
import ShopComponent from "./ShopComponent";

//admin and user profiles
import AdminComponent from './AdminComponent';

//adding entities
import ItemComponent from './ItemComponent';
import JobComponent from './JobComponent'

//handling error pages
import ErrorComponent from "./ErrorComponent";

//Navigation & Parameters using Hooks
import withNavigation from './WithNavigation';
import withParams from './WithParams';

class WebApp extends Component {
    render() {

        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const AdminComponentWithNavigation = withNavigation(AdminComponent);
        const ItemComponentWithParamsAndNavigation = withParams(withNavigation(ItemComponent));
        const JobComponentWithParamsAndNavigation = withParams(withNavigation(JobComponent));

        return (
            <div className="WebApp">
                {/* these are all routes possible */}
                <Router>
                    <Routes>
                        
                                <Route path="/" element={<HomeComponent/>}/>

                                <Route path="/home" element={<HomeComponent/>}/>
                                <Route path="/home/:name" element={<HomeComponent/>}/>

                                <Route path="/about" element={<AboutComponent/>}/>
                                <Route path="/about/:name" element={<AboutComponent/>}/>
                                
                                <Route path="/jobs" element={<JobsComponent/>}/>
                                <Route path="/jobs/:name" element={<JobsComponent/>}/>

                                <Route path="/contact" element={<ContactComponent/>}/>
                                <Route path="/contact/:name" element={<ContactComponent/>}/>
                                
                                {/* needs work with paths */}
                                <Route path="/shop" element={<ShopComponent/>}></Route>
                                <Route path="/shop/:name" element={<ShopComponent/>}></Route>
                                
                                <Route path="/login" element={<LoginComponentWithNavigation/>}></Route>
                                <Route path="/signup" element={<SignupComponent/>}></Route>

                                {/* needs work with paths */}
                                <Route path='/:name-admin' element={<AuthenticatedRoute><AdminComponentWithNavigation/></AuthenticatedRoute>}></Route>
                                <Route path="/add-item" element={<AdminComponentWithNavigation />} ></Route>
                                <Route path="/item/:id" element={<ItemComponentWithParamsAndNavigation />} ></Route>
                                <Route path="/job/:id" element={<JobComponentWithParamsAndNavigation />}></Route>


                                <Route path="*" element={<ErrorComponent/>}/>
                        
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default WebApp