const FormContainer = (props) => {

    const { handleSubmit, handleChange, userInput, inputError, onKeyPress } = props;

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="userMessage">Your message here:</label>
            <textarea 
                maxLength="100"
                id="userMessage"
                onChange={handleChange}
                value={userInput}
                placeholder="Ex. Prep holiday party and open up discussion for theme."
                onKeyPress={onKeyPress}
            >
            </textarea>

            <p className='errorMessage'>{inputError}</p>
            <button className='pushButton'>Post It</button>
        </form>
    );
}

export default FormContainer;