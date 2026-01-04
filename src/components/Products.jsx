import * as allProducts from '../api/products.js'


function creatCard(product) {
   return (
      <div product-container>
         <h3 className="product-title">{product.title}</h3>
         <img className="product-image" src={product.previewImage} alt="previewImage" />
         <div className="btn-price">
            <button className="btn-add-to-cart">add to cart</button>
            <span className="product-price">{product.price}</span>
         </div>
      </div>
   )
}

function renderAllProducts() {
   return (
       allProducts.default.map(pro => {
         creatCard(pro);
      })
      
   )
}

function Products (){
   return (<div>{renderAllProducts()}</div>)
}
export default Products;





