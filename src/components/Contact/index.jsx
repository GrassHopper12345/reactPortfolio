import React, { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Message } from "primereact/message";
import { validateEmail } from "../../utils/helpers"

function Contact() {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e, field) => {
        const inputValue = e.target.value;

        if (field === "email") {
            setEmail(inputValue);
        } else if (field === "userName") {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");

        if (!validateEmail(email) || !userName) {
            setErrorMessage('Please enter a valid Email or Name!');
            return;
        }

        if (!message) {
            setErrorMessage('A message is required!');
            return;
        }

        setIsSubmitting(true);

        // Use mailto: as a reliable fallback that works without any setup
        const subject = encodeURIComponent(`Portfolio Contact from ${userName}`);
        const body = encodeURIComponent(
            `Name: ${userName}\nEmail: ${email}\n\nMessage:\n${message}`
        );
        const mailtoLink = `mailto:brian.hopper@live.com?subject=${subject}&body=${body}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        setSuccessMessage('Your email client should open. If it doesn\'t, please email brian.hopper@live.com directly.');
        
        // Clear form after a short delay
        setTimeout(() => {
            setUserName("");
            setEmail("");
            setMessage("");
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <section id="reach-out" className="contact">
            <div className="flex-row">
                <h2 className="section-title">Reach Out to Connect</h2>
            </div>

            <div className="contact-info">
                <Card className="contact-info-card">
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                        <div>
                            <h3>Hello {userName || "there"}!</h3>
                            <p>Would you like to Connect?</p>
                            <address>
                                Bossier City, LA <br />
                                Phone: <a href="tel:318.773.4013">318.773.4013</a>
                                <br />
                                Email:{" "}
                                <a href="mailto://brian.hopper@live.com">brian.hopper@live.com</a>
                            </address>
                        </div>
                        <p style={{ marginTop: 'auto' }}><strong>I would love to hear from you!</strong></p>
                    </div>
                </Card>

                {/* contact form section */}
                <Card className="contact-form-card">
                    <h3>Please Reach Out!</h3>
                    <form className="form" onSubmit={handleFormSubmit}>
                        <div className="p-field" style={{ marginBottom: '1rem' }}>
                            <label htmlFor="contact-name" style={{ display: 'block', marginBottom: '0.5rem' }}>Your Name</label>
                            <InputText
                                value={userName}
                                onChange={(e) => handleInputChange(e, "userName")}
                                id="contact-name"
                                placeholder="Enter your name"
                                className="w-full"
                            />
                        </div>

                        <div className="p-field" style={{ marginBottom: '1rem' }}>
                            <label htmlFor="contact-email" style={{ display: 'block', marginBottom: '0.5rem' }}>Your Email</label>
                            <InputText
                                value={email}
                                onChange={(e) => handleInputChange(e, "email")}
                                type="email"
                                id="contact-email"
                                placeholder="Enter your email"
                                className="w-full"
                            />
                        </div>

                        <div className="p-field" style={{ marginBottom: '1rem' }}>
                            <label htmlFor="contact-message" style={{ display: 'block', marginBottom: '0.5rem' }}>Your Message</label>
                            <InputTextarea
                                value={message}
                                onChange={(e) => handleInputChange(e, "message")}
                                id="contact-message"
                                placeholder="Enter your message"
                                rows={5}
                                className="w-full"
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '1rem', paddingBottom: '1rem' }}>
                            <Button 
                                type="submit" 
                                label="Submit" 
                                icon="pi pi-send"
                                className="game-themed-button"
                                loading={isSubmitting}
                                disabled={isSubmitting}
                            />
                        </div>
                    </form>
                    {errorMessage && (
                        <Message severity="error" text={errorMessage} style={{ marginTop: '1rem' }} />
                    )}
                    {successMessage && (
                        <Message severity="success" text={successMessage} style={{ marginTop: '1rem' }} />
                    )}
                </Card>
            </div>
        </section>
    );
}
export default Contact;