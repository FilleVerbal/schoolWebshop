import "../styles/header.css"

const Header = () => {

    return(
        <nav className="the-header">
            <div className="header-top-row">
                <button> Logo placeholder </button>
                <button> Cart placeholder </button>
            </div>
            <div className="header-bottom-row">
               <button> Sort by letter </button>
               <input type="text" placeholder="Sök produkt" /> 
               <button> Sort by price </button>
            </div>
        </nav>
    )
}
export default Header