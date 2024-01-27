import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers"

function Contact() {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "email") {
            setEmail(inputValue);
        } else if (inputType === "userName") {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !userName) {
            setErrorMessage('Please enter a valid Email or Name!');
            return;
        }

        if (!message) {
            setErrorMessage('A message is required!');
            return;
        }
        setUserName("");
        setEmail("");
        setMessage("");
    };

    return (
        <section id="reach-out" className="contact">
            <div className="flex-row">
                <h2 className="section-title">Reach Out to Connect</h2>
            </div>

            <div className="cotact-info">
                <div>
                    <h3>Hello {userName}</h3>
                    <p>Would you like to Connect?</p>
                    <address>
                        Bossier City, LA <br />
                        Phone: <a href="tel:318.773.4013">318.773.4013</a>
                        <br />
                        Email:{" "}
                        <a href="mailto://brian.hopper@live.com">brian.hopper@live.com</a>
                    </address>
                    <p><strong>I would love to hear from you!</strong></p>
                </div>

                {/* contact form section */}
                <div className="contact-form">
                    <h3>Pleaase React Out!</h3>
                    <form className="form">
                        <label for="contact-name">Your Name</label>
                        <input
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="text"
                            id="contact-name"
                            placeholder="Enter your email"
                        />

                        <label for="contact-email">Your Email</label>
                        <input
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="text"
                            id="contact-email"
                            placeholder="Enter your email"
                        />

                        <label for="contact-message">Your Message</label>
                        <input
                            value={message}
                            name="message"
                            onChange={handleInputChange}
                            type="text"
                            id="contact-message"
                            placeholder="Enter your message"
                        />
                        <button type="button" onClick={handleFormSubmit}>Submit</button>
                    </form>
                </div>
                {errorMessage && (
                    <div><p className="error-text">{errorMessage}</p></div>
                )}
            </div>
        </section>
    );
}
export default Contact;