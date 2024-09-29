const CLASSNAME = "-visible";
//const TIMEOUT = 1500; // total animation duration
const target = document.querySelector(".myname");

setTimeout(() => {
    target.classList.add(CLASSNAME); // Add the class to trigger the animation
  }, 100);//Delay of 0.1 seconds before starting the animation (optional)

