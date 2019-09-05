import React, { Component} from 'react';

import './App.css';
import Input from './component/Input'
import Img from './component/Img'
import Button from './component/Button'
import Results from './component/Results'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sub_title">
          gif's generator
        </div>
        <Input/>
        <Button/>
        <Results/>
        <Img/>
      </div>
    );
  }
  
}


export default App;