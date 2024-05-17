let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
// let darkmode = document.querySelector("#darkmode");

// darkmode.onclick = () => {
//   if (darkmode.classList.contains("bx-moon")) {
//     darkmode.classList.replace("bx-moon", "bx-sun");
//     document.body.classList.add("active");
//   } else {
//     darkmode.classList.replace("bx-sun", "bx-moon");
//     document.body.classList.remove("active");
//   }
// };


let darkmode = document.querySelector("#darkmode");
let mode = localStorage.getItem("mode");

if (mode === "dark") {
  darkmode.classList.replace("bx-moon", "bx-sun");
  document.body.classList.add("active");
} else {
  darkmode.classList.replace("bx-sun", "bx-moon");
  document.body.classList.remove("active");
}

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
    localStorage.setItem("mode", "dark"); // Save dark mode preference
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
    localStorage.setItem("mode", "light"); // Save light mode preference
  }
};



document.addEventListener('submit', function(event) {
  if (event.target.id === 'contactForm') {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    var textMessage = 'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message;
    
    var phoneNumber = '+917357819424';
    var whatsappLink = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(textMessage);
    
    window.location.href = whatsappLink;
  }
});