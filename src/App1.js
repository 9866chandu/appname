import React from 'react'

 export default function App1(props){
    return(
        <div style={{color:'silver'}}>
    <h1>Hello{props.name}.Are you
    {props.age}?</h1>
    </div>
);
 };
 App1.defaultProps={name:"chandu",age: 16}