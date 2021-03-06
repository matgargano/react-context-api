/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import AppContext from './AppContext';

class AppProvider extends Component {
    state = {
      name: 'Mat',
      age: 10,

    }

    render() {
      const { children } = this.props;
      return (
        <AppContext.Provider value={
          {
            state: this.state,
            setName: name => this.setState({ name }),
            setAge: age => this.setState({ age }),
          }
        }
        >
          {children}
        </AppContext.Provider>
      );
    }
}


export default AppProvider;
