import React from 'react';
import AppProvider from './providers/AppProvider';
import AppContainer from './components/AppContainer';


function App(){
  return (
    <AppProvider>
      <AppContainer />
    </AppProvider>
  );
}

 

export default App;
