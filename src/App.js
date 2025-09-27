import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from "framer-motion";
import {
  Atom,
  Database,
  Feather,
  GitFork,
  Github,
  Mail,
  Linkedin,
  Instagram,
  ExternalLink,
  Circle,
  Code,
  Rocket,
  Globe,
  PlusCircle,
} from 'lucide-react';

// Official LeetCode Logo (Bracket + Flame) 
const LeetCodeIcon = () => (
  <a
          href="https://leetcode.com/u/Sanskriti_J/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
            alt="LeetCode"
            className="w-7 h-7"
          />
        </a>
);

// Official GeeksforGeeks "Double G" Logo
const GFGIcon = () => (
<a
          href="https://www.geeksforgeeks.org/user/jainsanskzsa8/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
            alt="GeeksforGeeks"
            className="w-7 h-7"
          />
        </a>
);


// New 3D Blob Component for the background
const Blob = () => {
  const mesh = useRef();
  useFrame(({ clock, mouse }) => {
    if (mesh.current) {
      mesh.current.rotation.x = clock.getElapsedTime() * 0.1;
      mesh.current.rotation.y = clock.getElapsedTime() * 0.1;
      mesh.current.position.x = Math.sin(mouse.x * Math.PI) * 0.5;
      mesh.current.position.y = Math.cos(mouse.y * Math.PI) * 0.5;
    }
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[2, 10]} />
      <meshStandardMaterial
        color="#4B5563"
        emissive="#0A0A0A"
        roughness={0.5}
        metalness={0.8}
      />
    </mesh>
  );
};

