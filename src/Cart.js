import ProductList from './ProductList'
 
  export default function Cart(props) {
    
    const { products, productsInCart, onUpdateCart } = props

    const _products = products.filter ( p => p.id in productsInCart )

    console.log('render')
    return (
        <div>
            <h2>Cart</h2>
            <ProductList products={_products} onUpdateCart={onUpdateCart} />
        </div>
    )
  }
  
 