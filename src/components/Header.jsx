import "../styles/header.css"
import { useStore } from "../data/store"
import { useLocation } from "react-router-dom"

const Header = () => {
    const { sortMerch } = useStore();
    const location = useLocation();
    const isLanding = location.pathname === "/"

    const alphaSorter = () => {
        sortMerch("alphabet")
    }
    const priceSorter = () => {
        sortMerch()
    }

    return(
        <nav className="the-header">
            <div className="header-top-row">
                <button> Logo placeholder </button>
                <button> Cart placeholder </button>
            </div>
            <div className="header-bottom-row">
               <button onClick={alphaSorter} disabled={!isLanding} > Sortera A-Z </button>
               <input type="text" placeholder="Sök produkt" /> 
               <button onClick={priceSorter} disabled={!isLanding} > Sortera pris </button>
            </div>
        </nav>
    )
}
export default Header