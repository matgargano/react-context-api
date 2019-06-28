import React, { Component } from 'react';
import providerHoc from '../hoc/providerHoc';


class Child extends Component {
    onTextChange = (e) => {
      const { context } = this.props;
      const { setName } = context;
      setName(e.target.value);
    }

    render() {
      const { context } = this.props;
      const { name } = context.state;

      return (
        <div className="person">
          {JSON.stringify(this.props)}
          <p>
            I am
            {' '}
            {name}
          </p>
          <input type="text" value={name} onChange={this.onTextChange} />
        </div>
      );
    }
}

export default providerHoc(({ context }) => (
  <Child context={context} />
));
