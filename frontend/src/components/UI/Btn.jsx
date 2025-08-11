function Btn(props){
    return(
        <div id="btn">
            <button onClick={props.onClick} className="text-md max-md:scale-90 max-sm:scale-75 max-xs:scale-60 max-xxs:scale-50 bg-none border border-btnColor px-5 py-3 rounded-[3px] cursor-pointer bg-[#077A7D] text-white opacity-75 hover:bg-[#F5EEDD] hover:text-black duration-300">{props.text}</button>
        </div>
    )
}
export default Btn;