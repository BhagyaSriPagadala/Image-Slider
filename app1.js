// Get references to the next and previous buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

// Add event listeners to the buttons
next.addEventListener('click', function() {
  // Get all items in the slider
  let items = document.querySelectorAll('.item');

  // Remove the first item from the slider and append it to the end
  document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function() {
  // Get all items in the slider
  let items = document.querySelectorAll('.item');

  // Remove the last item from the slider and prepend it to the beginning
  document.querySelector('.slide').prepend(items[items.length - 1]);
});
