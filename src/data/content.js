// All portfolio content in one place

export const hero = {
  name: "Sahejpreet Kaur",
  role: "AI/ML Engineer • Software Developer",
  tagline: "I build data-driven products that solve real problems.",
  resume: "/resume.pdf", // put your resume in public folder later
  github: "https://github.com/sahejpreetkaur",
  linkedin: "https://www.linkedin.com/in/sahejpreet18kaur/",
  email: "sahejpreetkaur11019@gmail.com"
};

export const about = {
  title: "About Me",
  description: `I am Sahejpreet Kaur, a pre-final year Computer Science and Engineering student at VIT Bhopal University with a strong passion for Artificial Intelligence, Machine Learning, and Software Development. I enjoy transforming complex problems into innovative solutions using cutting-edge technologies. My experience spans building AI-driven systems like GAN-powered fraud detection pipelines, GenAI-based crop disease diagnostics, and predictive healthcare models.

Beyond technical expertise, I have actively participated in hackathons, internships, and leadership roles, contributing to research, team management, and community-driven projects. Recognized in competitions such as ICPC, Adobe GenSolve, and EricssonEdge, I thrive in environments that challenge me to innovate and make an impact.

I aim to leverage my skills in AI and software development to create intelligent systems that drive meaningful change and empower communities.`,
  image: "/profile.jpg", // add your photo to public folder later
};

export const skills = {
  title: "Skills & Expertise",
  categories: [
    {
      name: "Programming Languages",
      items: ["Python", "Java", "C", "HTML/CSS", "JavaScript", "SQL", "LaTeX"],
    },
    {
      name: "Technologies & Frameworks",
      items: [
        "MySQL",
        "PyCharm",
        "Jupyter Notebook",
        "Google Colab",
        "Figma",
        "GitHub",
        "WordPress",
      ],
    },
    {
      name: "Machine Learning & AI",
      items: [
        "Machine Learning",
        "Deep Learning",
        "TensorFlow",
        "Scikit-learn",
        "Data Preprocessing",
        "Model Evaluation",
      ],
    },
  ],
};


export const projects = {
  title: "Projects",
  list: [
    {
      name: "GANShield: GAN-powered Fraud Shield",
      description: `Engineered a fraud detection pipeline leveraging Generative Adversarial Networks (GANs) 
      to synthesize 10,000+ realistic fraudulent transaction samples, reducing class imbalance by 95%. 
      Achieved AUC > 0.90 on highly imbalanced real-world credit card data. 
      Built Streamlit dashboards for performance visualization and stakeholder communication.`,
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Streamlit", "GANs"],
      github: null,
      demo: null,
    },
    {
      name: "Rice Plant Disease Detection using GenAI",
      description: `Designed an AI system for early detection of rice plant diseases using GenerativeAI models 
      and deep learning CNNs. Enhanced diagnostic accuracy by 20% (from 76% → 96%) and reduced response 
      time by 30%, benefiting 500+ farmers. Trained models on augmented image datasets to detect 
      multiple rice leaf diseases with high precision.`,
      technologies: ["Python", "TensorFlow", "PyTorch", "GenAI", "Google Colab"],
      github: null,
      demo: null,
    },
    {
      name: "CureAI: Enhancing Breast Cancer Detection",
      description: `Applied Logistic Regression, XGBoost, and ExtraTrees on the Wisconsin Breast Cancer dataset, 
      achieving 98.24% accuracy. Implemented Sine-Cosine & Flower Pollination algorithms to improve 
      interpretability by 20%. Optimized features and parameters for robust and explainable predictions.`,
      technologies: ["Python", "Machine Learning", "Deep Learning", "XGBoost", "ExtraTrees"],
      github: null,
      demo: null,
    },
  ],
};
export const experience = {
  title: "Experience & Internships",
  list: [
    {
      name: "Student Developer",
      org: "ISABE – International Society of Air Breathing Engines",
      role: "Machine Learning Engineer",
      year: "Dec 2024 – Ongoing",
      desc: "Designed and implemented an ML-based research paper management system ...",
      logo: "isabe.png",
      skills: ["Python", "Machine Learning", "Chatbot", "Research"],
    },
    {
      name: "Winter Internship Technical Training Program",
      org: "India Space Lab",
      role: "Intern",
      year: "Dec 2024 – Jan 2025",
      desc: "Ranked 576. Explored advanced drone architectures ...",
      logo: "indiaspacelab.png",
      skills: ["Drone Tech", "Astronomy Tools", "UAV", "Data Analysis"],
    },
    {
      name: "Software Development Club",
      org: "VIT Bhopal University",
      role: "Sub-Manager",
      year: "Dec 2023 – Jan 2025",
      desc: "Led team coordination and developed comprehensive social media strategies ...",
      logo: "sdc.png",
      skills: ["Leadership", "Team Management", "Social Media", "Strategy"],
    },
    {
      name: "E-Cell",
      org: "VIT Bhopal University",
      role: "Social Media & Operations Coordinator",
      year: "May 2023 – Nov 2024",
      desc: "Led digital campaigns and event promotions ...",
      logo: "ecell.png",
      skills: ["Campaigns", "Digital Marketing", "Event Management"],
    }
  ]
};

