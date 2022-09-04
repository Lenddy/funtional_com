//! general setup of a function components
import React from "react";

//* create arrow function and the name should be the name of the file

// passing props as a parameter //! this parameter can be anything you want 
//*const People = (x)=>{ <h1> {x.f_name}</h1> }
const People = (props) => {
    // deconstructing    this is not needed
    const {f_name, l_name ,age ,hair_color, children} = props
    return(
        <div>
            {/* not using {this .props.f_name}  just {props.f_name}*/}
            <h1>name: {f_name} {l_name}</h1>
            <p>age: {age} </p>
            <p>Hair color: {hair_color}</p>
            {children}

        </div>
    )
}


// all ways export the components
export default People;