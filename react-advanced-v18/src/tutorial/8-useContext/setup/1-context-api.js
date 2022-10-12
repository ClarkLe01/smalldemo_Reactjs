import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
// two components - Provider, Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const { removePerson, people } = useContext(PersonContext);
  // console.log(mainData);
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} func = {removePerson} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name, func }) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => func(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
