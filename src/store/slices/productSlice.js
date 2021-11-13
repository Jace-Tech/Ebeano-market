import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: null,
    currentProduct: null
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts: (state, action) => {
            state.products = action.payload
        }
    }
})


export const { addProducts } = productSlice.actions
export default productSlice.reducer
