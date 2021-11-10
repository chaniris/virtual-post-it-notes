import axios from 'axios';
import { useEffect, useState } from 'react';
import gif from "./assets/giphy.gif"

const Suggestion = () => {
    const [ suggestions, setSuggestions ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        axios({
            url: 'https://www.boredapi.com/api/activity/',
            method: 'GET',
            dataResponse: 'json',
        }).then((res) => {
            setLoading(false);
            setSuggestions(res.data);
        });
    }, []);

    return (
        <div className='suggestionContainer'>
            <h3>Idea of the Day</h3>
            {loading 

            ? 

            <div className="loading">
                <img src={gif} alt="Loading screen" />
            </div> 

            : 
            
            <p key={suggestions.key}>
                {suggestions.activity}
            </p>
            }
        </div>
    )
}

export default Suggestion;