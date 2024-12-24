// Select main element and back button element
const selectMain = document.querySelector('main');
const selectBack = document.getElementById('back-button');

// Function to display blog posts
function displayBlogPosts(blogposts) {
    const container = document.getElementById('blogContainer');
    container.innerHTML = '';

    blogposts.forEach(post => {
        const article = document.createElement('article'); // Create new article element

        const title = document.createElement('h2');
        title.textContent = post.title;
        article.appendChild(title);
        // console.log(title);

        const blockquote = document.createElement('blockquote');
        const content = document.createElement('blockquote'); // Create content paragraph
        content.textContent = post.content;
        blockquote.appendChild(content);
        article.appendChild(blockquote); 
        // console.log(content);

        const username = document.createElement('p'); // Create username element
        username.textContent = `Posted by: ${post.username}`;
        article.appendChild(username);
        article.appendChild(username);
        // console.log(username);

        // Append the article to the container
        container.appendChild(article);
    });
}

// Function to handle no posts available
const noPost = () => {
    const container = document.getElementById('blogContainer');
    container.innerHTML = '<p>No blog posts available.</p>';
}

// Function to render blog list
const renderBlogList = () => {
    // Get posts from localStorage
    const blogposts = readLocalStorage();
    // console.log("Retrieved Blog Posts:", blogposts); 


    if (blogposts.length === 0) {
        noPost();
    } else {
        displayBlogPosts(blogposts);
    }
}

// Call renderBlogList function when page loads
document.addEventListener('DOMContentLoaded', function() { 
    renderBlogList();
});

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

const backButton = document.getElementById('back-button');
backButton.addEventListener('click', function() {
    redirectPage('index.html')
});
