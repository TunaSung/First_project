import { motion } from "framer-motion";

function FadeInSection({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // 一開始透明 + 向下 50px
            whileInView={{ opacity: 1, y: 0 }} // 滾動進來時變清楚
            transition={{ duration: 0.8, ease: "easeOut" }} // 淡入時間
            viewport={{ once: true, amount: 0.2 }} // 進入 20% 就觸發動畫
        >
            {children}
        </motion.div>
    );
}

export default FadeInSection;