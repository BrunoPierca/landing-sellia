import React from "react";
import { Col, Row } from "react-bootstrap";

export const Support = () => {
	return (
		<section id='support' className='mx-5'>
			<Row>
				<Col sm={5}>
					<img src='/images/selliaPhone.png' alt='Sellia Phone' />
				</Col>
				<Col sm={7}>
					<h2>
						El <strong>soporte</strong> nos distingue
					</h2>

					<Row>
						<i>Icon</i>Soporte personalizado
					</Row>
					<Row>
						<i>Icon</i>Sin costo extra
					</Row>
					<Row>
						<i>Icon</i>Sin limite de horas
					</Row>
					<Row>
						<i>Icon</i>Con personal que conoce tu proyecto y tus procesos.
					</Row>
					<Row>
						<i>Icon</i>Chat en vivo.
					</Row>
					<Row>
						<i>Icon</i>Monitoreo constante del comportamiento y desempeño de la plataforma.
					</Row>
				</Col>
			</Row>
		</section>
	);
};
