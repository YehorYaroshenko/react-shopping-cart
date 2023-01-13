import './Product.css'
import Count from '../Count/Count'
import ButtonDelete from '../ButtonDelete/ButtonDelete'
import priceFormatter from '../../utils/priceFormatter'

function Product( {product, deleteProduct, increase, decrease, changeValue } ) {

  return (
    <section className="product">
      <div className="product__img">
        <img src={`./images/${product.img}`} alt={product.alt} />
      </div>
      <div className="product__title">{product.title}</div>
      <div className="product__count">

        <Count count={product.count} increase={increase} decrease={decrease} id={product.id} changeValue={changeValue}/>

      </div>
      <div className="product__price">{priceFormatter.format(product.priceTotal)} $</div>
      <div className="product__controls">

        <ButtonDelete deleteProduct={deleteProduct} id={product.id}/>
        
      </div>
    </section>
  )
}

export default Product
