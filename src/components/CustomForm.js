import {useState} from "react";

const CustomForm = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}, Message: ${message}`);
    };

    return (
        <div className="App, container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <label htmlFor="message">Message:</label>
                <input id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CustomForm;