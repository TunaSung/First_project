import Btn from "../components/UI/Btn"
import EventCard from "../components/Feature/EventCard"
import Hero from "../components/Layout/Hero"
import Jumbotron from "../components/Feature/Jumbotron"
import ProductCard from "../components/Feature/ProductCard"
import { Link } from "react-router-dom"; // 用來導向其他頁面
// import FadeInSection from '../components/UI/FadeInSection' // 用來實現淡入效果
import { fetchEvent } from "../service/eventService"
import { hotItems } from "../service/productService"
import { useEffect, useState } from "react" 
import AOS from "aos";
import "aos/dist/aos.css";

function Home(){

    const [eventList, setEventList] = useState([]); // 用來存放事件資料
    const [hotItemsList, setHotItemsList] = useState([]); // 用來存放熱門商品資料

    useEffect(() => {
        AOS.init({ once: false, duration: 1000, easing: 'ease-in-out'});
        const fetchData = async () => {
            try {
                const lastEvents = await fetchEvent();
                setEventList(lastEvents.events); // 更新事件列表狀態
                console.log(lastEvents);
                const getItems = await hotItems();
                setHotItemsList(getItems.products); // 更新熱門商品列表狀態
                console.log(getItems.products);
            } catch (error) {
                console.error("Error fetching event data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div id="home" className="min-h-screen text-[#F5EEDD]">  
            {/* Start jumbotron */}
            <Jumbotron />
            {/* End jumbotron */}

            {/* Start last event */}
            <Hero color='#077A7D'>
                <div id="container" className="w-[75%] max-lg:w-[90%] max-md:w-[98%] mx-auto px-4">
                    <div id="event-title" data-aos="fade-left" data-aos-offset='100' className="text-5xl font-bold text-center mb-12">LAST EVENTS</div>
                    <div id="row" data-aos="fade-right" data-aos-offset='100' className="row grid grid-cols-3 gap-rwd max-lg:grid-cols-2 justify-center">
                        {eventList.map((event, index) => (
                            <EventCard
                                key={event.eventId}
                                title={event.title}
                                description={event.description}
                                img={event.imageUrl}
                                startDate={event.startDate}
                                endDate={event.endDate}
                            />
                        ))}
                    </div>
                </div>
            </Hero>
            {/* End last event */}

            {/* Start hot item */}
            <Hero color='#7AE2CF'>
                <div id="container" className="container-mid">
                    <div id="event-title" data-aos="fade-up" data-aos-offset='400' className="text-5xl font-bold text-center mb-12">HOT ITEMS</div>
                    <div id="row" data-aos="zoom-in-up" data-aos-offset='500' data-aos-duration='600' className="row grid grid-cols-4 gap-rwd max-lg:grid-cols-2 justify-center">
                        {hotItemsList.map((product) => {
                            return <ProductCard key={product.productId} id={product.productId} name={product.name} price={product.price} img={product.imageUrl} description={product.description} stock={product.stock} sales={product.sales}/>
                        })}
                    </div>
                </div>
            </Hero>
            {/* End hot item */}

            {/* Start VIP */}
            <div className="w-full bg-[#077A7D]">
                <div id="container" data-aos="flip-up" data-aos-offset='800' className="container-mid flex justify-center items-center py-30">
                    <div id="vip-bg" className="w-[70%] aspect-[5/3] border flex justify-center items-end pb-15 max-md:pb-8 rounded-lg bg-[url('/images/winter.jpg')] bg-cover-set">
                        <Link to='/sign-in'><Btn text="Become a member"/></Link>
                    </div>
                </div>
            </div>
            {/* End VIP */}
        </div>
    )
}
export default Home