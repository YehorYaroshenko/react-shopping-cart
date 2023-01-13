import Cart from "../Cart/Cart";
import Title from "../Title/Title";
import "./_base.css"
import "./_reset.css"
import "./_section-cart.css"

function App() {
  return (
    <section className="section-cart">
      <header className="section-cart__header">
         <div className="container">
            <Title />
         </div>
      </header>
      <div className="section-cart__body">
         <div className="container">
            <Cart />
         </div>
      </div>
   </section>
  );
}

export default App;