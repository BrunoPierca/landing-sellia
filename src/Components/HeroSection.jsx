import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export const HeroSection = () => {
	return (
		<section className='py-3 mx-5' id='HeroSection'>
			<Row>
				<Col sm={9}>
					<h1>
						Convierte una conversación en una <strong>oportunidad</strong> de <span>negocio</span>{" "}
					</h1>
					<p>
						La plataforma de comunicación con el cliente de Sellia te ayuda a mantener satisfechos a tus clientes, ayuda a que tu empresa
						siempre esté disponible.
					</p>
					<Button>Solicitar una demo</Button>
				</Col>
				<Col sm={3}>
					<Image src='https://images.squarespace-cdn.com/content/v1/55fc0004e4b069a519961e2d/1442590746571-RPGKIXWGOO671REUNMCB/image-asset.gif?format=300w' />
				</Col>
			</Row>
		</section>
	);
};
