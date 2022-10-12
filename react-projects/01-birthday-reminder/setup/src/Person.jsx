import React from "react";
const Person = ({ person }) => {
    const { id, name, age, image } = person;
    return (
        <>
            <article key={id} className='person' id={id}>
                <img src={image} alt={name} />
                <div key={id}>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                </div>
            </article>
        </>
    )
};

export default Person;