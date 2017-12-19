import React, { Component } from 'react';
import cssClasses from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Paul', age: 25 },
      { id: 2, name: 'Max', age: 22 },
      { id: 3, name: 'Polo', age: 26 }
    ],
    showPersons: false
  };

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
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      // Pas besoin de faire else statement car render() se call
      persons = ( // a chaque fois qu'on appuie sur le button (car le state show persons change)
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  changed={event => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );

      btnClass = cssClasses.Red;
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(cssClasses.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push(cssClasses.bold); // classes = ['red', 'bold']
    }

    return (
      <div className={cssClasses.App}>
        <h1>React course</h1>
        <p className={classes.join(' ')}>This is working !</p>
        <button className={btnClass} onClick={this.togglePersons}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
