import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useParams } from "react-router-dom";
import { CartContext } from './context/CartContext';

import { addToCart } from './context/CartContext';
import { useCart } from './context/CustomHookCart';

export default function ProductDetail() {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
      axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
          setProduct(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [id]);

    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setIsAddedToCart(true);
        console.log(product)
    }

  return (
    <>
  {/* Shop Detail Start */}
    <div className="container-fluid py-5" style={{maxWidth: '1300px'}}>
        <div className="row px-xl-5">
            <div className="col-lg-5 pb-5">
            <div id="product-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner border">
                    <div className="carousel-item active">
                        <img className="w-100 h-100"  src={product.image} alt="Image" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                <i className="fa fa-2x fa-angle-left text-dark" />
                </a>
                <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                <i className="fa fa-2x fa-angle-right text-dark" />
                </a>
            </div>
            </div>
            <div className="col-lg-7 pb-5">
                <h3 className="font-weight-semi-bold mb-4">{product.title}</h3>
                <h3 className="font-weight-semi-bold mb-4">${product.price}</h3>
                <p className="mb-4">{product.description}</p>
                <div className="d-flex mb-3">
                    <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
                    <form>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="size-2" name="size" />
                        <label className="custom-control-label" htmlFor="size-2">S</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="size-3" name="size" />
                        <label className="custom-control-label" htmlFor="size-3">M</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="size-4" name="size" />
                        <label className="custom-control-label" htmlFor="size-4">L</label>
                    </div>
                    </form>
                </div>
                <div className="d-flex align-items-center mb-4 pt-2">
                    <div className="input-group quantity mr-3" style={{width: 130}}>
                    <div className="input-group-btn">
                        <button className="btn btn-primary btn-minus">
                        <i className="fa fa-minus" />
                        </button>
                    </div>
                    <input type="text" className="form-control bg-secondary text-center" defaultValue={1} />
                    <div className="input-group-btn">
                        <button className="btn btn-primary btn-plus">
                        <i className="fa fa-plus" />
                        </button>
                    </div>
                    </div>
                    <button
                    disabled={isAddedToCart}
                    onClick={() => handleAddToCart(product)}
                    className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1" />{isAddedToCart ? 'Added to cart' : 'Add to cart'}</button>
                </div>
                <div className="d-flex pt-2">
                    <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                    <div className="d-inline-flex">
                    <a className="text-dark px-2" href>
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a className="text-dark px-2" href>
                        <i className="fab fa-twitter" />
                    </a>
                    <a className="text-dark px-2" href>
                        <i className="fab fa-linkedin-in" />
                    </a>
                    <a className="text-dark px-2" href>
                        <i className="fab fa-pinterest" />
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Shop Detail End */}

    </>
  )
}
