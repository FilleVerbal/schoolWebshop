import "../styles/mainCarddisplay.css"
import { useStore } from "../data/store";

const MainCardDisplay = ({merchItem}) => {
    const { name, description, category, price, image, key} = merchItem;
    const { addCartItem, cartItems } = useStore(state => ({addCartItem: state.addCartItem, cartItems: state.cartItems}))
    const buyHandler = () => {
        addCartItem(merchItem);
        console.log("köp tryckt och detta blev tillagt: ", merchItem);
        console.log("cartItems är: ", cartItems)
    }

    return(
        <div className="merch-card" key={key}>
            <img src={image} alt={name} />
            <h3 className="color-me-text">{name}</h3>
            <p className="color-me-text">{description}</p>
            <span className="color-me-text">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
            <div className="price-container color-me-text"> {price}kr </div>
            <button onClick={buyHandler}> Köp </button>

        </div>
    )
}

export default MainCardDisplay