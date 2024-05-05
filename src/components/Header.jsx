import "../styles/header.css"
import { useStore } from "../data/store"
import { useLocation, Link } from "react-router-dom"

const Header = () => {
    const { sortMerch } = useStore();
    const location = useLocation();
    const isLanding = location.pathname === "/"
    const isCartView = location.pathname ==="/cartview"

    const alphaSorter = () => {
        sortMerch("alphabet")
    }
    const priceSorter = () => {
        sortMerch()
    }

    return(
        <nav className="the-header">
            <div className="header-top-row">
                <button> <Link to="/" className="header-link-text"> Till Butiken </Link>  </button>
                <button> <Link to="/cartview" className="header-link-text"> Till Varukorgen </Link>  </button>
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