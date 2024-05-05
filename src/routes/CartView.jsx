import Header from "../components/Header";
import { useStore } from "../data/store";
import CartDisplay from "../components/CartDisplay";
import "../styles/cartview.css"

const CartView = () => {
    const { cartItems, removeCartItem } = useStore(state => ({cartItems: state.cartItems, removeCartItem: state.removeCartItem}));
    const thisMany = cartItems.length
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)

    return (
        <section>
            <div className="header-box">
                <Header />

            </div>
            <div className="cart-page">
                <p className="top-text regular-text"> Dina valda varor </p>
                <div className="cart-cards-displayer">
                {cartItems.map((item, index) => (
                        <CartDisplay key={item.key} index={index}  merchItem={item} onDelete={removeCartItem} />
                    ))}

                </div>

                <div className="bottom-container">
                    <p className="bottom-text regular-text">{thisMany}st artiklar, och din total blir {totalPrice}:- </p>   
                    <button> Köp </button>

                </div>
            </div>

        </section>
    )
}
export default CartView;