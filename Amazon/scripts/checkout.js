import { cart, removeFromCart } from "../data/cart.js";
import { products } from "../data/products.js";

let cartSummaryHTML = ''

// loop
function cartSlide() {
  cart.forEach((cartItem, index) => {
    const productId = cartItem.name
  
    let matchingId;
  
    products.forEach((productData) => {
      if (productData.id === productId) {
        matchingId = productData
        console.log(matchingId)
      }
    });
  
    // console.log(matchingId)
    cartSummaryHTML += `
    <div class="cart-item-container js-item-id-${matchingId.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>
  
            <div class="cart-item-details-grid">
              <img class="product-image"
                src=${matchingId.image}>
  
              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingId.names}
                </div>
                <div class="product-price">
                  ₹${matchingId.price}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-cart" data-product-id = "${matchingId.id}">
                    Delete
                  </span>
                </div>
              </div>
  
              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${index}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${index}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      ₹50 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${index}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      ₹100 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `
  });
}

// Call the slide function
cartSlide()

// Add div html
document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML

// for delete 
document.querySelectorAll('.js-delete-cart').forEach((deleteHTML) =>{
  deleteHTML.addEventListener('click', () =>{
    const deleteProduct = deleteHTML.dataset.productId
    //Call function from cart.js
    removeFromCart(deleteProduct)
    document.querySelector(`.js-item-id-${deleteProduct}`).remove()
   })
})
