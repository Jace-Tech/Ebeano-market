import  { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload]
        },
        deleteFromCart: (state, action) => {
            state.cart = state.cart.slice(action.payload, 1)
        },
        clearCart: (state, action) => {
            state.cart = []
        },
    }
})

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer
