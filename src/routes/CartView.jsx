import Header from "../components/Header";
import { useStore } from "../data/store";
import { Link } from "react-router-dom";
import CartDisplay from "../components/CartDisplay";
import "../styles/cartview.css"

const CartView = () => {
    const { cartItems, removeCartItem, setCartItems } = useStore(state => ({cartItems: state.cartItems, removeCartItem: state.removeCartItem, setCartItems: state.setCartItems}));
    const thisMany = cartItems.length
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)
    const buyHandler = () => {
        setCartItems([])
    }

    return (
        <section className="cart-view-container">
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
                     <Link to="/" className="buy-text-cart-view"><button onClick={buyHandler}> Köp </button></Link> 

                </div>
            </div>

        </section>
    )
}
export default CartView;