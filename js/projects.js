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
      "This is a web-app to help researchers understand the spatial and temporal patterns of Dengue Fever.",
    ],
    link: "https://aidanmarler.github.io/DengueFever/",
  },
  {
    id: "dubaiUrbanization",
    title: "Urban Sprawl of Dubai, UAE",
    img: "img/dubai.png",
    skills: [
      "Machine Learning",
      "Remote Sensing",
      "Spatial Statistics",
      "GIS",
      "Geo Visualization",
    ],
    info: [
      "Pixel Classification and dNDBI to measure urban sprawl over time.",
    ],
    link: "https://sites.google.com/view/urban-sprawl-of-dubai/",
  },
  {
    id: "pointPatterns",
    title: "Global Point Analysis Project",
    img: "img/dubai.png",
    skills: [
      "Principal Component Analysis",
      "K-Means Clustering",
      "Spatial Statistics",
      "Point Pattern Analysis",
      "Data Visualization",
      "R",
      "Python",
    ],
    info: [
      "R script that takes an input of any point data and performs a variety of spatial statistical analyses.",
      "While designed for spring data in the US, it could be used with landslides in Algeria or tree locations in China.",
      "It is truly a universal tool!",
    ],
    link: "https://sites.google.com/view/urban-sprawl-of-dubai/",
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
      "Research Method",
    ],
    info: [
      "Skeletal pathology analysis of a Bactrian Camel from Czechia.",
    ],
    link: "https://aidanmarler.github.io/DengueFever/",
  },
];

// Function to create and add divs to the #skillsDiv
function createProjects() {
  projectsData.forEach((project) => {
    // Create Divs
    const container = document.createElement("div");
    const header = document.createElement("div");
    const imageFrame = document.createElement("div");

    // Append the child divs to the container div
    container.appendChild(imageFrame);
    container.appendChild(header);

    // Add classes to divs
    container.classList.add("projectContainer");
    header.classList.add("projectHeader");
    imageFrame.classList.add("projectImageFrame");

    // Set up Header Div
    header.innerHTML = `
    <p id=${project.id}>${project.title}</p>`;

    imageFrame.innerHTML = `
      <div class="projectImageDiv">
        <img src="${project.img}" class="project-image" alt="${project.title}">
      </div>
      <div class="projectInfo">
        <p class="titleLine">Info</p>
        ${project.info.map(line => `<p class="infoLine">${line}</p>`).join('')}
        <p class="titleSkills">Skills Used</p>
        ${project.skills.map(skill => `<li class="skillLine">${skill}</li>`).join('')}
      </div>
      <div class="projectLink">
        <button class="projectLinkButton" onclick="window.open('${project.link}',target='_blank')">
          Explore<img class="linkArrow" src="svg/arrowR.svg">
        </button>
      </div>
    `;

    // Add Project Div
    projects.append(container);
  });
}



// Add this to your JavaScript file
const projectImageDiv = document.querySelector('.projectImageDiv');
const projectImage = document.querySelector('.project-image');

$('.projectImageDiv').on('mousemove', e => {
  console.log(e.clientX, e.clientY)
  const x = e.clientX - projectImageDiv.offsetLeft; // Get the x position relative to the parent element
  const y = e.clientY - projectImageDiv.offsetTop; // Get the y position relative to the parent element
  //projectImage.style.transform = `translate(${x}px, ${y}px)`; // Update the position of the image
});

// Call the createProjects() function to create the divs
createProjects();



// This function adds the interactive functionality to the project images
function addInteractiveFunctionality() { // honestly, it is pretty rube goldberg
  const projectImageDivs = document.querySelectorAll('.projectImageDiv');
  projectImageDivs.forEach(projectImageDiv => {
    const projectImage = projectImageDiv.querySelector('.project-image');
    projectImage.addEventListener('load', () => {
      const imageWidth = projectImage.naturalWidth;
      const imageHeight = projectImage.naturalHeight;
      const yRatio = Math.log(imageWidth / imageHeight);
      const xRatio = Math.log(imageHeight / imageWidth);
      const containerWidth = projectImageDiv.clientWidth;
      const containerHeight = projectImageDiv.clientHeight;
      projectImageDiv.addEventListener('mousemove', e => {
        projectImage.style.transition = `transform 0.1s ease-in-out`;
        const rect = projectImageDiv.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        const ratioX = offsetX / containerWidth;
        const ratioY = offsetY / containerHeight;
        const shiftX = ((ratioX * 100) - 50) * xRatio * .3;
        const shiftY = ((ratioY * 100) - 50) * yRatio * -0.2;
        projectImage.style.left = `${shiftX}%`;
        projectImage.style.top = `${shiftY}%`;
        projectImage.style.transform = `scale(.23)`;
      });
      projectImageDiv.addEventListener('mouseleave', e => {
        projectImage.style.transition = `all 0.5s ease-in-out`;
        projectImage.style.left = `0%`;
        projectImage.style.top = `0%`;
        projectImage.style.transform = `scale(.24)`;
      });
    });
  });
}

// Call the addInteractiveFunctionality() function to add the event listener to each div
addInteractiveFunctionality();