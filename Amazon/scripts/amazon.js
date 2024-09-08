// 1. Save the data (data structure)


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

          <button class="add-to-cart-button button-primary js-add-to-cart" data-products-id="${productObject.id}">
            Add to Cart
          </button>
        </div>`
})

document.querySelector('.js-products-grid').innerHTML = productsHTML

// Add Button event
document.querySelectorAll('.js-add-to-cart').forEach((addbtn) => {
  addbtn.addEventListener('click', () => {
    const productName = addbtn.dataset.productsId

    //Using find() method 
    let existingProduct = cart.find(item => item.name === productName)

    // Condition
    if (!existingProduct){
      cart.push ({
        name: productName,
        quantity: 1
      })  
    }else {
      existingProduct.quantity += 1
    }

    // Add total contenty
    let cartTotal = 0
    cart.forEach((item) => {
      cartTotal += item.quantity
    })

    // Show on cart logo
    document.querySelector('.js-cart-quantity').innerText = cartTotal
  })
})
