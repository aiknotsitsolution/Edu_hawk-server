import React from "react";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import store from "./store.js";
import MainLayout from "./pages/layouts/MainLayout.jsx";
import { Route, Routes } from "react-router-dom";

// Import all page components
import Home from "./pages/HeroSection.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import Russian from "./pages/Country/Russian.jsx";
import Bangladesh from "./pages/Country/Bangladesh.jsx";
import Services from "./pages/Component/Services.jsx";
import Contact from "./pages/Component/Contact.jsx";
import Kazakhstan from "./pages/Country/kazakhstan.jsx";
import Kyrgyzstan from "./pages/Country/Kyrgyzstan.jsx";
import Armernia from "./pages/Country/Armernia.jsx";
import Belarus from "./pages/Country/Belarus.jsx";
import China from "./pages/Country/China.jsx";
import Egypt from "./pages/Country/Egypt.jsx";
import Georgia from "./pages/Country/Georgia.jsx";
import Iran from "./pages/Country/Iran.jsx";
import Nepal from "./pages/Country/Nepal.jsx";
import Tejikistan from "./pages/Country/Tejikistan.jsx";
import Uzbekistan from "./pages/Country/Uzbekistan.jsx";
import Vietnam from "./pages/Country/Vietnam.jsx";
import Italy from "./pages/Country/Italy.jsx";
import BlogSection from "./pages/Blog/BlogSection.jsx";
import Blog from "./pages/Component/Blog.jsx";
import AllIndia from "./pages/Country/India/AllIndia.jsx";
import Landingpage from "./pages/Landingpage/Landingpage.jsx";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy.jsx";
import CookiesPolicy from "./pages/CookiesPolicy/CookiesPolicy.jsx";
import MbbsAbroad from "./pages/Study Abroad/MbbsAbroad.jsx";
import MedicalAbroad from "./pages/Study Abroad/MedicalAbroad.jsx";
import DentistryAbroad from "./pages/Study Abroad/USA/MBBS Abroad/DentistryAbroad.jsx";
import NursingAbroad from "./pages/Study Abroad/USA/MBBS Abroad/NursingAbroad.jsx";
import PharmacyAbroad from "./pages/Study Abroad/USA/MBBS Abroad/PharmacyAbroad.jsx";
import PhysiotherapyAbroad from "./pages/Study Abroad/USA/MBBS Abroad/PhysiotherapyAbroad.jsx";
import PublicHealthAbroad from "./pages/Study Abroad/USA/MBBS Abroad/PublicHealth.jsx";
import BiotechnologyAbroad from "./pages/Study Abroad/USA/MBBS Abroad/Biotechnology.jsx";
import Engineering from "./pages/Study Abroad/Engineering.jsx";
import BusinessManagementAbroad from "./pages/Study Abroad/USA/BusinessManagement/business-management.jsx";
import MbaAbroad from "./pages/Study Abroad/USA/MBA/mba.jsx";
import MbsAbroad from "./pages/Study Abroad/USA/MBS/mbs.jsx";
import BbaAbroad from "./pages/Study Abroad/USA/BBA/bba.jsx";
import BbsAbroad from "./pages/Study Abroad/USA/BBS/bbs.jsx";
import ExecutiveMbaAbroad from "./pages/Study Abroad/USA/ExecutiveMBA/executive-mba.jsx";
import InternationalBusinessAbroad from "./pages/Study Abroad/USA/InternationalBusiness/international-business.jsx";
import MarketingManagementAbroad from "./pages/Study Abroad/USA/MarketingManagement/marketing-management.jsx";
import HospitalityManagementAbroad from "./pages/Study Abroad/USA/HospitalityManagement/hospitality-management.jsx";
import ArchitectureAbroad from "./pages/Study Abroad/USA/Architecture/architecture.jsx";
import LawAbroad from "./pages/Study Abroad/USA/Law/law.jsx";
import LanguageCoursesAbroad from "./pages/Study Abroad/USA/LanguageCourses/language-courses.jsx";
import SummerCoursesAbroad from "./pages/Study Abroad/USA/SummerCourses/summer-courses.jsx";
import WinterCoursesAbroad from "./pages/Study Abroad/USA/WinterCourses/winter-courses.jsx";
import AccountingFinance from "./pages/Study Abroad/AccountingFinance.jsx";
import UndergraduateEngineering from "./pages/Study Abroad/USA/Engineering/ug/undergraduate.jsx";
import ComputerEngineeringUG from "./pages/Study Abroad/USA/Engineering/ug/pages/ComputerEngineering.jsx";
import MechanicalEngineeringUG from "./pages/Study Abroad/USA/Engineering/ug/pages/MechanicalEngineering.jsx";
import CivilEngineeringUG from "./pages/Study Abroad/USA/Engineering/ug/pages/CivilEngineering.jsx";
import ElectricalEngineeringUG from "./pages/Study Abroad/USA/Engineering/ug/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationUG from "./pages/Study Abroad/USA/Engineering/ug/pages/ElectronicsCommunication.jsx";
import ChemicalEngineeringUG from "./pages/Study Abroad/USA/Engineering/ug/pages/ChemicalEngineering.jsx";
import AerospaceEngineeringUG from "./pages/Study Abroad/USA/Engineering/ug/pages/AerospaceEngineering.jsx";
import BiomedicalEngineeringUG from "./pages/Study Abroad/USA/Engineering/ug/pages/BiomedicalEngineering.jsx";
import AutomobileEngineeringUG from "./pages/Study Abroad/USA/Engineering/ug/pages/AutomobileEngineering.jsx";
import PostgraduateEngineering from "./pages/Study Abroad/USA/Engineering/pg/postgraduate.jsx";
import ComputerEngineeringPG from "./pages/Study Abroad/USA/Engineering/pg/pages/ComputerEngineering.jsx";
import MechanicalEngineeringPG from "./pages/Study Abroad/USA/Engineering/pg/pages/MechanicalEngineering.jsx";
import CivilEngineeringPG from "./pages/Study Abroad/USA/Engineering/pg/pages/CivilEngineering.jsx";
import ElectricalEngineeringPG from "./pages/Study Abroad/USA/Engineering/pg/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationPG from "./pages/Study Abroad/USA/Engineering/pg/pages/ElectronicsCommunication.jsx";
import ChemicalEngineeringPG from "./pages/Study Abroad/USA/Engineering/pg/pages/ChemicalEngineering.jsx";
import AerospaceEngineeringPG from "./pages/Study Abroad/USA/Engineering/pg/pages/AerospaceEngineering.jsx";
import BiomedicalEngineeringPG from "./pages/Study Abroad/USA/Engineering/pg/pages/BiomedicalEngineering.jsx";
import AutomobileEngineeringPG from "./pages/Study Abroad/USA/Engineering/pg/pages/AutomobileEngineering.jsx";

