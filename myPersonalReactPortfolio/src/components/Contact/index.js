import React, {useState} from "react";

import { validateEmail} from "../../utils/helpers"

    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        const {target} = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "email") {
            setEmail(inputValue);
        }else if (inputType === "userName") {
            setUserName(inputValue);
        }else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email) || !userName) {
            setErrorMessage('Please enter a valid Email or Name!');
            return;
        }

        if(!setMessage(message)) {
            setErrorMessage('A message is required!');
            return;
        }
        setUserName("");
        setEmail("");
        setMessage("");
    };

    return (
        <section>
            <div></div>
        </section>
    )