

export const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

export const addMore = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
export const addLess = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex == 1) {
        deleteItem(product.id)
    }
    cartItems[existingItemIndex].quantity -= 1;

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

export const deleteItem = (id) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const newItems = cartItems.filter((item) => {
        if (item.id != id) {
            return item;
        }
    })


    localStorage.setItem('cartItems', JSON.stringify(newItems));
}
export const getTotalMoney = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const sum = cartItems.reduce((accumulator, object) => {
        return accumulator + object.price*object.quantity;
      }, 0);
    return sum;
}

export const updateQuantity = (product, quantity) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    //update here

    // localStorage.setItem('cartItems', JSON.stringify(newItems));
}
