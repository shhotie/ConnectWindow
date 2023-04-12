import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import contactimg from "../assets/33.jpg"
import Footer from "../component/Footer";
import ContactForm from "../component/ContactForm";

function Contact() {
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={contactimg}
                // title="Contact"
                btnClass="hide"
            />
            <ContactForm/>
            <Footer/>   
        </>
    )
}
export default Contact;