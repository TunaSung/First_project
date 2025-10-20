import { useEffect } from "react";
import Hero from "../components/Layout/HeroNarrow"
import ImgContainer from "../components/UI/ImgContainer"
// import FadeInSection from '../components/UI/FadeInSection'
import AOS from "aos";
import "aos/dist/aos.css";

function About(){

    useEffect(() => {
        AOS.init({once: false, easing: 'ease-in-out'});
    }, []);
    
    return (
        <div id="about"> 
            
            {/* Start main */}

            {/* Start about us */}
            <div className="w-full bg-[var(--primary-color)]">
                <div id="container" data-aos="zoom-in" className="container-mid flex justify-center items-center">
                    <div id="title" className="text-5xl mt-30 indie-flower-regular text-[var(--quaternary-color)]">ABOUT US</div>
                </div>
            </div>
            {/* End about us */}

            {/* Start about 1 */}
            <Hero color="var(--primary-color)">
                <div id="container" className="container-mid flex justify-center items-center text-[var(--quaternary-color)]">
                    <div id="row" className="grid grid-cols-2 gap-rwd items-center max-md:grid-cols-1">
                        <div id="about-preview" data-aos="fade-right" data-aos-duration='1300' >
                            <h3 id="title" className="text-3xl font-bold mt-10 mb-6 flex items-center">Our Story</h3>
                            <p id="para" className="mb-6 text-justify leading-loose">
                                We’re a small team obsessed with “good products, great experiences.” From a tiny curation project to a full online store, we’ve believed one thing from day one: shopping should be simple, transparent, and a little warm. Our daily mission is to save you time and raise the bar on quality.
                            </p>
                        </div>
                        <div data-aos="fade-left">
                            <ImgContainer img={'about1'}/>
                        </div>
                    </div>
                </div>
            </Hero>
            {/* End about 1 */}
            
            {/* Start about 2 */}
            <Hero color="var(--tertiary-color)">
                <div id="container" className="container-mid flex justify-center items-center">
                    <div id="row" className="grid grid-cols-2 gap-rwd items-center max-md:grid-cols-1">
                        <div data-aos="fade-up" data-aos-duration='1300' data-aos-offset='250' className="order-2">
                            <ImgContainer img={'about2'} />
                        </div>
                        <div id="about-preview" data-aos="fade-left" data-aos-duration='1000' data-aos-offset='200' className="order-3 max-md:order-1 text-[var(--primary-color)]">
                            <h3 id="title" className="text-3xl font-bold mt-10 mb-6 flex items-center">What We Stand For</h3>
                            <p id="para" className="mb-6 text-justify leading-loose">
                            ．Quality & Transparency — Clear materials and sourcing, honest pricing, no fluff. <br />
                            ．Design & Utility — Beautiful to look at, reliable to use, built to last. <br />
                            ．Sustainability & Responsibility — Reduced packaging, fair supply chains, kinder choices for the planet and our partners <br />
                            </p>
                        </div>
                    </div>
                </div>
            </Hero>
            {/* End about 2 */}
            
            {/* Start about 3 */}
            <Hero color="var(--primary-color)">
                    <div id="container" className="container-mid flex justify-center items-center text-[var(--quaternary-color)]">
                        <div id="row" className="grid grid-cols-2 gap-rwd items-center max-md:grid-cols-1">
                            <div id="about-preview" data-aos='fade-right' data-aos-duration='1300' data-aos-offset='300'>
                                <h3 id="title" className="text-3xl font-bold mt-10 mb-6 flex items-center">How We Serve You</h3>
                                <p id="para" className="mb-6 text-justify leading-loose">
                                    ．Curation Process — Try → test → compare → list, with every step documented. <br />
                                    ．Fast Fulfillment — Local logistics, multiple pickup/delivery options, real-time tracking. <br />
                                    ．Caring After-Sales — Dedicated support, fair return & exchange policies—issues resolved, not ignored. <br />
                                </p>
                            </div>
                            <div data-aos='zoom-in'  data-aos-duration='1000' data-aos-offset='300'>
                                <ImgContainer img={'about3'}/>
                            </div>
                        </div>
                    </div>
            </Hero>
            {/* End about 3 */}

            {/* End main */}
        </div>
    )
}
export default About