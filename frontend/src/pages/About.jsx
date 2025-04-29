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
            <div id="container" data-aos="zoom-in" className="container-mid flex justify-center items-center">
                <div id="title" className="text-5xl mt-30 indie-flower-regular">ABOUT US</div>
            </div>
            {/* End about us */}

            {/* Start about 1 */}
            <Hero color="#fefefe">
                <div id="container" className="container-mid flex justify-center items-center">
                    <div id="row" className="grid grid-cols-2 gap-rwd items-center max-md:grid-cols-1">
                        <div id="about-preview" data-aos="fade-right" data-aos-duration='1300' >
                            <h3 id="title" className="text-[32px] text-[#333] font-bold mt-10 mb-6 flex items-center">Title</h3>
                            <p id="para" className="text-[16px] text-[#333] mb-6 text-justify leading-loose">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ratione ex corporis nisi nulla provident corrupti commodi harum, eligendi dicta voluptatibus odio nemo quas? Temporibus quia nisi voluptatibus similique quidem.
                                Voluptatum nihil earum quos beatae quidem, provident corporis eligendi ex nemo laboriosam, unde deleniti. Fuga eius et iste eveniet dicta, inventore voluptatibus labore corporis odio velit? Rerum quisquam culpa fuga.
                                Quia eum adipisci at facilis laborum incidunt nulla unde ab pariatur quis vero impedit cupiditate, obcaecati, perferendis ipsum voluptate consequuntur a ut dolorum? Cumque cupiditate minima natus quos voluptas dolor!
                            </p>
                        </div>
                        <div data-aos="fade-left">
                            <ImgContainer img={'hunter'}/>
                        </div>
                    </div>
                </div>
            </Hero>
            {/* End about 1 */}
            
            {/* Start about 2 */}
                <div id="container" className="container-mid flex justify-center items-center">
                    <div id="row" className="grid grid-cols-2 gap-rwd items-center max-md:grid-cols-1">
                        <div data-aos="fade-up" data-aos-duration='1300' data-aos-offset='250' className="order-2">
                            <ImgContainer img={'hunter'} />
                        </div>
                        <div id="about-preview" data-aos="fade-left" data-aos-duration='1000' data-aos-offset='200' className="order-3 max-md:order-1">
                            <h3 id="title" className="text-[32px] text-[#333] font-bold mt-10 mb-6 flex items-center">Title</h3>
                            <p id="para" className="text-[16px] text-[#333] mb-6 text-justify leading-loose">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, alias, cumque, adipisci officia ea aut sequi commodi autem sint impedit id assumenda dolor distinctio nihil soluta ratione repellendus ullam consequuntur.
                            </p>
                        </div>
                    </div>
                </div>
            {/* End about 2 */}
            
            {/* Start about 3 */}
            <Hero color="#fefefe">
                    <div id="container" className="container-mid flex justify-center items-center">
                        <div id="row" className="grid grid-cols-2 gap-rwd items-center max-md:grid-cols-1">
                            <div id="about-preview" data-aos='fade-right' data-aos-duration='1300' data-aos-offset='300'>
                                <h3 id="title" className="text-[32px] text-[#333] font-bold mt-10 mb-6 flex items-center">Title</h3>
                                <p id="para" className="text-[16px] text-[#333] mb-6 text-justify leading-loose">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ratione ex corporis nisi nulla provident corrupti commodi harum, eligendi dicta voluptatibus odio nemo quas? Temporibus quia nisi voluptatibus similique quidem.
                                    Voluptatum nihil earum quos beatae quidem, provident corporis eligendi ex nemo laboriosam, unde deleniti. Fuga eius et iste eveniet dicta, inventore voluptatibus labore corporis odio velit? Rerum quisquam culpa fuga.
                                    Quia eum adipisci at facilis laborum incidunt nulla unde ab pariatur quis vero impedit cupiditate, obcaecati, perferendis ipsum voluptate consequuntur a ut dolorum? Cumque cupiditate minima natus quos voluptas dolor!
                                </p>
                            </div>
                            <div data-aos='zoom-in'  data-aos-duration='1000' data-aos-offset='300'>
                                <ImgContainer img={'hunter'}/>
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