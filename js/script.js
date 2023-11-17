function search() {
  var searchTerm = document.getElementById('search-input').value;
  var searchResults = performSearch(searchTerm);
  displayResults(searchResults);
}

function performSearch(term) {
  var allProductContainers = document.getElementsByClassName('product-container');
  var matchingProductContainers = [];

  for (var i = 0; i < allProductContainers.length; i++) {
    var productName = allProductContainers[i].getAttribute('data-product-name');
    if (productName.toLowerCase().includes(term.toLowerCase())) {
      matchingProductContainers.push(allProductContainers[i]);
    }
  }

  return matchingProductContainers;
}

function displayResults(results) {
  var resultsContainer = document.getElementById('search-results');
  resultsContainer.innerHTML = '';

  if (results.length === 0) {
    resultsContainer.innerHTML = 'No results found.';
  } else {
    results.forEach(result => {
      resultsContainer.appendChild(result.cloneNode(true)); 
    });
  }
}


function addToCart(productId) {
  // Retrieve existing cart items from localStorage or create an empty array
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the product is already in the cart
  var existingProduct = cartItems.find(item => item.productId === productId);

  if (existingProduct) {
    // If the product is already in the cart, update the quantity
    existingProduct.quantity++;
  } else {
    // If the product is not in the cart, add it
    cartItems.push({ productId, quantity: 1 });
  }

  // Save the updated cart in localStorage
  localStorage.setItem('cart', JSON.stringify(cartItems));

  alert('Product added to cart!');
}

function viewCart() {
  // Redirect to the cart page
  window.location.href = 'cart.html';
}
