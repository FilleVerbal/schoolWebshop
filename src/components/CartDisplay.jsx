import "../styles/cartDisplay.css"

const CartDisplay = ({merchItem}) => {
    const { name, description, category, price, image} = merchItem;

    return(
        <div className="cart-card">
            <div className="image-container">
                <img src={image} alt={name} />
            </div>
            <div className="cart-info-div">
                <h3>{name}</h3>
                <p>{description}</p>
                <div className="price-container"> <span>{price}kr </span></div>
                {/* <span>{category}</span> */}
            </div>
            <div className="more-less-button-div">
                <button> plus minus här </button>
            </div>



        </div>
    )
}
export default CartDisplay;