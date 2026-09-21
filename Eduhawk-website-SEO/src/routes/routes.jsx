import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/layouts/MainLayout.jsx";

// Pages
import Home from "../pages/HeroSection.jsx";
import About from "../pages/About.jsx";
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
import BlogSection from "../pages/Blog/BlogSection.jsx";
import Blog from "../pages/Component/Blog.jsx";
import BlogDetail from "../pages/Component/BlogDetail.jsx";
import AllIndia from "../pages/Country/India/AllIndia.jsx";
import Landingpage from "../pages/Landingpage/Landingpage.jsx";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions.jsx";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy.jsx";
import MbbsAbroad from "../pages/Study Abroad/MbbsAbroad.jsx";
import MedicalAbroad from "../pages/Study Abroad/MedicalAbroad.jsx";
import DentistryAbroad from "../pages/Study Abroad/DentistryAbroad.jsx";
import NursingAbroad from "../pages/Study Abroad/NursingAbroad.jsx";
import PharmacyAbroad from "../pages/Study Abroad/PharmacyAbroad.jsx";
import PhysiotherapyAbroad from "../pages/Study Abroad/PhysiotherapyAbroad.jsx";
import PublicHealthAbroad from "../pages/Study Abroad/PublicHealthAbroad.jsx";
import BiotechnologyAbroad from "../pages/Study Abroad/BiotechnologyAbroad.jsx";
import Engineering from "../pages/Study Abroad/Engineering.jsx";
import ComputerScienceAbroad from "../pages/Study Abroad/ComputerScienceAbroad.jsx";
import InformationTechnologyAbroad from "../pages/Study Abroad/InformationTechnologyAbroad.jsx";
import BusinessManagementAbroad from "../pages/Study Abroad/BusinessManagementAbroad.jsx";
import MBAAbroad from "../pages/Study Abroad/MBAAbroad.jsx";
import AccountingFinance from "../pages/Study Abroad/AccountingFinance.jsx";

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
        path: "courses/computer-science",
        element: <ComputerScienceAbroad/>,
      },
   {
        path: "courses/information-technology",
        element: <InformationTechnologyAbroad/>,
      },

         {
        path: "courses/business-management",
        element: <BusinessManagementAbroad/>,
      },


        {
        path: "courses/mba",
        element: <MBAAbroad/>,
      },

       {
        path: "courses/accounting-financew",
        element: <AccountingFinance/>,
      },


      

      
      {
        path: "terms-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

// Also export plain routes array for sitemap
export const routeList = [
  "/",
  "/about",
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
  "/blog/education-blog",
  "/blog",
  "/services",
  "/contact",
  "/allcollege",
  "/terms-conditions",
  "/privacy-policy",
  "/landingpage",
];
