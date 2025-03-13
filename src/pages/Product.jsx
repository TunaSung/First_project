import ProductCard from "../components/Feature/ProductCard"
import { useEffect, useState } from "react";
import { FaSearch, FaArrowLeft, FaArrowRight} from "react-icons/fa";

function Product(){

    var [items, setItems] = useState(
        [{name:'超酷B男性性感內褲',price:599 ,description:'blablabla' ,img:'./src/assets/images/kami.jpg'  , id:Math.random()},
        {name:'阿罵的酸梅配方',price:3550 ,description:'gulugulugulu' ,img:'./src/assets/images/winter.jpg'  , id:Math.random()},
        {name:'我寫的kkSchool筆記',price:100 ,description:'超級讚的喔' ,img:'./src/assets/images/hunter.jpg'  , id:Math.random()}]
    )

    var filters =["filter1","filter2","filter3","filter4","filter5","filter6","filter7",
        "filter8","filter9","filter10","filter11","filter12","filter13","filter14","filter15","filter16"]

    var [search, setSearch] = useState("");
    var [page, setPage] = useState(1);

    const toggleSearch = (e) => {
        setSearch(e.target.value)
    }

    const toggleNextPage = () => {
        setPage(page+1)
    };
    const togglePreviousPage = () => {
        if (page > 1) {
            setPage(page-1)
        }
    };

    return (
        <div id="product">
            <div id="container" className="container-mid flex justify-center items-center">
                <div id="title" className="text-5xl mt-30 indie-flower-regular">Product</div>
            </div>
            <div id="container" className="container-mid flex justify-center items-center flex-col">
                <div id="filter">
                    <div id="filter-item" className="grid grid-cols-10 max-md:grid-cols-8 max-sm:grid-cols-6 justify-center items-center gap-rwd mt-15 text-xl ">
                        {filters.map((filter)=>(
                            <a href="#!" id={filter}>{filter}</a>
                        ))}
                    </div>
                    <div id="filter-search" className="flex self-start items-center border rounded-full max-w-55 mt-5 px-3 py-2">
                        <input type="text" id="search" placeholder="Search..." onChange={toggleSearch} className="w-full outline-none text-gray-600 placeholder-gray-400"/>
                        <button id="search-btn"><FaSearch/> </button>
                    </div>
                </div>

                <div id="row" className="row grid grid-cols-3 gap-rwd my-5 mb-15 max-md:grid-cols-2 ">
                    <ProductCard name={items[0].name} price={items[0].price} img={items[0].img} />
                    <ProductCard name={items[1].name} price={items[1].price} img={items[1].img} />
                    <ProductCard name={items[2].name} price={items[2].price} img={items[2].img} />
                    <ProductCard name={items[0].name} price={items[0].price} img={items[0].img} />
                    <ProductCard name={items[1].name} price={items[1].price} img={items[1].img} />
                    <ProductCard name={items[2].name} price={items[2].price} img={items[2].img} />
                    <ProductCard name={items[0].name} price={items[0].price} img={items[0].img} />
                    <ProductCard name={items[1].name} price={items[1].price} img={items[1].img} />
                    <ProductCard name={items[2].name} price={items[2].price} img={items[2].img} />
                </div>

                <div id="page" className="w-full grid grid-cols-3 justify-center mb-15">
                    <button id="previous" onClick={togglePreviousPage} className="flex justify-center items-center" style={{color:`${(page===1) ? "#ccc" : "#000"}`}} >
                        <FaArrowLeft />
                        Previous
                    </button>
                    <div id="page-num" className="text-center">{page}</div>
                    <button id="next" onClick={toggleNextPage} className="flex justify-center items-center">
                        Next
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Product