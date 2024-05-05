import { addMerch } from "../data/crud";
import { useState } from "react";
import { useStore } from "../data/store";
import { useNavigate } from "react-router-dom";
import "../styles/addItemForm.css"

const AddItemForm = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState(0)
    const { addMerchItemZ } = useStore()
    const navigate = useNavigate()
    //  test radioknapp
    const categoryHandler = e => {
        setCategory(e.target.value)
    }
    // slut test radioknapp
    const submitHandler = e => {
        e.preventDefault()
        const merchItem = {
            name,
            description,
            category,
            image,
            price
        }
        addMerch(merchItem)
        addMerchItemZ(merchItem)
        setName("")
        setDescription("")
        setImage("")
        setPrice(0)
        navigate("/editmerchpage")
    }

    return (
        <section className="add-item-form-page">
            <h2 className="form-h"> Lägg till produkt </h2>
            <form onSubmit={submitHandler}>

                <p> Produktnamn </p>
                <label>
                    <input type="text" value={name} placeholder="Namnge Produkten" 
                    onChange={e => setName(e.target.value)} required />
                    <p className="warning-text"> Du måste fylla i ett namn</p>
                </label>

                <p> Beskrivning </p>
                <label>
                    <input type="text" value={description} placeholder="Beskriv produkten"
                    onChange={e => setDescription(e.target.value)} required />
                    <p className="warning-text"> Du måste fylla i en beskrivning</p>
                </label>

                <p> Välj kategori</p>
                <label>
                    <input className="radio-input" type="radio" name="category"
                    value="automat" onChange={categoryHandler} />
                    Automat
                </label>
                <label>
                    <input type="radio" name="category"
                    value="manuell" onChange={categoryHandler} checked />
                    Manuell
                </label>

                <p> Klistra in bild-url</p>
                <label>
                    <input type="text" value={image} placeholder="url här"
                    onChange={e => setImage(e.target.value)} required />
                    <p className="warning-text"> Du måste klistra in en url</p>
                </label>

                <p> Pris </p>
                <label>
                    <input type="number" value={price} placeholder="123"
                    onChange={e => setPrice(e.target.value)} required />
                    <p className="warning-text"> Du måste fylla i ett pris i siffror</p>
                </label>
                
                <button type="submit" > Spara </button>


            </form>

        </section>
    )
}

export default AddItemForm;