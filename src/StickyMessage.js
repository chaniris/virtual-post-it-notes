import React from 'react';

const StickyMessage = (props) => {

    const { uniqueId, title, removeEntry } = props;

    return (
        <li key={uniqueId}>
            <p>{title}</p>

            <button onClick={removeEntry}>Remove</button>
        </li>
    ); 
}

export default StickyMessage;