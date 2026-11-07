import React, { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../pages/layouts/MainLayout.jsx";
import Home from "../pages/HeroSection.jsx";

/* Route-level code splitting (Phase 1):
 * Every page except the homepage is loaded on demand via React.lazy.
 * The homepage stays eager: its chunk is required on initial load anyway,
 * so lazy-loading it would only add an extra round-trip and a
 * fallback-to-content layout shift (CLS) without saving any bytes.
 * Shared layout (MainLayout, Navbar, Footer) stays eager so navigation
 * chrome renders instantly. Route paths and routeList are unchanged. */

/* Route-level code splitting with auto-recovery for hot-reloads / chunk drops */
const safeLazy = (importFn) =>
  lazy(async () => {
    try {
      return await importFn();
    } catch (err) {
      if (typeof window !== "undefined") {
        const key = "chunk_retry_" + window.location.pathname;
        if (!sessionStorage.getItem(key)) {
          sessionStorage.setItem(key, "1");
          window.location.reload();
        }
      }
      throw err;
    }
  });

// Pages
const About = safeLazy(() => import("../pages/About.jsx"));
const NotFound = safeLazy(() => import("../pages/NotFound.jsx"));
const Russian = safeLazy(() => import("../pages/Country/Russian.jsx"));
const Bangladesh = safeLazy(() => import("../pages/Country/Bangladesh.jsx"));
const Services = safeLazy(() => import("../pages/Component/Services.jsx"));
const Contact = safeLazy(() => import("../pages/Component/Contact.jsx"));
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
const MbbsAbroad = lazy(() => import("../pages/Study Abroad/USA/MbbsAbroad.jsx"));
const MedicalAbroad = lazy(() => import("../pages/Study Abroad/USA/MedicalAbroad.jsx"));
const DentistryAbroad = lazy(() => import("../pages/Study Abroad/USA/MBBS Abroad/DentistryAbroad.jsx"));
const NursingAbroad = lazy(() => import("../pages/Study Abroad/USA/MBBS Abroad/NursingAbroad.jsx"));
const PharmacyAbroad = lazy(() => import("../pages/Study Abroad/USA/MBBS Abroad/PharmacyAbroad.jsx"));
const PhysiotherapyAbroad = lazy(() => import("../pages/Study Abroad/USA/MBBS Abroad/PhysiotherapyAbroad.jsx"));
const PublicHealthAbroad = lazy(() => import("../pages/Study Abroad/USA/MBBS Abroad/PublicHealth.jsx"));
const BiotechnologyAbroad = lazy(() => import("../pages/Study Abroad/USA/MBBS Abroad/Biotechnology.jsx"));
const ComputerScienceUSA = lazy(() => import("../pages/Study Abroad/USA/ComputerScience/computer-science.jsx"));
const InformationTechnologyUSA = lazy(() => import("../pages/Study Abroad/USA/InformationTechnology/information-technology.jsx"));
const Engineering = lazy(() => import("../pages/Study Abroad/USA/Engineering.jsx"));
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
const AccountingFinance = lazy(() => import("../pages/Study Abroad/USA/AccountingFinance.jsx"));
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

// Study Abroad - Finland Pages
const ArchitectureFinland = lazy(() => import("../pages/Study Abroad/Finland/Architecture/architecture.jsx"));
const BBAFinland = lazy(() => import("../pages/Study Abroad/Finland/BBA/bba.jsx"));
const BBSFinland = lazy(() => import("../pages/Study Abroad/Finland/BBS/bbs.jsx"));
const BusinessManagementFinland = lazy(() => import("../pages/Study Abroad/Finland/BusinessManagement/business-management.jsx"));
const InformationTechnologyFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/InformationTechnology.jsx"));
const MastersinAerospaceEngineeringPGFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/pg/pages/AerospaceEngineering.jsx"));
const MastersinAutomobileEngineeringPGFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/pg/pages/AutomobileEngineering.jsx"));
const MastersinBiomedicalEngineeringPGFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/pg/pages/BiomedicalEngineering.jsx"));
const MastersinChemicalEngineeringPGFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/pg/pages/ChemicalEngineering.jsx"));
const MastersinCivilEngineeringPGFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/pg/pages/CivilEngineering.jsx"));
const MastersinComputerEngineeringPGFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/pg/pages/ComputerEngineering.jsx"));
const MastersinComputerScienceEngineeringPGFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/pg/pages/ComputerScienceEngineering.jsx"));
const ComputerScienceFinland = lazy(() => import("../pages/Study Abroad/Finland/ComputerScience/computer-science.jsx"));
const InformationTechnologyStandaloneFinland = lazy(() => import("../pages/Study Abroad/Finland/InformationTechnology/information-technology.jsx"));
const MastersinElectricalEngineeringPGFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/pg/pages/ElectricalEngineering.jsx"));
const MastersinElectronicsEngineeringPGFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/pg/pages/ElectronicsCommunication.jsx"));
const MastersinMechanicalEngineeringPGFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/pg/pages/MechanicalEngineering.jsx"));
const AerospaceRelatedEngineeringUGFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/ug/pages/AerospaceEngineering.jsx"));
const AutomobileEngineeringUGFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/ug/pages/AutomobileEngineering.jsx"));
const BiomedicalEngineeringUGFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/ug/pages/BiomedicalEngineering.jsx"));
const ChemicalEngineeringUGFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/ug/pages/ChemicalEngineering.jsx"));
const CivilEngineeringUGFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/ug/pages/CivilEngineering.jsx"));
const ComputerEngineeringUGFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/ug/pages/ComputerEngineering.jsx"));
const ComputerScienceEngineeringUGFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/ug/pages/ComputerScienceEngineering.jsx"));
const ElectricalEngineeringUGFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/ug/pages/ElectricalEngineering.jsx"));
const ElectronicsEngineeringUGFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/ug/pages/ElectronicsCommunication.jsx"));
const MechanicalEngineeringUGFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/ug/pages/MechanicalEngineering.jsx"));
const BachelorsinEngineeringFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/ug/undergraduate.jsx"));
const PostgraduateEngineeringFinland = lazy(() => import("../pages/Study Abroad/Finland/Engineering/pg/postgraduate.jsx"));
const ExecutiveMBAFinland = lazy(() => import("../pages/Study Abroad/Finland/ExecutiveMBA/executive-mba.jsx"));
const HospitalityManagementFinland = lazy(() => import("../pages/Study Abroad/Finland/HospitalityManagement/hospitality-management.jsx"));
const InternationalBusinessFinland = lazy(() => import("../pages/Study Abroad/Finland/InternationalBusiness/international-business.jsx"));
const LanguageCoursesFinland = lazy(() => import("../pages/Study Abroad/Finland/LanguageCourses/language-courses.jsx"));
const LawFinland = lazy(() => import("../pages/Study Abroad/Finland/Law/law.jsx"));
const MBAFinland = lazy(() => import("../pages/Study Abroad/Finland/MBA/mba.jsx"));
const BiotechnologyFinland = lazy(() => import("../pages/Study Abroad/Finland/MBBS Abroad/Biotechnology.jsx"));
const DentistryFinland = lazy(() => import("../pages/Study Abroad/Finland/MBBS Abroad/DentistryAbroad.jsx"));
const NursingFinland = lazy(() => import("../pages/Study Abroad/Finland/MBBS Abroad/NursingAbroad.jsx"));
const PharmacyFinland = lazy(() => import("../pages/Study Abroad/Finland/MBBS Abroad/PharmacyAbroad.jsx"));
const PhysiotherapyFinland = lazy(() => import("../pages/Study Abroad/Finland/MBBS Abroad/PhysiotherapyAbroad.jsx"));
const PublicHealthFinland = lazy(() => import("../pages/Study Abroad/Finland/MBBS Abroad/PublicHealth.jsx"));
const MBSFinland = lazy(() => import("../pages/Study Abroad/Finland/MBS/mbs.jsx"));
const SummerCoursesFinland = lazy(() => import("../pages/Study Abroad/Finland/SummerCourses/summer-courses.jsx"));
const WinterCoursesFinland = lazy(() => import("../pages/Study Abroad/Finland/WinterCourses/winter-courses.jsx"));

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

      // =====================================================================
      // STUDY ABROAD - USA DEDICATED ROUTES
      // =====================================================================
      {
        path: "study-abroad/usa/engineering",
        element: <Engineering />,
      },
      {
        path: "study-abroad/usa/dentistry",
        element: <DentistryAbroad />,
      },
      {
        path: "study-abroad/usa/nursing",
        element: <NursingAbroad />,
      },
      {
        path: "study-abroad/usa/pharmacy",
        element: <PharmacyAbroad />,
      },
      {
        path: "study-abroad/usa/physiotherapy",
        element: <PhysiotherapyAbroad />,
      },
      {
        path: "study-abroad/usa/public-health",
        element: <PublicHealthAbroad />,
      },
      {
        path: "study-abroad/usa/biotechnology",
        element: <BiotechnologyAbroad />,
      },
      {
        path: "study-abroad/usa/medical-abroad",
        element: <MedicalAbroad />,
      },
      {
        path: "study-abroad/usa/mbbs",
        element: <MbbsAbroad />,
      },
      {
        path: "study-abroad/usa/business-management",
        element: <BusinessManagementAbroad />,
      },
      {
        path: "study-abroad/usa/mba",
        element: <MbaAbroad />,
      },
      {
        path: "study-abroad/usa/executive-mba",
        element: <ExecutiveMbaAbroad />,
      },
      {
        path: "study-abroad/usa/bba",
        element: <BbaAbroad />,
      },
      {
        path: "study-abroad/usa/bbs",
        element: <BbsAbroad />,
      },
      {
        path: "study-abroad/usa/mbs",
        element: <MbsAbroad />,
      },
      {
        path: "study-abroad/usa/international-business",
        element: <InternationalBusinessAbroad />,
      },
      {
        path: "study-abroad/usa/marketing-management",
        element: <MarketingManagementAbroad />,
      },
      {
        path: "study-abroad/usa/accounting-finance",
        element: <AccountingFinance />,
      },
      {
        path: "study-abroad/usa/hospitality-management",
        element: <HospitalityManagementAbroad />,
      },
      {
        path: "study-abroad/usa/architecture",
        element: <ArchitectureAbroad />,
      },
      {
        path: "study-abroad/usa/law",
        element: <LawAbroad />,
      },
      {
        path: "study-abroad/usa/other-courses",
        element: <BusinessManagementAbroad />,
      },
      {
        path: "study-abroad/usa/hr-management",
        element: <BusinessManagementAbroad />,
      },
      {
        path: "study-abroad/usa/language-courses",
        element: <LanguageCoursesAbroad />,
      },
      {
        path: "study-abroad/usa/summer-courses",
        element: <SummerCoursesAbroad />,
      },
      {
        path: "study-abroad/usa/winter-courses",
        element: <WinterCoursesAbroad />,
      },
      {
        path: "study-abroad/usa/working-professionals",
        element: <ExecutiveMbaAbroad />,
      },

      // USA UG Branches
      {
        path: "study-abroad/usa/ug/computer-engineering",
        element: <ComputerEngineeringUG />,
      },
      {
        path: "study-abroad/usa/ug/mechanical-engineering",
        element: <MechanicalEngineeringUG />,
      },
      {
        path: "study-abroad/usa/ug/civil-engineering",
        element: <CivilEngineeringUG />,
      },
      {
        path: "study-abroad/usa/ug/electrical-engineering",
        element: <ElectricalEngineeringUG />,
      },
      {
        path: "study-abroad/usa/ug/electronics-communication",
        element: <ElectronicsCommunicationUG />,
      },
      {
        path: "study-abroad/usa/ug/chemical-engineering",
        element: <ChemicalEngineeringUG />,
      },
      {
        path: "study-abroad/usa/ug/aerospace-engineering",
        element: <AerospaceEngineeringUG />,
      },
      {
        path: "study-abroad/usa/ug/biomedical-engineering",
        element: <BiomedicalEngineeringUG />,
      },
      {
        path: "study-abroad/usa/ug/automobile-engineering",
        element: <AutomobileEngineeringUG />,
      },

      // USA PG Branches
      {
        path: "study-abroad/usa/pg/computer-engineering",
        element: <ComputerEngineeringPG />,
      },
      {
        path: "study-abroad/usa/pg/mechanical-engineering",
        element: <MechanicalEngineeringPG />,
      },
      {
        path: "study-abroad/usa/pg/civil-engineering",
        element: <CivilEngineeringPG />,
      },
      {
        path: "study-abroad/usa/pg/electrical-engineering",
        element: <ElectricalEngineeringPG />,
      },
      {
        path: "study-abroad/usa/pg/electronics-communication",
        element: <ElectronicsCommunicationPG />,
      },
      {
        path: "study-abroad/usa/pg/chemical-engineering",
        element: <ChemicalEngineeringPG />,
      },
      {
        path: "study-abroad/usa/pg/aerospace-engineering",
        element: <AerospaceEngineeringPG />,
      },
      {
        path: "study-abroad/usa/pg/biomedical-engineering",
        element: <BiomedicalEngineeringPG />,
      },
      {
        path: "study-abroad/usa/pg/automobile-engineering",
        element: <AutomobileEngineeringPG />,
      },

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
        path: "mbbs-abroad/russia",
        element: <Russian />,
      },
      {
        path: "mbbs-abroad/bangladesh",
        element: <Bangladesh />,
      },
      {
        path: "mbbs-abroad/kazakhstan",
        element: <Kazakhstan />,
      },
      {
        path: "mbbs-abroad/armenia",
        element: <Armernia />,
      },
      {
        path: "mbbs-abroad/armernia",
        element: <Navigate to="/mbbs-abroad/armenia" replace />,
      },
      {
        path: "mbbs-abroad/belarus",
        element: <Belarus />,
      },
      {
        path: "mbbs-abroad/china",
        element: <China />,
      },
      {
        path: "mbbs-abroad/kyrgyzstan",
        element: <Kyrgyzstan />,
      },
      {
        path: "mbbs-abroad/egypt",
        element: <Egypt />,
      },
      {
        path: "mbbs-abroad/georgia",
        element: <Georgia />,
      },
      {
        path: "mbbs-abroad/iran",
        element: <Iran />,
      },
      {
        path: "mbbs-abroad/nepal",
        element: <Nepal />,
      },
      {
        path: "mbbs-abroad/tajikistan",
        element: <Tejikistan />,
      },
      {
        path: "mbbs-abroad/uzbekistan",
        element: <Uzbekistan />,
      },
      {
        path: "mbbs-abroad/vietnam",
        element: <Vietnam />,
      },
      {
        path: "mbbs-abroad/italy",
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
        path: "courses/computer-science",
        element: <ComputerScienceUSA />,
      },
      {
        path: "study-abroad/usa/computer-science",
        element: <ComputerScienceUSA />,
      },
      {
        path: "courses/information-technology",
        element: <InformationTechnologyUSA />,
      },
      {
        path: "study-abroad/usa/information-technology",
        element: <InformationTechnologyUSA />,
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
        path: "study-abroad/working-professionals",
        element: <ExecutiveMbaAbroad />,
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
        path: "study-abroad/usa/ug/engineering",
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
        path: "study-abroad/usa/pg/engineering",
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



      
      
      // Study Abroad - Finland Routes
      {
        path: "study-abroad/finland/architecture",
        element: <ArchitectureFinland />,
      },
      {
        path: "study-abroad/finland/bba",
        element: <BBAFinland />,
      },
      {
        path: "study-abroad/finland/bbs",
        element: <BBSFinland />,
      },
      {
        path: "study-abroad/finland/business-management",
        element: <BusinessManagementFinland />,
      },
      {
        path: "study-abroad/finland/computer-science",
        element: <ComputerScienceFinland />,
      },
      {
        path: "study-abroad/finland/information-technology",
        element: <InformationTechnologyStandaloneFinland />,
      },
      {
        path: "study-abroad/finland/engineering/information-technology",
        element: <InformationTechnologyFinland />,
      },
      {
        path: "study-abroad/finland/pg/aerospace-engineering",
        element: <MastersinAerospaceEngineeringPGFinland />,
      },
      {
        path: "study-abroad/finland/pg/automobile-engineering",
        element: <MastersinAutomobileEngineeringPGFinland />,
      },
      {
        path: "study-abroad/finland/pg/biomedical-engineering",
        element: <MastersinBiomedicalEngineeringPGFinland />,
      },
      {
        path: "study-abroad/finland/pg/chemical-engineering",
        element: <MastersinChemicalEngineeringPGFinland />,
      },
      {
        path: "study-abroad/finland/pg/civil-engineering",
        element: <MastersinCivilEngineeringPGFinland />,
      },
      {
        path: "study-abroad/finland/pg/computer-engineering",
        element: <MastersinComputerEngineeringPGFinland />,
      },
      {
        path: "study-abroad/finland/pg/computer-science-engineering",
        element: <MastersinComputerScienceEngineeringPGFinland />,
      },
      {
        path: "study-abroad/finland/pg/electrical-engineering",
        element: <MastersinElectricalEngineeringPGFinland />,
      },
      {
        path: "study-abroad/finland/pg/electronics-communication",
        element: <MastersinElectronicsEngineeringPGFinland />,
      },
      {
        path: "study-abroad/finland/pg/mechanical-engineering",
        element: <MastersinMechanicalEngineeringPGFinland />,
      },
      {
        path: "study-abroad/finland/ug/aerospace-engineering",
        element: <AerospaceRelatedEngineeringUGFinland />,
      },
      {
        path: "study-abroad/finland/ug/automobile-engineering",
        element: <AutomobileEngineeringUGFinland />,
      },
      {
        path: "study-abroad/finland/ug/biomedical-engineering",
        element: <BiomedicalEngineeringUGFinland />,
      },
      {
        path: "study-abroad/finland/ug/chemical-engineering",
        element: <ChemicalEngineeringUGFinland />,
      },
      {
        path: "study-abroad/finland/ug/civil-engineering",
        element: <CivilEngineeringUGFinland />,
      },
      {
        path: "study-abroad/finland/ug/computer-engineering",
        element: <ComputerEngineeringUGFinland />,
      },
      {
        path: "study-abroad/finland/ug/computer-science-engineering",
        element: <ComputerScienceEngineeringUGFinland />,
      },
      {
        path: "study-abroad/finland/ug/electrical-engineering",
        element: <ElectricalEngineeringUGFinland />,
      },
      {
        path: "study-abroad/finland/ug/electronics-communication",
        element: <ElectronicsEngineeringUGFinland />,
      },
      {
        path: "study-abroad/finland/ug/mechanical-engineering",
        element: <MechanicalEngineeringUGFinland />,
      },
      {
        path: "study-abroad/finland/ug/engineering",
        element: <BachelorsinEngineeringFinland />,
      },
      {
        path: "study-abroad/finland/pg/engineering",
        element: <PostgraduateEngineeringFinland />,
      },

      {
        path: "study-abroad/finland/working-professionals",
        element: <ExecutiveMBAFinland />,
      },
      {
        path: "study-abroad/finland/engineering",
        element: <BachelorsinEngineeringFinland />,
      },
      {
        path: "study-abroad/finland/executive-mba",
        element: <ExecutiveMBAFinland />,
      },
      {
        path: "study-abroad/finland/hospitality-management",
        element: <HospitalityManagementFinland />,
      },
      {
        path: "study-abroad/finland/international-business",
        element: <InternationalBusinessFinland />,
      },
      {
        path: "study-abroad/finland/language-courses",
        element: <LanguageCoursesFinland />,
      },
      {
        path: "study-abroad/finland/law",
        element: <LawFinland />,
      },
      {
        path: "study-abroad/finland/mba",
        element: <MBAFinland />,
      },
      {
        path: "study-abroad/finland/biotechnology",
        element: <BiotechnologyFinland />,
      },
      {
        path: "study-abroad/finland/dentistry",
        element: <DentistryFinland />,
      },
      {
        path: "study-abroad/finland/nursing",
        element: <NursingFinland />,
      },
      {
        path: "study-abroad/finland/pharmacy",
        element: <PharmacyFinland />,
      },
      {
        path: "study-abroad/finland/physiotherapy",
        element: <PhysiotherapyFinland />,
      },
      {
        path: "study-abroad/finland/public-health",
        element: <PublicHealthFinland />,
      },
      {
        path: "study-abroad/finland/mbs",
        element: <MBSFinland />,
      },
      {
        path: "study-abroad/finland/summer-courses",
        element: <SummerCoursesFinland />,
      },
      {
        path: "study-abroad/finland/winter-courses",
        element: <WinterCoursesFinland />,
      },
      // Finland fallback/redirect routes to prevent 404s
      {
        path: "study-abroad/finland/marketing-management",
        element: <Navigate to="/courses/marketing-management?country=finland" replace />,
      },
      {
        path: "study-abroad/finland/accounting-finance",
        element: <Navigate to="/courses/accounting-finance?country=finland" replace />,
      },
      {
        path: "study-abroad/finland/hr-management",
        element: <Navigate to="/study-abroad/finland/business-management" replace />,
      },
      {
        path: "study-abroad/finland/other-courses",
        element: <Navigate to="/study-abroad/finland/business-management" replace />,
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
        path: "admin",
        loader: () => {
          if (typeof window !== "undefined") {
            window.location.replace("/admin/index.html");
          }
          return null;
        },
        element: (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <p className="text-gray-600 font-semibold text-lg">Opening EduHawk Content Manager...</p>
          </div>
        ),
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
  "/mbbs-abroad/russia",
  "/mbbs-abroad/bangladesh",
  "/mbbs-abroad/kazakhstan",
  "/mbbs-abroad/armenia",
  "/mbbs-abroad/belarus",
  "/mbbs-abroad/china",
  "/mbbs-abroad/kyrgyzstan",
  "/mbbs-abroad/egypt",
  "/mbbs-abroad/georgia",
  "/mbbs-abroad/iran",
  "/mbbs-abroad/nepal",
  "/mbbs-abroad/tajikistan",
  "/mbbs-abroad/uzbekistan",
  "/mbbs-abroad/vietnam",
  "/mbbs-abroad/italy",
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
  "/courses/computer-science",
  "/study-abroad/usa/computer-science",
  "/courses/information-technology",
  "/study-abroad/usa/information-technology",
  "/study-abroad/usa/ug/engineering",
  "/study-abroad/usa/pg/engineering",
  "/study-abroad/usa/engineering",
  "/study-abroad/usa/dentistry",
  "/study-abroad/usa/nursing",
  "/study-abroad/usa/pharmacy",
  "/study-abroad/usa/physiotherapy",
  "/study-abroad/usa/public-health",
  "/study-abroad/usa/biotechnology",
  "/study-abroad/usa/business-management",
  "/study-abroad/usa/mba",
  "/study-abroad/usa/executive-mba",
  "/study-abroad/usa/bba",
  "/study-abroad/usa/bbs",
  "/study-abroad/usa/mbs",
  "/study-abroad/usa/international-business",
  "/study-abroad/usa/marketing-management",
  "/study-abroad/usa/accounting-finance",
  "/study-abroad/usa/hospitality-management",
  "/study-abroad/usa/architecture",
  "/study-abroad/usa/law",
  "/study-abroad/usa/language-courses",
  "/study-abroad/usa/summer-courses",
  "/study-abroad/usa/winter-courses",
  "/study-abroad/usa/working-professionals",
  "/study-abroad/usa/ug/computer-engineering",
  "/study-abroad/usa/ug/mechanical-engineering",
  "/study-abroad/usa/ug/civil-engineering",
  "/study-abroad/usa/ug/electrical-engineering",
  "/study-abroad/usa/ug/electronics-communication",
  "/study-abroad/usa/ug/chemical-engineering",
  "/study-abroad/usa/ug/aerospace-engineering",
  "/study-abroad/usa/ug/biomedical-engineering",
  "/study-abroad/usa/ug/automobile-engineering",
  "/study-abroad/usa/pg/computer-engineering",
  "/study-abroad/usa/pg/mechanical-engineering",
  "/study-abroad/usa/pg/civil-engineering",
  "/study-abroad/usa/pg/electrical-engineering",
  "/study-abroad/usa/pg/electronics-communication",
  "/study-abroad/usa/pg/chemical-engineering",
  "/study-abroad/usa/pg/aerospace-engineering",
  "/study-abroad/usa/pg/biomedical-engineering",
  "/study-abroad/usa/pg/automobile-engineering",
  "/study-abroad/finland/working-professionals",
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
  "/study-abroad/working-professionals",
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
  // Finland Routes
  "/study-abroad/finland/architecture",
  "/study-abroad/finland/bba",
  "/study-abroad/finland/bbs",
  "/study-abroad/finland/business-management",
  "/study-abroad/finland/computer-science",
  "/study-abroad/finland/information-technology",
  "/study-abroad/finland/it",
  "/study-abroad/finland/pg/aerospace-engineering",
  "/study-abroad/finland/pg/automobile-engineering",
  "/study-abroad/finland/pg/biomedical-engineering",
  "/study-abroad/finland/pg/chemical-engineering",
  "/study-abroad/finland/pg/civil-engineering",
  "/study-abroad/finland/pg/computer-engineering",
  "/study-abroad/finland/pg/computer-science",
  "/study-abroad/finland/pg/electrical-engineering",
  "/study-abroad/finland/pg/electronics-communication",
  "/study-abroad/finland/pg/mechanical-engineering",
  "/study-abroad/finland/pg/engineering",
  "/study-abroad/finland/ug/aerospace-engineering",
  "/study-abroad/finland/ug/automobile-engineering",
  "/study-abroad/finland/ug/biomedical-engineering",
  "/study-abroad/finland/ug/chemical-engineering",
  "/study-abroad/finland/ug/civil-engineering",
  "/study-abroad/finland/ug/computer-engineering",
  "/study-abroad/finland/ug/computer-science",
  "/study-abroad/finland/ug/electrical-engineering",
  "/study-abroad/finland/ug/electronics-communication",
  "/study-abroad/finland/ug/mechanical-engineering",
  "/study-abroad/finland/ug/engineering",
  "/study-abroad/finland/executive-mba",
  "/study-abroad/finland/hospitality-management",
  "/study-abroad/finland/international-business",
  "/study-abroad/finland/language-courses",
  "/study-abroad/finland/law",
  "/study-abroad/finland/mba",
  "/study-abroad/finland/biotechnology",
  "/study-abroad/finland/dentistry",
  "/study-abroad/finland/nursing",
  "/study-abroad/finland/pharmacy",
  "/study-abroad/finland/physiotherapy",
  "/study-abroad/finland/public-health",
  "/study-abroad/finland/mbs",
  "/study-abroad/finland/summer-courses",
  "/study-abroad/finland/winter-courses",
  "/terms-conditions",
  "/privacy-policy",
  "/cookies-policy",
  "/landingpage",
];
