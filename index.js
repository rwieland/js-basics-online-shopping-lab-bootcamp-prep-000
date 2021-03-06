var cart;

function setCart(newCart) {
  cart = newCart;
}

setCart([])

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  var newItem = {}
  newItem[item] = price
  cart.push(newItem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length > 0) {
    var viewCartStatement = "In your cart, you have "
    for (var i=0; i < cart.length; i++) {
      for (var item in cart[i]) {
        viewCartStatement += `${item} at $${cart[i][item]}`
      }
      if (i === cart.length - 1) {
        viewCartStatement += "."
      } else {
        viewCartStatement += ", "
      }
    console.log(viewCartStatement)
    }
  } else {
    console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(item) {
  for (var i in cart) {
    if (Object.keys(cart[i])[0] === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  if (isNaN(cardNumber)) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    setCart([])
  }
}
