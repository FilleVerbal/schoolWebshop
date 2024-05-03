import { useStore } from "../data/store";
import { useEffect } from "react"
import { getTheMerch } from "../data/crud";
import Header from "../components/Header";
import MainCardDisplay from "../components/MainCardDisplay";
import "../styles/landing.css"

const Landing = () => {
    const { merch, setMerch } = useStore(state => ({merch: state.merch, setMerch: state.setMerch}));

    useEffect(() => {
        const fetchData = async () => {
            const fetchedItems = await getTheMerch();            
            setMerch(fetchedItems)
        }
        fetchData()
    }, []);
    // console.log("landing merch är: ", merch.map((item) => item.id));
    return (
        <section>
            <Header />
            <div className="landing-page">
                <div className="merch-display">
                    {merch.map((item) => (
                        <MainCardDisplay key={item.key} merchItem={item} />
                    ))}

                </div>
            </div>

        </section>
    )
}

export default Landing;