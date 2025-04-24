import hunter from '../../assets/images/hunter.jpg';
import winter from '../../assets/images/winter.jpg';

function  Jumbotron(){
    return(
        
        <div id="jumbotron" className={`pt-56 pb-40 bg-cover-set bg-fixed`} style={{backgroundImage: `url(${winter})`}}>
            <div id="container" className="container-mid flex justify-center items-center flex-col">
                <div id="logo" className="w-80 h-80 z-2 mb-6 border"></div>
            </div>
        </div>
    )
}
export default Jumbotron;