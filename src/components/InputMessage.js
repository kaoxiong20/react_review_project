import React, {useState} from "react";

function InputMessage(){
    const [message, setMessage] = useState('');
    const [submittedMessage, setSubmittedMessage] = useState('');

    const handleInputChange = (event) => {
        // event = the input change as the user types
        // target = input itself
        // value = content being typed in the input
        setMessage(event.target.value);
        console.log(event.target.value);
    }

    const handleSubmit = () => {
        setSubmittedMessage(message);
        console.log('message submitted');
        setMessage('');
    }

    return(
        <>
        <p>You have submitted: {submittedMessage}</p>
        <input
            type="text"
            value={message}
            onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default InputMessage;