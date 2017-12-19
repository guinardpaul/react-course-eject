import React, { PureComponent } from 'react';
import cssClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import wclass from '../hoc/wclass';
import Aux from '../hoc/Aux';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 1, name: 'Paul', age: 25 },
        { id: 2, name: 'Max', age: 22 },
        { id: 3, name: 'Polo', age: 26 }
      ],
      showPersons: false
    };

    console.log('[App] Constructor', props);
  }

  componentWillMount() {
    console.log('[App] Component will mount');
  }
  componentDidMount() {
    console.log('[App] Component did mount');
  }

  // Ne check pas profondément les 2 objets => utiliser PureComponent pour ca.
  /* shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App] shouldComponentUpdate', nextProps, nextState);
    return (
      nextState.showPersons !== this.state.showPersons ||
      nextState.persons !== this.state.persons
    );
  } */

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App] componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App] componentDidUpdate');
  }

  /* state = {
    persons: [
      { id: 1, name: 'Paul', age: 25 },
      { id: 2, name: 'Max', age: 22 },
      { id: 3, name: 'Polo', age: 26 }
    ],
    showPersons: false
  }; */

  deletePersonHandler = index => {
    // const persons = this.state.persons.slice();
    // Copier la liste entière plutot que get une reference
    // Car on altère directement le state en faisant ca sinon !
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({},this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    console.log('[App] Render()');
    let persons = null;

    if (this.state.showPersons) {
      // Pas besoin de faire else statement car render() se call a
      // chaque fois qu'on appuie sur le button (car le state show persons change)
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}>
          Show Persons
        </button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersons}
        />
        {persons}
      </Aux>
    );
  }
}

export default wclass(App, cssClasses.App);
