var nav = {
	home: "Home",
	about: "About",
	skills: "Skills",
	experience: "Experience",
	projects: "Projects",
	contact: "Contact"
};
var hero = {
	greeting: "Hello, I'm",
	name: "Muhammad HamaSaeed",
	title: "Teacher | Front-end Developer | Codify Co-Founder",
	description: "Passionate about technology and education, I aim to innovate and inspire through my work in software development and teaching."
};
var about = {
	title: "About Me",
	description: "I am a Computer Engineering graduate from Komar University of Science and Technology. With experience in diverse roles such as IT Help Desk, teaching, and software development, I've developed strong adaptability and problem-solving skills. Currently, I am a full-time teacher delivering computer-related courses and a co-founder of Codify, a development group focused on app/website development and Arduino projects."
};
var skills = {
	title: "Technical Skills",
	frontend: "Frontend Development",
	backend: "Backend & Database",
	tools: "Tools & Others",
	hardware: "Hardware & IoT"
};
var experience = {
	title: "Work Experience",
	current: "Current",
	jobs: {
		codify: {
			title: "Software Developer & Social Media Manager",
			company: "Codify",
			location: "Sulaymaniyah, Iraq",
			period: "Dec 2023 - Present",
			description: "Working as a front-end developer and managing social media pages."
		},
		runaki: {
			title: "Computer Science Lecturer",
			company: "Runaki Institute",
			location: "Sulaymaniyah, Iraq",
			period: "Sep 2022 - Present",
			description: "Teaching computer-related courses and delivering lectures."
		},
		liya: {
			title: "IT & Maintenance",
			company: "Liya Dry Clean",
			location: "Sulaymaniyah, Iraq",
			period: "Mar 2023 - Sep 2023",
			description: "Handled IT support and maintenance operations."
		}
	}
};
var education = {
	title: "Education",
	degree: "Bachelor of Computer Engineering",
	university: "Komar University of Science and Technology",
	period: "2018 - 2022",
	location: "Sulaymaniyah, Iraq"
};
var projects = {
	title: "Featured Projects",
	viewProject: "View Project",
	items: {
		codify: {
			name: "Codify Iraq",
			description: "A comprehensive e-commerce platform for tech products and services, featuring modern design and seamless user experience.",
			tags: [
				"E-commerce",
				"Vue.js",
				"Web Development"
			]
		},
		ngk: {
			name: "NGK Lab",
			description: "Complete management system for LPG company operations, including inventory tracking, client management, and automated reporting.",
			tags: [
				"Management System",
				"Nuxt.js",
				"Enterprise"
			]
		},
		azady: {
			name: "Azady",
			description: "Modern laundry and car wash management system with real-time tracking, payment processing, and customer notifications.",
			tags: [
				"SaaS",
				"Management",
				"Automation"
			]
		}
	}
};
var contact = {
	title: "Get In Touch",
	description: "Feel free to reach out for collaborations or just a friendly chat!"
};
const en = {
	nav: nav,
	hero: hero,
	about: about,
	skills: skills,
	experience: experience,
	education: education,
	projects: projects,
	contact: contact
};

export { about, contact, en as default, education, experience, hero, nav, projects, skills };
//# sourceMappingURL=en.mjs.map
