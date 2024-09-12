import { cart, removeFromCart, updateDeliveryOption } from "../data/cart.js";
import { products } from "../data/products.js";
// Export exter default export code using url
import dayjs  from "https://unpkg.com/dayjs@1.11.10/esm/index.js"
// Store delivery option
import { deliverOptions } from "../data/deliverOptions.js";

// For create date
// const shippingDate = dayjs()

let cartSummaryHTML = ''
// loop
function cartSlide() {
  cart.forEach((cartItem) => {
    const productId = cartItem.name
   
    let matchingId;
  
    products.forEach((productData) => {

      if (productData.id === productId) {
        matchingId = productData
        // console.log(matchingId)
      }
    });

    // Get out of cart Delivery item id
    const cartAllId = cartItem.deliveryOptionId 
    console.log(cartItem.deliveryOptionId)
    // 
    let deliveryOption = null
    deliverOptions.forEach((getId) =>{
      if (getId.id === cartAllId) {
        deliveryOption = getId
        console.log(deliveryOption)
      }
    })

    // Get the date for title
    if (!deliveryOption) {
      console.error(`Delivery option not found for ID: ${cartAllId}`);
      return; // Skip this cart item if no delivery option is found
    }
    
    const today = dayjs()
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days')
    const dateString = deliveryDate.format('dddd, MMMM D')

  
    // console.log(matchingId)
    cartSummaryHTML += `
      <div class="cart-item-container js-item-id-${matchingId.id}">
            <div class="delivery-date">
              Delivery date: ${dateString}
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

                    ${deliveryOptionsHTML(matchingId.id, cartItem)}
                  
              </div>
            </div>
       </div>
    `
  });
}

// function for get HTML for set Delivery option
function deliveryOptionsHTML(matchingProuct, cartItem) {
  console.log(matchingProuct)
  let html = ''

  deliverOptions.forEach((deliveryOption) =>{
    // Get today
    const today = dayjs()
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days')
    const dateString = deliveryDate.format('dddd, MMMM D')

    // Get price
    const priceString = `${deliveryOption.feesPrice === 0 ? "FREE" : `₹${deliveryOption.feesPrice}`}`
    
    // For radio button auto checked
    const isChecked = deliveryOption.id === cartItem.deliveryOptionId

    // Add html tages
    html += 
      ` <div class="delivery-option js-delivery-option" data-product-id="${matchingProuct}" data-delivery-option-id="${deliveryOption.id}">
            <input type="radio"
              ${isChecked ? 'checked' : ''}
              class="delivery-option-input"
              name="delivery-option-${matchingProuct}">
            <div>
              <div class="delivery-option-date">
                ${dateString}
              </div>
              <div class="delivery-option-price">
                ${priceString} - Shipping
              </div>
            </div>
        </div>`
  })
  // Return to cartSlide
  return html
}

// Call the slide function
cartSlide()

// Add div html
document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML

// For delete 
document.querySelectorAll('.js-delete-cart').forEach((deleteHTML) =>{
  deleteHTML.addEventListener('click', () =>{
    const deleteProduct = deleteHTML.dataset.productId
    //Call function from cart.js
    removeFromCart(deleteProduct)
    document.querySelector(`.js-item-id-${deleteProduct}`).remove()
   })
})

document.querySelectorAll('.js-delivery-option').
forEach((element) => {
  element.addEventListener('click', () => {
    const {productId, deliveryOptionId} = element.dataset
    updateDeliveryOption(productId, deliveryOptionId)
  })
})