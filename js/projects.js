// Get the #skillsDiv element
const projects = document.getElementById("projectsDiv");

// Array of skills data
const projectsData = [
  {
    id: "dengueVisual",
    title: "Dengue Fever: Interactive Viusalization",
    img: "img/dengue.png",
    skills: [
      "Data Analysis",
      "Spatial Statistics",
      "Web Development",
      "GIS",
      "Data Visualization",
      "Interactive Design",
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
      "Tableau",
    ],
    info: [
      "I learned Data Analysis in college through roughly a dozen different courses.",
      "I use Python, R, and Tableau to analyze data and create visualizations.",
    ],
    link: "https://aidanmarler.github.io/DengueFever/",
  },
  {
    id: "skeletalAnalysis",
    title: "Camel Skeletal Analysis",
    img: "img/camel.png",
    skills: [
      "Data Analysis",
      "Data Visualization",
      "Excel",
      "R",
      "Research Methodology",
    ],
    info: [
      "I learned Data Analysis in college through roughly a dozen different courses.",
      "I use Python, R, and Tableau to analyze data and create visualizations.",
    ],
    link: "https://aidanmarler.github.io/DengueFever/",
  },
];

// Function to create and add divs to the #skillsDiv
function createProjects() {
  projectsData.forEach((project) => {
    // Create Divs
    const container = document.createElement("div");
    const info = document.createElement("div");
    const header = document.createElement("div");
    const imageFrame = document.createElement("div");
    const linkPrompt = document.createElement("button");

    // Append the child divs to the container div
    container.appendChild(info);
    container.appendChild(imageFrame);
    imageFrame.appendChild(linkPrompt);
    container.appendChild(header);

    // Add classes to divs
    container.classList.add("projectContainer");
    info.classList.add("projectInfo");
    info.classList.add("closed");
    header.classList.add("projectHeader");
    imageFrame.classList.add("projectImageFrame");
    linkPrompt.classList.add("projectLinkPrompt");

    // Set up Header Div
    header.innerHTML = `
    <p>${project.title}</p>
    <button class="projectToggle">
        <img src="svg/screw.svg" class = "projectScrew closed" alt="Toggle Slideout" title="More Information">
    </button>
        `;

    imageFrame.innerHTML = `
    <div class="projectImageDiv">
        <img src="${project.img}" class = "project-image" alt="${project.title}">
    </div>
        `;

    /*
    $(projectToggle).click(function () {
      $(projectScrew).classList.toggle("open");
      imageFrame.classList.toggle("open");
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
*/
    // Add Skill Div
    projects.append(container);
  });
}

// Call the createProjects() function to create the divs
createProjects();
