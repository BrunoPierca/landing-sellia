import React from "react";
import { Col, Row, Stack } from "react-bootstrap";

export const FeaturesSection = () => {
	return (
		<section id='featuresSection' className='text-center py-5 mx-5'>
			<Row>
				<h2>
					Sellia lo tiene <strong>todo.</strong>
				</h2>
				<Col sm={7} className='py-5'>
					<Row>
						<Col sm={4}>
							<p>Chatbot</p>
						</Col>
						<Col sm={4}>
							<p>Seguridad</p>
						</Col>
						<Col sm={4}>
							<p>Data</p>
						</Col>
					</Row>
					<Row>
						<Col sm={4}>
							<p>Conexión oficial con grupo Meta</p>
						</Col>
						<Col sm={4}>
							<p>Conectividad</p>
						</Col>
						<Col sm={4}>
							<p>Marketplace integrado</p>
						</Col>
					</Row>
					<Row>
						<Col sm={4}>
							<p>Autofestión</p>
						</Col>
						<Col sm={4}>
							<p>Omnicanal</p>
						</Col>
						<Col sm={4}>
							<p>Envíos masivos</p>
						</Col>
					</Row>
				</Col>
				<Col sm={5}>
					<img className='img-fluid' src='/images/mkUp.png' alt='Marketing Picture' />
				</Col>
			</Row>
		</section>
	);
};
