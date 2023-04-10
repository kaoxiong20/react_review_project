import React, {useState} from "react";

function InputMessage(){
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        setMessage(event.target.value);
        console.log(event.target.value)
    }

    return(
        <>
        <p>Temporary text</p>
        <input
            type="text"
            value={message}
            onChange={handleInputChange}
        />
        <button>Submit</button>
        </>
    )

}

export default InputMessage;