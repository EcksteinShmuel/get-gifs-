import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchingApi, changeSearchingStatus } from '../action/action.js';

class Button extends Component{
    hendleClick = () => {
        this.props.searchingStatus(true)
        this.props.fetchApi(
            this.props.input, 
            this.props.search,
            this.props.signal, 
            this.props.controller
        )
    }
    render() {
        return(
            <div>
                <button className="button"
                    onClick={this.hendleClick}
                >
                    search
                </button>
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
        searchingStatus(condition) {
            dispatch(changeSearchingStatus(condition))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Button)