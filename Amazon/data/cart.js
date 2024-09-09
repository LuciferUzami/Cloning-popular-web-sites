export const cart = []

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
}



