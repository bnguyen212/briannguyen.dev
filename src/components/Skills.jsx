import React from 'react';
import '../css/Skills.css';
import { Button } from 'semantic-ui-react';

const Skills = ({ screenWidth, navigate }) => {
	const skills = {
		'Foreign Language': [
			{
				name: 'Vietnamese',
				proficient: true
			}
		],
		'Programming Languages': [
			{
				name: 'JavaScript',
				proficient: true
			},
			{
				name: 'TypeScript',
				proficient: true
			},
			{
				name: 'HTML5',
				proficient: true
			},
			{
				name: 'CSS3',
				proficient: true
			},
			{
				name: 'Python',
				proficient: false
			},
			{
				name: 'Java',
				proficient: false
			}
		],
		Frontend: [
			{
				name: 'React & Redux',
				proficient: true
			},
			{
				name: 'Angular 2',
				proficient: true
			},
			{
				name: 'GraphQL',
				proficient: true
			},
			{
				name: 'jQuery',
				proficient: true
			},
			{
				name: 'Bootstrap',
				proficient: true
			},
			{
				name: 'D3.js',
				proficient: false
			}
		],
		'UI Libraries': [
			{
				name: 'Semantic UI',
				proficient: true
			},
			{
				name: 'Ant Design',
				proficient: true
			},
			{
				name: 'Clarity Design',
				proficient: true
			},
			{
				name: 'Material UI',
				proficient: false
			}
		],
		Mobile: [
			{
				name: 'React Native',
				proficient: true
			}
		],
		Backend: [
			{
				name: 'Node.js',
				proficient: true
			},
			{
				name: 'Socket.io',
				proficient: true
			},
			{
				name: 'Flask',
				proficient: false
			},
			{
				name: 'FastAPI',
				proficient: false
			},
			{
				name: 'Django',
				proficient: false
			}
		],
		Database: [
			{
				name: 'MongoDB',
				proficient: true
			},
			{
				name: 'PostgreSQL',
				proficient: true
			},
			{
				name: 'AWS',
				proficient: false
			}
		],
		DevOps: [
			{
				name: 'Git',
				proficient: true
			},
			{
				name: 'Heroku',
				proficient: true
			},
			{
				name: 'Docker',
				proficient: false
			}
		],
		'Other Tools': [
			{
				name: 'Asana',
				proficient: true
			},
			{
				name: 'Airtable',
				proficient: true
			},
			{
				name: 'Agile / Scrum',
				proficient: true
			},
			{
				name: 'Sketch',
				proficient: false
			}
		]
	};

	return (
		<div id="skills" onMouseOver={navigate}>
			<div className={screenWidth > 830 ? 'category' : 'category-mobile'}>
				<h1 className={screenWidth > 830 ? 'skills-header' : 'skills-header-mobile'}>
					<span className="section_header">Skills</span>
				</h1>
				<div className="legend">
					<Button.Group size="medium">
						<Button className="non-click" color="green">
							Proficient
						</Button>
						<Button className="non-click" color="violet">
							Basic
						</Button>
					</Button.Group>
				</div>
			</div>
			{Object.keys(skills).map(category => (
				<div key={category} className={screenWidth > 830 ? 'category' : 'category-mobile'}>
					<h3 className={screenWidth > 830 ? 'category-name' : 'category-name-mobile'}>
						{category}
					</h3>
					<div className="skills-container">
						{skills[category].map(skill => {
							return (
								<Button
									key={skill.name}
									className="non-click skill-item"
									inverted
									color={skill.proficient ? 'green' : 'violet'}>
									{skill.name}
								</Button>
							);
						})}
					</div>
				</div>
			))}
		</div>
	);
};

export default Skills;
