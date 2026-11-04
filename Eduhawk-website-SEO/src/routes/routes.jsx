import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/layouts/MainLayout.jsx";

// Pages
import Home from "../pages/HeroSection.jsx";
import About from "../pages/About.jsx";
import NotFound from "../pages/NotFound.jsx";
import Russian from "../pages/Country/Russian.jsx";
import Bangladesh from "../pages/Country/Bangladesh.jsx";
import Services from "../pages/Component/Services.jsx";
import Contact from "../pages/Component/Contact.jsx";
import Kazakhstan from "../pages/Country/kazakhstan.jsx";
import Kyrgyzstan from "../pages/Country/Kyrgyzstan.jsx";
import Armernia from "../pages/Country/Armernia.jsx";
import Belarus from "../pages/Country/Belarus.jsx";
import China from "../pages/Country/China.jsx";
import Egypt from "../pages/Country/Egypt.jsx";
import Georgia from "../pages/Country/Georgia.jsx";
import Iran from "../pages/Country/Iran.jsx";
import Nepal from "../pages/Country/Nepal.jsx";
import Tejikistan from "../pages/Country/Tejikistan.jsx";
import Uzbekistan from "../pages/Country/Uzbekistan.jsx";
import Vietnam from "../pages/Country/Vietnam.jsx";
import Italy from "../pages/Country/Italy.jsx";
import BlogSection from "../pages/Blog/BlogSection.jsx";
import Blog from "../pages/Component/Blog.jsx";
import BlogDetail from "../pages/Component/BlogDetail.jsx";
import AllIndia from "../pages/Country/India/AllIndia.jsx";
import Landingpage from "../pages/Landingpage/Landingpage.jsx";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions.jsx";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy.jsx";
import CookiesPolicy from "../pages/CookiesPolicy/CookiesPolicy.jsx";
import MbbsAbroad from "../pages/Study Abroad/MbbsAbroad.jsx";
import MedicalAbroad from "../pages/Study Abroad/MedicalAbroad.jsx";
import DentistryAbroad from "../pages/Study Abroad/USA/MBBS Abroad/DentistryAbroad.jsx";
import NursingAbroad from "../pages/Study Abroad/USA/MBBS Abroad/NursingAbroad.jsx";
import PharmacyAbroad from "../pages/Study Abroad/USA/MBBS Abroad/PharmacyAbroad.jsx";
import PhysiotherapyAbroad from "../pages/Study Abroad/USA/MBBS Abroad/PhysiotherapyAbroad.jsx";
import PublicHealthAbroad from "../pages/Study Abroad/USA/MBBS Abroad/PublicHealth.jsx";
import BiotechnologyAbroad from "../pages/Study Abroad/USA/MBBS Abroad/Biotechnology.jsx";
import Engineering from "../pages/Study Abroad/Engineering.jsx";
import BusinessManagementAbroad from "../pages/Study Abroad/USA/BusinessManagement/business-management.jsx";
import MbaAbroad from "../pages/Study Abroad/USA/MBA/mba.jsx";
import MbsAbroad from "../pages/Study Abroad/USA/MBS/mbs.jsx";
import BbaAbroad from "../pages/Study Abroad/USA/BBA/bba.jsx";
import BbsAbroad from "../pages/Study Abroad/USA/BBS/bbs.jsx";
import ExecutiveMbaAbroad from "../pages/Study Abroad/USA/ExecutiveMBA/executive-mba.jsx";
import InternationalBusinessAbroad from "../pages/Study Abroad/USA/InternationalBusiness/international-business.jsx";
import MarketingManagementAbroad from "../pages/Study Abroad/USA/MarketingManagement/marketing-management.jsx";
import HospitalityManagementAbroad from "../pages/Study Abroad/USA/HospitalityManagement/hospitality-management.jsx";
import ArchitectureAbroad from "../pages/Study Abroad/USA/Architecture/architecture.jsx";
import LawAbroad from "../pages/Study Abroad/USA/Law/law.jsx";
import LanguageCoursesAbroad from "../pages/Study Abroad/USA/LanguageCourses/language-courses.jsx";
import SummerCoursesAbroad from "../pages/Study Abroad/USA/SummerCourses/summer-courses.jsx";
import WinterCoursesAbroad from "../pages/Study Abroad/USA/WinterCourses/winter-courses.jsx";
import AccountingFinance from "../pages/Study Abroad/AccountingFinance.jsx";
import UndergraduateEngineering from "../pages/Study Abroad/USA/Engineering/ug/undergraduate.jsx";
import ComputerEngineeringUG from "../pages/Study Abroad/USA/Engineering/ug/pages/ComputerEngineering.jsx";
import MechanicalEngineeringUG from "../pages/Study Abroad/USA/Engineering/ug/pages/MechanicalEngineering.jsx";
import CivilEngineeringUG from "../pages/Study Abroad/USA/Engineering/ug/pages/CivilEngineering.jsx";
import ElectricalEngineeringUG from "../pages/Study Abroad/USA/Engineering/ug/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationUG from "../pages/Study Abroad/USA/Engineering/ug/pages/ElectronicsCommunication.jsx";
import ChemicalEngineeringUG from "../pages/Study Abroad/USA/Engineering/ug/pages/ChemicalEngineering.jsx";
import AerospaceEngineeringUG from "../pages/Study Abroad/USA/Engineering/ug/pages/AerospaceEngineering.jsx";
import BiomedicalEngineeringUG from "../pages/Study Abroad/USA/Engineering/ug/pages/BiomedicalEngineering.jsx";
import AutomobileEngineeringUG from "../pages/Study Abroad/USA/Engineering/ug/pages/AutomobileEngineering.jsx";
import PostgraduateEngineering from "../pages/Study Abroad/USA/Engineering/pg/postgraduate.jsx";
import ComputerEngineeringPG from "../pages/Study Abroad/USA/Engineering/pg/pages/ComputerEngineering.jsx";
import MechanicalEngineeringPG from "../pages/Study Abroad/USA/Engineering/pg/pages/MechanicalEngineering.jsx";
import CivilEngineeringPG from "../pages/Study Abroad/USA/Engineering/pg/pages/CivilEngineering.jsx";
import ElectricalEngineeringPG from "../pages/Study Abroad/USA/Engineering/pg/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationPG from "../pages/Study Abroad/USA/Engineering/pg/pages/ElectronicsCommunication.jsx";
import ChemicalEngineeringPG from "../pages/Study Abroad/USA/Engineering/pg/pages/ChemicalEngineering.jsx";
import AerospaceEngineeringPG from "../pages/Study Abroad/USA/Engineering/pg/pages/AerospaceEngineering.jsx";
import BiomedicalEngineeringPG from "../pages/Study Abroad/USA/Engineering/pg/pages/BiomedicalEngineering.jsx";
import AutomobileEngineeringPG from "../pages/Study Abroad/USA/Engineering/pg/pages/AutomobileEngineering.jsx";

