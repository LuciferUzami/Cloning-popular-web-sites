export const cart = [{
  name: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
}, {
  name: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}]

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



