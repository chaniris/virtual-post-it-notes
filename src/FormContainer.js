const FormContainer = (props) => {

    const { handleSubmit, handleChange, userInput, inputError } = props;

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="userMessage">Message:</label>
            <textarea 
                maxLength="100"
                id="userMessage"
                onChange={handleChange}
                value={userInput}
            >
            </textarea>

            <p className='errorMessage'>{inputError}</p>
            <button className='pushButton'>Pin 📌</button>
        </form>
    );
}

export default FormContainer;