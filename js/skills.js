// Get the #skillsDiv element
const skills = document.getElementById("skillsDiv");

// Array of skills data
const skillsData = [
  {
    id: "dataAnalysis",
    title: "Data Analytics",
    img: "svg/graph.svg",
    projects: [
      {
        id: "pointPatternAnalysis",
        title: "Global Point Pattern",
        url: "projects.html",
      },
    ],
    shadowContents: [
      "Exploring Data to Identify Trends",
    ],
    contentLines: [
      "I learned Data Analysis in college through roughly a dozen different courses.",
      "I use Python, R, and Tableau to analyze data and create visualizations.",
    ],
  },
  {
    id: "spatialStatistics",
    title: "Spatial Statistics",
    img: "svg/map.svg",
    projects: [
      {
        id: "pointPatternAnalysis",
        title: "Global Point Pattern",
        url: "projects.html",
      },
    ],
    shadowContents: [
      "Statistical Analysis of Spatial Data",
    ],
    contentLines: [
      "I learned Spatial Statistics in college as well, and have spent coutless hours working on GIS projects.",
      "I have been using ESRI products for years, but can also complete analyses in QGIS, R, and Python.",
    ],
  },
  {
    id: "machineLearning",
    title: "Machine Learning",
    img: "svg/robot.svg",
    projects: [
      {
        id: "pointPatternAnalysis",
        title: "Global Point Pattern",
        url: "projects.html",
      },
      {
        id: "camelAnalysis",
        title: "Camel Skeletal Analysis",
        url: "projects.html",
      },
      {
        id: "dengueVisual",
        title: "Web Visualization of Dengue Fever",
        url: "projects.html",
      },
      {
        id: "dubaiUrbanGrowth",
        title: "Dubai Urban Growth",
        url: "projects.html",
      },
    ],
    shadowContents: [
      "Creating Powerful Data-Driven Models",
    ],
    contentLines: [
      "I learned Data Analysis in college through roughly a dozen different courses.",
      "I use Python, R, and Tableau to analyze data and create visualizations.",
    ],
  },
  {
    id: "dataProcessing",
    title: "Data Processing",
    img: "svg/database.svg",
    projects: [
      {
        id: "pointPatternAnalysis",
        title: "Global Point Pattern",
        url: "projects.html",
      },
    ],
    shadowContents: [
      "Cleaning, Processing, and Retrieval",
    ],
    contentLines: [
      "I learned Data Analysis in college through roughly a dozen different courses.",
      "I use Python, R, and Tableau to analyze data and create visualizations.",
    ],
  },
  {
    id: "webDevelopment",
    title: "Web Development",
    img: "svg/compass.svg",
    projects: [
      {
        id: "pointPatternAnalysis",
        title: "Global Point Pattern",
        url: "projects.html",
      },
    ],
    shadowContents: [
      "Full-Stack Website Development",
    ],
    contentLines: [
      "I learned Data Analysis in college through roughly a dozen different courses.",
      "I use Python, R, and Tableau to analyze data and create visualizations.",
    ],
  },
  {
    id: "interacitveDesign",
    title: "Interactive Design",
    img: "svg/hand.svg",
    projects: [
      {
        id: "pointPatternAnalysis",
        title: "Global Point Pattern",
        url: "projects.html",
      },
    ],
    shadowContents: [
      "Intuitive and Engaging User Experience",
    ],
    contentLines: [
      "I learned Data Analysis in college through roughly a dozen different courses.",
      "I use Python, R, and Tableau to analyze data and create visualizations.",
    ],
  },
  {
    id: "Game Design",
    title: "Game Design",
    img: "svg/gamepad.svg",
    projects: [
      {
        id: "pointPatternAnalysis",
        title: "Global Point Pattern",
        url: "projects.html",
      },
    ],
    shadowContents: [
      "Making Video Games",
    ],
    contentLines: [
      "I learned Data Analysis in college through roughly a dozen different courses.",
      "I use Python, R, and Tableau to analyze data and create visualizations.",
    ],
  },
];

// Function to create and add divs to the #skillsDiv
function createSkills() {
  skillsData.forEach((skill) => {
    // Create Divs
    const container = document.createElement("div");
    const slideout = document.createElement("div");
    const label = document.createElement("button");
    const toggle = document.createElement("div");
    const content = document.createElement("div");
    const projects = document.createElement("div");
    const shadowContents = document.createElement("div");

    // Append the child divs to the container div
    container.appendChild(shadowContents);
    container.appendChild(slideout);
    container.appendChild(label);
    label.appendChild(toggle);
    slideout.appendChild(content);
    slideout.appendChild(projects);

    // Add classes to divs
    shadowContents.classList.add("skillShadowContents");
    label.classList.add("skillLabel");
    label.classList.add("closed");
    content.classList.add("skillContent");
    projects.classList.add("skillProjects");
    slideout.classList.add("skillSlideout");
    slideout.classList.add("closed");
    container.classList.add("skillContainer");
    toggle.classList.add("skillToggle");

    // Set up animating screw/toggle
    toggle.innerHTML = `<img src="svg/screw.svg" class = "skillScrew" alt="Toggle Slideout">`;

    // Set up Label Div
    label.innerHTML = `
    <div class="screwIcon">
        <img src="svg/screw.svg" class = "skillScrew top" alt="Toggle Slideout">
    </div>
    <div class="skillIcon">
        <img class="skillIcon-img" src="${skill.img}" alt="Skill Icon">
    </div>
    <div class="skill-title">
        <h4>${skill.title}</h4>
    </div>
        `;

    label.addEventListener("click", () => {
      label.classList.toggle("open");
      slideout.classList.toggle("open");
    });

    // Set up Shadow Contents Div
    for (let i = 0; i < skill.shadowContents.length; i++) {
      shadowContents.innerHTML += `
                      <p>${skill.shadowContents[i]}</p>
                  `;
    }

    // Set up Contents Div
    for (let i = 0; i < skill.contentLines.length; i++) {
      content.innerHTML += `
                <p>${skill.contentLines[i]}</p>
            `;
    }

    // Set up Projects Div
    projects.innerHTML += `<h5>Projects</h5>`;
    for (let i = 0; i < skill.projects.length; i++) {
      if (skill.projects[i].url != null) {
        console.log("URL");
        projects.innerHTML += `
        <button class="skill-project" title="Go To ${skill.projects[i].title}"><a href="${skill.projects[i].url}">${skill.projects[i].title}</a></button>
    `;
      } else {
        projects.innerHTML += `
                      <div class="skill-project">${skill.projects[i].title}</div>
                  `;
      }
    }

    // Add Skill Div
    skills.append(container);
  });
}

// Call the createButtons() function to create the buttons and add them to the #navBar
createSkills();
