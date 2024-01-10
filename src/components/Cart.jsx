import CartFooter from "./CartFooter";
import CartBody from "./CartBody";
import CartHeader from "./CartHeader";
const Cart = () => {
    return (
        <div className="w-72 border bg-slate-50 p-2">
            {/* cart header  */}
            <CartHeader/>
            {/* cart body  */}
           <CartBody/>
            {/* cart footer  */}
           <CartFooter/>
        </div>
    );
};

export default Cart;