// Centralized Data for easier content management
const portfolioData = {
  name: "Sanskriti Jain",
  intro: {
    heading: "Crafting Digital Experiences, One Line of Code at a Time.", // Updated headline
    typedStrings: [
      "React.js Enthusiast",
      "Algorithm Problem Solver",
      "Open Source Contributor",
      "Tech Innovator",
    ],
    tagline: "I am a B.Tech Computer Science student passionate about crafting clean code and elegant solutions that bring ideas to life. From front-end interfaces to back-end logic, I love solving complex challenges and creating seamless digital experiences.",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/sanskriti-jain-5aa670284/",
    github: "https://github.com/Sanskriti1710",
    email: "mailto:jainsanskriti819@gmail.com",
    leetcode: "https://leetcode.com/u/Sanskriti_J/",
    gfg: "https://www.geeksforgeeks.org/user/jainsanskzsa8/",
    instagram: "https://www.instagram.com/sanskriti_jain_04/",
  },
// Skills have been refactored into categories for better organization
skills: {
  "Frontend": [
    { name: 'React.js', icon: <Atom />, description: 'Building modern, single-page applications with a component-based approach.' },
    { name: 'Javascript', icon: <Code />, description: 'Writing dynamic, interactive logic for web applications.' },
    { name: 'Bootstrap', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png" alt="Bootstrap Icon" className="w-6 h-6" />, description: 'Quickly creating responsive, mobile-first designs.' },
    { name: 'Tailwind CSS', icon: <Feather />, description: 'Designing stunning and responsive UI with a utility-first approach.' },
    { name: 'Three.js', icon: <img src="https://threejs.org/files/favicon.ico" alt="Three.js Icon" className="w-6 h-6" />, description: 'Creating 3D graphics and animations for the web.' },
  ],
  "Backend": [
    { name: 'Node.js', icon: <Circle />, description: 'Developing efficient and scalable server-side applications.' },
    { name: 'Express.js', icon: <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" alt="Express Icon" className="w-6 h-6" />, description: 'Developing web applications and APIs with Express.js.' },
    { name: 'Java', icon: <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/121px-Java_programming_language_logo.svg.png?20220623223126" alt="Java Icon" className="w-6 h-6" />, description: 'Experienced in object-oriented programming with Java.' },
    { name: 'PHP', icon: <img src="https://www.php.net/images/logos/php-logo.svg" alt="PHP Icon" className="w-6 h-6" />, description: 'Developing server-side web applications with PHP.' },
    { name: 'Firebase', icon: <img src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png" alt="Firebase Icon" className="w-6 h-6" />, description: 'Backend-as-a-Service for web and mobile applications.' },
  ],
  "Databases": [
    { name: 'MongoDB', icon: <Database />, description: 'Crafting flexible and scalable NoSQL database solutions.' },
    { name: 'MySQL', icon: <Database />, description: 'Managing relational databases for structured data.' },
  ],
  "Tools & Platforms": [
    { name: 'C++', icon: <PlusCircle />, description: 'Proficient in C++ for competitive programming and systems-level development.' },
    { name: 'C', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="C Icon" className="w-6 h-6" />, description: 'Proficient in C for systems-level programming.' },
    { name: 'Python', icon: <img src="https://www.python.org/static/community_logos/python-logo.png" alt="Python Icon" className="w-6 h-6" />, description: 'Programming with Python for data analysis, scripting, and ML.' },
    { name: 'Linux', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png" alt="Linux Icon" className="w-6 h-6" />, description: 'Experienced with Linux environment and shell scripting.' },
    { name: 'Git', icon: <GitFork />, description: 'Collaborating effectively and managing source code versioning.' },
    { name: 'GitHub', icon: <Github />, description: 'Using GitHub for version control and project collaboration.' },
    { name: 'VS Code', icon: <Code />, description: 'My primary code editor for development.' },
    { name: 'Postman', icon: <Rocket />, description: 'Testing APIs and building development workflows.' },
    { name: 'Chrome DevTools', icon: <Globe />, description: 'Debugging and profiling web applications.' },
    { name: 'Netlify', icon: <img src="https://www.netlify.com/v3/img/components/netlify-color-bg.svg" alt="Netlify Icon" className="w-6 h-6" />, description: 'Deploying and hosting static websites and frontend projects.' },
  ],
},

  projects: [
  {
    title: "Appearance - Dark Mode Chrome Extension",
    tagline: "Give your eyes a break, instantly!",
    description: "Tired of blinding websites at 2 AM? This Chrome extension swoops in like a night hero, flipping any website into dark mode in a snap. Built with HTML, CSS, and vanilla JS, it even has smooth animations so your eyes don’t get whiplash.",
    link: "https://github.com/Sanskriti1710/Chrome--Extension.git",
    techStack: ["JavaScript", "HTML", "CSS", "Chrome APIs"],
  },
  {
    title: "Newbit - Live News Aggregator",
    tagline: "Never miss the breaking stuff (unless you want to).",
    description: "Newbit delivers live news faster than your morning coffee can brew. Navigate categories like a pro and scroll endlessly with infinite scrolling. Built with React.js, it ensures a clean, responsive interface while keeping your brain fed with real-time updates.",
    link: "https://github.com/Sanskriti1710/NewsBit.git",
    techStack: ["React.js", "NewsAPI", "CSS", "REST APIs"],
  },
  {
    title: "Snake Slither Game",
    tagline: "Classic Snake, but make it fancy.",
    description: "Remember the good old Snake game? Now it’s jazzed up with smooth animations, local high scores, and touch-friendly controls. Run it on any device and watch your snake slither, crunch, and grow, all with a sprinkle of sound effects for fun.",
    link: "https://686ad134d9eff32ad68ec842--heroic-pithivier-11fe6c.netlify.app/",
    techStack: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "SAMS - Smart Apparel Matching System",
    tagline: "Your AI fashion buddy.",
    description: "Ever wished your closet could talk? SAMS takes a stab at it! This MERN stack platform recommends outfits, handles secure logins with JWT, and shows products dynamically. Styled with Tailwind CSS, it’s responsive, sleek, and ready to help you look fly.",
    link: "https://samsfront.vercel.app/",
    techStack: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Solar System Simulator",
    tagline: "Orbit planets without leaving your chair.",
    description: "Travel through space without needing a spaceship! This 3D solar system lets you control planet rotations and revolutions, hover for fun facts, and admire the stars. Built with Three.js and React, it’s like NASA’s simulator for your browser (minus the astronaut training).",
    link: "https://solar-system-sanskriti.netlify.app/",
    techStack: ["React.js", "Three.js", "Tailwind CSS", "JavaScript", "WebGL"],
  },
],

milestones: [
  {
    title: "Infosys Pragati Program",
    description: "Successfully completed the Data Science track of the Infosys Pragati Program, gaining hands-on experience in Python, machine learning models, and data analysis workflows.",
    date: "2025",
  },
  {
    title: "Class 12 Board – ISC",
    description: "Scored 100/100 in Computer Science in ISC Class 12; awarded a scholarship of ₹5,00,000 by the ISC Board for higher education in the field of Science.",
    date: "2023",
  },
  {
    title: "Competitive Programming & Hackathons",
    description: "Actively participated in national and international coding competitions and hackathons, including Flipkart Grid, L’Oréal Challenge, Myntra Hackerramp, Walmart Converge, and Google AI programs. Regularly take part in LeetCode contests to strengthen problem-solving and algorithmic skills.",
    date: "2024-Present",
  },
  {
    title: "GeeksforGeeks & LeetCode",
    description: "Solved over 300 coding problems across Data Structures and Algorithms, enhancing algorithmic thinking, problem-solving efficiency, and competitive programming skills.",
    date: "2024-Present",
  },
  {
    title: "IEEE Creative Volunteer",
    description: "Contributed to event branding and promotion for IEEE's flagship technical fest Xenith 2025 by designing posters using Canva and assisting in creative execution, including art & craft activities.",
    date: "2024-2025",
  },
  {
    title: "Codess Cafe Monthly Challenges",
    description: "Consistently participated in monthly coding and web design challenges, including designing responsive webpages with HTML, CSS, and JavaScript.",
    date: "2025",
  },
],

certifications: [
  
  {
    title: "TechA Cloud Computing Using Microsoft Azure",
    issuer: "Infosys Springboard",
    description: "Gained foundational knowledge of cloud computing concepts and Azure services.",
    date: "July 21, 2025",
    link: "TechA Cloud Computing using Microsoft Azure Certification.pdf",
  },
  {
    title: "Postman API Fundamentals",
    issuer: "Postman",
    description: "Learned API concepts, testing, and workflow automation using Postman.",
    date: "Jul 13, 2025",
    link: "Print Certificate - Canvas Badges.pdf",
  },
  {
    title: "Pragati Cohort 6",
    issuer: "Infosys Springboard",
    description: "Completed the Pragati Cohort 6 program, gaining practical exposure to technology and industry-ready skills.",
    date: "July 2025 - Oct 2025",
    link: "Pragati Cohort 6 Template.pptx.jpg",
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "Infosys Springboard",
    description: "Covered basics of cloud computing, deployment models, and cloud services.",
    date: "July 16, 2025",
    link: "Intro to Cloud Computing.pdf",
  },
  {
    title: "Introducing Generative AI with AWS",
    issuer: "Udacity",
    description: "Learned the fundamentals of generative AI and its practical applications in real-world scenarios.",
    date: "July 13, 2025",
    link: "aws cert.pdf",
  },
]

};


// Custom Hook for typewriter effect
const useTypewriterEffect = (strings) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const string = strings[currentStringIndex];
    if (isDeleting) {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(string.substring(0, currentText.length - 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentStringIndex((prev) => (prev + 1) % strings.length);
      }
    } else {
      if (currentText.length < string.length) {
        const timeout = setTimeout(() => {
          setCurrentText(string.substring(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, isDeleting, currentStringIndex, strings]);

  return currentText;
};

// Framer Motion variants for scroll-in animations
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};


function App() {
  const typedText = useTypewriterEffect(portfolioData.intro.typedStrings);

  return (
    <div className="bg-[#121b2d] text-gray-200 min-h-screen font-roboto relative overflow-x-hidden">
      {/* 3D Background Canvas powered by React Three Fiber */}
      <div className="fixed top-0 left-0 w-full h-full z-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Blob />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
      
      {/* Fixed Navbar with scroll effects */}
      <nav className="fixed top-0 left-0 right-0 z-20 bg-transparent p-4 transition-all duration-300 ease-in-out" id="navbar">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide font-montserrat text-white">
            {portfolioData.name}
          </h1>
          <div className="hidden md:flex space-x-6 text-sm md:text-base">
            <a href="#about" className="text-gray-200 hover:text-blue-400 transition">About</a>
            <a href="#education" className="text-gray-200 hover:text-blue-400 transition">Education</a>
            <a href="#skills" className="text-gray-200 hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="text-gray-200 hover:text-blue-400 transition">Projects</a>
            <a href="#milestones" className="text-gray-200 hover:text-blue-400 transition">Milestones</a>
            <a href="#certifications" className="text-gray-200 hover:text-blue-400 transition">Certifications</a>
          </div>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition font-montserrat font-semibold text-sm"
          >
            Let's Connect
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 pt-20">
        <main className="max-w-5xl mx-auto p-5 space-y-24">
          {/* Intro Section - Hero with scroll-in animation */}
          <motion.section 
            id="about" 
            className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center bg-gradient-to-br from-[#121b2d] to-[#1a2c4e] rounded-lg shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <img
              src="WhatsApp Image 2025-07-29 at 16.13.01_fa87ff43.jpg" 
              alt={portfolioData.name}
              className="rounded-full w-48 h-48 sm:w-64 sm:h-64 object-cover border-4 border-blue-400 shadow-lg mb-8 transition-transform duration-300 hover:scale-105"
            />
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 text-white font-montserrat leading-tight">
                {portfolioData.intro.heading}
              </h1>
              <div className="text-blue-400 font-semibold text-lg sm:text-2xl mb-6">
                <span className="typewriter-text">{typedText}</span>
              </div>
              <p className="text-lg max-w-xl mx-auto mb-8 font-roboto leading-relaxed">
                {portfolioData.intro.tagline}
              </p>
              <div className="mt-6 space-x-6 flex justify-center items-center">
                <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300" aria-label="LinkedIn">
                  <Linkedin />
                </a>
                <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-400 transition-colors duration-300" aria-label="GitHub">
                  <Github />
                </a>
                <a href={portfolioData.socials.leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300" aria-label="LeetCode">
                  <LeetCodeIcon />
                </a>
                <a href={portfolioData.socials.gfg} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors duration-300" aria-label="GeeksforGeeks">
                  <GFGIcon />
                </a>
                <a href={portfolioData.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors duration-300" aria-label="Instagram">
                  <Instagram />
                </a>
                <a href={portfolioData.socials.email} className="text-gray-300 hover:text-red-400 transition-colors duration-300" aria-label="Email">
                  <Mail />
                </a>
              </div>
            </div>
          </motion.section>
          
                 <motion.section
  id="education"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={sectionVariants}
  className="py-16 bg-gray-900"
>
  <h3 className="text-3xl font-semibold mb-12 font-montserrat text-center text-white">
    Education
  </h3>

  <div className="max-w-5xl mx-auto space-y-8">
    {/* Education Card */}
    <div className="bg-[#1e2a47] rounded-2xl p-10 md:p-12 shadow-lg hover:scale-105 transform transition-transform duration-300">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <div>
          <h4 className="text-2xl font-bold text-blue-400">
            B.Tech in Computer Science Engineering
          </h4>
          <p className="text-sm text-gray-400">
            Jaypee Institute of Information Technology — 2023 to 2027
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <p className="text-sm text-gray-300">
            Current CGPA: <span className="font-semibold text-white">8.8</span>
          </p>
        </div>
      </div>

      {/* Coursework */}
      <h5 className="text-lg font-semibold text-white mb-4">Relevant Coursework:</h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
        {[
          "Data Structures & Algorithms (DSA)",
          "Database Management Systems (DBMS)",
          "Operating Systems & System Programming",
          "Computer Organization & Architecture",
          "Information Security",
          "Open Source Development",
          "Machine Learning",
          "Financial Management"
        ].map((course, index) => (
          <div
            key={index}
            className="flex items-start gap-3 group hover:text-blue-300 transition-colors"
          >
            <span className="mt-2 w-3 h-3 bg-blue-400 rounded-full flex-shrink-0 group-hover:bg-blue-300"></span>
            <p className="text-sm text-gray-200">{course}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</motion.section>


          {/* Skills Section with categorized layout and scroll-in animation */}
          <motion.section 
            id="skills"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <h3 className="text-3xl font-semibold mb-8 font-montserrat text-center">
              My Toolkit
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {Object.entries(portfolioData.skills).map(([category, skills]) => (
                <div key={category} className="bg-[#1e2a47] rounded-lg p-6 shadow-md transition-transform transform hover:scale-105">
                  <h4 className="text-2xl font-bold mb-4 capitalize text-blue-400">{category}</h4>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <span className="text-gray-200 flex-shrink-0">{skill.icon}</span>
                        <div>
                          <h5 className="font-semibold text-lg">{skill.name}</h5>
                          <p className="text-sm text-gray-400">{skill.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        
          {/* Projects Section with scroll-in animation and hover effects */}
          <motion.section 
            id="projects"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <h3 className="text-3xl font-semibold mb-8 font-montserrat text-center">
              Featured Work
            </h3>
            <div className="grid gap-12 md:grid-cols-2">
              {portfolioData.projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg p-6 shadow-lg bg-[#1e2a47] transition-transform duration-300"
                  whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }} 
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="font-semibold text-2xl mb-2 text-white font-montserrat">{project.title}</h4>
                  <p className="text-sm mb-3 text-gray-400 font-roboto">{project.tagline}</p>
                  <p className="mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-blue-400 bg-opacity-20 text-blue-200 text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 font-semibold text-sm">
                    View Project &nbsp; <ExternalLink />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Milestones Section with improved design and scroll-in animation */}
          <motion.section 
            id="milestones"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <h3 className="text-3xl font-semibold mb-8 font-montserrat text-center">Milestones & Recognition</h3>
            <div className="relative pl-6 sm:pl-10 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gray-700">
              {portfolioData.milestones.map((milestone, index) => (
                <div key={index} className="relative pl-6 pb-8 last:pb-0 before:absolute before:left-[-6px] before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-blue-400 flex items-start space-x-4">
                  <div className="flex-shrink-0 text-3xl">{milestone.icon}</div>
                  <div>
                    <h4 className="font-bold text-xl text-white">{milestone.title}</h4>
                    <p className="text-sm text-gray-400">{milestone.date}</p>
                    <p className="mt-2 text-sm">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
          {/* Certifications Section with scroll-in animation */}
<motion.section 
  id="certifications"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={sectionVariants}
>
  <h3 className="text-3xl font-semibold mb-8 font-montserrat text-center">
    Certifications
  </h3>
  <div className="grid gap-8 md:grid-cols-2">
    {portfolioData.certifications.map((cert, index) => (
      <div 
        key={index} 
        className="bg-[#1e2a47] rounded-lg p-6 shadow-md transition-transform transform hover:scale-105"
      >
        <h4 className="text-xl font-bold text-white mb-2">{cert.title}</h4>
        <p className="text-sm text-gray-400">{cert.issuer}</p>
        <p className="mt-2 text-sm">{cert.description}</p>
        <p className="mt-2 text-xs text-gray-500">{cert.date}</p>
        {cert.link && (
          <a 
            href={cert.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center mt-3 text-blue-400 hover:text-blue-300 transition-colors text-sm font-semibold"
          >
            View Certificate <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        )}
      </div>
    ))}
  </div>
</motion.section>

          {/* Contact Section with scroll-in animation */}
          <motion.section 
            id="contact" 
            className="text-center py-12 bg-[#1e2a47] rounded-lg shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <h3 className="text-3xl font-semibold mb-5 font-montserrat">
              Ready to Connect?
            </h3>
            <p className="mb-6 max-w-xl mx-auto font-roboto">
              Feel free to reach out for opportunities, collaboration, or just a chat about technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href={portfolioData.socials.email}
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-montserrat font-semibold"
              >
                Send a Message
              </a>
              <a
                href={`${process.env.PUBLIC_URL}/Sanskriti-Jain-Resume.pdf`}
                download="Sanskriti-Jain-Resume.pdf"
                className="bg-gray-700 text-gray-200 px-6 py-3 rounded-md hover:bg-gray-600 transition font-montserrat font-semibold"
              >
                Download Resume
              </a>
            </div>
          </motion.section>
        </main>

        <footer className="text-center p-6 text-sm text-gray-500 border-t border-gray-700 mt-12 font-roboto">
          © 2025 Sanskriti Jain. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;
