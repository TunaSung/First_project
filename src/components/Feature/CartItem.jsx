import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";


function CartItem(props){
    
    var [num, setNum] = useState(1)

    const tagglePlus = () => {
        setNum(num+=1)
    }
    const taggleMinus = () => {
        if (num > 1) {
            setNum(num-=1)
        }
    }

    return(
        <div id="cart-items">
            <div id="container" className="mt-4 w-full border py-4 pl-10 grid grid-cols-[4fr_1fr_1fr_1fr_1fr] items-center">
                <div className="flex items-center">
                    <input type="checkbox" id="cart-item" className="mr-3 scale-150"/>
                    <a href="#!" className="w-20 aspect-square bg-[url('./src/assets/images/winter.jpg')] bg-cover-set mr-3" />
                    <a href="#!">
                        <label htmlFor="cart-item">
                            <h3 id="cart-item-title" className="border max-w-50 line-clamp-2">item title link item title link item title link item title link item title link</h3>
                        </label>
                    </a>
                </div>
                <h3 className="text-center">${props.price}</h3>
                <h3 className="flex justify-center">
                    <div id="num" className="grid grid-cols-[1fr_1.5fr_1fr] items-center border divide-x border-[#ccc] divide-[#ccc]">
                        <button onClick={taggleMinus} className="h-full flex justify-center items-center cursor-pointer p-1"><FaMinus /></button>
                        <div className="text-center">{num}</div>
                        <button onClick={tagglePlus} className="h-full flex justify-center items-center cursor-pointer p-1"><FaPlus /></button>
                    </div>
                </h3>
                <h3 className="text-center">${props.price*num}</h3>
                <button className="hover:text-red-600">Delete</button>
            </div>
        </div>
    )
}
export default CartItem;