
const reducer = (state, action) => {

    switch (action.type) {
        case "CLEAR_CART":
            return { ...state, cart: [] };
        case "REMOVE_ITEM":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        case "INCREASE":
            let tempCart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, amount: item.amount + 1 }
                }
                return item;
            });
            return {
                ...state, cart: tempCart
            }
        case "DECREASE":
            let temperCart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, amount: item.amount - 1 }
                }
                return item;
            })
                .filter((item) => item.amount !== 0);
            return {
                ...state, cart: temperCart
            }
        case 'GET_TOTAL':

            let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, amount } = cartItem;
                const itemTotal = price * amount;

                cartTotal.amount += amount;
                cartTotal.total += itemTotal;
                return cartTotal;
            }, {
                total: 0,
                amount: 0,
            })

            total = parseFloat(total.toFixed(2));
            return { ...state, total, amount }

        case "LOADING":
            return { ...state, loading: true }

        case "DISPLAY_ITEMS":
            return {
                ...state, cart: action.payload, loading: false
            }

        // case "TOGGLE_AMOUNT":
        //     let tempoCart = state.cart.map((item) => {
        //         if (item.id === action.payload.id) {
        //             if (action.payload.type === 'inc') {
        //                 return { ...item, amount: item.amount + 1 }
        //             }
        //             if (action.payload.type === 'dec') {
        //                 return { ...item, amount: item.amount - 1 }

        //             }


        //         }
        //         return item;
        //     }).filter((item) => item.amount !== 0);

        //     return { ...state, cart: tempoCart }


    }
    throw new Error('no matching action type');
}

export default reducer;