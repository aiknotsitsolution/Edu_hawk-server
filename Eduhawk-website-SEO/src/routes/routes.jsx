import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/layouts/MainLayout.jsx";
import Home from "../pages/HeroSection.jsx";

/* Route-level code splitting (Phase 1):
 * Every page except the homepage is loaded on demand via React.lazy.
 * The homepage stays eager: its chunk is required on initial load anyway,
 * so lazy-loading it would only add an extra round-trip and a
 * fallback-to-content layout shift (CLS) without saving any bytes.
 * Shared layout (MainLayout, Navbar, Footer) stays eager so navigation
 * chrome renders instantly. Route paths and routeList are unchanged. */

// Pages
const About = lazy(() => import("../pages/About.jsx"));
const NotFound = lazy(() => import("../pages/NotFound.jsx"));
const Russian = lazy(() => import("../pages/Country/Russian.jsx"));
const Bangladesh = lazy(() => import("../pages/Country/Bangladesh.jsx"));
const Services = lazy(() => import("../pages/Component/Services.jsx"));
const Contact = lazy(() => import("../pages/Component/Contact.jsx"));
const Kazakhstan = lazy(() => import("../pages/Country/kazakhstan.jsx"));
const Kyrgyzstan = lazy(() => import("../pages/Country/Kyrgyzstan.jsx"));
const Armernia = lazy(() => import("../pages/Country/Armernia.jsx"));
const Belarus = lazy(() => import("../pages/Country/Belarus.jsx"));
const China = lazy(() => import("../pages/Country/China.jsx"));
const Egypt = lazy(() => import("../pages/Country/Egypt.jsx"));
const Georgia = lazy(() => import("../pages/Country/Georgia.jsx"));
const Iran = lazy(() => import("../pages/Country/Iran.jsx"));
const Nepal = lazy(() => import("../pages/Country/Nepal.jsx"));
const Tejikistan = lazy(() => import("../pages/Country/Tejikistan.jsx"));
const Uzbekistan = lazy(() => import("../pages/Country/Uzbekistan.jsx"));
const Vietnam = lazy(() => import("../pages/Country/Vietnam.jsx"));
const Italy = lazy(() => import("../pages/Country/Italy.jsx"));
const BlogSection = lazy(() => import("../pages/Blog/BlogSection.jsx"));
const Blog = lazy(() => import("../pages/Component/Blog.jsx"));
const BlogDetail = lazy(() => import("../pages/Component/BlogDetail.jsx"));
const AllIndia = lazy(() => import("../pages/Country/India/AllIndia.jsx"));
const Landingpage = lazy(() => import("../pages/Landingpage/Landingpage.jsx"));
const TermsAndConditions = lazy(() => import("../pages/TermsAndConditions/TermsAndConditions.jsx"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy/PrivacyPolicy.jsx"));
const CookiesPolicy = lazy(() => import("../pages/CookiesPolicy/CookiesPolicy.jsx"));
const MbbsAbroad = lazy(() => import("../pages/Study Abroad/MbbsAbroad.jsx"));
const MedicalAbroad = lazy(() => import("../pages/Study Abroad/MedicalAbroad.jsx"));
const DentistryAbroad = lazy(() => import("../pages/Study Abroad/USA/MBBS Abroad/DentistryAbroad.jsx"));
const NursingAbroad = lazy(() => import("../pages/Study Abroad/USA/MBBS Abroad/NursingAbroad.jsx"));
const PharmacyAbroad = lazy(() => import("../pages/Study Abroad/USA/MBBS Abroad/PharmacyAbroad.jsx"));
const PhysiotherapyAbroad = lazy(() => import("../pages/Study Abroad/USA/MBBS Abroad/PhysiotherapyAbroad.jsx"));
const PublicHealthAbroad = lazy(() => import("../pages/Study Abroad/USA/MBBS Abroad/PublicHealth.jsx"));
const BiotechnologyAbroad = lazy(() => import("../pages/Study Abroad/USA/MBBS Abroad/Biotechnology.jsx"));
const Engineering = lazy(() => import("../pages/Study Abroad/Engineering.jsx"));
const BusinessManagementAbroad = lazy(() => import("../pages/Study Abroad/USA/BusinessManagement/business-management.jsx"));
const MbaAbroad = lazy(() => import("../pages/Study Abroad/USA/MBA/mba.jsx"));
const MbsAbroad = lazy(() => import("../pages/Study Abroad/USA/MBS/mbs.jsx"));
const BbaAbroad = lazy(() => import("../pages/Study Abroad/USA/BBA/bba.jsx"));
const BbsAbroad = lazy(() => import("../pages/Study Abroad/USA/BBS/bbs.jsx"));
const ExecutiveMbaAbroad = lazy(() => import("../pages/Study Abroad/USA/ExecutiveMBA/executive-mba.jsx"));
const InternationalBusinessAbroad = lazy(() => import("../pages/Study Abroad/USA/InternationalBusiness/international-business.jsx"));
const MarketingManagementAbroad = lazy(() => import("../pages/Study Abroad/USA/MarketingManagement/marketing-management.jsx"));
const HospitalityManagementAbroad = lazy(() => import("../pages/Study Abroad/USA/HospitalityManagement/hospitality-management.jsx"));
const ArchitectureAbroad = lazy(() => import("../pages/Study Abroad/USA/Architecture/architecture.jsx"));
const LawAbroad = lazy(() => import("../pages/Study Abroad/USA/Law/law.jsx"));
const LanguageCoursesAbroad = lazy(() => import("../pages/Study Abroad/USA/LanguageCourses/language-courses.jsx"));
const SummerCoursesAbroad = lazy(() => import("../pages/Study Abroad/USA/SummerCourses/summer-courses.jsx"));
const WinterCoursesAbroad = lazy(() => import("../pages/Study Abroad/USA/WinterCourses/winter-courses.jsx"));
const AccountingFinance = lazy(() => import("../pages/Study Abroad/AccountingFinance.jsx"));
const UndergraduateEngineering = lazy(() => import("../pages/Study Abroad/USA/Engineering/ug/undergraduate.jsx"));
const ComputerEngineeringUG = lazy(() => import("../pages/Study Abroad/USA/Engineering/ug/pages/ComputerEngineering.jsx"));
const MechanicalEngineeringUG = lazy(() => import("../pages/Study Abroad/USA/Engineering/ug/pages/MechanicalEngineering.jsx"));
const CivilEngineeringUG = lazy(() => import("../pages/Study Abroad/USA/Engineering/ug/pages/CivilEngineering.jsx"));
const ElectricalEngineeringUG = lazy(() => import("../pages/Study Abroad/USA/Engineering/ug/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationUG = lazy(() => import("../pages/Study Abroad/USA/Engineering/ug/pages/ElectronicsCommunication.jsx"));
const ChemicalEngineeringUG = lazy(() => import("../pages/Study Abroad/USA/Engineering/ug/pages/ChemicalEngineering.jsx"));
const AerospaceEngineeringUG = lazy(() => import("../pages/Study Abroad/USA/Engineering/ug/pages/AerospaceEngineering.jsx"));
const BiomedicalEngineeringUG = lazy(() => import("../pages/Study Abroad/USA/Engineering/ug/pages/BiomedicalEngineering.jsx"));
const AutomobileEngineeringUG = lazy(() => import("../pages/Study Abroad/USA/Engineering/ug/pages/AutomobileEngineering.jsx"));
const PostgraduateEngineering = lazy(() => import("../pages/Study Abroad/USA/Engineering/pg/postgraduate.jsx"));
const ComputerEngineeringPG = lazy(() => import("../pages/Study Abroad/USA/Engineering/pg/pages/ComputerEngineering.jsx"));
const MechanicalEngineeringPG = lazy(() => import("../pages/Study Abroad/USA/Engineering/pg/pages/MechanicalEngineering.jsx"));
const CivilEngineeringPG = lazy(() => import("../pages/Study Abroad/USA/Engineering/pg/pages/CivilEngineering.jsx"));
const ElectricalEngineeringPG = lazy(() => import("../pages/Study Abroad/USA/Engineering/pg/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationPG = lazy(() => import("../pages/Study Abroad/USA/Engineering/pg/pages/ElectronicsCommunication.jsx"));
const ChemicalEngineeringPG = lazy(() => import("../pages/Study Abroad/USA/Engineering/pg/pages/ChemicalEngineering.jsx"));
const AerospaceEngineeringPG = lazy(() => import("../pages/Study Abroad/USA/Engineering/pg/pages/AerospaceEngineering.jsx"));
const BiomedicalEngineeringPG = lazy(() => import("../pages/Study Abroad/USA/Engineering/pg/pages/BiomedicalEngineering.jsx"));
const AutomobileEngineeringPG = lazy(() => import("../pages/Study Abroad/USA/Engineering/pg/pages/AutomobileEngineering.jsx"));

export const router = createBrowserRouter([
  {
    path: "landingpage",
    element: (
      <React.Suspense fallback={null}>
        <Landingpage />
      </React.Suspense>
    ),
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
