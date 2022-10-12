import React from 'react';
import { ChevronDown, ChevronUp } from '../icons';
import { removeItem,increase,decrease } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, img, title, price, amount }) => {
    const dispatch = useDispatch();
    const removeClickHandler = () =>{
        dispatch(removeItem(id));
    };
    const increaseClickHandler = () => {
        dispatch(increase({id}));
    }
    const decreaseClickHandler = () => {
        if(amount===1) {
            dispatch(removeItem(id));
            return;
        }
        dispatch(decrease({id}));
    }
    return (
        <article key={id} className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>${price}</h4>
                {/* remove button */}
                <button className='remove-btn' onClick={removeClickHandler}>remove</button>
            </div>
            <div>
                {/* increase amount */}
                <button className='amount-btn' onClick={increaseClickHandler}>
                    <ChevronUp />
                </button>
                {/* amount */}
                <p className='amount'>{amount}</p>
                {/* decrease amount */}
                <button className='amount-btn' onClick={decreaseClickHandler}>
                    <ChevronDown />
                </button>
            </div>
        </article>
    );
};

export default CartItem;
