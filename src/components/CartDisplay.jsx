import "../styles/cartDisplay.css"
import { useStore } from "../data/store";

const CartDisplay = ({merchItem, index}) => {
    const { name, description, category, price, image, key} = merchItem;
    const { removeCartItem, cartItems } = useStore();
    
    const removeHandler = () => {
        removeCartItem(index)
    }

    return(
        <div className="merch-card">
            {console.log("cartitems i display", cartItems)}
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
            <div className="price-container"> <span>{price}kr </span></div>
            <button onClick={removeHandler}> Ta bort </button>

        </div>
    )
}
export default CartDisplay;