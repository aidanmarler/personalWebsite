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
    const linkDiv = document.createElement("div");

    // Append the child divs to the container div
    container.appendChild(info);
    container.appendChild(imageFrame);
    container.appendChild(linkDiv);
    container.appendChild(header);

    // Add classes to divs
    container.classList.add("projectContainer");
    info.classList.add("projectInfo");
    info.classList.add("closed");
    header.classList.add("projectHeader");
    imageFrame.classList.add("projectImageFrame");
    linkDiv.classList.add("projectLink");

    // Set up Header Div
    header.innerHTML = `
    <p>${project.title}</p>`;

    imageFrame.innerHTML = `
    <div class="projectImageDiv">
        <img src="${project.img}" class = "project-image" alt="${project.title}">
    </div>
        `;

    linkDiv.innerHTML = `
    <button class="projectLinkButton" 
      onclick=" window.open('${project.link}',target='_blank')">
        View Project<img src="svg/arrowR.svg">
    </button>`;

    // Add Project Div
    projects.append(container);
  });
}

// Add this to your JavaScript file
const projectImageDiv = document.querySelector('.projectImageDiv');
const projectImage = document.querySelector('.project-image');

$('.projectImageDiv').on('mousemove', e => {
  const x = e.clientX - projectImageDiv.offsetLeft; // Get the x position relative to the parent element
  const y = e.clientY - projectImageDiv.offsetTop; // Get the y position relative to the parent element
  projectImage.style.transform = `translate(${x}px, ${y}px)`; // Update the position of the image
});

// Call the createProjects() function to create the divs
createProjects();
