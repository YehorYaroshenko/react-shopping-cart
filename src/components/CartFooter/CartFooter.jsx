import './CartFooter.css'
import priceFormatter from '../../utils/priceFormatter'

function CartFooter({total}) {
  return (
    <footer className="cart-footer">
      <div className="cart-footer__count">{total.count} units</div>
      <div className="cart-footer__price">{priceFormatter.format(total.price)} $</div>
    </footer>
  )
}

export default CartFooter
