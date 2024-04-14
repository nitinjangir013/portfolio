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
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};


$(document).on('submit', '#contactForm',function(event) {
  event.preventDefault();
  var name = $('#name').val();
  var email = $('#email').val();
  var message = $('#message').val();
  var textMessage = 'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message;
  
  var phoneNumber = '917357819424';
  var whatsappLink = 'http://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(textMessage);
  window.location.href = whatsappLink;
});
