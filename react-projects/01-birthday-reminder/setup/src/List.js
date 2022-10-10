import React from 'react';
import Person from './Person';

const List = ({ people }) => {
  console.log(people)
  return (
    <>
      {people.map((person) => (
          <Person person = {person} key={person.id}/>
      ))}
    </>
  );
};

export default List;
