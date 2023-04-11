import React, {useState} from "react";

function NewInput() {
    // This is to create the template of the objects that will
    //later be in the messages array that hold all of the messages
    
    const [messageInfo, setMessageInfo] = useState({
        name: '',
        text: ''
    });

    // this is the array that will hold our messages
    const[messages, setMessages] = useState([]);

    const handleInputChange = (event) => {
        setMessageInfo({
            ...messageInfo,
            [event.target.name]: event.target.value
        });
        console.log(`This is the input change: ${event.target.name} : ${event.target.value}`);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // finishing up packaging the new message for the array
        const newMessage = {
            name: messageInfo.name,
            text: messageInfo.text
        };

        // Actually sending the new message into the array
        setMessages([...messages, newMessage]);
        console.log(messages);

        // clears out the inputs
        setMessageInfo({
            name: '',
            text: ''
        })
    };

    return(
        <>
            <h1>My Message Board</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name of Messenger:
                    <input type="text"
                    name="name"
                    value={messageInfo.name}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    Message to add:
                    <input type="text"
                    name="text"
                    value={messageInfo.text}
                    onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Submit Your Message</button>
            </form>

        {messages.map((message, index) => (
            <div key={index}>
                <h3>{message.name}</h3>
                <p>{message.text}</p>
            </div>
        ))}
        </>
    );

}

export default NewInput;