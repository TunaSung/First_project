import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Btn from "../components/UI/Btn";

function ProductItem () {

    var [num, setNum] = useState(1)

    const tagglePlus = () => {
        setNum(num+1)
    }
    const taggleMinus = () => {
        if (num > 1) {
            setNum(num-1)
        }
    }

    return(
        <div id="product-item">
            <div id="container" className="w-[75%] max-lg:w-[90%] max-md:w-[98%] mx-auto p-4 justify-center items-start my-15">
                <div id="item-info" className="grid grid-cols-[1fr_1.5fr] max-lg:grid-cols-1 border gap-rwd p-4 mb-10">
                    <div className="flex justify-center items-center">
                        <div id="item-img" className="w-100 aspect-square max-lg: bg-[url('./src/assets/images/kami.jpg')] bg-cover-set" />
                    </div>
                    <div id="item" className="grid grid-rows-[1fr_1fr_7fr_1fr_1.5fr]">
                        <div id="item-title" className="text-2xl">This is title</div>
                        <div id="item-price" className="text-red-600 text-3xl">$1,231</div>
                        <div id="item-filter" className="border">transport color size</div>
                        <div id="quantity" className="flex justify-start items-center">
                            <h3 className="mr-2">Quantity</h3>
                            <div id="num" className="grid grid-cols-[1fr_1.5fr_1fr] justify-between items-center border divide-x border-[#ccc] divide-[#ccc]">
                                <button onClick={taggleMinus} className="h-full flex justify-center items-center cursor-pointer p-1"><FaMinus /></button>
                                <div className="text-center font-bold">{num}</div>
                                <button onClick={tagglePlus} className="h-full flex justify-center items-center cursor-pointer p-1"><FaPlus /></button>
                            </div>
                        </div>
                        <div id="add" className="flex justify-start gap-4">
                            <Btn text="Add To Cart"/>
                            <Btn text="Buy Directly"/>
                        </div>
                    </div>
                </div>
                <div id="total-info" className="border w-full h-200">info detail</div>
            </div>
        </div>
    )
}
export default ProductItem