export async function render(url) {
  const helmetContext = {};

  const html = renderToString(
    <Provider store={store}>
      <HelmetProvider context={helmetContext}>
        <MemoryRouter initialEntries={[url]}>
          <Routes>
            <Route path="/landingpage" element={<Landingpage />} />
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="study-abroad" element={<MbbsAbroad />} />
              <Route path="mbbs-abroad/russia" element={<Russian />} />
              <Route path="mbbs-abroad/bangladesh" element={<Bangladesh />} />
              <Route path="mbbs-abroad/kazakhstan" element={<Kazakhstan />} />
              <Route path="mbbs-abroad/armernia" element={<Armernia />} />
              <Route path="mbbs-abroad/belarus" element={<Belarus />} />
              <Route path="mbbs-abroad/china" element={<China />} />
              <Route path="mbbs-abroad/kyrgyzstan" element={<Kyrgyzstan />} />
              <Route path="mbbs-abroad/egypt" element={<Egypt />} />
              <Route path="mbbs-abroad/georgia" element={<Georgia />} />
              <Route path="mbbs-abroad/iran" element={<Iran />} />
              <Route path="mbbs-abroad/nepal" element={<Nepal />} />
              <Route path="mbbs-abroad/tajikistan" element={<Tejikistan />} />
              <Route path="mbbs-abroad/uzbekistan" element={<Uzbekistan />} />
              <Route path="mbbs-abroad/vietnam" element={<Vietnam />} />
              <Route path="mbbs-abroad/italy" element={<Italy />} />
              <Route path="blog/education-blog" element={<BlogSection />} />
              <Route path="blog" element={<Blog />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<Contact />} />
              <Route path="allcollege" element={<AllIndia />} />
              <Route path="/courses/mbbs" element={<MbbsAbroad />} />
              <Route path="/courses/medical-abroad" element={<MedicalAbroad />} />
              <Route path="/courses/dentistry" element={<DentistryAbroad />} />
              <Route path="/courses/nursing" element={<NursingAbroad />} />
              <Route path="/courses/pharmacy" element={<PharmacyAbroad />} />
              <Route path="/courses/physiotherapy" element={<PhysiotherapyAbroad />} />
              <Route path="courses/public-health" element={<PublicHealthAbroad />} />
              <Route path="courses/biotechnology" element={<BiotechnologyAbroad />} />
              <Route path="courses/engineering" element={<Engineering />} />
              <Route path="courses/business-management" element={<BusinessManagementAbroad />} />
              <Route path="courses/mba" element={<MbaAbroad />} />
              <Route path="courses/mbs" element={<MbsAbroad />} />
              <Route path="courses/bba" element={<BbaAbroad />} />
              <Route path="courses/bbs" element={<BbsAbroad />} />
              <Route path="courses/executive-mba" element={<ExecutiveMbaAbroad />} />
              <Route path="courses/international-business" element={<InternationalBusinessAbroad />} />
              <Route path="courses/marketing-management" element={<MarketingManagementAbroad />} />
              <Route path="courses/hospitality-management" element={<HospitalityManagementAbroad />} />
              <Route path="courses/architecture" element={<ArchitectureAbroad />} />
              <Route path="courses/law" element={<LawAbroad />} />
              <Route path="study-abroad/language-courses" element={<LanguageCoursesAbroad />} />
              <Route path="study-abroad/summer-courses" element={<SummerCoursesAbroad />} />
              <Route path="study-abroad/winter-courses" element={<WinterCoursesAbroad />} />
              <Route path="courses/accounting-finance" element={<AccountingFinance />} />
              <Route path="courses/ug/engineering" element={<UndergraduateEngineering />} />
              <Route path="courses/ug/computer-engineering" element={<ComputerEngineeringUG />} />
              <Route path="courses/ug/mechanical-engineering" element={<MechanicalEngineeringUG />} />
              <Route path="courses/ug/civil-engineering" element={<CivilEngineeringUG />} />
              <Route path="courses/ug/electrical-engineering" element={<ElectricalEngineeringUG />} />
              <Route path="courses/ug/electronics-communication" element={<ElectronicsCommunicationUG />} />
              <Route path="courses/ug/chemical-engineering" element={<ChemicalEngineeringUG />} />
              <Route path="courses/ug/aerospace-engineering" element={<AerospaceEngineeringUG />} />
              <Route path="courses/ug/biomedical-engineering" element={<BiomedicalEngineeringUG />} />
              <Route path="courses/ug/automobile-engineering" element={<AutomobileEngineeringUG />} />
              <Route path="courses/pg/engineering" element={<PostgraduateEngineering />} />
              <Route path="courses/pg/computer-engineering" element={<ComputerEngineeringPG />} />
              <Route path="courses/pg/mechanical-engineering" element={<MechanicalEngineeringPG />} />
              <Route path="courses/pg/civil-engineering" element={<CivilEngineeringPG />} />
              <Route path="courses/pg/electrical-engineering" element={<ElectricalEngineeringPG />} />
              <Route path="courses/pg/electronics-communication" element={<ElectronicsCommunicationPG />} />
              <Route path="courses/pg/chemical-engineering" element={<ChemicalEngineeringPG />} />
              <Route path="courses/pg/aerospace-engineering" element={<AerospaceEngineeringPG />} />
              <Route path="courses/pg/biomedical-engineering" element={<BiomedicalEngineeringPG />} />
              <Route path="courses/pg/automobile-engineering" element={<AutomobileEngineeringPG />} />
              <Route path="terms-conditions" element={<TermsAndConditions />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="cookies-policy" element={<CookiesPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </HelmetProvider>
    </Provider>
  );

  const { helmet } = helmetContext;

  return { html, helmet };
}

export default render;