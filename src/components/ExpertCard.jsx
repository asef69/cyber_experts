import PropTypes from 'prop-types';

const ExpertCard = ({expert,addToCart,removeFromCart,cart}) => {
    const inCart=cart.some((item)=>item.id===expert.id);

    return (
        <div>
            <img src={expert.img} alt={expert.name}/>
            <h3>{expert.name}</h3>
            <p>Age:{expert.age}</p>
            <p>Designation:{expert.designation}</p>
            <p>Address:{expert.address}</p>
            <p>Salary: ${expert.salary}</p>
            <button onClick={()=>inCart? removeFromCart(expert.id):addToCart(expert)} className={inCart?"remove-btn":"add-btn"}>
                {inCart? "Remove from Cart":"Add to Cart"}
            </button>
        
        </div>
    );
};

ExpertCard.propTypes = {
    expert: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        designation: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        salary: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    cart: PropTypes.array.isRequired,
};

export default ExpertCard;