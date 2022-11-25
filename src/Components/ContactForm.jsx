import { Button, Col, Form, Row } from "react-bootstrap";

export const ContactForm = () => {
	return (
		<Col className='mx-3' id='contact_form'>
			<Form className='d-grid gap-3'>
				<Row>
					<input className='px-3 py-2' type='text' name='name' id='nameInput' placeholder='Nombre completo' />
				</Row>
				<Row>
					<input className='px-3 py-2' type='email' name='email' id='emailInput' placeholder='Correo electrónico' />
				</Row>
				<Row>
					<Col sm={6} className='p-0'>
						<input className='px-3 py-2 w-100' type='tel' name='phoneNumber' id='phoneInput' placeholder='Número telefónico' />
					</Col>
					<Col sm={6} className='mt-md-0'>
						<input className='py-2' type='text' name='PhoneCarrier' placeholder='Compañía' />
					</Col>
				</Row>
				<Row>
					<input className='py-2 input-comentarios' type='text' name='Comentary' placeholder='Comentarios' />
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
