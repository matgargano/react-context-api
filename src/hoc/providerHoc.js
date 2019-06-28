import React from 'react';
import AppContext from '../providers/AppContext';

const withThemeContext = Component => class extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => <Component {...this.props} context={context} />}
      </AppContext.Consumer>
    );
  }
};

export default withThemeContext;
