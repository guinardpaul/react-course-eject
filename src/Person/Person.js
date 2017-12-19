import React from 'react';
import cssClasses from './Person.css';

// Stateless component
const Person = props => {
  // Destructuring
  const { name, age } = props;
  return (
    <div className={cssClasses.Person}>
      <p onClick={props.click}>
        I'm {name} and i'm {age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
