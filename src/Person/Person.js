import React from 'react';

// const age = new Date().getFullYear() - 1996;
// console.log(age);

const Person = (props) => {
    return (
        <div>
            <p onClick={props.click} >I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.inputName} value={props.name} />
        </div>
    )   
    }

export default Person;