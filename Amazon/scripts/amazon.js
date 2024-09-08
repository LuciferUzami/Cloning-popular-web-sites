// 1. Save the data (data structure)
const products = [{
  image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
  names: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
  rating: {
    stars: 4.5,
    count: 87
  },
  price: 10
}, {
  image: 'images/products/intermediate-composite-basketball.jpg',
  names: 'Intermediate Size Basketball',
  rating: {
    stars: 4,
    count: 127
  },
  price: 200
}, {
  image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  names: 'Adults Plain Cotton T-Shirt - 2 Pack',
  rating: {
    stars: 4.5,
    count: 56
  },
  price: 70
}]

//
let productsHTML = ""

products.forEach((productObject, index) => {
  // Add all the products details 
  productsHTML += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${productObject.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${productObject.names}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${productObject.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${productObject.rating.count}
            </div>
          </div>

          <div class="product-price">
            ₹${productObject.price}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>`
})

document.querySelector('.js-products-grid').innerHTML = productsHTML
