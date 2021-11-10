import gif from "./assets/giphy.gif"

import axios from 'axios';
import { useEffect, useState } from 'react';

const Suggestion = () => {

    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios({
            url: 'https://www.boredapi.com/api/activity/',
            method: 'GET',
            dataResponse: 'json',
        }).then((res) => {
            setSuggestions(res.data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <div className='suggestionContainer'>
                <h3>Idea of the Day</h3>
                <div class="loading">
                    <img src={gif} alt="Loading" />
                </div>
            </div>
        )
    } else {
        return (
            <div className='suggestionContainer'>
                <h3>Idea of the Day</h3>
                <p key={suggestions.key}>
                    {suggestions.activity}
                </p>
            </div>
        );
    }
}

export default Suggestion;