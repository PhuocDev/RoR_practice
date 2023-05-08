import { useEffect, useState } from "react";
import { addLess, addMore, addToCart, deleteItem, getTotalMoney } from "./context/CartContext";
import CartDetail from "./CartDetail";
export default function Cart() {

    const [carts, setCarts ] = useState([])
    useEffect(() => {
        const cartsString = localStorage.getItem('cartItems');
        const cartsStored = JSON.parse(cartsString);
        setCarts(cartsStored || []);
    }, []);

    // const handleAddMore = (product) => {
    //     addMore(product);
    //     setCarts(JSON.parse(localStorage.getItem('cartItems')) || []);
    //     const newQuantity = quantity + 1;
    //     setQuantity(newQuantity);
    // }
    // const handleAddLess = (product) => {
    //     addLess(product);
    //     setCarts(JSON.parse(localStorage.getItem('cartItems')) || []);
    // }





  return (
    <>
        {/* Cart Start */}
        <div className="container-fluid pt-5">
            <div className="row px-xl-5">
                <div className="col-lg-8 table-responsive mb-5">
                <table className="table table-bordered text-center mb-0">
                    <thead className="bg-secondary text-dark">
                    <tr>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody className="align-middle">
                    {carts.map((product) => (
                        <CartDetail
                        product={product}
                        setCarts={setCarts}
                        />
                    ))}
                    </tbody>
                </table>
                </div>
                <div className="col-lg-4">
                <form className="mb-5" action>
                    <div className="input-group">
                    <input type="text" className="form-control p-4" placeholder="Coupon Code" />
                    <div className="input-group-append">
                        <button className="btn btn-primary">Apply Coupon</button>
                    </div>
                    </div>
                </form>
                <div className="card border-secondary mb-5">
                    <div className="card-header bg-secondary border-0">
                    <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
                    </div>
                    <div className="card-body">
                    <div className="d-flex justify-content-between mb-3 pt-1">
                        <h6 className="font-weight-medium">Subtotal</h6>
                        <h6 className="font-weight-medium">${getTotalMoney()}</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h6 className="font-weight-medium">Shipping</h6>
                        <h6 className="font-weight-medium">$10</h6>
                    </div>
                    </div>
                    <div className="card-footer border-secondary bg-transparent">
                    <div className="d-flex justify-content-between mt-2">
                        <h5 className="font-weight-bold">Total</h5>
                        <h5 className="font-weight-bold">${getTotalMoney() + 10}</h5>
                    </div>
                    <button className="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        {/* Cart End */}
    </>
  )
}
