import "../styles/mainCarddisplay.css"
import { useStore } from "../data/store";

const MainCardDisplay = ({merchItem}) => {
    const { name, description, category, price, image} = merchItem;
    const { addCartItem } = useStore()
    const buyHandler = () => {
        addCartItem(merchItem)
        console.log("köp tryckt och detta blev tillagt: ", merchItem);
    }
    
    return(
        <div className="merch-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
            <div className="price-container"> <span>{price}kr </span></div>
            <button onClick={buyHandler}> Köp </button>

        </div>
    )
}

export default MainCardDisplay