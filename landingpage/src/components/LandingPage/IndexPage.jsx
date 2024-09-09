import Pricing from "./Pricing"
import Testimonials from "./Testimonials"
import Footer from "../Footer"
import Scrollingbar from "./Scrollingbar"
import Navbar from '../Navbar'
import Workflow from "./Workflow"
import FeatureSection from "./FeatureSection"
import HeroSection from "./HeroSection"
import { Router } from "react-router"
const IndexPage = () => {
  return (
    <>

      <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection />
    <Scrollingbar/>
    <FeatureSection/>
    <Workflow />
    <Pricing />
    <Testimonials />
    <Footer/>
    </div>
    </>
  )
}

export default IndexPage
