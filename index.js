document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Error messages
    let hasError = false;

    // Validate name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        hasError = true;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        hasError = true;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        hasError = true;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Validate message
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required.';
        hasError = true;
    } else {
        document.getElementById('messageError').textContent = '';
    }

    // If no errors, you can submit the form or perform any other actions
    if (!hasError) {
        alert('Form submitted successfully!');
        // You can submit the form here if needed
        // document.getElementById('myForm').submit();
    }
});
