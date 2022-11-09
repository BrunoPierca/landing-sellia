import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export const Blog = () => {
	return (
		<section id='blog'>
			<Row className='mx-5'>
				<Col sm={6} className='p-0 d-flex align-items-center'>
					<Container>
						<h2>Mantente informado.</h2>
						<p>
							<strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</strong>
						</p>
						<Button>Visitar el blog</Button>
					</Container>
				</Col>
				<Col sm={6} className='p-0'>
					<img src='/images/BlogScreen.png' alt='blog Screenshot' className='img-fluid' style={{ objectFit: "contain" }} />
				</Col>
			</Row>
		</section>
	);
};
