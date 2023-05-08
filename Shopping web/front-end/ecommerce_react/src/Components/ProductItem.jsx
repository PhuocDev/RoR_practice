
import { NavLink, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ProductItem(props) {
    const {product } = props

    const handleClickAddToCart  = () => {

    }

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1" style={{width:'400px', height: '600px'}}>
        <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0" style={{maxWidth:'100%', height: '420px'}}>
                <img className="img-fluid w-100" src={product.image}  alt="product images url" />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">{product.title}</h6>
            <div className="d-flex justify-content-center">
                <h6>${product.price}</h6>
                {/* <h6 className="text-muted ml-2"><del>$123.00</del></h6> */}
            </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
            <NavLink to={`/products/${product.id}`} className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</NavLink>
            <button  className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</button>
            </div>
        </div>
    </div>
  )
}
