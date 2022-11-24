import { useState } from "react";
import ReactCardFlip from "react-card-flip";

export const FeatureCard = ({ feature, description, icon }) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const handleClick = (e) => {
		e.preventDefault();
		setIsFlipped(!isFlipped);
	};

	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
			<div key='front' onClick={handleClick} className='features-grid-item h-100 py-3 justify-content-center align-items-center'>
				{icon}
				<p className='w-100 fw-500 mt-1'>{feature}</p>
			</div>

			<div key='back' onClick={handleClick} className='features-grid-item h-100 py-3 justify-content-center align-items-center'>
				{description}
			</div>
		</ReactCardFlip>
	);
};
