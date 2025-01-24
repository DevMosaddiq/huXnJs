// Select all stars
const stars = document.querySelectorAll(".stars");
const output = document.querySelector(".star_rating-output");
const ratingPara = document.querySelector(".star_rating-para");

// Add event listeners to each star
stars.forEach((star, index) => {
  star.addEventListener("click", () => handleStarClick(index + 1));
  star.addEventListener("mouseover", () => highlightStars(index + 1));
  star.addEventListener("mouseout", resetStars);
});

let currentRating = 0;

// Handle star click (set rating)
function handleStarClick(rating) {
  currentRating = rating;
  updateStars(rating);
  output.textContent = `You rated this ${rating} out of 5`;
}

// Highlight stars on hover
function highlightStars(rating) {
  updateStars(rating);
}

// Reset stars when the mouse leaves
function resetStars() {
  updateStars(currentRating);
}

// Update star styles based on the rating
function updateStars(rating) {
  stars.forEach((star, index) => {
    const starShape = star.querySelector(".starShape");
    if (index < rating) {
      starShape.setAttribute("fill", "#facc15"); // Highlight stars (yellow)
    } else {
      starShape.setAttribute("fill", "none"); // Reset stars
    }
  });
}
