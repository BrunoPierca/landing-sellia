import React from "react";
import { Carousel, Col, Row, Button, Stack } from "react-bootstrap";

export const Clients = () => {
	const clientsInfo = {
		clientsPerSlide: 5,
		clients: [{ name: "Bimbo", image: "/images/grupoBimbo.png" }],
	};

	return (
		<section id='OurClients'>
			<Row className='py-5 mx-5 align-items-center'>
				<Col md='3'>
					<p>
						{/* <span className='circleAroundSpan'>
							<i className='fa-solid fa-award'></i>
						</span> */}
						<svg width='41' height='41' viewBox='0 0 41 41' fill='none' xmlns='http://www.w3.org/2000/svg' className='me-2'>
							<g clipPath='url(#clip0_35_3812)'>
								<path
									d='M20.4998 10.9333C19.3527 10.9348 18.2315 11.2744 17.2763 11.9098C16.3212 12.5451 15.5746 13.448 15.1299 14.5054C14.6853 15.5629 14.5622 16.728 14.7762 17.855C14.9903 18.982 15.5318 20.0209 16.3332 20.8417V28.4333C16.3336 28.5754 16.3703 28.715 16.4399 28.8389C16.5095 28.9627 16.6095 29.0667 16.7306 29.141C16.8517 29.2154 16.9897 29.2575 17.1316 29.2634C17.2736 29.2694 17.4147 29.2389 17.5415 29.175L20.4998 27.7L23.4582 29.175C23.5743 29.2345 23.7027 29.2659 23.8332 29.2667C23.9892 29.2672 24.1422 29.2239 24.2748 29.1417C24.3949 29.0666 24.4939 28.9622 24.5625 28.8383C24.631 28.7143 24.6668 28.575 24.6665 28.4333V20.8417C25.4679 20.0209 26.0094 18.982 26.2235 17.855C26.4375 16.728 26.3144 15.5629 25.8698 14.5054C25.4251 13.448 24.6785 12.5451 23.7234 11.9098C22.7682 11.2744 21.647 10.9348 20.4998 10.9333ZM22.9998 27.0833L20.8748 26.025C20.7585 25.9664 20.6301 25.9359 20.4998 25.9359C20.3696 25.9359 20.2412 25.9664 20.1248 26.025L17.9999 27.0833V22.0333C18.5273 22.2824 19.0891 22.4509 19.6665 22.5333V23.4333C19.6665 23.6544 19.7543 23.8663 19.9106 24.0226C20.0669 24.1789 20.2788 24.2667 20.4998 24.2667C20.7209 24.2667 20.9328 24.1789 21.0891 24.0226C21.2454 23.8663 21.3332 23.6544 21.3332 23.4333V22.5333C21.9106 22.4509 22.4724 22.2824 22.9998 22.0333V27.0833ZM20.4998 20.9333C19.6758 20.9333 18.8702 20.689 18.185 20.2311C17.4998 19.7733 16.9657 19.1226 16.6504 18.3612C16.335 17.5998 16.2525 16.7621 16.4132 15.9538C16.574 15.1456 16.9709 14.4031 17.5536 13.8204C18.1363 13.2377 18.8787 12.8408 19.687 12.6801C20.4952 12.5193 21.333 12.6018 22.0944 12.9172C22.8557 13.2325 23.5065 13.7666 23.9643 14.4518C24.4221 15.137 24.6665 15.9426 24.6665 16.7667C24.6665 17.8718 24.2275 18.9316 23.4461 19.713C22.6647 20.4944 21.6049 20.9333 20.4998 20.9333Z'
									fill='#28D296'
								/>
							</g>
							<rect x='1.5' y='1.09998' width='38' height='38' rx='19' stroke='#28D296' strokeWidth='2' />
							<defs>
								<clipPath id='clip0_35_3812'>
									<rect width='20' height='20' fill='white' transform='translate(10.5 10.1)' />
								</clipPath>
							</defs>
						</svg>
						Hacemos equipo con
					</p>
				</Col>
				<Col md='7'>
					<Carousel controls={false} indicators={false}>
						<Carousel.Item>
							<Stack direction='horizontal' className='h-100 justify-content-center align-items-center' gap={3}>
								<img width='180px' height='82px' className='d-block w-100' src='/images/grupoBimbo.png' alt={"Bimbo Logo"} />
								<img width='180px' height='82px' className='d-block w-100' src='/images/grupoBimbo.png' alt={"Bimbo Logo"} />
								<img width='180px' height='82px' className='d-block w-100' src='/images/grupoBimbo.png' alt={"Bimbo Logo"} />
								<img width='180px' height='82px' className='d-block w-100' src='/images/grupoBimbo.png' alt={"Bimbo Logo"} />
							</Stack>
						</Carousel.Item>
						<Carousel.Item>
							<Stack direction='horizontal' className='h-100 justify-content-center align-items-center' gap={3}>
								<img width='180px' height='52px' className='d-block w-100' src='/images/grupoBimbo.png' alt={"Bimbo Logo"} />
								<img width='180px' height='52px' className='d-block w-100' src='/images/grupoBimbo.png' alt={"Bimbo Logo"} />
								<img width='180px' height='52px' className='d-block w-100' src='/images/grupoBimbo.png' alt={"Bimbo Logo"} />
								<img width='180px' height='52px' className='d-block w-100' src='/images/grupoBimbo.png' alt={"Bimbo Logo"} />
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