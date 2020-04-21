import React from 'react';
import '../css/Interests.css';
import { Button } from 'semantic-ui-react';

const Interests = () => {
	const interests = [
		'Product Development',
		'UI/UX Design',
		'Data Visualization',
		'Education',
		'Health Tech',
		'Social Impact',
		'Foreign Languages',
		'Photography',
		'Video Games',
		'Fashion',
		'Real Estate'
	];

	return (
		<div className="interests">
			<h1>
				<span className="section_header">Interests</span>
			</h1>
			<div className="interests-container">
				{interests.map(i => (
					<Button className="interest-item non-click" inverted size="medium" key={i} color="red">
						{i}
					</Button>
				))}
			</div>
		</div>
	);
};

export default Interests;
