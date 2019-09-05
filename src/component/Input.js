import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchingApi, changeingInput, changeSearchingStatus } from '../action/action.js';

class Input extends Component{
    
    heandleChange = (e) => {  
        this.props.changeInput(e.target.value)        
        if(this.props.input.length >= 2) {          
        this.props.searchingStatus(true)
            setTimeout(() => {
                this.props.fetchApi(
                    this.props.input, 
                    this.props.search, 
                    this.props.signal, 
                    this.props.controller
                )
            },
            500)
        }  
    }
    
    render() {
        return (
            <div>
                <input className="input"
                    type="text"
                    onChange={this.heandleChange}
                />              
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        input: state.input,
        search: state.searching,
        controller: state.controller,
        signal: state.signal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchApi(input, search, signal, controller) {
            dispatch(fetchingApi(input, search, signal, controller))     
        },
        changeInput(newInput) {
            dispatch(changeingInput(newInput))
        },
        searchingStatus(condition) {
            dispatch(changeSearchingStatus(condition))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Input)