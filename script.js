var scrollContainer = document.getElementById('black-circle');
var scrollContent = document.getElementById('menu');
var isScrolling = false;

scrollContainer.addEventListener('wheel', function(event) {
  if (!isScrolling) {
    isScrolling = true;
    scrollMenu(event);
    setTimeout(function() {
      isScrolling = false;
    }, 250); // Adjust the delay (in milliseconds) as needed
  }
});

scrollContent.addEventListener('wheel', function(event) {
  if (!isScrolling) {
    isScrolling = true;
    scrollMenu(event);
    setTimeout(function() {
      isScrolling = false;
    }, 250); // Adjust the delay (in milliseconds) as needed
  }
});

function scrollMenu(event) {
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
      
    default:
      break;
  }
}
