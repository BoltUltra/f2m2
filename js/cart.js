document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
  });
  
  function displayCartItems() {
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    var cartContainer = document.getElementById('cart-items');
  
    if (cartItems.length === 0) {
      cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
      cartContainer.innerHTML = ''; // Clear the existing content
  
      cartItems.forEach(item => {
        var productContainer = document.createElement('div');
        productContainer.classList.add('cart-product');
  
        // Fetch complete product information based on product ID (replace with your logic)
        var productInfo = getProductInfoById(item.productId);
  
        if (productInfo) {
          // Assuming productInfo contains image, text, etc.
          productContainer.innerHTML = `
            <img src="${productInfo.image}" alt="Product Image">
            <p>${productInfo.text}</p>
            <p>Product ID: ${item.productId}, Quantity: ${item.quantity}</p>
          `;
          cartContainer.appendChild(productContainer);
        }
      });
    }
  }
  
  // Replace this function with your logic to fetch product information by ID
  function getProductInfoById(productId) {
    // Replace this with your logic to fetch product information from your data source
    // For example, you might have an array of products where you can find the product by ID
    var products = [
      { id: 36, image: './assets/images/fresh ripe cherries.png', text: 'Fresh Ripe Berries' },
      { id: 37, image: './assets/images/fresh pineapples.png', text: 'Fresh Pineapples' },
      { id: 38, image: './assets/images/fresh round plum tomatoes.png', text: 'Fresh Tomatoes' },
      { id: 39, image: './assets/images/fresh yellow corn.png', text: 'Fresh Yellow Corn' },
      { id: 40, image: './assets/images/raw brown rice.png', text: 'Raw Brown Rice' },
      // Add more products as needed
    ];
  
    return products.find(product => product.id === productId);
  }
  