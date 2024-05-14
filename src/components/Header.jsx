import "../styles/header.css"
import { useStore } from "../data/store"
import { useLocation, Link } from "react-router-dom"
import { useState } from "react"

const Header = () => {
    const { sortMerch } = useStore();
    const location = useLocation();
    const isLanding = location.pathname === "/"
    const isCartView = location.pathname ==="/cartview"
    const [isAToZ, setIsAToZ] = useState(true);
    const [is0To1, setIs0To1] = useState(true);

    const alphaSorter = () => {
        sortMerch("alphabet")
        setIsAToZ(!isAToZ)
    }
    const priceSorter = () => {
        sortMerch()
        setIs0To1(!is0To1)
    }

    return(

        <nav className="the-header">
            <div className="header-top-row">
                <button> <Link to="/" className="header-link-text"> Till Butiken </Link>  </button>
                <button> <Link to="/cartview" className="header-link-text"> Till Varukorgen </Link>  </button>
            </div>
            <div className="header-bottom-row">
               <button onClick={alphaSorter} disabled={!isLanding} > {isAToZ ? "Sortera A-Z" : "Sortera Z-A"}  </button>
               {/* <input type="text" placeholder="Sök produkt" />  */}
               <button onClick={priceSorter} disabled={!isLanding} > {is0To1 ? "Sortera 0-9" : "Sortera 9-0"} </button>
            </div>
        </nav>

    )
}
export default Header