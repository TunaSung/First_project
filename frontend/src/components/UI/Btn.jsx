function Btn(props){
    return(
        <div id="btn">
            <button onClick={props.onClick} className="text-md max-md:text-sm max-xs:text-xl bg-none border border-btnColor px-5 py-3 max-md:px-3 max-md:py-1 rounded-[3px] cursor-pointer bg-[#077A7D] text-white opacity-75 hover:bg-[#F5EEDD] hover:text-black duration-300">{props.text}</button>
        </div>
    )
}
export default Btn;