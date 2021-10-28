import './styles/sass/App.css';

import realtime from './firebase';
import { ref, onValue, push } from 'firebase/database';
import { useState, useEffect } from 'react';

import FormContainer from './FormContainer.js';
import StickyMessage from './StickyMessage.js';

const App = () => {
  const [entryList, setEntryList] = useState([]);
  const [userInput, setUserInput] = useState('');

  const [inputError, setInputError] = useState('');

  useEffect(() => {
    const dbRef = ref(realtime);
    onValue(dbRef, (callback) => {
      const myData = callback.val();
      const dbArray = [];
      for (let propertyName in myData) {
        const entryItem = {
          id: propertyName,
          title: myData[propertyName]
        }
        dbArray.push(entryItem);
      }
      dbArray.reverse();
      setEntryList(dbArray);
    });
  }, []); 

  const handleChange = (event) => {
    setUserInput(event.target.value); 
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInput) {
      const dbRef = ref(realtime); 
      push(dbRef, userInput); 
    } else 
      setInputError('Input field cannot be blank.');
  }

  return (
    <div className="App">
      <header>
        <h1>Virtual Post-It Notes</h1>
        <h2>Subheading here</h2>
        <FormContainer 
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          inputError={inputError}
        />
      </header>

      <main>
        <section>
          <ul>
            {
              entryList.map((entry) => {
                return(
                  <StickyMessage 
                    key={entry.id}
                    title={entry.title}
                  />
                )
              })
            }
          </ul>
        </section>
      </main>

      <footer>
        <p>
          Copyright © 2021
          {' '}
          <a href='https://junocollege.com/'>Juno College of Technology</a>
          {' '}
          (formerly HackerYou)
        </p>
      </footer>
    </div>
  );
}

export default App;
