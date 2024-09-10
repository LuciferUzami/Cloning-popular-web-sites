export let cart = JSON.parse(localStorage.getItem('cart'))
if (!cart) {
  cart = [{
    name: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
  }, {
    name: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
  }]
  
}

// Set localStorage
function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart))
}


export function addTocart(productName) {
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
  saveToStorage()
}


// Removing product form cart
export function removeFromCart(deleteProduct) {
  const newCart = []
  cart.forEach((cartItem) =>{
    if (deleteProduct !== cartItem.name) {
      newCart.push(cartItem)
    }
  })
  cart = newCart

  saveToStorage()
}


