import React, {Component} from 'react';

class CounterComponent extends Component {

    constructor() {
        super();

        this.state = {
            counter: 0
        }
        
        //this.change = this.change.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    

    render() {
        return(
            <div>
                <div className="counter">
                    <button className="counter-button" by={1} onClick={() => this.decrement(this.props.by)}>-</button>
                    <input type="text" className="counter-text" id="amount-value" value={this.state.counter} onChange={this.onInputChange}/>
                    {/* <span>{this.state.counter}</span> */}
                    <button className="counter-button" by={1} onClick={() => this.increment(this.props.by)}>+</button>

                    <button className="btn btn-success" id="btn-add">Add</button>
                </div>
                
            </div>
        );
    }

    //method will increment or decrement
    increment(by) {
        this.setState((prevState) => {
            return {counter: prevState.counter + by}
        });
    }

    decrement(by) {
    if(this.state.counter > 0) {
        this.setState((prevState) => {
            return {counter: prevState.counter - by}
        });
    }
    return 0;
        
    }

    onInputChange(event) {
        this.setState( {
            [event.target.name]: event.target.value
        });
    }


    //data service
    addItems() {
        
    }

}

CounterComponent.defaultProps = {
    by: 1
}

CounterComponent.protoTypes = {
    //by: PropTypes.number
}

export default CounterComponent;