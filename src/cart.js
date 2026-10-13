function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
    if(quantity === 0){
        throw new RangeError('Количество должно быть больше 0')
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
function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
