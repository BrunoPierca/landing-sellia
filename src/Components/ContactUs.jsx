import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ContactForm } from "./ContactForm";

export const ContactUs = () => {
	return (
		<Row className='mx-5'>
			<Col sm={4}>
				<h2>
					Pongámonos en <strong>contacto</strong>
				</h2>

				<Row>
					<Col sm={3}>
						<i>Icon</i>
					</Col>
					<Col>
						<h4>Whatsapp</h4>
						<p>Nuestro equipo está para ayudar.</p>
						<a href='tel:+523317878856'>+52 33 1787 8856</a>
					</Col>
				</Row>
				<Row>
					<Col sm={3}>
						<i>Icon</i>
					</Col>
					<Col>
						<h4>Telegram</h4>
						<p>Nuestro equipo está para ayudar.</p>
						<a href='tel:+523317878856'>@selliaonlinebot</a>
					</Col>
				</Row>
				<Row>
					<Col sm={3}>
						<i>Icon</i>
					</Col>
					<Col>
						<h4>E-mail</h4>
						<p>Nuestro equipo está para ayudar.</p>
						<a href='mailto:sellia@mail.com'>sellia@mail.com</a>
					</Col>
				</Row>

				<Row className='d-flex justify-content-around mt-4'>
					<Col>
						<i>Icon</i>
					</Col>
					<Col>
						<i>Icon</i>
					</Col>
					<Col>
						<i>Icon</i>
					</Col>
				</Row>
			</Col>
			<Col sm={8}>
				<Container className='mx-5 px-5'>
					<h2>
						¿Dudas? <strong>Te ayudamos</strong>
					</h2>
					<p>
						<strong>Compartenós tus dudas y un experto se comunicará contigo.</strong>
					</p>

					<ContactForm />
				</Container>
			</Col>
		</Row>
	);
};
