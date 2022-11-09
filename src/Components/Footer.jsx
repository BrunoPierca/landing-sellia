import React from "react";
import { Col, Row } from "react-bootstrap";

export const Footer = () => {
	return (
		<section id='Footer'>
			<Row className='mx-3 py-5'>
				<Col sm={5}>
					<img src='/images/SelliaLogoFooter.png' className='img-fluid' />
					<p>Copyright © 2022 Sellia, All rights reserved.</p>
				</Col>
				<Col sm={5}>
					<Row>
						<a href='#'>¿Quienes somos?</a>
					</Row>
					<Row>
						<a href='#'>Productos</a>
					</Row>
					<Row>
						<a href='#'>Blog</a>
					</Row>
					<Row>
						<a href='#'>Contacto</a>
					</Row>
				</Col>
				<Col sm={2}>
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
			</Row>
		</section>
	);
};
