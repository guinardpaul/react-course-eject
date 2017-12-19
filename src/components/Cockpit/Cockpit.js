import React from 'react';
import cssClasses from './Cockpit.css';

const Cockpit = props => {
  let btnClass = '';
  const classes = [];
  if (props.showPersons) {
    btnClass = cssClasses.Red;
  }

  if (props.persons.length <= 2) {
    classes.push(cssClasses.red); // classes = ['red']
  }

  if (props.persons.length <= 1) {
    classes.push(cssClasses.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={cssClasses.Cockpit}>
      <h1>React course</h1>
      <p className={classes.join(' ')}>This is working !</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
