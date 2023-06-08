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
        View Project<img class="linkArrow" src="svg/arrowR.svg">
    </button>`;

    /*
    $('.projectImageDiv').on('mouseenter', e => {
      const $imageDiv = $(e.currentTarget);
      const $image = $imageDiv.find('img');
      const imageWidth = $image.width();
      const imageHeight = $image.height();
      const containerWidth = $imageDiv.width();
      const containerHeight = $imageDiv.height();

      $imageDiv.on('mousemove', e => {
        const ratioX = e.clientX / containerWidth;
        const ratioY = e.clientY / containerHeight;
        const shiftX = (imageWidth - containerWidth) * (0.5 - ratioX);
        const shiftY = (imageHeight - containerHeight) * (0.5 - ratioY);

        $image.css('transform', `translate(${shiftX}px, ${shiftY}px)`);
      });
    });

    $('.projectImageDiv').on('mouseleave', e => {
      const $imageDiv = $(e.currentTarget);
      $imageDiv.off('mousemove'); // Stop updating the transformation when leaving the image
    });

    $('.projectImageDiv').on('mouseleave', e => {
      $(e.currentTarget).find('img').css('transform', `translate(0px, 0px)`);
    });

    let $imageDiv = $(".projectImageDiv");
    let $image = $imageDiv.find('img');
    let imageWidth = $image.width();
    let imageHeight = $image.height();
    let containerWidth = $imageDiv.width();
    let containerHeight = $imageDiv.height();
    $imageDiv.on("mousemove", onZoom);
    $imageDiv.on("mouseover", onZoom);
    $imageDiv.on("mouseleave", offZoom);
    function onZoom(e) {
      const ratioX = e.clientX / containerWidth;
      const ratioY = e.clientY / containerHeight;
      const shiftX = (imageWidth - containerWidth) * (0.5 - ratioX);
      const shiftY = (imageHeight - containerHeight) * (0.5 - ratioY);
      //$image.style.transformOrigin = `${x}px ${y}px`;
      $image.css('transform', `scale(1.5)`);
      $image.css('transform', `translate(${shiftX}px, ${shiftY}px)`);
    }
    function offZoom(e) {
      $image.css('transform', `translate(0px, 0px)`);
      $image.css('transform', `scale(1)`);
    }*/




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

function addInteractiveFunctionality() {
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
        const shiftX = ((ratioX * 100)-50) * xRatio * .4;
        const shiftY = ((ratioY * 100)-50) * yRatio * -0.2;
        projectImage.style.left = `${shiftX}%`;
        projectImage.style.top = `${shiftY}%`;
        projectImage.style.transform = `scale(.22)`;
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