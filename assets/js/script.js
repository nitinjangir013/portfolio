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

$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});