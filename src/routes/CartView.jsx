import Header from "../components/Header";
import { useStore } from "../data/store";
import CartDisplay from "../components/CartDisplay";
import "../styles/cartview.css"

const CartView = () => {
    const { cartItems } = useStore(state => ({cartItems: state.cartItems}));
    const thisMany = cartItems.length
    // const totalPrice = 

    return (
        <section>
                <Header />
            <div className="cart-page">
                <p className="top-text regular-text"> Dina valda varor </p>
                <div className="cart-cards-displayer">
                {cartItems.map((item) => (
                        <CartDisplay key={item.key} merchItem={item} />
                    ))}

                </div>

                <div className="bottom-container">
                    <p className="bottom-text regular-text">{thisMany}st artiklar,  </p>

                </div>
            </div>

        </section>
    )
}
export default CartView;