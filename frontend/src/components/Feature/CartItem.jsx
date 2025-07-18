import { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { updateCartItemQuantity, removeCartItem } from "../../service/cartService"

function CartItem({name, price, itemAmount, id, onAmountChange, onClickChange, isChecked, stock}){

    const [amount, setAmount] = useState(itemAmount)
    const [isDelete, setIsDelete] = useState(false)

    useEffect(() => {
        setAmount(itemAmount)
    },[itemAmount])
    
    const togglePlus = async () => {
        setAmount(amount + 1);
        await updateCartItemQuantity(id, amount + 1); // 更新後端數量
        onAmountChange()
    };

    const toggleMinus = async () => {
        if (amount > 1) {
            setAmount(amount - 1);
            await updateCartItemQuantity(id, amount - 1); // 更新後端數量
            onAmountChange()
        }
    };

    const handleDelete = async () => {
        setIsDelete(!isDelete)
        setAmount(0)
        await removeCartItem(id); // 刪除後端的商品
        if (isChecked) {
            onAmountChange()
        }
    };

    // const handleChecked = async () => {
    //     onClickChange(!isChecked, id)
    // }

    if (isDelete) {
        return null
    }


    return(
        <div id="cart-items" className="bg-[#F5EEDD]">
            <div id="container" className="mt-4 w-full border py-4 pl-10 grid grid-cols-[4fr_1fr_1fr_1fr_1fr] items-center">
                <div className="flex items-center">
                    <input type="checkbox" checked={isChecked} onChange={e => onClickChange(e.target.checked, id)} id="cart-item" className="mr-3 scale-150"/>
                    <a href="#!" className="w-20 aspect-square bg-[url('/images/winter.jpg')] bg-cover-set mr-3"/>
                    <a href="#!">
                        <label htmlFor="cart-item">
                            <h3 id="cart-item-title" className="max-w-50 line-clamp-2">{name}</h3>
                        </label>
                    </a>
                </div>
                <h3 className="text-center">${price}</h3>
                <h3 className="flex justify-center">
                    <div id="amount" className="grid grid-cols-[1fr_1.5fr_1fr] items-center border divide-x border-[#ccc] divide-[#ccc]">
                        <button onClick={toggleMinus} className="h-full flex justify-center items-center cursor-pointer p-1 disabled:text-[#ccc] disabled:cursor-default" disabled={(amount === 1) ? true : false}><FaMinus /></button>
                        <div className="text-center">{amount}</div>
                        <button onClick={togglePlus} className="h-full flex justify-center items-center cursor-pointer p-1 disabled:text-[#ccc] disabled:cursor-default" disabled={(amount === stock) ? true : false}><FaPlus /></button>
                    </div>
                </h3>
                <h3 className="text-center">${price*amount}</h3>
                <button onClick={handleDelete}  className="hover:text-red-600">Delete</button>
            </div>
        </div>
    )
}
export default CartItem;