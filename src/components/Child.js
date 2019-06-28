import React, {Component} from 'react';
import withThemeContext from '../hoc/providerInjector';;


class Child extends Component {

    onTextChange = (e) => {
      this.props.context.setName(e.target.value)
    }

    render(){
      return <div className="person">
        {JSON.stringify(this.props)}
        <p>I am {this.props.context.state.name}</p>
                <input type="text" value={this.props.context.state.name} onChange={this.onTextChange}></input>
      </div>
    }
  
  }

  export default withThemeContext(({context}) => (
    <Child context={context} />
  ));