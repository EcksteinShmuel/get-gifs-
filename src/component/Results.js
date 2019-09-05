import React, {Component} from 'react';
import { connect } from 'react-redux';

class Results extends Component{
    render() {
        return(
            <div className="results">
                {this.props.input}  results: {this.props.urlArray.length}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        urlArray: state.urlArray,
        input: state.input
    }
}

export default connect(mapStateToProps)(Results)