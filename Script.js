// Get the form element and listen for the submit event
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from reloading the page

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation (make sure all fields are filled out)
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        
        // Optionally, you could clear the form here
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
