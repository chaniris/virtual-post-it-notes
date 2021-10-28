import React from 'react';

const StickyMessage = (props) => {

    const { uniqueId, title } = props;

    return (
        <li key={uniqueId}>
            <p>{title}</p>

            <button>Remove</button>
        </li>
    ); 
}

export default StickyMessage;