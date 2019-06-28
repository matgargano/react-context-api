import React, { Component } from 'react';
import providerHoc from '../hoc/providerHoc';


class Child extends Component {
    onTextChange = (e) => {
      const { context } = this.props;
      const { setName, setAge } = context;

      switch (e.target.dataset.type) {
        case 'age':
          setAge(e.target.value);
          break;
        case 'name':
          setName(e.target.value);
          break;
        default:
          break;
      }
    }

    render() {
      const { context } = this.props;
      const { name } = context.state;
      const { age } = context.state;

      return (
        <div className="person">
          {JSON.stringify(this.props)}
          <p>
            I am
            {' '}
            {name}
          </p>
          <input type="text" data-type="name" value={name} onChange={this.onTextChange} />
          <input type="age" data-type="age" value={age} onChange={this.onTextChange} />
        </div>
      );
    }
}

export default providerHoc(({ context }) => (
  <Child context={context} />
));
