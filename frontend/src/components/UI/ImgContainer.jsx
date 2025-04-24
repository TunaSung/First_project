function ImgContainer(props){
    return(
        <div id="img_container" className="relative pt-[75%] min-w-75">
            <div id="img" className="absolute inset-0 bg-cover-set "
            style={{ backgroundImage: `url(.${props.img})`}}></div>
            {console.log(props.img)}
        </div>
    )
}
export default ImgContainer;