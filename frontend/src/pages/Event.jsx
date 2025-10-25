import { useLocation } from "react-router-dom";


function Event(){
    const { state } = useLocation();
    // 如果沒帶state，就避免直接讀undefined
    const {title, description, img, startDate, endDate} = state || {};
    const defaultImg = '/images/winter.webp';

    return(
    <div id="event" className="bg-[var(--primary-color)]">

            {/* Start main */}

            {/* Start event */}
            <div id="container" className="container-mid flex flex-col justify-center items-center">

                {/* Start img */}
                {/* <img src={img} className="w-200 mt-15 mb-5" /> */}
                <div id="img" 
                    className="rounded-md bg-cover-set w-200 aspect-[6/3] mt-15 mb-5"
                    style={{backgroundImage: `url(${img}), url(${defaultImg})`}}/>
                {/* End img */}
                    
                    
                {/* Start title */}
                <div id="event-title" className="text-3xl mb-5">{title}</div>
                {/* End title */}

                {/* Start date */}
                <p className="mb-5 text-md text-gray-500">
                    {new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}
                </p>
                {/* End date */}

                {/* Start param */}
                <div id="event-info" className="text-md text-justify text-lg leading-loose mb-15">{description}</div>
                {/* End param */}

            </div>
            {/* End event */}
            
            {/* End main */}

        </div>
    )
}

export default Event;