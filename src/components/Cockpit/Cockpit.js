import React from 'react';
import cssClasses from './Cockpit.css';
import Aux from '../../hoc/Aux';

const Cockpit = props => {
  let btnClass = cssClasses.Btn;
  const classes = [];
  if (props.showPersons) {
    btnClass = [cssClasses.Btn, cssClasses.Red].join(' ');
  }

  if (props.persons.length <= 2) {
    classes.push(cssClasses.red); // classes = ['red']
  }

  if (props.persons.length <= 1) {
    classes.push(cssClasses.bold); // classes = ['red', 'bold']
  }

  return (
    <Aux>
      <h1>React course</h1>
      <p className={classes.join(' ')}>This is working !</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </Aux>
  );
};

export default Cockpit;
