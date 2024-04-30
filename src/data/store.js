import { create } from "zustand"

const useStore = create(set => ({
    merch: [],
    setMerch: newMerch => set(state => ({
        merch: newMerch
    })),
    addMerchItem: merchItem => set(state => ({
        merch: [...state.merch, merchItem]
    })),
    cartItems: [],
    addCartItem: (item) => set(state => ({
        cartItems: [...state.cartItems, item]
    })),
    removeCartItem: (itemId) => set(state => ({
        cartItems: state.cartItems.filter(item => item.id !== itemId)
    })),
}))


export { useStore }