

import PropTypes from 'prop-types';

const Cart = ({cart}) => {
    return (
        <div className="cart">
            <h2>Cart</h2>
            {cart.length ===0?(
                <p>Cart is Empty</p>
            ):(
                <ul>
                    {cart.map((expert)=>(
                        <li key={expert}>
                            <img src={expert.img} alt={expert.name} />
                            <span>{expert.name}</span>
                        </li>
                    ))}
                </ul>
            )}
            
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Cart;