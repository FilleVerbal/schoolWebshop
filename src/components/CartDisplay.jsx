import "../styles/cartDisplay.css"
import { useStore } from "../data/store";

const CartDisplay = ({merchItem, quantity}) => {
    const { name, description, category, price, image} = merchItem;
    const { addCartItem, removeCartItem  } = useStore();
    
    const removeHandler = () => {
        removeCartItem(merchItem.id)
    }
    const addHandler = () => {
        addCartItem(merchItem)
    }

    return(
        <div className="cart-card">
            <div className="image-container">
                <img src={image} alt={name} />
            </div>
            <div className="cart-info-div">
                <h3>{name}</h3>
                <p>{description}</p>
                {/* <span>{category}</span> */}
            </div>
            <div className="price-container"> <span>{price}kr </span></div>
            <div className="more-less-button-div">
                <button className="minus-btn" onClick={removeHandler}> minus </button>
                <> {quantity} </>
                <button className="plus-btn" onClick={addHandler}> plus </button>
            </div>



        </div>
    )
}
export default CartDisplay;