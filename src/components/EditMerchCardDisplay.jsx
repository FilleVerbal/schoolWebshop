import "../styles/editMerchCardDisplay.css"
import { deleteMerchItem, editMerchItem } from "../data/crud";

const EditMerchCardDisplay = ({merchItem}) => {
    const { name, description, category, price, image} = merchItem;

    return(
        <div className="merch-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
            <div className="price-container"> <span>{price}kr </span></div>
            <button> Ändra </button>
            <button> Ta bort</button>

        </div>
    )
}

export default EditMerchCardDisplay;