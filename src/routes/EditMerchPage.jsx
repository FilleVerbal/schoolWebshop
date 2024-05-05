import { useStore } from "../data/store";
import { useEffect } from "react"
import { getTheMerch } from "../data/crud";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import EditMerchCardDisplay from "../components/EditMerchCardDisplay";
import "../styles/editMerchPage.css"

const EditMerchPage = () => {
    const { merch, setMerch } = useStore(state => ({merch: state.merch, setMerch: state.setMerch}));

    useEffect(() => {
        const fetchData = async () => {
            const fetchedItems = await getTheMerch();
            setMerch(fetchedItems)
        }
        fetchData()
    }, []);

    return (
        <section className="edit-merch-page" >
            <Header/>
            <button className="add-new-merch-btn"><Link to="/additemform" className="link-text">Lägg till ny produkt</Link></button>
            <div className="edit-merch-display">
                {merch.map((item) => (
                    <EditMerchCardDisplay key={item.key} merchItem={item} />
                ))}

            </div>

        </section>
    )
}
export default EditMerchPage;