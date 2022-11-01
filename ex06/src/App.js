import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import BannerPage from "./pages/banner";
import FeaturesPage from "./pages/features";
import ServicesPage from "./pages/services";
import PortfolioPage from "./pages/portfolio"
import TestimonialsPage from "./pages/testimoials"
import TeamPage from "./pages/team";

export default function App() {
  return (
    <div>
      <BrowserRouter>

        <Menu/>

        <Routes>

          <Route path="/" element={<BannerPage/>}/>
          <Route path="/features" element={<FeaturesPage/>}/>
          <Route path="/services" element={<ServicesPage/>}/>
          <Route path="/portfolio" element={<PortfolioPage/>}/>
          <Route path="/testimonials" element={<TestimonialsPage/>}/>
          <Route path="/team" element={<TeamPage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

