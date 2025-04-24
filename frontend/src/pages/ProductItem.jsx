import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Btn from "../components/UI/Btn";
import { useParams } from "react-router-dom";
import { productById } from "../service/productService";
import { addToCart } from "../service/cartService"
import kami from '../../public/images/kami.jpg'
import 'ldrs/dotStream'

function ProductItem () {

    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [amount, setAmount] = useState(1);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const data = await productById(id);
            setProduct(data.product);
          } catch (error) {
            console.error("獲取商品詳情失敗：", error);
          }
        };
        fetchProduct();
    }, [id]);

    useEffect(() => {
            // 檢查 localStorage 是否有 token，來判斷使用者是否已登入
            const token = localStorage.getItem("token");
            setIsAuthenticated(!!token);
    }, []);

    const tagglePlus = () => {
        setAmount(amount+1)
    }
    const taggleMinus = () => {
        if (amount > 1) {
            setAmount(amount-1)
        }
    }

    const handleAddToCart = async () => {
        if (!isAuthenticated) {
            alert("Login first!")
            navigate("/sign-in"); // ✅ 若未登入，跳轉到登入頁面
        } else {
            try {
                await addToCart(id, amount); // 調用 addToCart 服務將商品加入購物車
                alert("商品已加入購物車！");
            } catch (error) {
                console.error("加入購物車失敗", error);
            }
        }
    };

    if (!product) {
        return (
            <div className="w-full text-center my-25">
                <l-dot-stream
                size="60"
                speed="2.5"
                color="black" 
                ></l-dot-stream>
            </div>
        )
    }

    return(
        <div id="product-item">

            {/* Start main */}
            <div id="container" className="w-[75%] max-lg:w-[90%] max-md:w-[98%] mx-auto p-4 justify-center items-start my-15">

                {/* Start item */}
                <div id="item-info" className="grid grid-cols-[1fr_1.5fr] max-lg:grid-cols-1 border gap-rwd p-4 mb-10">

                    {/* Start item img */}
                    <div className="flex justify-center items-center">
                        <div id="item-img" className="w-100 aspect-square bg-cover-set" style={{backgroundImage: `url(${kami})`}} />
                    </div>
                    {/* End item img */}

                    {/* Start item information */}
                    <div id="item" className="grid grid-rows-[1fr_1fr_7fr_1fr_1.5fr]">
                        <div id="item-title" className="text-2xl">{product.name}</div>
                        <div id="item-price" className="text-red-600 text-3xl">{product.price}</div>
                        <div id="item-filter" className="border">transport color size</div>
                        <div id="quantity" className="flex justify-start items-center">
                            <h3 className="mr-2">Quantity</h3>
                            <div id="amount" className="grid grid-cols-[1fr_1.5fr_1fr] justify-between items-center border divide-x border-[#ccc] divide-[#ccc]">
                                <button onClick={taggleMinus} className="h-full flex justify-center items-center cursor-pointer p-1"><FaMinus /></button>
                                <div className="text-center font-bold">{amount}</div>
                                <button onClick={tagglePlus} className="h-full flex justify-center items-center cursor-pointer p-1"><FaPlus /></button>
                            </div>
                        </div>
                        <div id="add" className="flex justify-start items-center">
                            <Btn onClick={handleAddToCart} text="Add To Cart"/>
                        </div>
                    </div>
                    {/* End item information */}
                    
                </div>
                {/* End item */}

                {/* Start item description */}
                <div id="total-info" className="border w-full h-200">{product.description}</div>
                {/* End item description */}

            </div>
            {/* End main */}

        </div>
    )
}
export default ProductItem