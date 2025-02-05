// Select form elements
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const submitButton = document.querySelector('button');

// Function to validate form fields
function validateForm(event) {
    event.preventDefault();  // Prevent form submission if there are errors

    let isValid = true;
    
    // Loop through all input fields and check if they are empty
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            input.style.borderColor = 'red'; // Highlight empty fields
            isValid = false;
        } else {
            input.style.borderColor = '#ccc'; // Reset border color if not empty
        }
    });

    // If form is valid, show success message and reset form
    if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
    } else {
        alert("Please fill in all fields.");
    }
}

// Add event listener to the form
form.addEventListener('submit', validateForm);

// Optional: Dynamic behavior for showing/hiding the success message
submitButton.addEventListener('click', function() {
    const successMessage = document.createElement('div');
    successMessage.textContent = "Thank you for reaching out!";
    successMessage.style.backgroundColor = "#9e8080";
    successMessage.style.padding = "10px";
    successMessage.style.borderRadius = "5px";
    successMessage.style.color = "white";
    document.body.appendChild(successMessage);

    // Automatically hide the message after 5 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
});
