function Hero(props){
    return(
        <div id="hero" className="py-50" style={{backgroundColor:`${props.color}`}}>
           {props.children}
        </div>
    )
}
export default Hero;