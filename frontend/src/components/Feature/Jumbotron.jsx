function  Jumbotron(){
    return(
        
        <div id="jumbotron" className={`pt-56 pb-40 bg-[url('/images/winter.jpg')] bg-cover-set bg-fixed`}>
            <div id="container" className="container-mid flex justify-center items-center flex-col">
                <div id="logo" className="w-80 h-80 z-2 mb-6 border bg-[url('/images/winter.jpg')] bg-cover-set"></div>
            </div>
        </div>
    )
}
export default Jumbotron;