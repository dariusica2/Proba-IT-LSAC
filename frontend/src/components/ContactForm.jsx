import React from 'react';
import './styles/ContactForm.css';

const ContactForm = () => {
	return (
	<section className="contact-form">
		<h2>Contact us!</h2>
		<form>
		<input type="text" placeholder="First Name" required />
		<input type="text" placeholder="Last Name" required />
		<input type="email" placeholder="Email" required />
		<textarea placeholder="Message" required></textarea>
		<button type="submit">Submit</button>
		</form>
	</section>
	);
};

export default ContactForm;