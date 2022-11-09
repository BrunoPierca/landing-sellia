import { Col, Container, Row } from "react-bootstrap";

import selliaPhone from "../images/selliaPhone.png";

export const ProductsSection = () => {
	return (
		<section id='Products'>
			<Row className='mx-5'>
				<Col sm={4}>
					<h2>Un producto para cada necesidad</h2>
					<Col sm={12}>
						<Row>
							<Col>
								<h4>Franquicias</h4>
							</Col>
							<Col>
								<h4>Enterprise</h4>
							</Col>
						</Row>
						<Row>
							<Col>
								<h4>Trivias</h4>
							</Col>
							<Col>
								<h4>RRHH</h4>
							</Col>
						</Row>
						<Row>
							<Col>
								<h4>Hazlo a tu medida</h4>
							</Col>
						</Row>
					</Col>
				</Col>
				<Col sm={8}>
					<Row>
						<Col sm={8}>
							<h2>Productos</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, amet donec morbi vitae semper at vulputate. Elementum vitae,
								mattis orci ultrices scelerisque sed. Magna praesent lectus quisque diam vivamus sed. Amet, egestas malesuada tortor augue
								pellentesque. Ut aliquam blandit vulputate pulvinar ipsum risus. Nulla neque augue et tempor viverra odio facilisi sed.
								Interdum lorem urna augue in posuere ut quis id commodo. Arcu orci, neque et elementum. Placerat lacus est lobortis ut.
								Aliquet in a et pulvinar eu rhoncus at quis. Venenatis, diam diam in sed integer. Aliquet at luctus pellentesque blandit
								dignissim ipsum.
							</p>
						</Col>
						<Col sm={4}>
							<img src={selliaPhone} className='img-fluid' alt='Sellia phone' />
						</Col>
					</Row>
				</Col>
			</Row>
		</section>
	);
};
