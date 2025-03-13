import SignInForm from "../components/Feature/SignInForm"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import Register from "../components/Feature/Register"

function SignIn(){

    const [isClick, setIsClick] = useState(false)

    const taggleCLick= () => {
        setIsClick(!isClick)
    } 
    
    return (
        <div id="sign-in">
            <div id="main">
                <div id="signIn-bg" className="w-full flex justify-end max-lg:justify-center bg-[url('./src/assets/images/winter2.jpg')] bg-cover-set">
                    <div id="row" className="flex w-2/5 max-lg:w-4/5 aspect-[7/6] m-10">
                        {/* 輸入頁 */}
                        <motion.div id="input"
                        animate={{x: isClick ? '100%' : '0%', y:'0%'}}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className={`bg-sky-500 border w-1/2 order-1 flex justify-center items-center px-7 py-5 bg-[url('./src/assets/images/kami.jpg')] bg-cover-set`}>
                            <AnimatePresence mode="wait">
                                <motion.span
                                key={isClick}
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1}}
                                exit={{ opacity: 0 }} 
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                                >
                                    {isClick ? <Register /> : <SignInForm />}
                                </motion.span>
                            </AnimatePresence>
                            
                        </motion.div>


                        {/* 圖片頁 */}
                        <motion.div id="img" 
                        animate={{x: isClick ? '-100%' : '0%',y:'0%'} }
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className={`bg-green-500 border w-1/2 order-2 bg-[url('./src/assets/images/winter.jpg')] bg-cover-set`}></motion.div>

                        {/* 換頁按鈕 */}
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
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn