import React, {Component} from 'react';
import AppContext from './AppContext';

class AppProvider extends Component {

    state = {
      name: 'Mat'
      
    }
  
    render(){
      return (
        <AppContext.Provider value={
          {
            state : this.state,
            setName: name => this.setState({name})
          }
        }>
          {this.props.children}
        </AppContext.Provider>
      )
    }
  }
  

  export default AppProvider;