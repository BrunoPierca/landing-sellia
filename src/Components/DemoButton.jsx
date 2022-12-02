import { useState } from "react";
import { Button } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

export const DemoButton = () => {
	const [hidden, setHidden] = useState(true);
	const toggleVisibility = () => {
		setHidden(!hidden);
	};
	return (
		<div id='demo_container'>
			<div
				// ${hidden === true ? "animate__fadeInUp" : ""}
				className={`social-icons animate__animated 
				
				`}
				// style={{ display: hidden === true ? "" : "none" }}
			>
				<SocialIcon
					className={`animate__animated  ${
						hidden === true ? "animate__delay-5s animate__rotateInDownRight" : "animate__rotateOutDownRight"
					}`}
					url='https://api.whatsapp.com/send/?phone=523317878856&text&type=phone_number&app_absent=0/'
					style={{ height: 35, width: 35 }}
					bgColor='green'
					color='white'
				/>
				<SocialIcon
					className={`animate__animated  ${
						hidden === true ? "animate__delay-4s animate__rotateInDownRight" : "animate__rotateOutDownRight"
					}`}
					url='https://t.me/selliaonlinebot'
					style={{ height: 35, width: 35 }}
					bgColor='blue'
				/>
				<SocialIcon
					className={`animate__animated  ${
						hidden === true ? "animate__delay-2s animate__rotateInDownRight" : "animate__rotateOutDownRight"
					}`}
					url='https://www.facebook.com/sellia.business'
					style={{ height: 35, width: 35 }}
					bgColor='blue'
				/>
			</div>
			<Button onClick={toggleVisibility} id='demo_button' className='fw-700'>
				Solicitar una Demo
			</Button>
		</div>
	);
};
