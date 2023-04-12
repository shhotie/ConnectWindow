import "./Destination.css"
import Study1 from "../assets/5.jpg"
import Study2 from "../assets/6.jpg"

const Destination = ()=>{
    return(
        <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours gives you the opportunity</p>
        <Destination
            className="first-des"
            heading=" High Performance Computing"
            text="High Performance Computing (HPC) plays an important role in both scientific advancement and economic competitiveness of a nation - making production of scientific and industrial solutions faster, less expensive, and of higher quality. HPC is a key component in many applications: designing vehicles and airplanes; designing high-rise buildings and bridges; discovery of drugs; discovery and extraction of new energy sources like oil and natural gas; weather forecasting; and many more."
            img1={Study1}
            img2={Study2}
        />
        <Destination
            className="first-des-reverse"
            heading=" High Performance Computing"
            text="High Performance Computing (HPC) plays an important role in both scientific advancement and economic competitiveness of a nation - making production of scientific and industrial solutions faster, less expensive, and of higher quality. HPC is a key component in many applications: designing vehicles and airplanes; designing high-rise buildings and bridges; discovery of drugs; discovery and extraction of new energy sources like oil and natural gas; weather forecasting; and many more."
            img1={Study1}
            img2={Study2}
        />
           
        </div>
      
    )
}

export default Destination;