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
				Hey, I’m Brian — a senior software engineer with a background in Economics and Linguistics.
			</div>
			<div className="text-intro">
				Before diving into software development, I worked in IT Support and Investor Relations. These days, I’m driven to build practical tools that help others do more, learn faster, and grow together. I’m especially drawn to tools that make everyday life more efficient — think 1Password or Grammarly. That same spirit inspired some of my favorite side projects, <strong>check out my Chrome extension <i>JobMate</i> below</strong>!
			</div>
			<div className="text-intro">
				I started my career as a frontend developer at a quantum computing startup, where I transformed complex, error-prone scripts into a user-friendly web application that helped physicists streamline their daily workflows. Most recently, I’ve been building integration solutions at a healthcare automation startup, improving how health systems operate and deliver care. I’ve taken products from 0 to 1 as a solo engineer and led small teams to build scalable, maintainable systems in fast-paced environments. Across these roles, I’ve developed a strong focus on thoughtful design, clean architecture, and solving real-world problems with practical solutions.
			</div>
			<div className="text-intro">
				If you share any of my interests or have a project idea in mind, let’s connect — <strong>and yes, I’m currently searching for my next opportunity</strong>!
			</div>
		</div>
	);
};

export default Bio;
