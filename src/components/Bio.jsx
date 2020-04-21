import React from 'react';
import '../css/Bio.css';
import { Icon } from 'semantic-ui-react';
import profile from '../assets/profile.jpg';

const Bio = () => {
	return (
		<div id="biography">
			<h1>
				<span className="section_header">About Me</span>
			</h1>
			<img src={profile} className="profile" alt="Brian Nguyen" height="250px" />
			<div className="text-intro loc">
				<Icon fitted={true} size="large" color="red" name="map marker alternate" />{' '}
				<span className="location">San Francisco, CA</span>
			</div>
			<div className="text-intro">
				I graduated from the{' '}
				<a className="url" href="//www.upenn.edu" target="_blank" rel="noopener noreferrer">
					<strong>University of Pennsylvania</strong>
				</a>{' '}
				with a BA in Economics and Linguistics. I previously worked in IT Support and EB-5 Investor
				Relations before switching to Software Development. My journey as a developer began in 2018
				after an immersive semester of software engineering at the{' '}
				<strong>Horizons School of Technology</strong>, where I also worked as a Junior Instructor
				for the subsequent summer cohorts.
			</div>
			<div className="text-intro">
				As a software engineer, I aspire to build sustainable products that increase human
				productivity and facilitate personal and/or collective growth. I am especially fond of apps
				that allow people to be more efficient in their daily lives, hence my two favorites are{' '}
				<a className="url" href="//1password.com" target="_blank" rel="noopener noreferrer">
					<i>1Password</i>
				</a>{' '}
				and{' '}
				<a className="url" href="//www.grammarly.com" target="_blank" rel="noopener noreferrer">
					<i>Grammarly</i>
				</a>
				. A few of the most exciting projects I have worked on are definitely ones I still
				frequently use 'til this day, be sure to{' '}
				<strong>
					check out my Chrome extension <i>JobMate</i> below
				</strong>
				!
			</div>
			<div className="text-intro">
				In my professional experience, I often gravitate towards frontend development simply because
				I enjoy creating beautiful UIs that enhance user workflows. My friends describe me as a
				5-year-old at heart, always curious to learn something new everyday, hence I am also looking
				for opportunities to get involved on the backend and infrastructure sides whenever I can.
				Let’s chat if you share any of my interests listed below and/or have a project idea you
				would like to collaborate on (extra kudos if you want to discuss that over boba tea)!
			</div>
			<div className="text-intro">
				<strong>
					I am actively seeking full-time SWE opportunities (frontend & full-stack) and would love
					to chat further if your company is hiring!
				</strong>
			</div>
		</div>
	);
};

export default Bio;
