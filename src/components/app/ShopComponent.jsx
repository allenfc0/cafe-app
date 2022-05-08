import React, {Component} from 'react';

import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import CounterComponent from './CounterComponent'
import AuthenticationService from './AuthenticationService';
import ItemDataService from '../api/ItemDataService';



//import ItemComponent from './ItemComponent';

class ServicesComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [], 
            message: null
        }

        this.getAllItems = this.getAllItems.bind(this);
    }

    getAllItems() {
        //let username = AuthenticationService.getLoggedInUserName();
        ItemDataService.executeGetAllItems()
        .then(response => 
            {
                //console.log(response)
                this.setState({items: response.data})
                //console.log(this.state.items);

            })
        .catch(e => console.log(e))
    }

    componentDidMount() {
        this.getAllItems();
    }

    render() {
        
        return (
            <div id="background">
                <HeaderComponent/>
                
                <table className="table">
                    <thead>
                        <tr id="table-titles">
                            <th>Name</th>
                            <th>Description</th>
                            <td>#</td>
                        </tr>
                        
                    </thead>
                    <tbody>
                    {
                        this.state.items.map(
                                        item =>
                                            <tr key={item.id} id="each-item">
                                                <td id="item-name">{item.name}</td>
                                                <td id="item-desc">{item.description}</td>
                                                {/* <td><CounterComponent/></td> */}
                                            </tr>
                                            
                                    )
                    }
                            
                    </tbody>
                </table>
                

                <FooterComponent/>
            </div>
        )
    }

    
}

export default ServicesComponent;