import ProductCard from "../components/Feature/ProductCard"
import { useEffect, useState, useRef } from "react";
import { FaSearch, FaArrowLeft, FaArrowRight} from "react-icons/fa";
import { products } from "../service/productService"

function Product(){
    
    const [search, setSearch] = useState("");
    const [selectedFilter, setSelectedFilter] = useState(null); // Track selected filter
    const [page, setPage] = useState(1);
    const [productList, setProductList] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [err, setErr] = useState(null);
    const isFirstRender = useRef(true)


    // 控制頁面
    const prevPage = useRef(null);
    useEffect(() => {
        if (isFirstRender.current) { //剛進入頁面時先用這個擋window.scrollTo
            isFirstRender.current = false
        } else if (prevPage.current !== page){ 
            window.scrollTo(0,175);
        }
        prevPage.current = page; //會先跑這個再跑上面的else if
    },[page])


    // 匯入資料
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await products();
                setProductList(data.products);
            } catch (err) {
                setErr(err);
            }
        };
        fetchProducts();
    }, []);
    
    // 搜尋、過濾功能
    const toggleSearch = (e) => {
        setSelectedFilter(null);
        setPage(1);
        setSearch(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent default form submit behavior
        setFilteredProducts(filterProducts());
        setPage(1);
    };

    const toggleFilter = (filter) => {
        (filter === "All") ? setSelectedFilter(null) : setSelectedFilter(filter);
        setPage(1);
    };

    const filterProducts = () => {
        let filtered = productList;

        // Apply filter by category if selected
        if (selectedFilter) {
            filtered = filtered.filter(product => product.category === selectedFilter);
        }

        // Apply search functionality (search by product name)
        if (search) {
            filtered = filtered.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
        }

        return filtered;
    };

    // Apply filtering logic whenever product list, selected filter, or search term changes
    useEffect(() => {
        setFilteredProducts(filterProducts());
    }, [productList, selectedFilter, search]);

    const toggleNextPage = () => {
        setPage(page+1);
    };
    const togglePreviousPage = () => {
        setPage(page-1)
    };

    // 分頁
    const itemsPerPage = 9;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, endIndex);;
    const totalPage = (filteredProducts.length < itemsPerPage) ? 1 : Math.ceil(filteredProducts.length/itemsPerPage);

    // 類別
    const categorys = productList.map(item => item.category) 
    const filters = [...new Set(categorys)]

    return (
        <div id="product">

            {/* Start title */}
            <div id="container" className="container-mid flex justify-center items-center">
                <div id="title" className="text-5xl mt-30 indie-flower-regular">Product</div>
            </div>
            {/* End title */}

            {/* Start filter and search */}
            <div id="container" className="container-mid flex justify-center items-center flex-col">

                {/* Start filter */}
                <div id="filter">

                    {/* Start filter btn */}
                    <div id="filter-item" className="grid grid-cols-10 max-md:grid-cols-8 max-sm:grid-cols-6 justify-center items-center gap-rwd mt-15 text-xl ">
                        <button id='All' onClick={() => toggleFilter()} className="hover:text-red-500 text-sm transition duration-300 p-0 text-center cursor-pointer" >All</button>
                        {filters.map((filter)=>(
                            <button id={filter} onClick={() => toggleFilter(filter)} className={`hover:text-red-500 text-sm transition duration-300 p-0 text-center cursor-pointer ${selectedFilter === filter ? 'text-red-500' : ''}`} >{filter}</button>
                        ))}
                    </div>
                    {/* End filter btn */}

                    {/* Start search */}
                    <div id="filter-search" className="flex self-start items-center border rounded-full max-w-55 mt-5 px-3 py-2">
                        <form id="filter-search" className="flex self-start items-center" onSubmit={handleSearch}>
                            <input type="text" id="search" placeholder="Search..." value={search} onChange={toggleSearch} className="w-full outline-none text-gray-600 placeholder-gray-400"/>
                            <button type="submit" id="search-btn"><FaSearch /> </button>
                        </form>
                    </div>
                    {/* End search */}

                </div>
                {/* End filter */}

                {/* Start product items */}
                <div id="row" className="row grid grid-cols-3 gap-rwd my-5 mb-15 max-md:grid-cols-2 ">
                    {currentProducts.map((product) => {
                        return <ProductCard key={product.id} id={product.productId} name={product.name} price={product.price} img={product.imageUrl} description={product.description}/>
                    })}
                </div>
                {/* End product items */}
                
                {/* Start change page */}
                <div id="page" className="w-full grid grid-cols-3 justify-center mb-15">
                    <button id="previous" onClick={togglePreviousPage} className="flex justify-center items-center cursor-pointer disabled:text-[#ccc] disabled:cursor-default" disabled={(page === 1) ? true : false}>
                        <FaArrowLeft />
                        Previous
                    </button>
                    <div id="page-num" className="text-center">{`${page}/${totalPage}`}</div>
                    <button id="next" onClick={toggleNextPage} className={`flex justify-center items-center cursor-pointer disabled:text-[#ccc] disabled:cursor-default`} disabled={(page === totalPage) ? true : false}>
                        Next
                        <FaArrowRight />
                    </button>
                </div>
                {/* End change page */}

            </div>
            {/* End filter and search */}
            
        </div>
    )
};
export default Product;