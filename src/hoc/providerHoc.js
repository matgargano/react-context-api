import React from 'react';
import AppContext from '../providers/AppContext';


const providerHoc = Component => props => <AppContext.Consumer>{context => <Component {...props} context={context} />}</AppContext.Consumer>;

export default providerHoc;
