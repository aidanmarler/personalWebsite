// Get the reference to the #navBar element
const navBar = document.getElementById("navBar");

// Make the logo (Aidan M.)
const logo = document.createElement("div");
logo.setAttribute("id", "logo");
logo.setAttribute("title", "Aidan Marler");
logo.setAttribute("onclick", "window.location.href = 'index.html'");
logo.innerHTML = "Aidan M.";
navBar.appendChild(logo);

// Make the resume button
const resume = document.createElement("button");
resume.setAttribute("id", "resumeNavButton");
resume.setAttribute("title", "Resume PDF");
resume.setAttribute("onclick", "window.location.href = 'index.html'");
resume.innerHTML = "Resume";
navBar.appendChild(resume);

// Array of button data
const buttonData = [
  { id: "navHome", title: "Home", url: "index.html", img: "svg/home.svg" },
  {
    id: "navSkills",
    title: "Skills",
    url: "skills.html",
    img: "svg/puzzle.svg",
  },
  {
    id: "navProjects",
    title: "Projects",
    url: "projects.html",
    img: "svg/laptop.svg",
  },
  {
    id: "navAbout",
    title: "About Me",
    url: "about.html",
    img: "svg/hiker.svg",
  },
];

// Function to create and add buttons to the #navBar
function createButtons() {
  buttonData.forEach((buttonInfo) => {
    const button = $("<button>")
      .attr("id", buttonInfo.id)
      .addClass("navButton")
      .attr("title", buttonInfo.title)
      .on("click", () => {
        button.addClass("clicked");
        setTimeout(() => {
          button.removeClass("clicked");
          window.location.href = buttonInfo.url;
        }, 50); // Adjust the duration as needed for your animation
      })
      .on("mouseover", () => {
        button.addClass("hovering");
      })
      .on("mouseout", () => {
        button.removeClass("hovering");
      });

    // Create an <img> element and set the 'src' attribute to the SVG image file
    const img = $("<img>").attr("src", buttonInfo.img).addClass("navIcon");
    // Append the <img> element to the button
    button.append(img);

    // If it is active page, add the 'active' class to the button
    if (buttonInfo.id === currentPage) {
      setTimeout(() => {
        button.addClass("active");
      }, 50);
    }

    // Append the button to the #navBar
    $("#navBar").append(button);
  });
}

// Call the createButtons function to add the buttons to the #navBar
createButtons();
