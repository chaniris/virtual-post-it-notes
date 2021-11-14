const FormContainer = (props) => {
    const { handleSubmit, handleChange, userInput, inputError } = props;

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="userMessage">Your message here:</label>
            <input 
                maxLength="100"
                id="userMessage"
                onChange={handleChange}
                value={userInput}
                placeholder="Ex. Go for a run"
            />

            <p className='errorMessage'>{inputError}</p>
            <button className='pushButton'>Post It</button>
        </form>
    );
}

export default FormContainer;