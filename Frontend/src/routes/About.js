import Navbar from "../component/Navbar";
import Hero from "../component/Hero"
import aboutimg from "../assets/2.jpg"
import Footer from "../component/Footer";
import AboutUs from "../component/AboutUs";

function About() {
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={aboutimg}
                btnClass="hide"
            />
            <AboutUs/>
            <Footer/>
            
        </>
    )
}
export default About;