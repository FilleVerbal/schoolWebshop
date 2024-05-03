import { addMerch } from "../data/crud";
import { useState } from "react";
import "../styles/addItemForm.css"


const AddItemForm = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")
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
        setName("")
        setDescription("")
        setImage("")
        setPrice("")
    }

    return (
        <section className="add-item-form-page">
            <form onSubmit={submitHandler}>

                <p> Produktnamn </p>
                <label>
                    <input type="text" value={name} placeholder="Döp produkten" 
                    onChange={e => setName(e.target.value)} required />
                </label>

                <p> Beskrivning </p>
                <label>
                    <input type="text" value={description} placeholder="Beskriv produkten"
                    onChange={e => setDescription(e.target.value)} required />
                </label>

                <p> Välj kategori</p>
                <label>
                    <input type="radio" name="category"
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
                </label>

                <p> Pris </p>
                <label>
                    <input type="number" value={price} placeholder="123"
                    onChange={e => setPrice(e.target.value)} required />
                </label>
                <br/>
                <button type="submit"> Spara </button>


            </form>

        </section>
    )
}

export default AddItemForm;