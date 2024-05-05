import "../styles/editMerchCardDisplay.css"
import { useState } from "react";
import { deleteMerchItem, editMerchItem } from "../data/crud";
import { useStore } from "../data/store";

const EditMerchCardDisplay = ({merchItem}) => {
    const { name, description, category, price, image, key} = merchItem;
    const { deleteMerchItemZ, updateEditedMerch } = useStore()
    // trial by fire beginns here
    const [isEditing, setIsEditing] = useState(false)
    const [editName, setEditName] = useState(name)
    const [editDescription, seteditDescription] = useState(description)
    const [editCategory, setEditCategory] = useState(category)
    const [editPrice, setEditPrice] = useState(price)

    const editHandler = () => setIsEditing(!isEditing)
    const saveHandler = async () => {
        const updatedMerchItem = {
            name: editName,
            description: editDescription,
            category: editCategory,
            price: editPrice,
        }
        await editMerchItem(key, updatedMerchItem)
        updateEditedMerch(updatedMerchItem)
        setIsEditing(false)
    }
    const handleNameChange = e => setEditName(e.target.value)
    const handleDescriptionChange = e => seteditDescription(e.target.value)
    const handleCategoryChange = e => setEditCategory(e.target.value)
    const handlePriceChange = e => setEditPrice(e.target.value)
    //  shit testing end plus the inputs inside return
    const deleteHandler = async () => {
        await deleteMerchItem(merchItem.key)
        deleteMerchItemZ(merchItem.key)
    }

    return(
        <div className="merch-card" key={key}>
            {isEditing ? (
                <>
                <input type="text" value={editName} onChange={handleNameChange} />
                <textarea value={editDescription} onChange={handleDescriptionChange} />
                <input type="text" value={editCategory} pattern="(automat|manuell)" onChange={handleCategoryChange} />
                <input type="number" value={editPrice} onChange={handlePriceChange} />
                <button onClick={saveHandler}> Spara </button>
                </>
            ) : (
                <>
                <img src={image} alt={name} />
                <h3 className="color-me">{name}</h3>
                <p className="color-me">{description}</p>
                <span className="color-me">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                <div className="price-container color-me"> {price}kr </div>
                <button onClick={editHandler}> Ändra </button>
                
                </>

            )}
            <button onClick={deleteHandler}> Ta bort</button>

        </div>
    )
}

export default EditMerchCardDisplay;