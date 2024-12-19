// Get today's date in YYYY-MM-DD format
const submissionDate = new Date().toISOString().split('T')[0]; 
// List of products to populate the select options
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Get the select element by its ID
const productSelect = document.getElementById('Selectproduct');

// Function to populate the product options dynamically
function populateProductSelect() {
  products.forEach(product => {
    const option = document.createElement('option');
    option.textContent = product.name;
    option.value = product.id;
    productSelect.appendChild(option);
  });
}

// Call the function to populate the dropdown on page load
populateProductSelect();

// When the page is loaded, we check if the user is on the form page or the review page
window.addEventListener('DOMContentLoaded', function() {
  const reviewForm = document.getElementById('reviewForm');
  const reviewCountSpan = document.getElementById('reviewCount');
  
  // If the user is on the form page
  if (reviewForm) {
    reviewForm.addEventListener('submit', function(event) {
      // Prevent form submission to keep user on the page for demo purposes
      event.preventDefault();

      // Retrieve the current submission count for today's date from localStorage
      let submissionCount = localStorage.getItem(submissionDate);
      if (submissionCount === null) {
        submissionCount = 0; // Initialize count if no count exists for today
      } else {
        submissionCount = parseInt(submissionCount); // Convert count to an integer
      }

      // Increment the submission count for today
      submissionCount += 1;

      // Store the updated submission count for today in localStorage
      localStorage.setItem(submissionDate, submissionCount);

      // After updating the submission count, navigate to the review page
      window.location.href = "review.html";  // Go to review page
    });
  }

  // If the user is on the review page
  if (reviewCountSpan) {
    // Retrieve the submission count for today's date from localStorage
    let submissionCount = localStorage.getItem(submissionDate);
    if (submissionCount === null) {
      submissionCount = 0; // Default to 0 if no submissions exist for today
    }

    // Display the submission count in the review page
    reviewCountSpan.textContent = submissionCount; 
  }

  // Display the current year and last updated timestamp
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('updated').textContent = "Last updated: " + document.lastModified;
});
