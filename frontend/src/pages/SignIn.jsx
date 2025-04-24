import SignInForm from "../components/Feature/SignInForm"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import Register from "../components/Feature/Register"
import winter from '../assets/images/winter.jpg'
import winter2 from '../assets/images/winter2.jpg'
import kami from '../assets/images/kami.jpg'

function SignIn(){

    const [isClick, setIsClick] = useState(false)

    const taggleCLick= () => {
        setIsClick(!isClick)
    } 
    
    return (
        <div id="sign-in">
            <div id="signIn-bg" className="w-full flex justify-end max-lg:justify-center bg-cover-set" style={{backgroundImage: `url(${winter2})`}}>
                <div id="row" className="flex w-2/5 max-lg:w-4/5 aspect-[7/6] m-10">
                    {/* Start input side */}
                    <motion.div id="input"
                    animate={{x: isClick ? '100%' : '0%', y:'0%'}} // isClick === true 的話 x 座標移動到 100%，否則移動到 0% // y 座標不變
                    transition={{ duration: 1.2, ease: "easeInOut" }} //移動時間 1.2 秒，使用 easeInOut 的動畫效果
                    className="bg-sky-500 border w-1/2 order-1 flex justify-center items-center px-7 py-5 bg-cover-set" style={{backgroundImage: `url(${kami})`}}>
                        <AnimatePresence mode="wait"> {/* 這個屬性會在動畫完成後再開始下一個動畫 */}
                            <motion.span
                            key={isClick}
                            initial={{ opacity: 0}} //初始狀態不透明度為 0
                            animate={{ opacity: 1}} //動畫結束後不透明度為 1
                            exit={{ opacity: 0 }}  //動畫結束後不透明度為 0
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                            >
                                {isClick ? <Register /> : <SignInForm />} 
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>
                    {/* End input side */}


                    {/* Start img side */}
                    <motion.div id="img" 
                    animate={{x: isClick ? '-100%' : '0%',y:'0%'} }
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className={`bg-green-500 border w-1/2 order-2 bg-cover-set`} style={{backgroundImage: `url(${winter})`}}></motion.div>
                    {/* End img side */}

                    {/* Start change btn */}
                    <motion.button onClick={taggleCLick} className="absolute-mid rounded-full w-15 aspect-square bg-purple-500 z-1 cursor-grab text-sm">
                        <AnimatePresence mode="wait">
                            <motion.span
                            key={isClick}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                            >
                            {isClick ? "Sign in" : "Register"}
                            </motion.span>
                        </AnimatePresence>
                    </motion.button>
                    {/* End change btn */}

                </div>
            </div>
        </div>
    )
}
export default SignIn