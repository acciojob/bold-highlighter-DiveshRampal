// Function to highlight bold words when mouse hovers over the link
function highlight() {
  // Select all <strong> elements on the page
  const strongElements = document.querySelectorAll('strong');

  // Loop through each <strong> element and change the color to green
  strongElements.forEach(function(element) {
    element.style.color = 'rgb(0, 128, 0)'; // Green color
  });
}

// Function to revert the color of bold words when mouse moves out of the link
function return_normal() {
  // Select all <strong> elements on the page
  const strongElements = document.querySelectorAll('strong');

  // Loop through each <strong> element and change the color back to black
  strongElements.forEach(function(element) {
    element.style.color = 'rgb(0, 0, 0)'; // Black color
  });
}
