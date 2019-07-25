import React, {Component} from 'react';
import {connect} from 'react-redux';

const addButton = {type : 'ADD'};
const removeButton = {type : 'REMOVE'};

export class CounterComponent extends Component {
    render() {
        const {counter,dispatch} = this.props;
        return (
            <div className="CounterContainer">
                <p>{counter}</p>
                <button onClick = {() => dispatch(addButton)}>ADD</button>
                <button onClick = {() => dispatch(removeButton)}>REMOVE</button>
            </div>
        );
    }    
}

const mapStateToProps = state => ({
    counter : state
});

const CounterContainer = connect(mapStateToProps)(CounterComponent);

export default CounterContainer;