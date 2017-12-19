import React, { Component } from 'react';
import cssClasses from './Person.css';
import WithClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
import wclass from '../../../hoc/wclass';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person] Constructor', props);
  }

  componentWillMount() {
    console.log('[Person] Component will mount');
  }
  componentDidMount() {
    console.log('[Person] Component did mount');
  }

  render() {
    console.log('[Person] render()');
    // Destructuring
    const { name, age } = this.props;
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {name} and i'm {age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
    /* return [
      <p onClick={this.props.click}>
        I'm {name} and i'm {age} years old
      </p>,
      <p>{this.props.children}</p>,
      <input
        type="text"
        onChange={this.props.changed}
        value={this.props.name}
      />
    ]; */
  }
}

export default wclass(Person, cssClasses.Person);
