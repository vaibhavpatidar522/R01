import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        itemsNumbers : 10 
}

const cartSlice = createSlice({
    name: "cart",
    initialState ,
    reducers:{
        addToCart: (state , actions) =>{
            state.itemsNumbers += 1 
        }, 
        removeFromCart: (state , actions) =>{
            state.itemsNumbers -= 1 
        }
    }
})



export const { addToCart  , removeFromCart } =  cartSlice.actions;
const { reducer } = cartSlice
export default reducer; 
