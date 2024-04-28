import "../styles/mainCarddisplay.css"

const MainCardDisplay = ({merchItem}) => {
    const { name, description, category, price, image} = merchItem;

    return(
        <div className="merch-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <span>{category}</span>
            <span>{price}kr</span>
            <button> Köp </button>

        </div>
    )
}

export default MainCardDisplay