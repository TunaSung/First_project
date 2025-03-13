function ImgContainer(props){
    return(
        <div id="img_container" className="relative pt-[75%] min-w-75">
            <div id="img" className="absolute inset-0 bg-cover-set "
            style={{ backgroundImage: `url(./src/assets/images/${props.img})`}}></div>
        </div>
    )
}
export default ImgContainer;