function Btn(props){
    return(
        <div id="btn">
            <a href="#!">
                <button className="text-md max-md:text-sm bg-none border border-btnColor px-5 py-3 max-md:px-3 max-md:py-1 rounded-[3px] cursor-pointer">{props.text}</button>
            </a>
        </div>
    )
}
export default Btn;