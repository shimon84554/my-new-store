 import *as allProducts from '../api/products.js'


 function creatCard (product){
    return(
       <div product-aontainer>
        <h3 className='product-title'>{product.title}</h3>
        <img className='product-image' src={product.previewImage} alt="previewImage" />
        <div className='btn&price'>
        <button className='btn-aad-to-cart'></button>
        <span className='product-price'>{product.price}</span>
        </div>
       </div> 
    )
 }

 function gimredAllProducts (){
    allProducts.default.forEach(pro =>{
        creatCard(pro)
    })
 }

