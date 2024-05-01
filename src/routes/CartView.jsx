import Header from "../components/Header";
import { useStore } from "../data/store";
import CartDisplay from "../components/CartDisplay";
import "../styles/cartview.css"

const CartView = () => {
    const { cartItems } = useStore();
    const thisMany = cartItems.length

    const curatedItemsForDisplay = cartItems.reduce((acc, item) => {
        if (!acc[item.id]) {
            acc[item.id] = { ...item, quantity: 0 };
        }
        acc[item.id].quantity += 1;
        return acc
    }, {})

    const uniqueItems = Object.values(curatedItemsForDisplay)

    return (
        <section>
            <Header />
            <div className="cart-page">
                <p className="top-text regular-text"> Dina valda varor </p>
                {uniqueItems.map((item) => (
                        <CartDisplay key={item.id} merchItem={item} quantity={item.quantity} />
                    ))}
                {/* <CartDisplay /> */}

                <div className="bottom-container">
                    <p className="bottom-text regular-text">{thisMany}st artiklar,  </p>

                </div>
            </div>

        </section>
    )
}
export default CartView;