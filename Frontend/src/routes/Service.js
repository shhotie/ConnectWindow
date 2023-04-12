import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import serviceimg from "../assets/service.jpg"
import Footer from "../component/Footer";
import Trip from "../component/Trip";

function Service() {
    return(
        <>
         <Navbar/>  
         <Hero
                cName="hero-mid"
                heroImg={serviceimg}
                // title="Service"
                btnClass="hide"
            />
            <Trip/>
         <Footer/>
        </>
    )
}
export default Service;