import React from 'react';
import Bio from './Bio';
import Interests from './Interests';

const About = ({ navigate }) => {
	return (
		<div id="about" onMouseOver={navigate}>
			<Bio />
			<Interests />
		</div>
	);
};

export default About;
