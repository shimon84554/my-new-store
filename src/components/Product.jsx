import product from '../api/products.js';

function ProductCart(pro) {
    return (
        <div className='product-container'>

            <div className='product-image'>{pro.image}</div>

           <h3><div className='product-name'>{pro.name}</div></h3>

           <div className='product-price'>{pro.price}</div> 

           <div className='product-rating'>{pro.rating}</div>

           <div className='dimensions'>{pro.dimensions.size} {price.dimensions.size}</div>

            
        </div>
    )


}