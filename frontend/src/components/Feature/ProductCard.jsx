import { Link } from "react-router-dom";
function ProductCard({id, name, price, img, stock, sales}){
    const defaultImg = '/images/winter.jpg';
    return (
        <Link to={`/product/${id}`}>
            <div id="product" className="border rounded-lg bg-[#F5EEDD] mx-auto w-58 max-xs:scale-75 aspect-[6/7] hover:shadow-xl">
                <div id="product-img" className="border w-full aspect-square rounded-t-lg mb-2 bg-cover-set" 
                style={{backgroundImage: `url(${img}), url(${defaultImg})`}}/>
                <div id="product-text" className="ml-3 mb-2">
                    <p id="product-name" className="text-[#333] line-clamp-1 mb-1">{name}</p>
                    <div className="flex justify-around gap-2">
                        <p id="product-price" className="text-red-500 text-[18px] font-bold">${price}</p>
                        <div className="text-xs flex items-center">stock:{stock}&nbsp;&nbsp;sales:{sales}</div>
                    </div>
                </div>                
            </div>
        </Link>
    )
}
export default ProductCard