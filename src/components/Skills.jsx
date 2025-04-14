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
				name: 'TypeScript',
				proficient: true
			},
			{
				name: 'Python',
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
				name: 'Java',
				proficient: false
			},
			{
				name: 'Go',
				proficient: false
			},
			{
				name: 'Ruby',
				proficient: false
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
				proficient: true
			},
			{
				name: 'FastAPI',
				proficient: true
			},
		],
		Frontend: [
			{
				name: 'React',
				proficient: true
			},
			{
				name: 'Redux',
				proficient: true
			},
			{
				name: 'GraphQL',
				proficient: true
			},
			{
				name: 'Next.js',
				proficient: true
			},
			{
				name: 'Tailwind CSS',
				proficient: true
			},
			{
				name: 'jQuery',
				proficient: true
			},
			{
				name: 'D3.js',
				proficient: true
			},
			{
				name: 'Angular',
				proficient: false
			},
			{
				name: 'Vue',
				proficient: false
			},
		],
		'UI Libraries': [
			{
				name: 'Bootstrap',
				proficient: true
			},
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
				proficient: false
			},
			{
				name: 'Material UI',
				proficient: false
			},
		],
		Mobile: [
			{
				name: 'React Native',
				proficient: false
			}
		],
		Desktop: [
			{
				name: 'Electron.js',
				proficient: false
			}
		],
		Databases: [
			{
				name: 'PostgreSQL',
				proficient: true
			},
			{
				name: 'MongoDB',
				proficient: true
			},
			{
				name: 'BigQuery',
				proficient: false
			},
			{
				name: 'Redis',
				proficient: false
			}
		],
		"Tools & Platforms": [
			{
				name: 'Git',
				proficient: true
			},
			{
				name: 'Docker',
				proficient: true
			},
			{
				name: 'Heroku',
				proficient: true
			},
			{
				name: 'Google Cloud Platform',
				proficient: false
			},
			{
				name: 'Kubernetes',
				proficient: false
			},
			{
				name: 'Temporal',
				proficient: false
			},
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
