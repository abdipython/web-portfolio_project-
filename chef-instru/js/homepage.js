// homepage.js

document.addEventListener("DOMContentLoaded", function () {
    // Fetch posts from JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            displayPosts(posts);
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        });

    // Function to dynamically create HTML for posts
    function displayPosts(posts) {
        const recipiesContainer = document.querySelector(".recipies"); // Assuming this is where you want to display posts
        recipiesContainer.innerHTML = ''; // Clear any previous content

        posts.forEach(post => {
            // Create a recipe card for each post
            const recipeCard = document.createElement("div");
            recipeCard.classList.add("recipies-intro");

            recipeCard.innerHTML = `
                <img src="https://via.placeholder.com/300" alt="Post image">
                <h4>${post.title}</h4>
                <p>${post.body}</p>
                <button>Read More</button>
            `;

            recipiesContainer.appendChild(recipeCard);
        });
    }
});
