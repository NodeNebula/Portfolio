const scrollContainer = document.getElementById('black-circle');
const scrollContent = document.getElementById('menu');

var isScrolling = false;
var lastActiveTab = "nav-home";

const home = document.getElementById("home");
const front = document.getElementById("front");
const wback = document.getElementById("wback");
const sback = document.getElementById("sback");

fetch('https://api.ipregistry.co/?key=tryout')
    .then(function (response) {
        return response.json();
    })
    .then(function (payload) {
        if (payload.location.country.name === "Netherlands") {
          console.log(true)
        }
        console.log(false)
    });

scrollContainer.addEventListener('wheel', function(event) {
  if (!isScrolling) {
    isScrolling = true;
    scrollMenu(event);
    setTimeout(function() {
      isScrolling = false;
    }, 250);
  }
});

scrollContent.addEventListener('wheel', function(event) {
  if (!isScrolling) {
    isScrolling = true;
    scrollMenu(event);
    setTimeout(function() {
      isScrolling = false;
    }, 250);
  }
});

function scrollMenu(event) {
  projectOpacity();
  var scrollDirection = event.deltaY > 0 ? 'down' : 'up';
  
  switch(scrollDirection) {
    case "up":
      var stages = Array.from(
          document
            .getElementsByClassName("nav-btn"))
            .map(function(element) {
              return element.className.replace(/\bnav-btn \b/g, '');
            });
      if (stages.includes("stage3")) {
        break;
      }
      
      
      if (stages.includes("stage2")) {
        var currentClass = document.querySelector(".stage2");
        currentClass.classList.replace("stage2", "stage3");
      }
      if (stages.includes("stage1")) {
        var currentClass = document.querySelector(".stage1");
        currentClass.classList.replace("stage1", "stage2");
      }
      if (stages.includes("stage0")) {
        var currentClass = document.querySelector(".stage0");
        currentClass.classList.replace("stage0", "stage1");
      }
      if (stages.includes("stage-1")) {
        var currentClass = document.querySelector(".stage-1");
        currentClass.classList.replace("stage-1", "stage0");
      }
      if (stages.includes("stage-2")) {
        var currentClass = document.querySelector(".stage-2");
        currentClass.classList.replace("stage-2", "stage-1");
      }
      if (stages.includes("stage-3")) {
        var currentClass = document.querySelector(".stage-3");
        currentClass.classList.replace("stage-3", "stage-2");
      }
      
      break;
      
    case "down":
      var stages = Array.from(
        document
          .getElementsByClassName("nav-btn"))
          .map(function(element) {
            return element.className.replace(/\bnav-btn \b/g, '');
          });
      if (stages.includes("stage-3")) {
        break;
      }
      
      if (stages.includes("stage-2")) {
        var currentClass = document.querySelector(".stage-2");
        currentClass.classList.replace("stage-2", "stage-3");
      }
      if (stages.includes("stage-1")) {
        var currentClass = document.querySelector(".stage-1");
        currentClass.classList.replace("stage-1", "stage-2");
      }
      if (stages.includes("stage0")) {
        var currentClass = document.querySelector(".stage0");
        currentClass.classList.replace("stage0", "stage-1");
      }
      if (stages.includes("stage1")) {
        var currentClass = document.querySelector(".stage1");
        currentClass.classList.replace("stage1", "stage0");
      }
      if (stages.includes("stage2")) {
        var currentClass = document.querySelector(".stage2");
        currentClass.classList.replace("stage2", "stage1");
      }
      if (stages.includes("stage3")) {
        var currentClass = document.querySelector(".stage3");
        currentClass.classList.replace("stage3", "stage2");
      }
      
      break;
  }
  switchTab();
}

document.getElementById("nav-home").addEventListener("click", function() {
  switchTab("nav-home");
  scrollOnClick("nav-home");
});
document.getElementById("nav-front").addEventListener("click", function() {
  switchTab("nav-front")
  scrollOnClick("nav-front");
});
document.getElementById("nav-wback").addEventListener("click", function() {
  switchTab("nav-wback")
  scrollOnClick("nav-wback");
});
document.getElementById("nav-sback").addEventListener("click", function() {
  switchTab("nav-sback")
  scrollOnClick("nav-sback");
});


function switchTab(goTo) {
  var currentActive;
  if (goTo != null) currentActive = goTo;
  else currentActive = document.getElementsByClassName("stage0")[0].id;

  switch (currentActive) {
    case "nav-home":
      if (lastActiveTab == "nav-home") break;
      home.style.opacity = "1";

      front.style.opacity = "0";
      wback.style.opacity = "0";
      sback.style.opacity = "0";

      lastActiveTab = "nav-home";
      break;
    case "nav-front":
      if (lastActiveTab == "nav-front") break;
      front.style.opacity = "1";

      home.style.opacity = "0";
      wback.style.opacity = "0";
      sback.style.opacity = "0";

      lastActiveTab = "nav-front";
      break;
    case "nav-wback":
      if (lastActiveTab == "nav-wback") break;
      wback.style.opacity = "1";

      home.style.opacity = "0";
      front.style.opacity = "0";
      sback.style.opacity = "0";

      lastActiveTab = "nav-wback";
      break;
    case "nav-sback":
      if (lastActiveTab == "nav-sback") break;
      sback.style.opacity = "1";

      home.style.opacity = "0";
      front.style.opacity = "0";
      wback.style.opacity = "0";

      lastActiveTab = "nav-sback";
      break;
    default:
      break;
  }
}

function scrollOnClick(goTo) {
  projectOpacity();

  const nHome = document.getElementById("nav-home");
  const nFront = document.getElementById("nav-front");
  const nwBack = document.getElementById("nav-wback");
  const nsBack = document.getElementById("nav-sback");

  switch (goTo) {
    case "nav-home":
      nHome.className = "nav-btn stage0";
      nFront.className = "nav-btn stage1";
      nwBack.className = "nav-btn stage2";
      nsBack.className = "nav-btn stage3";
    break;
    case "nav-front":
      nHome.className = "nav-btn stage-1";
      nFront.className = "nav-btn stage0";
      nwBack.className = "nav-btn stage1";
      nsBack.className = "nav-btn stage2";
    break;
    case "nav-wback":
      nHome.className = "nav-btn stage-2";
      nFront.className = "nav-btn stage-1";
      nwBack.className = "nav-btn stage0";
      nsBack.className = "nav-btn stage1";
    break;
    case "nav-sback":
      nHome.className = "nav-btn stage-3";
      nFront.className = "nav-btn stage-2";
      nwBack.className = "nav-btn stage-1";
      nsBack.className = "nav-btn stage0";
    break;
  }
}

function projectClick(clicked) {
  projectOpacity();
  clicked.getElementsByClassName("project-bg")[0].style.opacity = "1";
}

function projectOpacity() {
  var divs = document.getElementsByClassName("project");
  console.log("dv: " + divs)
  for (const element of divs) {
    console.log("el: " + element)
    element.getElementsByClassName("project-bg")[0].style.opacity = "0";
  }
}