const myImage = document.querySelector("img");

myImage.onclick = function() {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Kung-Fu.jpg") {
    myImage.setAttribute("src", "images/tile.jpeg");
  } else {
    myImage.setAttribute("src", "images/Kung-Fu.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Kung-Fu is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Kung-Fu is so cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
