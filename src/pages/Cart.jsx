import CartItem from "../components/Feature/CartItem"

function Cart(){
    return (
        <div id="cart">
            <div id="container" className="container-mid flex justify-center items-center">
                <div id="title" className="text-5xl mt-30 indie-flower-regular">Cart</div>
            </div>
            <div id="container" className="container-mid flex justify-center items-center mb-15 flex-col max-md:text-sm">
                <div id="classification" className="border w-full pl-10 py-4 mt-15 grid grid-cols-[4fr_1fr_1fr_1fr_1fr]">

                    <label htmlFor="Commodity" className="flex items-center">
                        <input type="checkbox" id="Commodity" className="mr-3 scale-150"/>
                        Commodity
                    </label>
                    <h3 className="text-center">Price</h3>
                    <h3 className="text-center">Quantity</h3>
                    <h3 className="text-center">Total</h3>
                    <h3 className="text-center">Delete</h3>
                </div>
                <div id="cart-item" className="w-full ">
                    <CartItem price={100}/>
                    <CartItem price={1599}/>
                    <CartItem price={250}/>
                </div>
                <div id="classification" className="border w-full pl-10 pr-3 py-1 mt-5 flex justify-between">
                    <label htmlFor="Commodity" className="flex items-center">
                        <input type="checkbox" id="Commodity" className="mr-3 scale-150"/>
                        Commodity
                    </label>
                    <div className="flex items-center gap-2">
                        <h4>Total price:</h4>
                        <h3 className="text-red-600">$3298</h3>
                        <a href="#!">
                            <button className="border py-2 px-6 text-sm rounded-xl cursor-pointer">Pay for it</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart