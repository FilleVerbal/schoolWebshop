import { useState, useEffect } from "react"
import MainCardDisplay from "../components/MainCardDisplay";
import Header from "../components/Header";
import { getTheMerch } from "../data/crud";
import "../styles/landing.css"

const Landing = () => {
    const [merchItems, setMerchItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedItems = await getTheMerch();
            setMerchItems(fetchedItems)
        }
        fetchData()
    }, []);

    return (
        <section>
            <Header />
            <div className="landing-page">
                <div className="merch-display">
                    {merchItems.map((item) => (
                        <MainCardDisplay key={item.id} merchItem={item} />
                    ))}

                </div>
            </div>

        </section>
    )
}

export default Landing;