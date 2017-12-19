import Person from './Person/Person';
import React, { PureComponent } from 'react';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Persons] Constructor', props);
  }

  componentWillMount() {
    console.log('[Persons] Component will mount');
  }

  componentDidMount() {
    console.log('[Persons] Component did mount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons] componentWillReceiveProps', nextProps);
  }

  // Voir scup dans App.js
  /* shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons] shouldComponentUpdate', nextProps, nextState);
    return (
      nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked
    );
    // return true;
  } */

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons] componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons] componentDidUpdate');
  }

  render() {
    console.log('[Persons] render()');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
