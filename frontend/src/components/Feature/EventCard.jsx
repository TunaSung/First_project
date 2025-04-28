import { Link } from "react-router-dom";
function EventCard({title, description, img, startDate, endDate}){
    const defaultImg = '../../images/winter.jpg';

    return(
        <div>
            <div id="picture" className="mx-auto w-[250px] grid grid-rows-2 border-[#fff] rounded-md group hover:bg-[#C3B4C8] hover:scale-110 lg: hover:border-0 hover:p-4 hover:shadow-xl transition-all origin-center duration-300 max-lg:mb-6">
                <div id="img" className="p-8 rounded-md bg-cover-set w-full"
                style={{backgroundImage: `url(${img}), url(${defaultImg})`}}/>
                <div>
                    <h1 className="m-0 text-2xl line-clamp-1 leading-loose group-hover:line-clamp-2 group-hover:leading-snug duration-300">{title}</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        {new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}
                    </p>
                    <div id="text" className=" transform translate-x-[20%] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-0 transition-all duration-50 overflow-hidden">
                        <h2 className="m-0 line-clamp-3">{description}</h2>
                        <Link to='/event' state={{title, description, img, startDate, endDate}} className="text-blue-600">read more...</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EventCard;