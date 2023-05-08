import React, { useState } from 'react'
import { addLess, addMore, deleteItem, updateQuantity } from './context/CartContext';

export default function CartDetail(props) {
    const {product, setCarts } = props;
    const [quantity, setQuantity] = useState(1);

    const handleAddMore = (product) => {
        addMore(product);
        setCarts(JSON.parse(localStorage.getItem('cartItems')) || []);
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateQuantity(product, newQuantity)
    }
    const handleAddLess = (product) => {
        if (quantity >= 1){
            addLess(product);
            setCarts(JSON.parse(localStorage.getItem('cartItems')) || []);
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            updateQuantity(product, newQuantity)
        }

    }
    const handleDelete = (id) => {
        deleteItem(id)
        setCarts(JSON.parse(localStorage.getItem('cartItems')) || []);
    }

  return (
            <tr key={product.id}>
                <td className="align-middle"><img src={product.image} alt style={{width: 50}} /> {product.name}</td>
                <td className="align-middle">${product.price}</td>
                <td className="align-middle">
                <div className="input-group quantity mx-auto" style={{width: 100}}>
                    <div className="input-group-btn">
                        <button onClick={() => handleAddLess(product)} className="btn btn-sm btn-primary btn-minus">
                            <i className="fa fa-minus" />
                        </button>
                    </div>
                    <input type="text" className="form-control form-control-sm bg-secondary text-center" defaultValue={1} value={quantity}  />
                    <div className="input-group-btn">
                    <button  onClick={() => handleAddMore(product)} className="btn btn-sm btn-primary btn-plus">
                        <i className="fa fa-plus" />
                    </button>
                    </div>
                </div>
                </td>
                <td className="align-middle">${quantity*product.price}</td>
                <td className="align-middle"><button onClick={() => handleDelete(product.id)} className="btn btn-sm btn-primary"><i className="fa fa-times" /></button></td>
            </tr>
  )
}
