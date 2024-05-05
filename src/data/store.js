import { create } from "zustand"

const useStore = create(set => ({
    merch: [],
    setMerch: newMerch => set(state => ({
        merch: newMerch
    })),
    addMerchItemZ: merchItem => set(state => ({
        merch: [...state.merch, merchItem]
    })),
    sortMerchAlphabetically: () => [...useStore.getState().merch].sort((a,b) => {
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1
        } else {
            return 0;
        }    
    }),
    sortMerchByPrice: () => [...useStore.getState().merch].sort((a, b) => a.price - b.price),
    sortMerch: (sortBy) => {
        const sortedItems = sortBy === "alphabet"
        ? useStore.getState().sortMerchAlphabetically()
        : useStore.getState().sortMerchByPrice()
        set(state => ({
            merch: sortedItems
        }))
    },
    cartItems: [],
    addCartItem: (item) => set(state => ({
        cartItems: [...state.cartItems, item]
    })),
    removeCartItem: (itemId) => set(state => ({
        cartItems: state.cartItems.filter(item => item.id !== itemId)
    })),
    deleteMerchItemZ: (key) => { set(state => ({ merch: state.merch.filter(item => item.key !== key) })); }
}))

export { useStore }