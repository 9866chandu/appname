import React from 'react'
import Login from "./Login"
import Home from "./Home";
export default function App2(props) {
return(props.user===""? <Login/> : <Home username={props.user}/>)
}


// {
//     return(props.user===""? <Login/> : <Home username={props.user}/>)
//     }
    
//     if (props.user ==="") {
//         return <Login/>;
//     }else {
//         return <Home username={props.user} />;
//     }
// }
