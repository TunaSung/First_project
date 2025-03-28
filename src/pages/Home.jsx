import Btn from "../components/UI/Btn"
import EventCard from "../components/Feature/EventCard"
import Hero from "../components/Layout/Hero"
import Jumbotron from "../components/Feature/Jumbotron"
import ProductCard from "../components/Feature/ProductCard"
import { Link } from "react-router-dom";
import FadeInSection from '../components/UI/FadeInSection'

function Home(){
    return (
        <div id="home">  
            {/* Start jumbotron */}
            <Jumbotron />
            {/* End jumbotron */}

            {/* Start last event */}
            <Hero color='#efefef'>
                <FadeInSection>
                    <div id="container" className="w-[75%] max-lg:w-[90%] max-md:w-[98%] mx-auto px-4">
                        <div id="event-title" className="text-5xl font-bold text-center mb-12">LAST EVENTS</div>
                        <div id="row" className="row grid grid-cols-3 gap-rwd max-lg:grid-cols-2 justify-center">
                            <EventCard />
                            <EventCard />
                            <EventCard />
                        </div>
                    </div>
                </FadeInSection>
            </Hero>
            {/* End last event */}

            {/* Start hot item */}
            <Hero color='#fff'>
                <FadeInSection>
                    <div id="container" className="container-mid">
                        <div id="event-title" className="text-5xl font-bold text-center mb-12">HOT ITEMS</div>
                        <div id="row" className="row grid grid-cols-4 gap-rwd max-lg:grid-cols-2 justify-center">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>
                </FadeInSection>
            </Hero>
            {/* End hot item */}

            {/* Start VIP */}
            <FadeInSection>
                <div id="container" className="container-mid flex justify-center items-center mb-30">
                    <div id="vip-bg" className="w-[70%] aspect-[5/3] border flex justify-center items-end pb-15 max-md:pb-8 rounded-lg">
                        <Link to='/sign-in'><Btn text="Become a member"/></Link>
                    </div>
                </div>
            </FadeInSection>
            {/* End VIP */}
        </div>
    )
}
export default Home