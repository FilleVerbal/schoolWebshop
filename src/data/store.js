import { create } from "zustand"

const useStore = create(set => ({
    merch: [],
    setMerch: newMerch => set(state => ({
        merch: newMerch
    })),
    addMerchItem: merchItem => set(state => ({
        merch: [...state.merch, merchItem]
    })),
    cartItems: 0
}))

export { useStore }