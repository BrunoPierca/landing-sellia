import React from "react";
import { Container, Row } from "react-bootstrap";

export const AboutUsSection = () => {
	return (
		<section id='AboutUs' className='text-center py-5'>
			<Container>
				<Row>
					{/* Icon */}
					<i>Icon</i>
					<p>SOBRE NOSOTROS</p>
					<h2>
						<strong>Hablar con una empresa</strong> <br /> debe ser como chatear con un amigo
					</h2>
					<p>
						Sellia es la plataforma de comunicación con el cliente que ayuda a las empresas a estar siempre disponibles frente a
						consumidores que necesitan soluciones rápidamente. Desde consultas hasta ventas, conecta a través de las apps que las personas
						usan todos los días.
					</p>
				</Row>
			</Container>
		</section>
	);
};
