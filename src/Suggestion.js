import axios from 'axios';
import { useEffect, useState } from 'react';

const Suggestion = () => {

    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        axios({
            url: 'https://www.boredapi.com/api/activity/',
            method: 'GET',
            dataResponse: 'json',
        }).then((res) => {
            setSuggestions(res.data);
        });
    }, []);

    return (
        <div className='suggestionContainer'>
            <h3>Idea of the Day</h3>
            <p key={suggestions.key}>
                {suggestions.activity}
            </p>
        </div>
    );
}

export default Suggestion;