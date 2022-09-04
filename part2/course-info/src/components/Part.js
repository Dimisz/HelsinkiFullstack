import React from 'react';
import ReactDOM from 'react-dom';

const Part = (props) => {
    return(
        <p>
            {props.part} {props.exercises}
        </p>
    );
}

export default Part;