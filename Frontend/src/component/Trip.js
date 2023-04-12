import "./Trip.css"
import TripData from "./TripData";
import Trip1 from "../assets/5.png"
import Trip2 from "../assets/8.png"
import Trip3 from "../assets/6.jpg"
function Trip(params) {
    return(
        <div className="trip">
            <h1>One platform. Many features.</h1>
            <p>
            All of our special features serve only one. You!
            </p>
            <div style={{display : "flex"}}>
            <div className="tripcard">
                <TripData
                    image={Trip1}
                    heading="Find your dream universities!"
                    text="Your preferences, your profile and your grades. That’s all IT needs. Yes! We use an algorithm equipped with our experience and expertise to tailor-make a list of ideal universities for you."
                />
            </div>
            <div className="tripcard">
                <TripData
                    image={Trip2}
                    heading="Connect with aspirants like you!"
                    text="We like to bring people of similar interests together. Yocket Connect is a community of help and guidance formed by study aspirants, alumni and counsellors. So, start networking and find someone to share your aspiration with."
                />
            </div>

            <div className="tripcard">
                <TripData
                    image={Trip3}
                    heading="The Council of Counsel"
                    text="A group of experienced and enthusiastic overseas education consultants are here with the sole aim of making your study journey simple and effective."
                />
            </div>
</div>

        </div>
    )
    
}
export default Trip;