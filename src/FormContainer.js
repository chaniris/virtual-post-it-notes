const FormContainer = (props) => {

    const { handleSubmit, handleChange } = props; 

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="userMessage">Message:</label>
            <textarea id="userMessage"
            onChange={handleChange}
            >
            
            </textarea>

            <button>Pin 📌</button>
        </form>
    );
}

export default FormContainer;