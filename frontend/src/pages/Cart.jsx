import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../components/Context/authContext'
import CartItem from "../components/Feature/CartItem";
import { fetchCart } from "../service/cartService";
import { createPayment, toggleStatus } from "../service/paymentService";

function Cart(){

    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState(new Set());
    const [totalPrice, setTotalPrice] = useState(0); // 用來存儲購物車總價格
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [selectAll, setSelectAll] = useState(false);
    const { isAuthenticated } = useAuth()


    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/sign-in"); // ✅ 若未登入，跳轉到登入頁面
        }
    },[]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const cartDic = await fetchCart(); // 呼叫後端 API 獲取購物車內容
                const items = cartDic.order.pios;
                setCartItems(items);
                console.log(items)
            } catch (error) {
                console.error("無法載入購物車資料", error);
            };
        };
        fetchData();
    }, []);

    const handleAmountChange = async () => {
        const cartDic = await fetchCart(); // 重新呼叫後端 API 獲取購物車內容
        const items = cartDic.order.pios;
        setCartItems(items); // 確保 cartItems 是最新的
        
        const total = items.reduce((sum, item) => {
            if (selectedItems.has(item.product.productId)) {
                return sum + item.product.price * item.amount;
            }
            return sum;
        }, 0);
        setTotalPrice(total);
    };

    const handleCheckChange = async (isChecked, productId) => {
        const updated = new Set(selectedItems)
        if (isChecked) updated.add(productId)
        else updated.delete(productId)

        setSelectedItems(updated)
        // 如果全部勾完，header 也要打勾
        setSelectAll(updated.size === cartItems.length)

        // 用 current cartItems 跑一次總價
        const total = cartItems.reduce((sum, item) => {
            return updated.has(item.product.productId)
            ? sum + item.product.price * item.amount
            : sum
        }, 0)
        setTotalPrice(total)
    };

    const handlePayment = async () => {
        if (selectedItems.size === 0) {
            alert("請選擇至少一個商品進行結帳！");
            return;
        }

        const idsArray = Array.from(selectedItems);
        console.log("🔎 IDs to toggle:", idsArray);
    
        setIsProcessingPayment(true); // 設置為處理中
    
        // 獲取選中的商品名稱
        const selectedProductNames = cartItems
            .filter(item => selectedItems.has(item.product.productId))
            .map(item => `${item.product.name} $${item.product.price}*${item.amount}`)
            .join('#');
        try {
            // 呼叫 createPayment 來處理支付流程
            const paymentFormHtml = await createPayment(totalPrice, selectedProductNames);

            
            // 動態創建表單並插入到頁面
            const formContainer = document.createElement('div');
            formContainer.innerHTML = paymentFormHtml;
            
            // 抓出 hidden input 的 MerchantTradeNo
            const form = formContainer.querySelector('form');
            const tradeNoInput = form.querySelector('input[name="MerchantTradeNo"]');
            const merchantTradeNo = tradeNoInput.value;
            await toggleStatus(idsArray, merchantTradeNo)

            
            form.setAttribute('target', '_blank'); // 讓表單跳至新分頁
            document.body.appendChild(form); // 插入到頁面
            form.submit(); // 提交表單，跳轉到綠界支付頁面
            navigate("/") // 跳轉到首頁
        } catch (error) {
            console.error("支付失敗", error);
            alert("支付過程中出錯，請稍後再試");
        } finally {
            setIsProcessingPayment(false); // 重設為非處理狀態
        }
    };

    const handleSelectAllChange = (isChecked) => {
        setSelectAll(isChecked);
        if (isChecked) {
          // 把所有商品 id 都加入 Set
          const allIds = cartItems.map(item => item.product.productId);
          const newSet = new Set(allIds);
          setSelectedItems(newSet);
          // 全選時計算一次總價
          const total = cartItems.reduce((sum, item) => sum + item.product.price * item.amount, 0);
          setTotalPrice(total);
        } else {
          // 取消全選就清空
          setSelectedItems(new Set());
          setTotalPrice(0);
        }
      };
    

    return (
    <div id="cart" className="bg-[var(--tertiary-color)]">

        {/* Start main */}
            
            {/* Start title */}
            <div id="container" className="container-mid flex justify-center items-center">
                <div id="title" className="text-5xl mt-30 indie-flower-regular text-[var(--primary-color)]">Cart</div>
            </div>
            {/* End title */}

            
            {/* Start cart */}
            <div id="container" className="container-mid flex justify-center items-center pb-15 flex-col max-md:text-sm">

                {/* Start subtitle */}
                <div id="classification" className="border w-full pl-10 py-4 mt-15 grid grid-cols-[4fr_1fr_1fr_1fr_1fr] bg-[var(--primary-color)]">
                    <div>
                        <input
                            type="checkbox"
                            checked={selectAll}
                            onChange={e => handleSelectAllChange(e.target.checked)}
                            className="mr-3 scale-150"
                        />
                        Select/Deselect All
                    </div>
                    <h3 className="text-center">Price</h3>
                    <h3 className="text-center">Quantity</h3>
                    <h3 className="text-center">Total</h3>
                    <h3 className="text-center">Delete</h3>
                </div>
                {/* End subtitle */}

                    
                {/* Start cart item */}
                <div id="cart-item" className="w-full ">
                    {cartItems.map((item, index) => (
                        <CartItem key={item.id} id={item.product.productId} name={item.product.name} price={item.product.price} stock={item.product.stock} itemAmount={item.amount} onAmountChange={handleAmountChange} onClickChange={handleCheckChange} isChecked={selectedItems.has(item.product.productId)}/> //
                    ))}
                </div>
                {/* End cart item */}

                
                {/* Start total price */}
                <div id="classification" className="border w-full pl-10 pr-3 py-1 mt-5 flex justify-between bg-[var(--primary-color)]">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={selectAll}
                            onChange={e => handleSelectAllChange(e.target.checked)}
                            className="mr-3 scale-150"
                        />
                        Select/Deselect All
                    </div>
                    <div className="flex items-center gap-2">
                        <h4>Total price:</h4>
                        <h3 className="text-red-600">${totalPrice}</h3>
                        <button className="border py-2 px-6 text-sm rounded-xl cursor-pointer" onClick={handlePayment} disabled={isProcessingPayment} >{isProcessingPayment ? "Processing..." : "Pay for it"}</button>
                    </div>
                </div>
                {/* End total price */}
                
            </div>
            {/* End cart */}

            {/* End main */}

        </div>
    )
}
export default Cart;