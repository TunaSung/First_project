import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div id="navbar" className="fixed top-0 left-0 w-full py-2 bg-black/40 flex items-center z-10">
            <div id="container" className="container-mid">
                <div id="row" className="row grid grid-cols-2 justify-between gap-rwd">
                <Link to='/' id="brand" className="w-40 h-16 bg-[url('./src/assets/images/logo.png')] bg-cover-set" />
                    <ul className={`gap-rwd flex items-center justify-end `}>
                        {["About","Product","Sign In","Cart"].map((item)=>(
                            <li key={item} className='text-center'>
                                <Link to={`/${item.toLowerCase().replace(" ", "-")}`} className="text-white text-xl hover:text-yellow-500 transition duration-300 ">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar;