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
    isAscendingAlphabet : false,
    isAscendingPrice: false,
    toggleSortOrderAlphabet: () => {
        set(state => ({ isAscendingAlphabet: !state.isAscendingAlphabet }));
    },
    toggleSortOrderPrice: () => {
        set(state => ({ isAscendingPrice: !state.isAscendingPrice }));
    },
    sortMerchAlphabetically: () => {
        const isAscending = useStore.getState().isAscendingAlphabet
        return [...useStore.getState().merch].sort((a,b) => {
            if (a.name < b.name) {
                return isAscending ? -1 : 1;
            } else if (a.name > b.name) {
                return isAscending ? 1 : -1
            } else {
                return 0;
            }    
            
        })
    } ,
    sortMerchByPrice: () => {
        const isAscending = useStore.getState().isAscendingPrice;
        return [...useStore.getState().merch].sort((a, b) =>
            isAscending ? a.price - b.price : b.price - a.price)
    },
    sortMerch: (sortBy) => {
        if (sortBy === "alphabet") {
            useStore.getState().toggleSortOrderAlphabet();
        } else {
            useStore.getState().toggleSortOrderPrice();
        }
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