function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
    if(quantity === 0){
        throw new RangeError('Количество должно быть больше 0')
    }

    if(quantity > product.stock) {
      throw new RangeError('Нет нужного количества товара на складе')
    }

    if(cart.length === 0){
        cart.push({
            ...product,
            quantity: quantity
        });
        return cart;
    }

    cart.map(p => {
        if(p.id === product.id){
            p.quantity += quantity
        }
        return p;
    })

    return cart;
}
function changeQuantity(cart, productId, quantity) {
  const product = cart.find(p => p.id === productId);
  if(!product) {
    return cart
  }

  if(quantity === 0){
    throw new RangeError('Количество должно быть больше 0')
  }

  if(quantity > product.stock) {
    throw new RangeError('Нет нужного количества товара на складе')
  }

  return [ cart.find(p => {
    if(p.id === productId) {
      p.quantity = quantity
    }
    return p;
  }) ];
}
function removeFromCart(cart, productId) {
  const product = cart.find(p => p.id === productId);
  if(!product) {
    return cart
  }

  return cart.filter(p => p.id !== productId);
}
function calculateCartSubtotal(cart) {
  return cart.reduce( (acc, cur) =>  acc += cur.price * cur.quantity, 0 );
}
function calculateOrderTotal(cart, coupon) {
  const subtotal = calculateCartSubtotal(cart);
  let discountVal = 0;
  const deliveryVal =  subtotal < 50000 ? 30000 : 0;

  if(coupon === 'SAVE10' && subtotal > 20000){
    discountVal = 0.1
  }

  return {
    subtotal,
    discount: subtotal * discountVal,
    delivery: deliveryVal,
    total: subtotal - subtotal * discountVal + deliveryVal
  }
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
