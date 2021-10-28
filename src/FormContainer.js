const FormContainer = (props) => {

    const { handleSubmit, handleChange, userInput, inputError } = props;

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="userMessage">Message:</label>
            <textarea 
                id="userMessage"
                onChange={handleChange}
                value={userInput}
            >
            </textarea>

            <p>{inputError}</p>
            <button>Pin 📌</button>
        </form>
    );
}

export default FormContainer;