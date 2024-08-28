import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1; // Increase quantity if item exists
            } else {
                state.push({ ...action.payload, quantity: 1 }); // Add item with initial quantity
            }
        },
        remove: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
        increaseQuantity: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
    }
});

export const { add, remove, increaseQuantity, decreaseQuantity } = CartSlice.actions;
export default CartSlice.reducer;
