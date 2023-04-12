import "./Hero.css"


function Hero(props) {
    return(
        <>
            <div className={props.cName}>
                <img alt="HerpImg" src={props.heroImg}/>
            </div>
            <div className="hero-text">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>
                {props.buttonText}
            </a>

            </div>
        </>
    )
}
export default Hero;