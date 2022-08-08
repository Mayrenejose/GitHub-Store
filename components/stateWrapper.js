import { createContext, useContext, useState } from "react"

const AppContext = createContext({
    isOpen: false,
    items: [],
    openCart: () => { },
    closeCart: () => { },
    addItemToCart: (item) => { },
    getNumberOfItems: () => { }
});

export default function StateWrapper({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([]);

    function handleOpenCart() {
        setIsOpen(true);
    }

    function handleCloseCart() {
        setIsOpen(false);
    }

    function handleAddItemToCart(item) {
        const temporal = [...items];
        const found = temporal.find(product => product.id === item.id);

        if (found) {
            found.qty++;
        } else {
            item.qty = 1;
            temporal.push(item);
        }

        setItems([...temporal]);
    }

    function handleNumberOfItems() {
        const total = items.reduce((acc , item) => acc + item.qty, 0);

        return total;
    }


    return <AppContext.Provider
    value={{
        isOpen,
        items,
        openCart : handleOpenCart,
        closeCart : handleCloseCart,
        addItemToCart : handleAddItemToCart,
        getNumberOfItems : handleNumberOfItems
    }}
    >
        {children}
        </AppContext.Provider>

}

export function useAppContext() {
    return useContext(AppContext);
}