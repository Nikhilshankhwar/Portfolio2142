// Get the form element
const form = document.getElementById('contact-form');

// Add event listener for form submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get the input values
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const message = form.elements['message'].value;

  // Perform any validation or processing you require
  // For this example, we'll simply log the values to the console
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Clear the form
  form.reset();
});
