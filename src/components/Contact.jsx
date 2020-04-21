import React from 'react';
import '../css/Contact.css';
import gmail from '../assets/Gmail-logo.png';
import linkedin from '../assets/LinkedIn-Logo.png';
import github from '../assets/github-logo.png';

const Contact = ({ navigate, screenWidth }) => {
	const links = [
		{
			url: 'mailto:contact@briannguyen.dev',
			name: 'GMail',
			img: gmail
		},
		{
			url: '//linkedin.com/in/brian-trong-nguyen',
			name: 'LinkedIn',
			img: linkedin
		},
		{
			url: '//github.com/bnguyen212',
			name: 'GitHub',
			img: github
		}
	];
	return (
		<div id="contact" onMouseOver={navigate}>
			<h1 className="section_header"> Let 's stay in touch</h1>{' '}
			<div className="links">
				{links.map(item => {
					return (
						<a key={item.name} href={item.url} rel="noopener noreferrer" target="_blank">
							<img
								src={item.img}
								alt={item.name}
								height={screenWidth > 600 ? '75x' : '50x'}
								className="contact-logo"
							/>
						</a>
					);
				})}
			</div>
			<h3 className="copyright"> © {new Date().getFullYear()} briannguyen.dev </h3>{' '}
		</div>
	);
};

export default Contact;
