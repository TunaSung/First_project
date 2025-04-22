import { Link } from "react-router-dom";
function ProductCard({id, name, price, img}){
    return (
        <Link to={`/product/${id}`}>
            <div id="product" className="border rounded-lg mx-auto w-58 aspect-[6/7] hover:shadow-xl">
                <div id="product-img" className="border w-full aspect-square rounded-t-lg mb-2 bg-cover-set" 
                style={{backgroundImage: `${img}`}}/>
                <div id="product-text" className=" ml-3 mb-2">
                    <p id="product-name" className="text-[#333] line-clamp-1 mb-1">{name}</p>
                    <p id="product-price" className="text-red-500 text-[18px] font-bold">${price}</p>
                </div>                
            </div>
        </Link>
    )
}
export default ProductCard