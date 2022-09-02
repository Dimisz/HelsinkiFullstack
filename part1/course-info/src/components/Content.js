import React from 'react';
import ReactDOM from 'react-dom';

import Part from './Part';
const Content = (props) => {
    // const arr = props;
    // console.log(typeof(arr));
    // console.log(arr);
    return(
        <>
            {
                props.parts.map((prop) => (
                    <Part key={Math.random()} part={prop.name} exercises={prop.exercises} />
                ))
                
            }
        </>
    );
}

export default Content;