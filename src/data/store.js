import { create } from "zustand"

const useStore = create(set => ({
    merch: [],
    setMerch: newMerch => set(state => ({
        merch: newMerch
    })),
    addMerchItemZ: merchItem => set(state => ({
        merch: [...state.merch, merchItem]
    })),
    updateEditedMerch: (updatedItem) => set(state => {
        const updatedMerch = state.merch.map((item) => item.key === updatedItem.key ? updatedItem : item)
        return {merch: updatedMerch}
    }),
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
    removeCartItem: (index) => set(state => ({
        cartItems: state.cartItems.slice(0, index).concat(state.cartItems.slice(index + 1)),
      })),
    deleteMerchItemZ: (key) => { set(state => ({ merch: state.merch.filter(item => item.key !== key) })); }
}))

export { useStore }