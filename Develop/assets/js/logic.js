// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

const themeSwitcher = document.querySelector('#theme-switcher'); // Targeting by ID
const container = document.querySelector('body');

let mode = 'dark'; // Default mode

// Apply saved mode from localStorage (if exists)
const savedMode = localStorage.getItem('mode');
if (savedMode) {
  mode = savedMode;
  container.setAttribute('class', mode); // Apply saved mode class on page load
}

// Add event listener for when the ☀️ emoji is clicked
themeSwitcher.addEventListener('click', function() {
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light'); // Switch to light mode
  } else {
    mode = 'dark';
    container.setAttribute('class', 'dark'); // Switch to dark mode
  }

  // Save the current mode to localStorage
  localStorage.setItem('mode', mode);
});


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. 
// If no data exists, return an empty array.
function readLocalStorage () {
  const blogEntry = JSON.parse(localStorage.getItem('blogposts'));
  console.log("LocalStorage Blogposts:", blogEntry); // Log the data from localStorage
  if (blogEntry === null) {
      return [];
  }

  return(blogEntry);
}


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage (newBlogEntry) {
  const blogEntry = readLocalStorage()
  blogEntry.push(newBlogEntry);

  localStorage.setItem('blogposts', JSON.stringify(blogEntry));
}



// ! Use the following function whenever you need to redirect to a different page
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

