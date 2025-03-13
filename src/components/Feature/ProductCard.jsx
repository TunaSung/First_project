import { Link } from "react-router-dom";

function ProductCard({name, price, img }){
    return (
        <Link to='/product-item'>
            <div id="product" className="border rounded-lg mx-auto w-58 aspect-[6/7] hover:shadow-xl">
                <div id="product-img" className="border w-full aspect-square rounded-t-lg mb-2 bg-cover-set" 
                style={{backgroundImage: `url(${img})`}}/>
                <div id="product-text" className=" ml-3 mb-2">
                    <p id="product-name" className="text-[#333]">{name}</p>
                    <p id="product-price" className="text-red-500 text-[18px] font-bold">${price}</p>
                </div>                
            </div>
        </Link>
    )
}
export default ProductCard