import { Link } from "react-router-dom";

function EventCard(props){
    return(
        <div>
            <div id="picture" 
            className="mx-auto w-[250px] border-[#fff] rounded-md group hover:bg-[#fff] hover:scale-110 lg: hover:border-0 hover:p-4 hover:shadow-xl transition-all origin-center duration-400 max-lg:mb-6"
            >
                <div id="imgBox" 
                className="w-full aspect-[4/3] border-10 rounded-md max-lg:border-6 max-md:border-4 border-[#fff] group-hover:border-0 transition-all origin-center duration-400"
                >
                    <div id="img" 
                    className="bg-[url('./src/assets/images/winter.jpg')] rounded-md bg-cover-set w-full absolute inset-0 "
                    />
                </div>
                <h1 className="m-0 text-2xl line-clamp-1 leading-loose group-hover:line-clamp-2 group-hover:leading-snug">Laset event title title title</h1>
                <div id="text" 
                className=" transform translate-x-[20%] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-0 transition-all duration-200 overflow-hidden"
                >
                    <h2 className="m-0 line-clamp-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque suscipit doloribus laboriosam quisquam provident pariatur maiores voluptates impedit, earum soluta. Vitae quos reiciendis aut tempora porro totam adipisci ex fugiat!</h2>
                    <Link to='/event' className="text-blue-600">read more...</Link>
                </div>
            </div>
        </div>
    )
}
export default EventCard;