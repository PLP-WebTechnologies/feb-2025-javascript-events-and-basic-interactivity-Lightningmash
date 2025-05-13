// Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

document.getElementById("hoverBox").addEventListener("mouseover", () => {
  document.getElementById("hoverBox").style.backgroundColor = "orange";
});

document.getElementById("hoverBox").addEventListener("mouseout", () => {
  document.getElementById("hoverBox").style.backgroundColor = "lightblue";
});

document.getElementById("keyInput").addEventListener("keypress", (e) => {
  console.log("Key pressed: ", e.key);
});

// Bonus: Double click
/*document.getElementById("clickBtn").addEventListener("dblclick", () => {
  alert("Double clicked!");
});*/

// Interactive Elements
document.getElementById("colorBtn").addEventListener("click", () => {
  document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});

// Image Gallery
const images = [
  "https://via.placeholder.com/150/0000FF",
  "https://via.placeholder.com/150/FF0000",
  "https://via.placeholder.com/150/00FF00"
];
let currentImage = 0;

document.getElementById("nextImg").addEventListener("click", () => {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById("galleryImg").src = images[currentImage];
});

// Tabs
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabNum = tab.getAttribute("data-tab");
    document.getElementById("tabContent").innerText = `This is Tab ${tabNum} content`;
  });
});

// Form Validation
document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("feedback");

  if (!email.includes("@") || password.length < 8) {
    feedback.innerText = "Please enter a valid email and a password with at least 8 characters.";
    feedback.style.color = "red";
  } else {
    feedback.innerText = "Form submitted successfully!";
    feedback.style.color = "green";
  }
});

// Bonus: Real-time password check
/*document.getElementById("password").addEventListener("input", function() {
  const feedback = document.getElementById("feedback");
  if (this.value.length < 8) {
    feedback.innerText = "Password too short!";
    feedback.style.color = "red";
  } else {
    feedback.innerText = "Looking good!";
    feedback.style.color = "green";
  }
});*/
