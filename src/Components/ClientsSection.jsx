import React from "react";
import { Carousel, Col, Row, Button, Stack } from "react-bootstrap";

import grupoBimbo from "../images/grupoBimbo.png";

export const ClientsSection = () => {
	const clientsInfo = {
		clientsPerSlide: 5,
		clients: [{ name: "Bimbo", image: grupoBimbo }],
	};

	return (
		<section id='OurClients'>
			<Row className='py-5 mx-5'>
				<Col md='3'>
					<p>
						<i>Icon</i> Hacemos equipo con
					</p>
				</Col>
				<Col md='7'>
					<Carousel controls={false} indicators={false}>
						<Carousel.Item>
							<Stack direction='horizontal' className='h-100 justify-content-center align-items-center' gap={3}>
								<img width='180px' height='82px' className='d-block w-100' src={grupoBimbo} alt={"Bimbo Logo"} />
								<img width='180px' height='82px' className='d-block w-100' src={grupoBimbo} alt={"Bimbo Logo"} />
								<img width='180px' height='82px' className='d-block w-100' src={grupoBimbo} alt={"Bimbo Logo"} />
								<img width='180px' height='82px' className='d-block w-100' src={grupoBimbo} alt={"Bimbo Logo"} />
							</Stack>
						</Carousel.Item>
						<Carousel.Item>
							<Stack direction='horizontal' className='h-100 justify-content-center align-items-center' gap={3}>
								<img width='180px' height='52px' className='d-block w-100' src={grupoBimbo} alt={"Bimbo Logo"} />
								<img width='180px' height='52px' className='d-block w-100' src={grupoBimbo} alt={"Bimbo Logo"} />
								<img width='180px' height='52px' className='d-block w-100' src={grupoBimbo} alt={"Bimbo Logo"} />
								<img width='180px' height='52px' className='d-block w-100' src={grupoBimbo} alt={"Bimbo Logo"} />
							</Stack>
						</Carousel.Item>
					</Carousel>
				</Col>
				<Col md='2'>
					<Button>Solicitar una Demo</Button>
				</Col>
			</Row>
		</section>
	);
};
