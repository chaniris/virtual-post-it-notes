const FormContainer = (props) => {

    const { handleSubmit, handleChange, inputError } = props;

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="userMessage">Message:</label>
            <textarea id="userMessage"
            onChange={handleChange}
            >
            
            </textarea>

            <p>{inputError}</p>
            <button>Pin 📌</button>
        </form>
    );
}

export default FormContainer;