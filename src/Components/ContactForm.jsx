import { Button, Col, Form, Row } from "react-bootstrap";

export const ContactForm = () => {
	return (
		<Col className='mx-3'>
			<Form className='d-grid gap-3'>
				<Row>
					<input type='text' name='name' id='nameInput' placeholder='Nombre completo' />
				</Row>
				<Row>
					<input type='email' name='email' id='emailInput' placeholder='Correo electrónico' />
				</Row>
				<Row className='d-flex justify-content-between'>
					<Col sm={6} className='p-0'>
						<input type='tel' name='phoneNumber' id='phoneInput' placeholder='Número telefónico' className='w-100' />
					</Col>
					<Col sm={6} className='d-flex justify-content-end p-0'>
						<input type='text' name='PhoneCarrier' placeholder='Compañía' className='w-75 ' />
					</Col>
				</Row>
				<Row>
					<input type='text' name='Comentary' placeholder='Comentarios' />
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
