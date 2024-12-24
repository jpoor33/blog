// TODO: Create a variable that selects the form element 
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.


// Step 1: Identify the blog fields I want to extract data from

const blogForm = document.getElementById('blogForm');
// console.log(blogForm);

// Step 2: Add an event listener and create an object to store blog posts
blogForm.addEventListener('submit', function(submit) {
    submit.preventDefault();
    console.log("form submitted");

    // Step 3: Loop through all the fields for form field validation
const inputFields = document.querySelectorAll('input, textarea');
let allFieldsFilled = true;

for (let i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value === "") {
        alert("Please complete the form.");
        allFieldsFilled = false;
        break;
    }
}
//step 4: store items in an object
if (allFieldsFilled) {
    const newBlogEntry = {
        username: document.getElementById('username').value,
        title: document.getElementById('title').value,
        content: document.getElementById('content').value,
    }
    console.log(newBlogEntry);
    storeLocalStorage(newBlogEntry)
    redirectPage('blog.html');
    }
})


