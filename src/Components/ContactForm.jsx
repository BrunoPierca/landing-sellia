import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "../hooks";
const formData = {
	name: "",
	email: "",
	phoneNumber: "",
	carrier: "",
	comments: "",
};
export const ContactForm = () => {
	const { name, email, phoneNumber, carrier, comments, onInputChange, formState } = useForm(formData);

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(name, email, phoneNumber, carrier, comments);
	};

	return (
		<Col className='mx-3' id='contact_form'>
			<Form className='d-grid gap-3' onSubmit={(e) => onSubmit(e)}>
				<Row>
					<input
						className='px-3 py-2'
						type='text'
						name='name'
						id='nameInput'
						placeholder='Nombre completo'
						value={name}
						onChange={onInputChange}
					/>
				</Row>
				<Row>
					<input
						className='px-3 py-2'
						type='email'
						name='email'
						id='emailInput'
						placeholder='Correo electrónico'
						value={email}
						onChange={onInputChange}
					/>
				</Row>
				<Row>
					<Col sm={6} className='p-0'>
						<input
							className='px-3 py-2 w-100'
							type='tel'
							name='phoneNumber'
							id='phoneInput'
							placeholder='Número telefónico'
							value={phoneNumber}
							onChange={onInputChange}
						/>
					</Col>
					<Col sm={6} className='mt-md-0'>
						<input className='py-2' type='text' name='carrier' placeholder='Compañía' value={carrier} onChange={onInputChange} />
					</Col>
				</Row>
				<Row>
					<input
						className='py-2 input-comentarios'
						type='text'
						name='comments'
						placeholder='Comentarios'
						value={comments}
						onChange={onInputChange}
					/>
				</Row>
				<Row>
					<Button className='background-green border-none ' type='submit'>
						Enviar
					</Button>
				</Row>
			</Form>
		</Col>
	);
};
