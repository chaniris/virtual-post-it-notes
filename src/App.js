import './styles/styles.css';
import realtime from './firebase';
import { ref, onValue, push, remove } from 'firebase/database';
import { useState, useEffect } from 'react';
import FormContainer from './FormContainer.js';
import Suggestion from './Suggestion.js';
import StickyMessage from './StickyMessage.js';
import Swal from 'sweetalert2';

const App = () => {
  const [ entryList, setEntryList ] = useState([]);
  const [ userInput, setUserInput ] = useState('');
  const [ inputError, setInputError ] = useState('');

  useEffect(() => {
    const dbRef = ref(realtime);
    onValue(dbRef, (callback) => {
      const myData = callback.val();
      const dbArray = [];
      for (let propertyName in myData) {
        const entryItem = {
          id: propertyName,
          message: myData[propertyName]
        }
        dbArray.push(entryItem);
      }
      // reverse array order so that newest data is at the top 
      dbArray.reverse();
      setEntryList(dbArray);
    });
  }, []); 

  const handleChange = (event) => {
    setUserInput(event.target.value); 
    setInputError('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInput && userInput.trim(userInput.length !== 0)) {
      const dbRef = ref(realtime); 
      push(dbRef, userInput); 
      setUserInput('');
    } else {
      setInputError('Input field cannot be blank.');
    }
  }

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (userInput && userInput.trim(userInput.length !== 0)) {
        const dbRef = ref(realtime);
        push(dbRef, userInput);
        setUserInput('');
      } else {
        setInputError('Input field cannot be blank.');
      }
    }  
  };

  const handleRemoval = (deleteField) => {
    const childNode = ref(realtime, deleteField);
    remove(childNode);
  }

  return (
    <div className='App'>
      <header>
        <h1>Virtual Post-It Notes</h1>
        <h2>Welcome to the digital whiteboard, a visual workspace for sharing ideas digitally.</h2>
        <FormContainer 
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          onKeyPress={onKeyPress}
          userInput={userInput}
          inputError={inputError}
        />
      </header>

      <main>
        <section>
          <div className='wrapper'>
            <ul>
              <Suggestion />
              {
                entryList.map((entry) => {
                  return(
                    <StickyMessage 
                      key={entry.id}
                      message={entry.message}
                      removeEntry={() => {
                        Swal.fire({
                          title: 'Are you sure?',
                          text: 'This action cannot be undone.',
                          icon: 'warning',
                          showCancelButton: true,
                          confirmButtonColor: '#fbc60e',
                          cancelButtonColor: '#999',
                          confirmButtonText: 'Yes'
                        }).then(result => {
                          if (result.value) {
                            handleRemoval(entry.id); 
                            Swal.fire({
                                title: 'Success!',
                                text: 'Your entry has been deleted.',
                                icon: 'success',
                                confirmButtonColor: '#fbc60e'
                              });
                          }
                        });
                      }}
                    />
                  )
                })
              }
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <p>
          Copyright © 2021
          {' '}
          <a href='https://junocollege.com/' target="_blank" rel="noopener">Juno College of Technology</a>
          {' '}
          (formerly HackerYou)
        </p>
        <p>
          Data courtesy of
          {' '}
          <a href='https://www.boredapi.com/' target="_blank" rel="noopener">Bored API</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
