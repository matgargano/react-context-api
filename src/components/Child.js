import React, {Component} from 'react';
import AppContext from '../providers/AppContext';


class Child extends Component {

    accessItHere(){
      // how can I access properties of <AppContext.Consumer> here??
    }

    render(){
      return <div className="person">
        <AppContext.Consumer>
          {(context) => 
            (
              <React.Fragment>
                <p>I am {context.state.name}</p>
                <input type="text" value={context.state.name} onChange={e => context.setName(e.target.value)}></input>
              </React.Fragment>
            )}
        </AppContext.Consumer>
      </div>
    }
  
  }

  export default Child;