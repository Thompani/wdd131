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

// Function to populate the product options
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

// Check if we are on the form page or the review page
window.addEventListener('DOMContentLoaded', function() {
  const reviewForm = document.getElementById('reviewForm');
  const reviewCountSpan = document.getElementById('reviewCount');
  
  // On form submission (form.html)
  if (reviewForm) {
      reviewForm.addEventListener('submit', function(event) {
          // Prevent form from actual submission for demo purposes
          event.preventDefault();
          
          // Retrieve the current review count from localStorage
          let reviewCount = localStorage.getItem('reviewCount');
          if (reviewCount === null) {
              reviewCount = 0; // Initialize if no count exists
          } else {
              reviewCount = parseInt(reviewCount);
          }

          // Increment the review count
          reviewCount += 1;

          // Store the updated count in localStorage
          localStorage.setItem('reviewCount', reviewCount);
          
          // Submit the form (navigate to review page)
          window.location.href = "review.html";  // Go to the review page
      });
  }

  // If we are on the review.html page, display the review count
  if (reviewCountSpan) {
      // Retrieve the review count from localStorage
      let reviewCount = localStorage.getItem('reviewCount');
      if (reviewCount === null) {
          reviewCount = 0; // Default to 0 if no reviews exist
      }

      // Show the review count in the page
      reviewCountSpan.textContent = reviewCount;
  }

  // Display the current year and last updated timestamp
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('updated').textContent = "Last updated: " + document.lastModified;
});