// Certificates Section
export const certificates = [
  {
    title: "IBM – GenAI",
    logo: "ibm.png",
    link: "https://drive.google.com/file/d/1nAh-LH5tRSCtQl4yaRSkjSOAQ4GQTrYs/view?usp=drive_link",
  },
  {
    title: "IBM – Blockchain Developer",
    logo: "ibm.png",
    link: "https://drive.google.com/file/d/1AvzHKhPhEHAOMpSGjcTxEQn0SXHNvic2/view?usp=drive_link",
  },
  {
    title: "IBM – Introduction to Blockchain",
    logo: "ibm.png",
    link: "https://drive.google.com/file/d/1QVh9p9JcebOKIH9ncvnYzLYkGH8naxGR/view?usp=drive_link",
  },
  {
    title: "NPTEL – Market Analytics",
    logo: "nptel.png",
    link: "https://drive.google.com/file/d/1zeiDLRjLhk7RPcpYrcGPej8dqRohULFO/view?usp=drive_link",
  },
  {
    title: "NPTEL – Cloud Computing",
    logo: "nptel.png",
    link: "https://drive.google.com/file/d/1cz5VhWIv4sFL7yaPDifiFQTfj-Vhv7MU/view?usp=drive_link",
  },
  {
    title: "Coursera – Bits and Bytes of Computer Networks",
    logo: "coursera.png",
    link: "https://drive.google.com/file/d/1kEisvj8_vNYOoNhntDhuzBTGKpfPc_xF/view?usp=drive_link",
  },
];

// Achievements Section
export const achievements = [
  {
    title: "Flipkart Grid",
    subtitle: "National Semi-Finalist",
    logo: "flipkart.png",
    link: "https://drive.google.com/file/d/15AIgrz3msyP-j-tMGXJwL8cyQq33LFA7/view?usp=drive_link",
  },
  {
    title: "Adobe Gensolve",
    subtitle: "Top 5 percentile (Finalist)",
    logo: "adobe.png",
    link: "https://drive.google.com/file/d/1iBzX9QccyxxJkB5Q77RF2bJR994Nwbz1/view?usp=drive_link",
  },
  {
    title: "ICPC 2024",
    subtitle:
      "Ranks 1171 (Amritapuri) & 1198 (Kanpur) | Top 20 All-Women Team India | 1st from VIT Bhopal",
    logo: "icpc.png",
    link: "https://drive.google.com/file/d/1qxoVnDz9i_7ZW53x5SHYHr_-goV9DdDT/view?usp=drive_link",
  },
  {
    title: "EricssonEdge Program",
    subtitle: "Selected as one of 500 for excellence in innovation, aptitude, and solving DSA.",
    logo: "ericsson.png",
    link: "https://drive.google.com/file/d/1bUx7N0z8_C3BURYC0FjLf6AZspYkuQ-D/view?usp=drive_link",
  },
];


export const contact = {
  title: "Get in Touch",
  email: "sahejpreetkaur11019@gmail.com",
  linkedin: "https://www.linkedin.com/in/sahejpreet18kaur/",
  github: "https://github.com/sahejpreetkaur",
};
