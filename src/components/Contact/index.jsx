import React, { useState, useEffect } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Message } from "primereact/message";
import emailjs from '@emailjs/browser';
import { validateEmail } from "../../utils/helpers"

function Contact() {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Check environment variables on mount (for debugging)
    useEffect(() => {
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        
        console.log('EmailJS Environment Check:', {
            publicKey: publicKey ? `${publicKey.substring(0, 5)}... (length: ${publicKey.length})` : 'MISSING',
            serviceId: serviceId || 'MISSING',
            templateId: templateId || 'MISSING',
            publicKeyFull: publicKey // Log full key for verification (remove in production)
        });
        
        // Note: We'll pass public key directly in send() instead of initializing
    }, []);

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

        // EmailJS configuration - you'll need to set these up
        // Get these from https://www.emailjs.com after creating an account
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

        // Check if EmailJS is configured
        if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
            // Fallback to mailto: if EmailJS is not configured
            const subject = encodeURIComponent(`Portfolio Contact from ${userName}`);
            const body = encodeURIComponent(
                `Name: ${userName}\nEmail: ${email}\n\nMessage:\n${message}`
            );
            const mailtoLink = `mailto:brian.hopper@live.com?subject=${subject}&body=${body}`;
            window.location.href = mailtoLink;
            setSuccessMessage('Your email client should open. To enable direct email sending, please configure EmailJS.');
            setTimeout(() => {
                setUserName("");
                setEmail("");
                setMessage("");
                setIsSubmitting(false);
            }, 2000);
            return;
        }

        // Send email using EmailJS
        try {
            const templateParams = {
                from_name: userName,
                name: userName,  // Used in template message content
                from_email: email,
                message: message,
                time: new Date().toLocaleString()  // Timestamp for template
            };

            // Verify all values are present
            if (!serviceId || !templateId || !publicKey) {
                throw new Error('Missing EmailJS configuration. Please check your .env file.');
            }

            // Debug: Log the values being used
            console.log('EmailJS Send Attempt:', {
                serviceId,
                templateId,
                publicKey: publicKey.substring(0, 5) + '...',
                publicKeyLength: publicKey.length,
                templateParams
            });

            // Send email with public key as 4th parameter
            // This is the recommended approach when not using init()
            const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
            console.log('EmailJS Success:', response);
            
            setSuccessMessage('Thank you! Your message has been sent successfully.');
            
            // Clear form
            setUserName("");
            setEmail("");
            setMessage("");
            setIsSubmitting(false);
        } catch (error) {
            console.error('EmailJS error:', error);
            console.error('Full error details:', {
                status: error.status,
                text: error.text,
                message: error.message,
                serviceId,
                templateId,
                publicKeyLength: publicKey?.length
            });
            
            // Provide more specific error messages
            if (error.status === 404) {
                setErrorMessage('EmailJS "Account not found" error. This usually means your Public Key is incorrect. Please: 1) Go to EmailJS dashboard > Account > General, 2) Click "Refresh Keys", 3) Copy the new Public Key, 4) Update your .env file, 5) Restart the dev server.');
            } else {
                setErrorMessage(`Failed to send email: ${error.text || error.message || 'Unknown error'}. Please try again or email brian.hopper@live.com directly.`);
            }
            setIsSubmitting(false);
        }
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