export const router = createBrowserRouter([
  {
    path: "landingpage",
    element: <Landingpage />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "study-abroad",
        element: <MbbsAbroad />,
      },
      {
        path: "mbbsabroad/russia",
        element: <Russian />,
      },
      {
        path: "mbbsabroad/bangladesh",
        element: <Bangladesh />,
      },
      {
        path: "mbbsabroad/kazakhstan",
        element: <Kazakhstan />,
      },
      {
        path: "mbbsabroad/armernia",
        element: <Armernia />,
      },
      {
        path: "mbbsabroad/belarus",
        element: <Belarus />,
      },
      {
        path: "mbbsabroad/china",
        element: <China />,
      },
      {
        path: "mbbsabroad/kyrgyzstan",
        element: <Kyrgyzstan />,
      },
      {
        path: "mbbsabroad/egypt",
        element: <Egypt />,
      },
      {
        path: "mbbsabroad/georgia",
        element: <Georgia />,
      },
      {
        path: "mbbsabroad/iran",
        element: <Iran />,
      },
      {
        path: "mbbsabroad/nepal",
        element: <Nepal />,
      },
      {
        path: "mbbsabroad/tajikistan",
        element: <Tejikistan />,
      },
      {
        path: "mbbsabroad/uzbekistan",
        element: <Uzbekistan />,
      },
      {
        path: "mbbsabroad/vietnam",
        element: <Vietnam />,
      },
      {
        path: "mbbsabroad/italy",
        element: <Italy />,
      },
      {
        path: "blog/education-blog",
        element: <BlogSection />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog/:slugOrId",
        element: <BlogDetail />,
      },
      {
        path: "allcollege",
        element: <AllIndia />,
      },

      {
        path: "/courses/mbbs",
        element: <MbbsAbroad />,
      },
      {
        path: "/courses/medical-abroad",
        element: <MedicalAbroad />,
      },
      {
        path: "/courses/dentistry",
        element: <DentistryAbroad />,
      },
      {
        path: "/courses/nursing",
        element: <NursingAbroad />,
      },

       {
        path: "/courses/pharmacy",
        element: <PharmacyAbroad />,
      },



       {
        path: "/courses/physiotherapy",
        element: <PhysiotherapyAbroad />,
      },


       {
        path: "courses/public-health",
        element: <PublicHealthAbroad />,
      },

      {
        path: "courses/biotechnology",
        element: <BiotechnologyAbroad />,
      },


      
      {
        path: "courses/engineering",
        element: <Engineering/>,
      },

         {
        path: "courses/business-management",
        element: <BusinessManagementAbroad/>,
      },


        {
        path: "courses/mba",
        element: <MbaAbroad/>,
      },
      {
        path: "courses/mbs",
        element: <MbsAbroad/>,
      },
      {
        path: "courses/bba",
        element: <BbaAbroad/>,
      },
      {
        path: "courses/bbs",
        element: <BbsAbroad/>,
      },
      {
        path: "courses/executive-mba",
        element: <ExecutiveMbaAbroad/>,
      },
      {
        path: "courses/international-business",
        element: <InternationalBusinessAbroad/>,
      },
      {
        path: "courses/marketing-management",
        element: <MarketingManagementAbroad/>,
      },
      {
        path: "courses/hospitality-management",
        element: <HospitalityManagementAbroad/>,
      },
      {
        path: "courses/architecture",
        element: <ArchitectureAbroad/>,
      },
      {
        path: "courses/law",
        element: <LawAbroad/>,
      },
      {
        path: "study-abroad/language-courses",
        element: <LanguageCoursesAbroad/>,
      },
      {
        path: "study-abroad/summer-courses",
        element: <SummerCoursesAbroad/>,
      },
      {
        path: "study-abroad/winter-courses",
        element: <WinterCoursesAbroad/>,
      },

       {
        path: "courses/accounting-finance",
        element: <AccountingFinance/>,
      },

      {
        path: "courses/ug/engineering",
        element: <UndergraduateEngineering />,
      },
      {
        path: "courses/ug/computer-engineering",
        element: <ComputerEngineeringUG />,
      },
      {
        path: "courses/ug/mechanical-engineering",
        element: <MechanicalEngineeringUG />,
      },
      {
        path: "courses/ug/civil-engineering",
        element: <CivilEngineeringUG />,
      },
      {
        path: "courses/ug/electrical-engineering",
        element: <ElectricalEngineeringUG />,
      },
      {
        path: "courses/ug/electronics-communication",
        element: <ElectronicsCommunicationUG />,
      },
      {
        path: "courses/ug/chemical-engineering",
        element: <ChemicalEngineeringUG />,
      },
      {
        path: "courses/ug/aerospace-engineering",
        element: <AerospaceEngineeringUG />,
      },
      {
        path: "courses/ug/biomedical-engineering",
        element: <BiomedicalEngineeringUG />,
      },
      {
        path: "courses/ug/automobile-engineering",
        element: <AutomobileEngineeringUG />,
      },

      {
        path: "courses/pg/engineering",
        element: <PostgraduateEngineering />,
      },
      {
        path: "courses/pg/computer-engineering",
        element: <ComputerEngineeringPG />,
      },
      {
        path: "courses/pg/mechanical-engineering",
        element: <MechanicalEngineeringPG />,
      },
      {
        path: "courses/pg/civil-engineering",
        element: <CivilEngineeringPG />,
      },
      {
        path: "courses/pg/electrical-engineering",
        element: <ElectricalEngineeringPG />,
      },
      {
        path: "courses/pg/electronics-communication",
        element: <ElectronicsCommunicationPG />,
      },
      {
        path: "courses/pg/chemical-engineering",
        element: <ChemicalEngineeringPG />,
      },
      {
        path: "courses/pg/aerospace-engineering",
        element: <AerospaceEngineeringPG />,
      },
      {
        path: "courses/pg/biomedical-engineering",
        element: <BiomedicalEngineeringPG />,
      },
      {
        path: "courses/pg/automobile-engineering",
        element: <AutomobileEngineeringPG />,
      },


      

      
      {
        path: "terms-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "cookies-policy",
        element: <CookiesPolicy />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

// Also export plain routes array for sitemap
export const routeList = [
  "/",
  "/about",
  "/study-abroad",
  "/mbbsabroad/russia",
  "/mbbsabroad/bangladesh",
  "/mbbsabroad/kazakhstan",
  "/mbbsabroad/armernia",
  "/mbbsabroad/belarus",
  "/mbbsabroad/china",
  "/mbbsabroad/kyrgyzstan",
  "/mbbsabroad/egypt",
  "/mbbsabroad/georgia",
  "/mbbsabroad/iran",
  "/mbbsabroad/nepal",
  "/mbbsabroad/tajikistan",
  "/mbbsabroad/uzbekistan",
  "/mbbsabroad/vietnam",
  "/mbbsabroad/italy",
  "/blog/education-blog",
  "/blog",
  "/services",
  "/contact",
  "/allcollege",
  "/courses/mbbs",
  "/courses/medical-abroad",
  "/courses/dentistry",
  "/courses/nursing",
  "/courses/pharmacy",
  "/courses/physiotherapy",
  "/courses/public-health",
  "/courses/biotechnology",
  "/courses/engineering",
  "/courses/business-management",
  "/courses/mba",
  "/courses/mbs",
  "/courses/bba",
  "/courses/bbs",
  "/courses/executive-mba",
  "/courses/international-business",
  "/courses/marketing-management",
  "/courses/hospitality-management",
  "/courses/architecture",
  "/courses/law",
  "/study-abroad/language-courses",
  "/study-abroad/summer-courses",
  "/study-abroad/winter-courses",
  "/courses/accounting-finance",
  "/courses/ug/engineering",
  "/courses/ug/computer-engineering",
  "/courses/ug/mechanical-engineering",
  "/courses/ug/civil-engineering",
  "/courses/ug/electrical-engineering",
  "/courses/ug/electronics-communication",
  "/courses/ug/chemical-engineering",
  "/courses/ug/aerospace-engineering",
  "/courses/ug/biomedical-engineering",
  "/courses/ug/automobile-engineering",
  "/courses/pg/engineering",
  "/courses/pg/computer-engineering",
  "/courses/pg/mechanical-engineering",
  "/courses/pg/civil-engineering",
  "/courses/pg/electrical-engineering",
  "/courses/pg/electronics-communication",
  "/courses/pg/chemical-engineering",
  "/courses/pg/aerospace-engineering",
  "/courses/pg/biomedical-engineering",
  "/courses/pg/automobile-engineering",
  "/terms-conditions",
  "/privacy-policy",
  "/cookies-policy",
  "/landingpage",
];
