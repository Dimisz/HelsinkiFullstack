import React from 'react';
import ReactDOM from 'react-dom';

import Part from './Part';

const Content = ({parts}) => {
    // const arr = props;
    // console.log(typeof(arr));
    // console.log(arr);
    return(
        <>
            {
                parts.map((part) => (
                    <Part key={part.id} part={part.name} exercises={part.exercises} />
                ))
            }
        </>
    );
}

export default Content;