import "../styles/editMerchCardDisplay.css"
import { useState } from "react";
import { deleteMerchItem, editMerchItem } from "../data/crud";
import { useStore } from "../data/store";

const EditMerchCardDisplay = ({merchItem}) => {
    const { name, description, category, price, image, key} = merchItem;
    const { deleteMerchItemZ } = useStore()
    
    
    const deleteHandler = async () => {
        await deleteMerchItem(merchItem.key)
        deleteMerchItemZ(merchItem.key)
    }

    return(
        <div className="merch-card" key={key}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
            <div className="price-container"> <span>{price}kr </span></div>
            <button> Ändra </button>
            <button onClick={deleteHandler}> Ta bort</button>

        </div>
    )
}

export default EditMerchCardDisplay;