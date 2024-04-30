import Header from "../components/Header";
import { useStore } from "../data/store";

const CartView = () => {
    const { cartItems } = useStore();

    return (
        <section>
            <Header />
            <div className="cart-page">
                <p className="top-text"> Dina valda varor </p>

                <div className="bottom-container">
                    <p> </p>

                </div>
            </div>

        </section>
    )
}
export default CartView;