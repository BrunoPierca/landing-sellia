import { Button, Col, Container, Row } from "react-bootstrap";

// Add animation

export const Blog = () => {
	return (
		<section id='blog'>
			<div className='blog-animation-container '>
				<div className='blog-animation'>
					<p className='mantente-informado fw-700'>Mantente informado.</p>
					<p className='mantente-informado inverted fw-700'>Mantente informado.</p>
				</div>
				<div className='blog-animation animation2'>
					<p className='mantente-informado fw-700'>Mantente informado.</p>
					<p className='mantente-informado inverted fw-700'>Mantente informado.</p>
				</div>
			</div>

			<Row className='p-5 pb-0 mb-0'>
				<Col sm={6} className='p-0 d-flex align-items-center mb-5 mb-md-0'>
					<Container fluid>
						<h2 className='fw-700 blue'>Mantente informado.</h2>
						<p>
							<strong className='fw-700 light-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</strong>
						</p>
						<Button className='blog-button py-2 px-4'>Visitar el blog</Button>
					</Container>
				</Col>
				<Col sm={6} className='p-0 m-0 mt-md-5 mt-lg-0'>
					<img src='./images/BlogScreen.png' alt='blog Screenshot' className='img-fluid' style={{ objectFit: "contain" }} />
				</Col>
			</Row>
		</section>
	);
};
