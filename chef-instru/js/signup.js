// signup.js

document.addEventListener("DOMContentLoaded", function () {
    // You could add form submission logic or validation here

    // Example of submitting signup form (this part is just a mock since we can't post to JSONPlaceholder)
    const signupForm = document.querySelector('form');

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(signupForm);
        const data = {
            email: formData.get('email'),
            password: formData.get('password'),
        };

        // For demonstration, log the data to the console
        console.log('Form Data:', data);

        // Simulate a fake signup POST request (JSONPlaceholder does not support actual signup, so we mock it)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            }),
        })
        .then(response => response.json())
        .then(responseData => {
            console.log('Signup Successful:', responseData);
        })
        .catch(error => {
            console.error("Error submitting form:", error);
        });
    });
});

