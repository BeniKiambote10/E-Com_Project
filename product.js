// Fetch product data from product.json
//after I fetch the product from the json file I need to tell the browser what to do with the respone 
//it is converterting the response to JSON format
fetch("product.json")
  .then(res => res.json())
  .then(data => {
    // Assign the fetched product data to the products variable
    products = data;
    // Call the renderProducts function to render the products on the page
    renderProducts();
  })
  .catch(error => console.error('Error fetching products:', error));

// Function to create HTML markup for a product
// This document.createProductElement is 
function createProductElement(product, index) {
  const productElement = document.createElement('div');
  productElement.classList.add('product-item' + (index + 1));
  
  productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name} <i onclick="heartFill()" id="hearty" class="fa-regular fa-heart"></i> </h3>
      <p>${product.product_description}</p>
      <p>$${product.price.toFixed(2)}</p>
      <button class="addCart" id="cart2" onClick="addToCart()">Add to Cart</button>
  `;
  
  return productElement;
}

// Function to render products on the page render just means turning the data into something you can see
//where we start creating the display we will see 
function renderProducts() {
  const productList = document.getElementById('product-list');
  
  products.forEach((product, index) => {
      const productElement = createProductElement(product, index);
      productList.appendChild(productElement);
  });
}

// Call the function to render products when the page loads
window.addEventListener('load', renderProducts);


// Function for adding items to the cart
function addToCart() {
    const size = prompt("What is your size? X-Large, Large, Small, Medium");
    if (size) {
        alert("Added To Your Cart!");
    } else {
        alert("Please enter a size.");
    }
}

// Function to show sidebar
function showSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "flex";
}

// Function to show/hide search box when the hamburger menu us clicked 
function showSearchBox() {
    const searchBox = document.querySelector(".searchBoxCon");
    const searchIcon = document.querySelector(".nav_search");
    if (searchBox.style.display === "flex") {
        searchBox.style.display = "none";
        searchIcon.style.display = "flex";
    } else {
        searchBox.style.display = "flex";
        searchIcon.style.display = "none";
    }

}



//function for when you push the cart icon it will pop on the empty cart section that says your car is empty 
const emptyCartSection = document.getElementById('emptyCartSection');
const cartIcon = document.getElementById('cartAdd'); 

cartAdd.addEventListener('click', function() {
    emptyCartSection.style.display = 'block';
});

document.getElementById('goBackButton').addEventListener('click', function() {
    emptyCartSection.style.display = 'none';
});
