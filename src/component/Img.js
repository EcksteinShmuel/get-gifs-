import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Img.css'
class Img extends Component{
    createImg(urlArray) {       
        let key = 0;        
        return urlArray.map(url => <img className="image" src={url} key={key++} alt='gifhy'></img>)
    }
    render() {
        return(
        <div className="images">
            {this.createImg(this.props.urlArray)} 
        </div>
        )
    }
}


const mapStatetoProps = state => {
    return{
        urlArray: state.urlArray
    }    
}


export default connect (mapStatetoProps)(Img)