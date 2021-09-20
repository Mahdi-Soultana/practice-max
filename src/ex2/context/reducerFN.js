///Reducer
function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      let cart = [...state.cart, action.item];
      let totalAmount = updateTotalAmount(cart);
      return { ...state, cart, totalAmount };
    }

    case "UPDATE_CART": {
      let cart = action.cartUpdated;
      let totalAmount = updateTotalAmount(cart);
      return { ...state, cart, totalAmount };
    }
    case "REMOVE": {
      let IndexItem = state.cart.findIndex((item) => item.id === action.id);
      let cartFiltred;
      if (state.cart[IndexItem].amount > 1) {
        state.cart[IndexItem].amount -= 1;
        cartFiltred = [...state.cart];
      } else {
        console.log("Remove Item");
        cartFiltred = state.cart.filter((item) => {
          return item.id !== action.id;
        });
      }

      return {
        ...state,
        cart: cartFiltred,
        totalAmount: updateTotalAmount(cartFiltred),
      };
    }
    case "SWITCH_ISOPEN":
      return { ...state, isOpen: !state.isOpen };
    default: {
      return state;
    }
  }
}

export default reducer;
function updateTotalAmount(items = []) {
  const TotalAmountCounted = items.reduce((acc, item) => {
    //each Item must have price and amount
    let totalAmountByItem = Number(item.amount) * Number(item.price);
    acc = acc + totalAmountByItem;
    return acc;
  }, 0);

  return TotalAmountCounted;
}
