const FormContainer = (props) => {

    const { handleSubmit, handleChange, userInput, inputError } = props;

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="userMessage">Your message here:</label>
            <textarea 
                maxLength="100"
                id="userMessage"
                onChange={handleChange}
                value={userInput}
                placeholder="Ex. Prep holiday party and open up discussion for theme."
            >
            </textarea>

            <p className='errorMessage'>{inputError}</p>
            <button className='pushButton'>Post It</button>
        </form>
    );
}

export default FormContainer;