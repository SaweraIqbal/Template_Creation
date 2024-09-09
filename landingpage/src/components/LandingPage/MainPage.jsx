import Pricing from "./Pricing"
import Testimonials from "./Testimonials"
import Footer from "../Footer"
import Scrollingbar from "./Scrollingbar"
import AboutUs from "./AboutUs"
import Navbar from '../Navbar'
import Workflow from "./Workflow"
import FeatureSection from "./FeatureSection"
import HeroSection from "./HeroSection"
const MainPage = () => {
  return (
    <div>
      <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection />
    <Scrollingbar/>
    <FeatureSection/>
    <Workflow />
    <Pricing />
    <AboutUs/>
    <Testimonials />
    <Footer/>
    </div>
    </div>
  )
}

export default MainPage
