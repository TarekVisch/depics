import React from 'react';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

export default function CartItem({ item, removeItem }) {
  return (
    <div className="cart__item">
      <div className="cart__item__image">
        <img src={item.src} alt={item.title} />
      </div>
      <div className="cart__item__info">
        <p className="cart__item__info--title">{item.title}</p>
        <p className="cart__item__info--price">$ {item.price}</p>
      </div>
      <div className="cart__item__options">
        <button className="btn btn-options" onClick={() => removeItem(item.id)}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}
