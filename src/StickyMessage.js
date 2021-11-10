import React from 'react';

const StickyMessage = (props) => {
    const { uniqueId, message, removeEntry } = props;

    return (
        <li key={uniqueId}>
            <p>{message}</p>

            <button 
                className='removeButton'
                onClick={removeEntry}
            >
                <i className="far fa-trash-alt" aria-hidden="true">
                    <span className="sr-only">Remove</span>
                </i>
            </button>
        </li>
    ); 
}

export default StickyMessage;