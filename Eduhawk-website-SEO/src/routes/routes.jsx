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

// Australia Routes
const NursingAustralia = lazy(() => import("../pages/Study Abroad/Australia/MBBS Abroad/NursingAbroad.jsx"));
const DentistryAustralia = lazy(() => import("../pages/Study Abroad/Australia/MBBS Abroad/DentistryAbroad.jsx"));
const PharmacyAustralia = lazy(() => import("../pages/Study Abroad/Australia/MBBS Abroad/PharmacyAbroad.jsx"));
const PhysiotherapyAustralia = lazy(() => import("../pages/Study Abroad/Australia/MBBS Abroad/PhysiotherapyAbroad.jsx"));
const PublicHealthAustralia = lazy(() => import("../pages/Study Abroad/Australia/MBBS Abroad/PublicHealth.jsx"));
const BiotechnologyAustralia = lazy(() => import("../pages/Study Abroad/Australia/MBBS Abroad/Biotechnology.jsx"));
const UndergraduateEngineeringAustralia = lazy(() => import("../pages/Study Abroad/Australia/Engineering/ug/undergraduate.jsx"));
const ComputerEngineeringUGAustralia = lazy(() => import("../pages/Study Abroad/Australia/Engineering/ug/pages/ComputerEngineering.jsx"));
const MechanicalEngineeringUGAustralia = lazy(() => import("../pages/Study Abroad/Australia/Engineering/ug/pages/MechanicalEngineering.jsx"));
const CivilEngineeringUGAustralia = lazy(() => import("../pages/Study Abroad/Australia/Engineering/ug/pages/CivilEngineering.jsx"));
const ElectricalEngineeringUGAustralia = lazy(() => import("../pages/Study Abroad/Australia/Engineering/ug/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationUGAustralia = lazy(() => import("../pages/Study Abroad/Australia/Engineering/ug/pages/ElectronicsCommunication.jsx"));
const ChemicalEngineeringUGAustralia = lazy(() => import("../pages/Study Abroad/Australia/Engineering/ug/pages/ChemicalEngineering.jsx"));
const AerospaceEngineeringUGAustralia = lazy(() => import("../pages/Study Abroad/Australia/Engineering/ug/pages/AerospaceEngineering.jsx"));
const BiomedicalEngineeringUGAustralia = lazy(() => import("../pages/Study Abroad/Australia/Engineering/ug/pages/BiomedicalEngineering.jsx"));
const AutomobileEngineeringUGAustralia = lazy(() => import("../pages/Study Abroad/Australia/Engineering/ug/pages/AutomobileEngineering.jsx"));
const PostgraduateEngineeringAustralia = lazy(() => import("../pages/Study Abroad/Australia/Engineering/pg/postgraduate.jsx"));
const ComputerEngineeringPGAustralia = lazy(() => import("../pages/Study Abroad/Australia/Engineering/pg/pages/ComputerEngineering.jsx"));
const MechanicalEngineeringPGAustralia = lazy(() => import("../pages/Study Abroad/Australia/Engineering/pg/pages/MechanicalEngineering.jsx"));
const CivilEngineeringPGAustralia = lazy(() => import("../pages/Study Abroad/Australia/Engineering/pg/pages/CivilEngineering.jsx"));
const ElectricalEngineeringPGAustralia = lazy(() => import("../pages/Study Abroad/Australia/Engineering/pg/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationPGAustralia = lazy(() => import("../pages/Study Abroad/Australia/Engineering/pg/pages/ElectronicsCommunication.jsx"));
const ChemicalEngineeringPGAustralia = lazy(() => import("../pages/Study Abroad/Australia/Engineering/pg/pages/ChemicalEngineering.jsx"));
const AerospaceEngineeringPGAustralia = lazy(() => import("../pages/Study Abroad/Australia/Engineering/pg/pages/AerospaceEngineering.jsx"));
const BiomedicalEngineeringPGAustralia = lazy(() => import("../pages/Study Abroad/Australia/Engineering/pg/pages/BiomedicalEngineering.jsx"));
const AutomobileEngineeringPGAustralia = lazy(() => import("../pages/Study Abroad/Australia/Engineering/pg/pages/AutomobileEngineering.jsx"));
const ComputerScienceAustralia = lazy(() => import("../pages/Study Abroad/Australia/ComputerScience/computer-science.jsx"));
const InformationTechnologyAustralia = lazy(() => import("../pages/Study Abroad/Australia/InformationTechnology/information-technology.jsx"));
const BusinessManagementAustralia = lazy(() => import("../pages/Study Abroad/Australia/BusinessManagement/business-management.jsx"));
const MBAAustralia = lazy(() => import("../pages/Study Abroad/Australia/MBA/mba.jsx"));
const ExecutiveMBAAustralia = lazy(() => import("../pages/Study Abroad/Australia/ExecutiveMBA/executive-mba.jsx"));
const BBAAustralia = lazy(() => import("../pages/Study Abroad/Australia/BBA/bba.jsx"));
const BBSAustralia = lazy(() => import("../pages/Study Abroad/Australia/BBS/bbs.jsx"));
const MBSAustralia = lazy(() => import("../pages/Study Abroad/Australia/MBS/mbs.jsx"));
const InternationalBusinessAustralia = lazy(() => import("../pages/Study Abroad/Australia/InternationalBusiness/international-business.jsx"));
const MarketingManagementAustralia = lazy(() => import("../pages/Study Abroad/Australia/MarketingManagement/marketing-management.jsx"));
const HospitalityManagementAustralia = lazy(() => import("../pages/Study Abroad/Australia/HospitalityManagement/hospitality-management.jsx"));
const ArchitectureAustralia = lazy(() => import("../pages/Study Abroad/Australia/Architecture/architecture.jsx"));
const LawAustralia = lazy(() => import("../pages/Study Abroad/Australia/Law/law.jsx"));
const LanguageCoursesAustralia = lazy(() => import("../pages/Study Abroad/Australia/LanguageCourses/language-courses.jsx"));
const SummerCoursesAustralia = lazy(() => import("../pages/Study Abroad/Australia/SummerCourses/summer-courses.jsx"));
const WinterCoursesAustralia = lazy(() => import("../pages/Study Abroad/Australia/WinterCourses/winter-courses.jsx"));

// Italy Routes
const DentistryAbroadItaly = lazy(() => import("../pages/Study Abroad/Italy/MBBS Abroad/DentistryAbroad.jsx"));
const NursingAbroadItaly = lazy(() => import("../pages/Study Abroad/Italy/MBBS Abroad/NursingAbroad.jsx"));
const PharmacyAbroadItaly = lazy(() => import("../pages/Study Abroad/Italy/MBBS Abroad/PharmacyAbroad.jsx"));
const PhysiotherapyAbroadItaly = lazy(() => import("../pages/Study Abroad/Italy/MBBS Abroad/PhysiotherapyAbroad.jsx"));
const PublicHealthItaly = lazy(() => import("../pages/Study Abroad/Italy/MBBS Abroad/PublicHealth.jsx"));
const BiotechnologyItaly = lazy(() => import("../pages/Study Abroad/Italy/MBBS Abroad/Biotechnology.jsx"));
const ComputerScienceItaly = lazy(() => import("../pages/Study Abroad/Italy/ComputerScience/computer-science.jsx"));
const InformationTechnologyItaly = lazy(() => import("../pages/Study Abroad/Italy/InformationTechnology/information-technology.jsx"));
const UndergraduateEngineeringItaly = lazy(() => import("../pages/Study Abroad/Italy/Engineering/ug/undergraduate.jsx"));
const ComputerEngineeringUGItaly = lazy(() => import("../pages/Study Abroad/Italy/Engineering/ug/pages/ComputerEngineering.jsx"));
const MechanicalEngineeringUGItaly = lazy(() => import("../pages/Study Abroad/Italy/Engineering/ug/pages/MechanicalEngineering.jsx"));
const CivilEngineeringUGItaly = lazy(() => import("../pages/Study Abroad/Italy/Engineering/ug/pages/CivilEngineering.jsx"));
const ElectricalEngineeringUGItaly = lazy(() => import("../pages/Study Abroad/Italy/Engineering/ug/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationUGItaly = lazy(() => import("../pages/Study Abroad/Italy/Engineering/ug/pages/ElectronicsCommunication.jsx"));
const ChemicalEngineeringUGItaly = lazy(() => import("../pages/Study Abroad/Italy/Engineering/ug/pages/ChemicalEngineering.jsx"));
const AerospaceEngineeringUGItaly = lazy(() => import("../pages/Study Abroad/Italy/Engineering/ug/pages/AerospaceEngineering.jsx"));
const BiomedicalEngineeringUGItaly = lazy(() => import("../pages/Study Abroad/Italy/Engineering/ug/pages/BiomedicalEngineering.jsx"));
const AutomobileEngineeringUGItaly = lazy(() => import("../pages/Study Abroad/Italy/Engineering/ug/pages/AutomobileEngineering.jsx"));
const PostgraduateEngineeringItaly = lazy(() => import("../pages/Study Abroad/Italy/Engineering/pg/postgraduate.jsx"));
const ComputerEngineeringPGItaly = lazy(() => import("../pages/Study Abroad/Italy/Engineering/pg/pages/ComputerEngineering.jsx"));
const MechanicalEngineeringPGItaly = lazy(() => import("../pages/Study Abroad/Italy/Engineering/pg/pages/MechanicalEngineering.jsx"));
const CivilEngineeringPGItaly = lazy(() => import("../pages/Study Abroad/Italy/Engineering/pg/pages/CivilEngineering.jsx"));
const ElectricalEngineeringPGItaly = lazy(() => import("../pages/Study Abroad/Italy/Engineering/pg/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationPGItaly = lazy(() => import("../pages/Study Abroad/Italy/Engineering/pg/pages/ElectronicsCommunication.jsx"));
const ChemicalEngineeringPGItaly = lazy(() => import("../pages/Study Abroad/Italy/Engineering/pg/pages/ChemicalEngineering.jsx"));
const AerospaceEngineeringPGItaly = lazy(() => import("../pages/Study Abroad/Italy/Engineering/pg/pages/AerospaceEngineering.jsx"));
const BiomedicalEngineeringPGItaly = lazy(() => import("../pages/Study Abroad/Italy/Engineering/pg/pages/BiomedicalEngineering.jsx"));
const AutomobileEngineeringPGItaly = lazy(() => import("../pages/Study Abroad/Italy/Engineering/pg/pages/AutomobileEngineering.jsx"));
const BusinessManagementItaly = lazy(() => import("../pages/Study Abroad/Italy/BusinessManagement/business-management.jsx"));
const MBAItaly = lazy(() => import("../pages/Study Abroad/Italy/MBA/mba.jsx"));
const ExecutiveMBAItaly = lazy(() => import("../pages/Study Abroad/Italy/ExecutiveMBA/executive-mba.jsx"));
const BBAItaly = lazy(() => import("../pages/Study Abroad/Italy/BBA/bba.jsx"));
const BBSItaly = lazy(() => import("../pages/Study Abroad/Italy/BBS/bbs.jsx"));
const MBSItaly = lazy(() => import("../pages/Study Abroad/Italy/MBS/mbs.jsx"));
const InternationalBusinessItaly = lazy(() => import("../pages/Study Abroad/Italy/InternationalBusiness/international-business.jsx"));
const HospitalityManagementItaly = lazy(() => import("../pages/Study Abroad/Italy/HospitalityManagement/hospitality-management.jsx"));
const ArchitectureItaly = lazy(() => import("../pages/Study Abroad/Italy/Architecture/architecture.jsx"));
const LawItaly = lazy(() => import("../pages/Study Abroad/Italy/Law/law.jsx"));
const LanguageCoursesItaly = lazy(() => import("../pages/Study Abroad/Italy/LanguageCourses/language-courses.jsx"));
const SummerCoursesItaly = lazy(() => import("../pages/Study Abroad/Italy/SummerCourses/summer-courses.jsx"));
const WinterCoursesItaly = lazy(() => import("../pages/Study Abroad/Italy/WinterCourses/winter-courses.jsx"));

// Canada Routes
const DentistryAbroadCanada = lazy(() => import("../pages/Study Abroad/Canada/MBBS Abroad/DentistryAbroad.jsx"));
const NursingAbroadCanada = lazy(() => import("../pages/Study Abroad/Canada/MBBS Abroad/NursingAbroad.jsx"));
const PharmacyAbroadCanada = lazy(() => import("../pages/Study Abroad/Canada/MBBS Abroad/PharmacyAbroad.jsx"));
const PhysiotherapyAbroadCanada = lazy(() => import("../pages/Study Abroad/Canada/MBBS Abroad/PhysiotherapyAbroad.jsx"));
const PublicHealthCanada = lazy(() => import("../pages/Study Abroad/Canada/MBBS Abroad/PublicHealth.jsx"));
const BiotechnologyCanada = lazy(() => import("../pages/Study Abroad/Canada/MBBS Abroad/Biotechnology.jsx"));
const ComputerScienceCanada = lazy(() => import("../pages/Study Abroad/Canada/ComputerScience/computer-science.jsx"));
const InformationTechnologyCanada = lazy(() => import("../pages/Study Abroad/Canada/InformationTechnology/information-technology.jsx"));
const UndergraduateEngineeringCanada = lazy(() => import("../pages/Study Abroad/Canada/Engineering/ug/undergraduate.jsx"));
const ComputerEngineeringUGCanada = lazy(() => import("../pages/Study Abroad/Canada/Engineering/ug/pages/ComputerEngineering.jsx"));
const MechanicalEngineeringUGCanada = lazy(() => import("../pages/Study Abroad/Canada/Engineering/ug/pages/MechanicalEngineering.jsx"));
const CivilEngineeringUGCanada = lazy(() => import("../pages/Study Abroad/Canada/Engineering/ug/pages/CivilEngineering.jsx"));
const ElectricalEngineeringUGCanada = lazy(() => import("../pages/Study Abroad/Canada/Engineering/ug/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationUGCanada = lazy(() => import("../pages/Study Abroad/Canada/Engineering/ug/pages/ElectronicsCommunication.jsx"));
const ChemicalEngineeringUGCanada = lazy(() => import("../pages/Study Abroad/Canada/Engineering/ug/pages/ChemicalEngineering.jsx"));
const AerospaceEngineeringUGCanada = lazy(() => import("../pages/Study Abroad/Canada/Engineering/ug/pages/AerospaceEngineering.jsx"));
const BiomedicalEngineeringUGCanada = lazy(() => import("../pages/Study Abroad/Canada/Engineering/ug/pages/BiomedicalEngineering.jsx"));
const AutomobileEngineeringUGCanada = lazy(() => import("../pages/Study Abroad/Canada/Engineering/ug/pages/AutomobileEngineering.jsx"));
const PostgraduateEngineeringCanada = lazy(() => import("../pages/Study Abroad/Canada/Engineering/pg/postgraduate.jsx"));
const ComputerEngineeringPGCanada = lazy(() => import("../pages/Study Abroad/Canada/Engineering/pg/pages/ComputerEngineering.jsx"));
const MechanicalEngineeringPGCanada = lazy(() => import("../pages/Study Abroad/Canada/Engineering/pg/pages/MechanicalEngineering.jsx"));
const CivilEngineeringPGCanada = lazy(() => import("../pages/Study Abroad/Canada/Engineering/pg/pages/CivilEngineering.jsx"));
const ElectricalEngineeringPGCanada = lazy(() => import("../pages/Study Abroad/Canada/Engineering/pg/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationPGCanada = lazy(() => import("../pages/Study Abroad/Canada/Engineering/pg/pages/ElectronicsCommunication.jsx"));
const ChemicalEngineeringPGCanada = lazy(() => import("../pages/Study Abroad/Canada/Engineering/pg/pages/ChemicalEngineering.jsx"));
const AerospaceEngineeringPGCanada = lazy(() => import("../pages/Study Abroad/Canada/Engineering/pg/pages/AerospaceEngineering.jsx"));
const BiomedicalEngineeringPGCanada = lazy(() => import("../pages/Study Abroad/Canada/Engineering/pg/pages/BiomedicalEngineering.jsx"));
const AutomobileEngineeringPGCanada = lazy(() => import("../pages/Study Abroad/Canada/Engineering/pg/pages/AutomobileEngineering.jsx"));
const BusinessManagementCanada = lazy(() => import("../pages/Study Abroad/Canada/BusinessManagement/business-management.jsx"));
const MBACanada = lazy(() => import("../pages/Study Abroad/Canada/MBA/mba.jsx"));
const ExecutiveMBACanada = lazy(() => import("../pages/Study Abroad/Canada/ExecutiveMBA/executive-mba.jsx"));
const BBACanada = lazy(() => import("../pages/Study Abroad/Canada/BBA/bba.jsx"));
const BBSCanada = lazy(() => import("../pages/Study Abroad/Canada/BBS/bbs.jsx"));
const MBSCanada = lazy(() => import("../pages/Study Abroad/Canada/MBS/mbs.jsx"));
const InternationalBusinessCanada = lazy(() => import("../pages/Study Abroad/Canada/InternationalBusiness/international-business.jsx"));
const MarketingManagementCanada = lazy(() => import("../pages/Study Abroad/Canada/MarketingManagement/marketing-management.jsx"));
const HospitalityManagementCanada = lazy(() => import("../pages/Study Abroad/Canada/HospitalityManagement/hospitality-management.jsx"));
const ArchitectureCanada = lazy(() => import("../pages/Study Abroad/Canada/Architecture/architecture.jsx"));
const LawCanada = lazy(() => import("../pages/Study Abroad/Canada/Law/law.jsx"));
const LanguageCoursesCanada = lazy(() => import("../pages/Study Abroad/Canada/LanguageCourses/language-courses.jsx"));
const SummerCoursesCanada = lazy(() => import("../pages/Study Abroad/Canada/SummerCourses/summer-courses.jsx"));
const WinterCoursesCanada = lazy(() => import("../pages/Study Abroad/Canada/WinterCourses/winter-courses.jsx"));

// Spain Routes
const DentistryAbroadSpain = lazy(() => import("../pages/Study Abroad/Spain/MBBS Abroad/DentistryAbroad.jsx"));
const NursingAbroadSpain = lazy(() => import("../pages/Study Abroad/Spain/MBBS Abroad/NursingAbroad.jsx"));
const PharmacyAbroadSpain = lazy(() => import("../pages/Study Abroad/Spain/MBBS Abroad/PharmacyAbroad.jsx"));
const PhysiotherapyAbroadSpain = lazy(() => import("../pages/Study Abroad/Spain/MBBS Abroad/PhysiotherapyAbroad.jsx"));
const PublicHealthSpain = lazy(() => import("../pages/Study Abroad/Spain/MBBS Abroad/PublicHealth.jsx"));
const BiotechnologySpain = lazy(() => import("../pages/Study Abroad/Spain/MBBS Abroad/Biotechnology.jsx"));
const ComputerScienceSpain = lazy(() => import("../pages/Study Abroad/Spain/ComputerScience/computer-science.jsx"));
const InformationTechnologySpain = lazy(() => import("../pages/Study Abroad/Spain/InformationTechnology/information-technology.jsx"));
const UndergraduateEngineeringSpain = lazy(() => import("../pages/Study Abroad/Spain/Engineering/ug/undergraduate.jsx"));
const ComputerEngineeringUGSpain = lazy(() => import("../pages/Study Abroad/Spain/Engineering/ug/pages/ComputerEngineering.jsx"));
const MechanicalEngineeringUGSpain = lazy(() => import("../pages/Study Abroad/Spain/Engineering/ug/pages/MechanicalEngineering.jsx"));
const CivilEngineeringUGSpain = lazy(() => import("../pages/Study Abroad/Spain/Engineering/ug/pages/CivilEngineering.jsx"));
const ElectricalEngineeringUGSpain = lazy(() => import("../pages/Study Abroad/Spain/Engineering/ug/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationUGSpain = lazy(() => import("../pages/Study Abroad/Spain/Engineering/ug/pages/ElectronicsCommunication.jsx"));
const ChemicalEngineeringUGSpain = lazy(() => import("../pages/Study Abroad/Spain/Engineering/ug/pages/ChemicalEngineering.jsx"));
const AerospaceEngineeringUGSpain = lazy(() => import("../pages/Study Abroad/Spain/Engineering/ug/pages/AerospaceEngineering.jsx"));
const BiomedicalEngineeringUGSpain = lazy(() => import("../pages/Study Abroad/Spain/Engineering/ug/pages/BiomedicalEngineering.jsx"));
const AutomobileEngineeringUGSpain = lazy(() => import("../pages/Study Abroad/Spain/Engineering/ug/pages/AutomobileEngineering.jsx"));
const PostgraduateEngineeringSpain = lazy(() => import("../pages/Study Abroad/Spain/Engineering/pg/postgraduate.jsx"));
const ComputerEngineeringPGSpain = lazy(() => import("../pages/Study Abroad/Spain/Engineering/pg/pages/ComputerEngineering.jsx"));
const MechanicalEngineeringPGSpain = lazy(() => import("../pages/Study Abroad/Spain/Engineering/pg/pages/MechanicalEngineering.jsx"));
const CivilEngineeringPGSpain = lazy(() => import("../pages/Study Abroad/Spain/Engineering/pg/pages/CivilEngineering.jsx"));
const ElectricalEngineeringPGSpain = lazy(() => import("../pages/Study Abroad/Spain/Engineering/pg/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationPGSpain = lazy(() => import("../pages/Study Abroad/Spain/Engineering/pg/pages/ElectronicsCommunication.jsx"));
const ChemicalEngineeringPGSpain = lazy(() => import("../pages/Study Abroad/Spain/Engineering/pg/pages/ChemicalEngineering.jsx"));
const AerospaceEngineeringPGSpain = lazy(() => import("../pages/Study Abroad/Spain/Engineering/pg/pages/AerospaceEngineering.jsx"));
const BiomedicalEngineeringPGSpain = lazy(() => import("../pages/Study Abroad/Spain/Engineering/pg/pages/BiomedicalEngineering.jsx"));
const AutomobileEngineeringPGSpain = lazy(() => import("../pages/Study Abroad/Spain/Engineering/pg/pages/AutomobileEngineering.jsx"));
const BusinessManagementSpain = lazy(() => import("../pages/Study Abroad/Spain/BusinessManagement/business-management.jsx"));
const MBASpain = lazy(() => import("../pages/Study Abroad/Spain/MBA/mba.jsx"));
const ExecutiveMBASpain = lazy(() => import("../pages/Study Abroad/Spain/ExecutiveMBA/executive-mba.jsx"));
const BBASpain = lazy(() => import("../pages/Study Abroad/Spain/BBA/bba.jsx"));
const BBSSpain = lazy(() => import("../pages/Study Abroad/Spain/BBS/bbs.jsx"));
const MBSSpain = lazy(() => import("../pages/Study Abroad/Spain/MBS/mbs.jsx"));
const InternationalBusinessSpain = lazy(() => import("../pages/Study Abroad/Spain/InternationalBusiness/international-business.jsx"));
const HospitalityManagementSpain = lazy(() => import("../pages/Study Abroad/Spain/HospitalityManagement/hospitality-management.jsx"));
const ArchitectureSpain = lazy(() => import("../pages/Study Abroad/Spain/Architecture/architecture.jsx"));
const LawSpain = lazy(() => import("../pages/Study Abroad/Spain/Law/law.jsx"));
const LanguageCoursesSpain = lazy(() => import("../pages/Study Abroad/Spain/LanguageCourses/language-courses.jsx"));
const SummerCoursesSpain = lazy(() => import("../pages/Study Abroad/Spain/SummerCourses/summer-courses.jsx"));
const WinterCoursesSpain = lazy(() => import("../pages/Study Abroad/Spain/WinterCourses/winter-courses.jsx"));

// UK Routes
const DentistryAbroadUK = lazy(() => import("../pages/Study Abroad/UK/MBBS Abroad/DentistryAbroad.jsx"));
const NursingAbroadUK = lazy(() => import("../pages/Study Abroad/UK/MBBS Abroad/NursingAbroad.jsx"));
const PharmacyAbroadUK = lazy(() => import("../pages/Study Abroad/UK/MBBS Abroad/PharmacyAbroad.jsx"));
const PhysiotherapyAbroadUK = lazy(() => import("../pages/Study Abroad/UK/MBBS Abroad/PhysiotherapyAbroad.jsx"));
const PublicHealthUK = lazy(() => import("../pages/Study Abroad/UK/MBBS Abroad/PublicHealth.jsx"));
const BiotechnologyUK = lazy(() => import("../pages/Study Abroad/UK/MBBS Abroad/Biotechnology.jsx"));
const ComputerScienceUK = lazy(() => import("../pages/Study Abroad/UK/ComputerScience/computer-science.jsx"));
const InformationTechnologyUK = lazy(() => import("../pages/Study Abroad/UK/InformationTechnology/information-technology.jsx"));
const UndergraduateEngineeringUK = lazy(() => import("../pages/Study Abroad/UK/Engineering/ug/undergraduate.jsx"));
const ComputerEngineeringUGUK = lazy(() => import("../pages/Study Abroad/UK/Engineering/ug/pages/ComputerEngineering.jsx"));
const MechanicalEngineeringUGUK = lazy(() => import("../pages/Study Abroad/UK/Engineering/ug/pages/MechanicalEngineering.jsx"));
const CivilEngineeringUGUK = lazy(() => import("../pages/Study Abroad/UK/Engineering/ug/pages/CivilEngineering.jsx"));
const ElectricalEngineeringUGUK = lazy(() => import("../pages/Study Abroad/UK/Engineering/ug/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationUGUK = lazy(() => import("../pages/Study Abroad/UK/Engineering/ug/pages/ElectronicsCommunication.jsx"));
const ChemicalEngineeringUGUK = lazy(() => import("../pages/Study Abroad/UK/Engineering/ug/pages/ChemicalEngineering.jsx"));
const AerospaceEngineeringUGUK = lazy(() => import("../pages/Study Abroad/UK/Engineering/ug/pages/AerospaceEngineering.jsx"));
const BiomedicalEngineeringUGUK = lazy(() => import("../pages/Study Abroad/UK/Engineering/ug/pages/BiomedicalEngineering.jsx"));
const AutomobileEngineeringUGUK = lazy(() => import("../pages/Study Abroad/UK/Engineering/ug/pages/AutomobileEngineering.jsx"));
const PostgraduateEngineeringUK = lazy(() => import("../pages/Study Abroad/UK/Engineering/pg/postgraduate.jsx"));
const ComputerEngineeringPGUK = lazy(() => import("../pages/Study Abroad/UK/Engineering/pg/pages/ComputerEngineering.jsx"));
const MechanicalEngineeringPGUK = lazy(() => import("../pages/Study Abroad/UK/Engineering/pg/pages/MechanicalEngineering.jsx"));
const CivilEngineeringPGUK = lazy(() => import("../pages/Study Abroad/UK/Engineering/pg/pages/CivilEngineering.jsx"));
const ElectricalEngineeringPGUK = lazy(() => import("../pages/Study Abroad/UK/Engineering/pg/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationPGUK = lazy(() => import("../pages/Study Abroad/UK/Engineering/pg/pages/ElectronicsCommunication.jsx"));
const ChemicalEngineeringPGUK = lazy(() => import("../pages/Study Abroad/UK/Engineering/pg/pages/ChemicalEngineering.jsx"));
const AerospaceEngineeringPGUK = lazy(() => import("../pages/Study Abroad/UK/Engineering/pg/pages/AerospaceEngineering.jsx"));
const BiomedicalEngineeringPGUK = lazy(() => import("../pages/Study Abroad/UK/Engineering/pg/pages/BiomedicalEngineering.jsx"));
const AutomobileEngineeringPGUK = lazy(() => import("../pages/Study Abroad/UK/Engineering/pg/pages/AutomobileEngineering.jsx"));
const BusinessManagementUK = lazy(() => import("../pages/Study Abroad/UK/BusinessManagement/business-management.jsx"));
const MBAUK = lazy(() => import("../pages/Study Abroad/UK/MBA/mba.jsx"));
const ExecutiveMBAUK = lazy(() => import("../pages/Study Abroad/UK/ExecutiveMBA/executive-mba.jsx"));
const BBAUK = lazy(() => import("../pages/Study Abroad/UK/BBA/bba.jsx"));
const BBSUK = lazy(() => import("../pages/Study Abroad/UK/BBS/bbs.jsx"));
const MBSUK = lazy(() => import("../pages/Study Abroad/UK/MBS/mbs.jsx"));
const InternationalBusinessUK = lazy(() => import("../pages/Study Abroad/UK/InternationalBusiness/international-business.jsx"));
const MarketingManagementUK = lazy(() => import("../pages/Study Abroad/UK/MarketingManagement/marketing-management.jsx"));
const HospitalityManagementUK = lazy(() => import("../pages/Study Abroad/UK/HospitalityManagement/hospitality-management.jsx"));
const ArchitectureUK = lazy(() => import("../pages/Study Abroad/UK/Architecture/architecture.jsx"));
const LawUK = lazy(() => import("../pages/Study Abroad/UK/Law/law.jsx"));
const LanguageCoursesUK = lazy(() => import("../pages/Study Abroad/UK/LanguageCourses/language-courses.jsx"));
const SummerCoursesUK = lazy(() => import("../pages/Study Abroad/UK/SummerCourses/summer-courses.jsx"));
const WinterCoursesUK = lazy(() => import("../pages/Study Abroad/UK/WinterCourses/winter-courses.jsx"));

// Ireland Routes
const DentistryAbroadIreland = lazy(() => import("../pages/Study Abroad/Ireland/MBBS Abroad/DentistryAbroad.jsx"));
const NursingAbroadIreland = lazy(() => import("../pages/Study Abroad/Ireland/MBBS Abroad/NursingAbroad.jsx"));
const PharmacyAbroadIreland = lazy(() => import("../pages/Study Abroad/Ireland/MBBS Abroad/PharmacyAbroad.jsx"));
const PhysiotherapyAbroadIreland = lazy(() => import("../pages/Study Abroad/Ireland/MBBS Abroad/PhysiotherapyAbroad.jsx"));
const PublicHealthIreland = lazy(() => import("../pages/Study Abroad/Ireland/MBBS Abroad/PublicHealth.jsx"));
const BiotechnologyIreland = lazy(() => import("../pages/Study Abroad/Ireland/MBBS Abroad/Biotechnology.jsx"));
const UndergraduateEngineeringIreland = lazy(() => import("../pages/Study Abroad/Ireland/Engineering/ug/undergraduate.jsx"));
const ComputerEngineeringUGIreland = lazy(() => import("../pages/Study Abroad/Ireland/Engineering/ug/pages/ComputerEngineering.jsx"));
const CivilEngineeringUGIreland = lazy(() => import("../pages/Study Abroad/Ireland/Engineering/ug/pages/CivilEngineering.jsx"));
const MechanicalEngineeringUGIreland = lazy(() => import("../pages/Study Abroad/Ireland/Engineering/ug/pages/MechanicalEngineering.jsx"));
const ComputerScienceIreland = lazy(() => import("../pages/Study Abroad/Ireland/ComputerScience/computer-science.jsx"));
const InformationTechnologyIreland = lazy(() => import("../pages/Study Abroad/Ireland/InformationTechnology/information-technology.jsx"));
const ElectricalEngineeringUGIreland = lazy(() => import("../pages/Study Abroad/Ireland/Engineering/ug/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationUGIreland = lazy(() => import("../pages/Study Abroad/Ireland/Engineering/ug/pages/ElectronicsCommunication.jsx"));
const ChemicalEngineeringUGIreland = lazy(() => import("../pages/Study Abroad/Ireland/Engineering/ug/pages/ChemicalEngineering.jsx"));
const AerospaceEngineeringUGIreland = lazy(() => import("../pages/Study Abroad/Ireland/Engineering/ug/pages/AerospaceEngineering.jsx"));
const BiomedicalEngineeringUGIreland = lazy(() => import("../pages/Study Abroad/Ireland/Engineering/ug/pages/BiomedicalEngineering.jsx"));
const AutomobileEngineeringUGIreland = lazy(() => import("../pages/Study Abroad/Ireland/Engineering/ug/pages/AutomobileEngineering.jsx"));
const PostgraduateEngineeringIreland = lazy(() => import("../pages/Study Abroad/Ireland/Engineering/pg/postgraduate.jsx"));
const ComputerEngineeringPGIreland = lazy(() => import("../pages/Study Abroad/Ireland/Engineering/pg/pages/ComputerEngineering.jsx"));
const MechanicalEngineeringPGIreland = lazy(() => import("../pages/Study Abroad/Ireland/Engineering/pg/pages/MechanicalEngineering.jsx"));
const CivilEngineeringPGIreland = lazy(() => import("../pages/Study Abroad/Ireland/Engineering/pg/pages/CivilEngineering.jsx"));
const ElectricalEngineeringPGIreland = lazy(() => import("../pages/Study Abroad/Ireland/Engineering/pg/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationPGIreland = lazy(() => import("../pages/Study Abroad/Ireland/Engineering/pg/pages/ElectronicsCommunication.jsx"));
const ChemicalEngineeringPGIreland = lazy(() => import("../pages/Study Abroad/Ireland/Engineering/pg/pages/ChemicalEngineering.jsx"));
const AerospaceEngineeringPGIreland = lazy(() => import("../pages/Study Abroad/Ireland/Engineering/pg/pages/AerospaceEngineering.jsx"));
const BiomedicalEngineeringPGIreland = lazy(() => import("../pages/Study Abroad/Ireland/Engineering/pg/pages/BiomedicalEngineering.jsx"));
const AutomobileEngineeringPGIreland = lazy(() => import("../pages/Study Abroad/Ireland/Engineering/pg/pages/AutomobileEngineering.jsx"));
const BusinessManagementIreland = lazy(() => import("../pages/Study Abroad/Ireland/BusinessManagement/business-management.jsx"));
const MBAIreland = lazy(() => import("../pages/Study Abroad/Ireland/MBA/mba.jsx"));
const ExecutiveMBAIreland = lazy(() => import("../pages/Study Abroad/Ireland/ExecutiveMBA/executive-mba.jsx"));
const BBAIreland = lazy(() => import("../pages/Study Abroad/Ireland/BBA/bba.jsx"));
const BBSIreland = lazy(() => import("../pages/Study Abroad/Ireland/BBS/bbs.jsx"));
const MBSIreland = lazy(() => import("../pages/Study Abroad/Ireland/MBS/mbs.jsx"));
const InternationalBusinessIreland = lazy(() => import("../pages/Study Abroad/Ireland/InternationalBusiness/international-business.jsx"));
const MarketingManagementIreland = lazy(() => import("../pages/Study Abroad/Ireland/MarketingManagement/marketing-management.jsx"));
const HospitalityManagementIreland = lazy(() => import("../pages/Study Abroad/Ireland/HospitalityManagement/hospitality-management.jsx"));
const ArchitectureIreland = lazy(() => import("../pages/Study Abroad/Ireland/Architecture/architecture.jsx"));
const LawIreland = lazy(() => import("../pages/Study Abroad/Ireland/Law/law.jsx"));
const LanguageCoursesIreland = lazy(() => import("../pages/Study Abroad/Ireland/LanguageCourses/language-courses.jsx"));
const SummerCoursesIreland = lazy(() => import("../pages/Study Abroad/Ireland/SummerCourses/summer-courses.jsx"));
const WinterCoursesIreland = lazy(() => import("../pages/Study Abroad/Ireland/WinterCourses/winter-courses.jsx"));

// Study Abroad - France (42 Courses)
const DentistryAbroadFrance = lazy(() => import("../pages/Study Abroad/France/MBBS Abroad/DentistryAbroad.jsx"));
const NursingAbroadFrance = lazy(() => import("../pages/Study Abroad/France/MBBS Abroad/NursingAbroad.jsx"));
const PharmacyAbroadFrance = lazy(() => import("../pages/Study Abroad/France/MBBS Abroad/PharmacyAbroad.jsx"));
const PhysiotherapyAbroadFrance = lazy(() => import("../pages/Study Abroad/France/MBBS Abroad/PhysiotherapyAbroad.jsx"));
const PublicHealthFrance = lazy(() => import("../pages/Study Abroad/France/MBBS Abroad/PublicHealth.jsx"));
const BiotechnologyFrance = lazy(() => import("../pages/Study Abroad/France/MBBS Abroad/Biotechnology.jsx"));
const UndergraduateEngineeringFrance = lazy(() => import("../pages/Study Abroad/France/Engineering/ug/undergraduate.jsx"));
const ComputerEngineeringUGFrance = lazy(() => import("../pages/Study Abroad/France/Engineering/ug/pages/ComputerEngineering.jsx"));
const CivilEngineeringUGFrance = lazy(() => import("../pages/Study Abroad/France/Engineering/ug/pages/CivilEngineering.jsx"));
const MechanicalEngineeringUGFrance = lazy(() => import("../pages/Study Abroad/France/Engineering/ug/pages/MechanicalEngineering.jsx"));
const ComputerScienceFrance = lazy(() => import("../pages/Study Abroad/France/ComputerScience/computer-science.jsx"));
const InformationTechnologyFrance = lazy(() => import("../pages/Study Abroad/France/InformationTechnology/information-technology.jsx"));
const ElectricalEngineeringUGFrance = lazy(() => import("../pages/Study Abroad/France/Engineering/ug/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationUGFrance = lazy(() => import("../pages/Study Abroad/France/Engineering/ug/pages/ElectronicsCommunication.jsx"));
const ChemicalEngineeringUGFrance = lazy(() => import("../pages/Study Abroad/France/Engineering/ug/pages/ChemicalEngineering.jsx"));
const AerospaceEngineeringUGFrance = lazy(() => import("../pages/Study Abroad/France/Engineering/ug/pages/AerospaceEngineering.jsx"));
const BiomedicalEngineeringUGFrance = lazy(() => import("../pages/Study Abroad/France/Engineering/ug/pages/BiomedicalEngineering.jsx"));
const AutomobileEngineeringUGFrance = lazy(() => import("../pages/Study Abroad/France/Engineering/ug/pages/AutomobileEngineering.jsx"));
const PostgraduateEngineeringFrance = lazy(() => import("../pages/Study Abroad/France/Engineering/pg/postgraduate.jsx"));
const ComputerEngineeringPGFrance = lazy(() => import("../pages/Study Abroad/France/Engineering/pg/pages/ComputerEngineering.jsx"));
const MechanicalEngineeringPGFrance = lazy(() => import("../pages/Study Abroad/France/Engineering/pg/pages/MechanicalEngineering.jsx"));
const CivilEngineeringPGFrance = lazy(() => import("../pages/Study Abroad/France/Engineering/pg/pages/CivilEngineering.jsx"));
const ElectricalEngineeringPGFrance = lazy(() => import("../pages/Study Abroad/France/Engineering/pg/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationPGFrance = lazy(() => import("../pages/Study Abroad/France/Engineering/pg/pages/ElectronicsCommunication.jsx"));
const ChemicalEngineeringPGFrance = lazy(() => import("../pages/Study Abroad/France/Engineering/pg/pages/ChemicalEngineering.jsx"));
const AerospaceEngineeringPGFrance = lazy(() => import("../pages/Study Abroad/France/Engineering/pg/pages/AerospaceEngineering.jsx"));
const BiomedicalEngineeringPGFrance = lazy(() => import("../pages/Study Abroad/France/Engineering/pg/pages/BiomedicalEngineering.jsx"));
const AutomobileEngineeringPGFrance = lazy(() => import("../pages/Study Abroad/France/Engineering/pg/pages/AutomobileEngineering.jsx"));
const BusinessManagementFrance = lazy(() => import("../pages/Study Abroad/France/BusinessManagement/business-management.jsx"));
const MBAFrance = lazy(() => import("../pages/Study Abroad/France/MBA/mba.jsx"));
const ExecutiveMBAFrance = lazy(() => import("../pages/Study Abroad/France/ExecutiveMBA/executive-mba.jsx"));
const BBAFrance = lazy(() => import("../pages/Study Abroad/France/BBA/bba.jsx"));
const BBSFrance = lazy(() => import("../pages/Study Abroad/France/BBS/bbs.jsx"));
const MBSFrance = lazy(() => import("../pages/Study Abroad/France/MBS/mbs.jsx"));
const InternationalBusinessFrance = lazy(() => import("../pages/Study Abroad/France/InternationalBusiness/international-business.jsx"));
const MarketingManagementFrance = lazy(() => import("../pages/Study Abroad/France/MarketingManagement/marketing-management.jsx"));
const HospitalityManagementFrance = lazy(() => import("../pages/Study Abroad/France/HospitalityManagement/hospitality-management.jsx"));
const ArchitectureFrance = lazy(() => import("../pages/Study Abroad/France/Architecture/architecture.jsx"));
const LawFrance = lazy(() => import("../pages/Study Abroad/France/Law/law.jsx"));
const LanguageCoursesFrance = lazy(() => import("../pages/Study Abroad/France/LanguageCourses/language-courses.jsx"));
const SummerCoursesFrance = lazy(() => import("../pages/Study Abroad/France/SummerCourses/summer-courses.jsx"));
const WinterCoursesFrance = lazy(() => import("../pages/Study Abroad/France/WinterCourses/winter-courses.jsx"));
// Study Abroad - Germany (42 Courses)
const DentistryAbroadGermany = lazy(() => import("../pages/Study Abroad/Germany/MBBS Abroad/DentistryAbroad.jsx"));
const NursingAbroadGermany = lazy(() => import("../pages/Study Abroad/Germany/MBBS Abroad/NursingAbroad.jsx"));
const PharmacyAbroadGermany = lazy(() => import("../pages/Study Abroad/Germany/MBBS Abroad/PharmacyAbroad.jsx"));
const PhysiotherapyAbroadGermany = lazy(() => import("../pages/Study Abroad/Germany/MBBS Abroad/PhysiotherapyAbroad.jsx"));
const PublicHealthGermany = lazy(() => import("../pages/Study Abroad/Germany/MBBS Abroad/PublicHealth.jsx"));
const BiotechnologyGermany = lazy(() => import("../pages/Study Abroad/Germany/MBBS Abroad/Biotechnology.jsx"));
const UndergraduateEngineeringGermany = lazy(() => import("../pages/Study Abroad/Germany/Engineering/ug/undergraduate.jsx"));
const ComputerEngineeringUGGermany = lazy(() => import("../pages/Study Abroad/Germany/Engineering/ug/pages/ComputerEngineering.jsx"));
const CivilEngineeringUGGermany = lazy(() => import("../pages/Study Abroad/Germany/Engineering/ug/pages/CivilEngineering.jsx"));
const MechanicalEngineeringUGGermany = lazy(() => import("../pages/Study Abroad/Germany/Engineering/ug/pages/MechanicalEngineering.jsx"));
const ComputerScienceGermany = lazy(() => import("../pages/Study Abroad/Germany/ComputerScience/ComputerScience.jsx"));
const InformationTechnologyGermany = lazy(() => import("../pages/Study Abroad/Germany/InformationTechnology/InformationTechnology.jsx"));
const ElectricalEngineeringUGGermany = lazy(() => import("../pages/Study Abroad/Germany/Engineering/ug/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationUGGermany = lazy(() => import("../pages/Study Abroad/Germany/Engineering/ug/pages/ElectronicsCommunication.jsx"));
const ChemicalEngineeringUGGermany = lazy(() => import("../pages/Study Abroad/Germany/Engineering/ug/pages/ChemicalEngineering.jsx"));
const AerospaceEngineeringUGGermany = lazy(() => import("../pages/Study Abroad/Germany/Engineering/ug/pages/AerospaceEngineering.jsx"));
const BiomedicalEngineeringUGGermany = lazy(() => import("../pages/Study Abroad/Germany/Engineering/ug/pages/BiomedicalEngineering.jsx"));
const AutomobileEngineeringUGGermany = lazy(() => import("../pages/Study Abroad/Germany/Engineering/ug/pages/AutomobileEngineering.jsx"));
const PostgraduateEngineeringGermany = lazy(() => import("../pages/Study Abroad/Germany/Engineering/pg/postgraduate.jsx"));
const ComputerEngineeringPGGermany = lazy(() => import("../pages/Study Abroad/Germany/Engineering/pg/pages/ComputerEngineering.jsx"));
const MechanicalEngineeringPGGermany = lazy(() => import("../pages/Study Abroad/Germany/Engineering/pg/pages/MechanicalEngineering.jsx"));
const CivilEngineeringPGGermany = lazy(() => import("../pages/Study Abroad/Germany/Engineering/pg/pages/CivilEngineering.jsx"));
const ElectricalEngineeringPGGermany = lazy(() => import("../pages/Study Abroad/Germany/Engineering/pg/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationPGGermany = lazy(() => import("../pages/Study Abroad/Germany/Engineering/pg/pages/ElectronicsCommunication.jsx"));
const ChemicalEngineeringPGGermany = lazy(() => import("../pages/Study Abroad/Germany/Engineering/pg/pages/ChemicalEngineering.jsx"));
const AerospaceEngineeringPGGermany = lazy(() => import("../pages/Study Abroad/Germany/Engineering/pg/pages/AerospaceEngineering.jsx"));
const BiomedicalEngineeringPGGermany = lazy(() => import("../pages/Study Abroad/Germany/Engineering/pg/pages/BiomedicalEngineering.jsx"));
const AutomobileEngineeringPGGermany = lazy(() => import("../pages/Study Abroad/Germany/Engineering/pg/pages/AutomobileEngineering.jsx"));
const BusinessManagementGermany = lazy(() => import("../pages/Study Abroad/Germany/BusinessManagement/BusinessManagement.jsx"));
const MBAGermany = lazy(() => import("../pages/Study Abroad/Germany/MBA/MBA.jsx"));
const ExecutiveMBAGermany = lazy(() => import("../pages/Study Abroad/Germany/ExecutiveMBA/ExecutiveMBA.jsx"));
const BBAGermany = lazy(() => import("../pages/Study Abroad/Germany/BBA/BBA.jsx"));
const BBSGermany = lazy(() => import("../pages/Study Abroad/Germany/BBS/BBS.jsx"));
const MBSGermany = lazy(() => import("../pages/Study Abroad/Germany/MBS/MBS.jsx"));
const InternationalBusinessGermany = lazy(() => import("../pages/Study Abroad/Germany/InternationalBusiness/InternationalBusiness.jsx"));
const MarketingManagementGermany = lazy(() => import("../pages/Study Abroad/Germany/MarketingManagement/MarketingManagement.jsx"));
const HospitalityManagementGermany = lazy(() => import("../pages/Study Abroad/Germany/HospitalityManagement/HospitalityManagement.jsx"));
const ArchitectureGermany = lazy(() => import("../pages/Study Abroad/Germany/Architecture/Architecture.jsx"));
const LawGermany = lazy(() => import("../pages/Study Abroad/Germany/Law/Law.jsx"));
const LanguageCoursesGermany = lazy(() => import("../pages/Study Abroad/Germany/LanguageCourses/LanguageCourses.jsx"));
const SummerCoursesGermany = lazy(() => import("../pages/Study Abroad/Germany/SummerCourses/SummerCourses.jsx"));
const WinterCoursesGermany = lazy(() => import("../pages/Study Abroad/Germany/WinterCourses/WinterCourses.jsx"));
// Study Abroad - Switzerland
const DentistryAbroadSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/MBBS Abroad/DentistryAbroad.jsx"));
const BiotechnologySwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/MBBS Abroad/Biotechnology.jsx"));
const NursingAbroadSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/MBBS Abroad/NursingAbroad.jsx"));
const PharmacyAbroadSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/MBBS Abroad/PharmacyAbroad.jsx"));
const PhysiotherapyAbroadSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/MBBS Abroad/PhysiotherapyAbroad.jsx"));
const PublicHealthSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/MBBS Abroad/PublicHealth.jsx"));
const UndergraduateEngineeringSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/Engineering/ug/undergraduate.jsx"));
const AerospaceEngineeringUGSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/Engineering/ug/pages/AerospaceEngineering.jsx"));
const AutomobileEngineeringUGSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/Engineering/ug/pages/AutomobileEngineering.jsx"));
const BiomedicalEngineeringUGSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/Engineering/ug/pages/BiomedicalEngineering.jsx"));
const ChemicalEngineeringUGSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/Engineering/ug/pages/ChemicalEngineering.jsx"));
const CivilEngineeringUGSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/Engineering/ug/pages/CivilEngineering.jsx"));
const ComputerEngineeringUGSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/Engineering/ug/pages/ComputerEngineering.jsx"));
const ElectricalEngineeringUGSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/Engineering/ug/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationUGSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/Engineering/ug/pages/ElectronicsCommunication.jsx"));
const MechanicalEngineeringUGSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/Engineering/ug/pages/MechanicalEngineering.jsx"));
const PostgraduateEngineeringSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/Engineering/pg/postgraduate.jsx"));
const AerospaceEngineeringPGSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/Engineering/pg/pages/AerospaceEngineering.jsx"));
const AutomobileEngineeringPGSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/Engineering/pg/pages/AutomobileEngineering.jsx"));
const BiomedicalEngineeringPGSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/Engineering/pg/pages/BiomedicalEngineering.jsx"));
const ChemicalEngineeringPGSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/Engineering/pg/pages/ChemicalEngineering.jsx"));
const CivilEngineeringPGSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/Engineering/pg/pages/CivilEngineering.jsx"));
const ComputerEngineeringPGSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/Engineering/pg/pages/ComputerEngineering.jsx"));
const ElectricalEngineeringPGSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/Engineering/pg/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationPGSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/Engineering/pg/pages/ElectronicsCommunication.jsx"));
const MechanicalEngineeringPGSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/Engineering/pg/pages/MechanicalEngineering.jsx"));
const ComputerScienceSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/ComputerScience/ComputerScience.jsx"));
const InformationTechnologySwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/InformationTechnology/InformationTechnology.jsx"));
const BusinessManagementSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/BusinessManagement/BusinessManagement.jsx"));
const BBASwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/BBA/BBA.jsx"));
const BBSSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/BBS/BBS.jsx"));
const MBASwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/MBA/MBA.jsx"));
const MBSSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/MBS/MBS.jsx"));
const ExecutiveMBASwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/ExecutiveMBA/ExecutiveMBA.jsx"));
const InternationalBusinessSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/InternationalBusiness/InternationalBusiness.jsx"));
const HospitalityManagementSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/HospitalityManagement/HospitalityManagement.jsx"));
const ArchitectureSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/Architecture/Architecture.jsx"));
const LawSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/Law/Law.jsx"));
const LanguageCoursesSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/LanguageCourses/LanguageCourses.jsx"));
const SummerCoursesSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/SummerCourses/SummerCourses.jsx"));
const WinterCoursesSwitzerland = lazy(() => import("../pages/Study Abroad/Switzerland/WinterCourses/WinterCourses.jsx"));
// Study Abroad - Mauritius
const DentistryAbroadMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/MBBS Abroad/DentistryAbroad.jsx"));
const BiotechnologyMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/MBBS Abroad/Biotechnology.jsx"));
const NursingAbroadMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/MBBS Abroad/NursingAbroad.jsx"));
const PharmacyAbroadMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/MBBS Abroad/PharmacyAbroad.jsx"));
const PhysiotherapyAbroadMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/MBBS Abroad/PhysiotherapyAbroad.jsx"));
const PublicHealthMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/MBBS Abroad/PublicHealth.jsx"));
const UndergraduateEngineeringMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/Engineering/ug/undergraduate.jsx"));
const AerospaceEngineeringUGMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/Engineering/ug/pages/AerospaceEngineering.jsx"));
const AutomobileEngineeringUGMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/Engineering/ug/pages/AutomobileEngineering.jsx"));
const BiomedicalEngineeringUGMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/Engineering/ug/pages/BiomedicalEngineering.jsx"));
const ChemicalEngineeringUGMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/Engineering/ug/pages/ChemicalEngineering.jsx"));
const CivilEngineeringUGMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/Engineering/ug/pages/CivilEngineering.jsx"));
const ComputerEngineeringUGMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/Engineering/ug/pages/ComputerEngineering.jsx"));
const ElectricalEngineeringUGMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/Engineering/ug/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationUGMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/Engineering/ug/pages/ElectronicsCommunication.jsx"));
const MechanicalEngineeringUGMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/Engineering/ug/pages/MechanicalEngineering.jsx"));
const PostgraduateEngineeringMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/Engineering/pg/postgraduate.jsx"));
const AerospaceEngineeringPGMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/Engineering/pg/pages/AerospaceEngineering.jsx"));
const AutomobileEngineeringPGMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/Engineering/pg/pages/AutomobileEngineering.jsx"));
const BiomedicalEngineeringPGMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/Engineering/pg/pages/BiomedicalEngineering.jsx"));
const ChemicalEngineeringPGMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/Engineering/pg/pages/ChemicalEngineering.jsx"));
const CivilEngineeringPGMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/Engineering/pg/pages/CivilEngineering.jsx"));
const ComputerEngineeringPGMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/Engineering/pg/pages/ComputerEngineering.jsx"));
const ElectricalEngineeringPGMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/Engineering/pg/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationPGMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/Engineering/pg/pages/ElectronicsCommunication.jsx"));
const MechanicalEngineeringPGMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/Engineering/pg/pages/MechanicalEngineering.jsx"));
const ComputerScienceMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/ComputerScience/ComputerScience.jsx"));
const InformationTechnologyMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/InformationTechnology/InformationTechnology.jsx"));
const BusinessManagementMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/BusinessManagement/BusinessManagement.jsx"));
const BBAMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/BBA/BBA.jsx"));
const BBSMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/BBS/BBS.jsx"));
const MBAMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/MBA/MBA.jsx"));
const MBSMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/MBS/MBS.jsx"));
const ExecutiveMBAMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/ExecutiveMBA/ExecutiveMBA.jsx"));
const InternationalBusinessMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/InternationalBusiness/InternationalBusiness.jsx"));
const HospitalityManagementMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/HospitalityManagement/HospitalityManagement.jsx"));
const ArchitectureMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/Architecture/Architecture.jsx"));
const LawMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/Law/Law.jsx"));
const LanguageCoursesMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/LanguageCourses/LanguageCourses.jsx"));
const SummerCoursesMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/SummerCourses/SummerCourses.jsx"));
const WinterCoursesMauritius = lazy(() => import("../pages/Study Abroad/Mauritius/WinterCourses/WinterCourses.jsx"));

// Study Abroad - Denmark
const DentistryDenmark = lazy(() => import("../pages/Study Abroad/Denmark/MBBS Abroad/DentistryAbroad.jsx"));
const BiotechnologyDenmark = lazy(() => import("../pages/Study Abroad/Denmark/MBBS Abroad/Biotechnology.jsx"));
const NursingDenmark = lazy(() => import("../pages/Study Abroad/Denmark/MBBS Abroad/NursingAbroad.jsx"));
const PharmacyDenmark = lazy(() => import("../pages/Study Abroad/Denmark/MBBS Abroad/PharmacyAbroad.jsx"));
const PhysiotherapyDenmark = lazy(() => import("../pages/Study Abroad/Denmark/MBBS Abroad/PhysiotherapyAbroad.jsx"));
const PublicHealthDenmark = lazy(() => import("../pages/Study Abroad/Denmark/MBBS Abroad/PublicHealth.jsx"));
const UndergraduateEngineeringDenmark = lazy(() => import("../pages/Study Abroad/Denmark/Engineering/ug/undergraduate.jsx"));
const AerospaceEngineeringUGDenmark = lazy(() => import("../pages/Study Abroad/Denmark/Engineering/ug/pages/AerospaceEngineering.jsx"));
const AutomobileEngineeringUGDenmark = lazy(() => import("../pages/Study Abroad/Denmark/Engineering/ug/pages/AutomobileEngineering.jsx"));
const BiomedicalEngineeringUGDenmark = lazy(() => import("../pages/Study Abroad/Denmark/Engineering/ug/pages/BiomedicalEngineering.jsx"));
const ChemicalEngineeringUGDenmark = lazy(() => import("../pages/Study Abroad/Denmark/Engineering/ug/pages/ChemicalEngineering.jsx"));
const CivilEngineeringUGDenmark = lazy(() => import("../pages/Study Abroad/Denmark/Engineering/ug/pages/CivilEngineering.jsx"));
const ComputerEngineeringUGDenmark = lazy(() => import("../pages/Study Abroad/Denmark/Engineering/ug/pages/ComputerEngineering.jsx"));
const ElectricalEngineeringUGDenmark = lazy(() => import("../pages/Study Abroad/Denmark/Engineering/ug/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationUGDenmark = lazy(() => import("../pages/Study Abroad/Denmark/Engineering/ug/pages/ElectronicsCommunication.jsx"));
const MechanicalEngineeringUGDenmark = lazy(() => import("../pages/Study Abroad/Denmark/Engineering/ug/pages/MechanicalEngineering.jsx"));
const PostgraduateEngineeringDenmark = lazy(() => import("../pages/Study Abroad/Denmark/Engineering/pg/postgraduate.jsx"));
const AerospaceEngineeringPGDenmark = lazy(() => import("../pages/Study Abroad/Denmark/Engineering/pg/pages/AerospaceEngineering.jsx"));
const AutomobileEngineeringPGDenmark = lazy(() => import("../pages/Study Abroad/Denmark/Engineering/pg/pages/AutomobileEngineering.jsx"));
const BiomedicalEngineeringPGDenmark = lazy(() => import("../pages/Study Abroad/Denmark/Engineering/pg/pages/BiomedicalEngineering.jsx"));
const ChemicalEngineeringPGDenmark = lazy(() => import("../pages/Study Abroad/Denmark/Engineering/pg/pages/ChemicalEngineering.jsx"));
const CivilEngineeringPGDenmark = lazy(() => import("../pages/Study Abroad/Denmark/Engineering/pg/pages/CivilEngineering.jsx"));
const ComputerEngineeringPGDenmark = lazy(() => import("../pages/Study Abroad/Denmark/Engineering/pg/pages/ComputerEngineering.jsx"));
const ElectricalEngineeringPGDenmark = lazy(() => import("../pages/Study Abroad/Denmark/Engineering/pg/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationPGDenmark = lazy(() => import("../pages/Study Abroad/Denmark/Engineering/pg/pages/ElectronicsCommunication.jsx"));
const MechanicalEngineeringPGDenmark = lazy(() => import("../pages/Study Abroad/Denmark/Engineering/pg/pages/MechanicalEngineering.jsx"));
const ComputerScienceDenmark = lazy(() => import("../pages/Study Abroad/Denmark/ComputerScience/ComputerScience.jsx"));
const InformationTechnologyDenmark = lazy(() => import("../pages/Study Abroad/Denmark/InformationTechnology/InformationTechnology.jsx"));
const BusinessManagementDenmark = lazy(() => import("../pages/Study Abroad/Denmark/BusinessManagement/BusinessManagement.jsx"));
const BBADenmark = lazy(() => import("../pages/Study Abroad/Denmark/BBA/BBA.jsx"));
const BBSDenmark = lazy(() => import("../pages/Study Abroad/Denmark/BBS/BBS.jsx"));
const MBADenmark = lazy(() => import("../pages/Study Abroad/Denmark/MBA/MBA.jsx"));
const MBSDenmark = lazy(() => import("../pages/Study Abroad/Denmark/MBS/MBS.jsx"));
const ExecutiveMBADenmark = lazy(() => import("../pages/Study Abroad/Denmark/ExecutiveMBA/ExecutiveMBA.jsx"));
const InternationalBusinessDenmark = lazy(() => import("../pages/Study Abroad/Denmark/InternationalBusiness/InternationalBusiness.jsx"));
const HospitalityManagementDenmark = lazy(() => import("../pages/Study Abroad/Denmark/HospitalityManagement/HospitalityManagement.jsx"));
const ArchitectureDenmark = lazy(() => import("../pages/Study Abroad/Denmark/Architecture/Architecture.jsx"));
const LawDenmark = lazy(() => import("../pages/Study Abroad/Denmark/Law/Law.jsx"));
const LanguageCoursesDenmark = lazy(() => import("../pages/Study Abroad/Denmark/LanguageCourses/LanguageCourses.jsx"));
const SummerCoursesDenmark = lazy(() => import("../pages/Study Abroad/Denmark/SummerCourses/SummerCourses.jsx"));
const WinterCoursesDenmark = lazy(() => import("../pages/Study Abroad/Denmark/WinterCourses/WinterCourses.jsx"));

// Study Abroad - Sweden
const DentistrySweden = lazy(() => import("../pages/Study Abroad/Sweden/MBBS Abroad/DentistryAbroad.jsx"));
const BiotechnologySweden = lazy(() => import("../pages/Study Abroad/Sweden/MBBS Abroad/Biotechnology.jsx"));
const NursingSweden = lazy(() => import("../pages/Study Abroad/Sweden/MBBS Abroad/NursingAbroad.jsx"));
const PharmacySweden = lazy(() => import("../pages/Study Abroad/Sweden/MBBS Abroad/PharmacyAbroad.jsx"));
const PhysiotherapySweden = lazy(() => import("../pages/Study Abroad/Sweden/MBBS Abroad/PhysiotherapyAbroad.jsx"));
const PublicHealthSweden = lazy(() => import("../pages/Study Abroad/Sweden/MBBS Abroad/PublicHealth.jsx"));
const UndergraduateEngineeringSweden = lazy(() => import("../pages/Study Abroad/Sweden/Engineering/ug/undergraduate.jsx"));
const AerospaceEngineeringUGSweden = lazy(() => import("../pages/Study Abroad/Sweden/Engineering/ug/pages/AerospaceEngineering.jsx"));
const AutomobileEngineeringUGSweden = lazy(() => import("../pages/Study Abroad/Sweden/Engineering/ug/pages/AutomobileEngineering.jsx"));
const BiomedicalEngineeringUGSweden = lazy(() => import("../pages/Study Abroad/Sweden/Engineering/ug/pages/BiomedicalEngineering.jsx"));
const ChemicalEngineeringUGSweden = lazy(() => import("../pages/Study Abroad/Sweden/Engineering/ug/pages/ChemicalEngineering.jsx"));
const CivilEngineeringUGSweden = lazy(() => import("../pages/Study Abroad/Sweden/Engineering/ug/pages/CivilEngineering.jsx"));
const ComputerEngineeringUGSweden = lazy(() => import("../pages/Study Abroad/Sweden/Engineering/ug/pages/ComputerEngineering.jsx"));
const ElectricalEngineeringUGSweden = lazy(() => import("../pages/Study Abroad/Sweden/Engineering/ug/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationUGSweden = lazy(() => import("../pages/Study Abroad/Sweden/Engineering/ug/pages/ElectronicsCommunication.jsx"));
const MechanicalEngineeringUGSweden = lazy(() => import("../pages/Study Abroad/Sweden/Engineering/ug/pages/MechanicalEngineering.jsx"));
const PostgraduateEngineeringSweden = lazy(() => import("../pages/Study Abroad/Sweden/Engineering/pg/postgraduate.jsx"));
const AerospaceEngineeringPGSweden = lazy(() => import("../pages/Study Abroad/Sweden/Engineering/pg/pages/AerospaceEngineering.jsx"));
const AutomobileEngineeringPGSweden = lazy(() => import("../pages/Study Abroad/Sweden/Engineering/pg/pages/AutomobileEngineering.jsx"));
const BiomedicalEngineeringPGSweden = lazy(() => import("../pages/Study Abroad/Sweden/Engineering/pg/pages/BiomedicalEngineering.jsx"));
const ChemicalEngineeringPGSweden = lazy(() => import("../pages/Study Abroad/Sweden/Engineering/pg/pages/ChemicalEngineering.jsx"));
const CivilEngineeringPGSweden = lazy(() => import("../pages/Study Abroad/Sweden/Engineering/pg/pages/CivilEngineering.jsx"));
const ComputerEngineeringPGSweden = lazy(() => import("../pages/Study Abroad/Sweden/Engineering/pg/pages/ComputerEngineering.jsx"));
const ElectricalEngineeringPGSweden = lazy(() => import("../pages/Study Abroad/Sweden/Engineering/pg/pages/ElectricalEngineering.jsx"));
const ElectronicsCommunicationPGSweden = lazy(() => import("../pages/Study Abroad/Sweden/Engineering/pg/pages/ElectronicsCommunication.jsx"));
const MechanicalEngineeringPGSweden = lazy(() => import("../pages/Study Abroad/Sweden/Engineering/pg/pages/MechanicalEngineering.jsx"));
const ComputerScienceSweden = lazy(() => import("../pages/Study Abroad/Sweden/ComputerScience/ComputerScience.jsx"));
const InformationTechnologySweden = lazy(() => import("../pages/Study Abroad/Sweden/InformationTechnology/InformationTechnology.jsx"));
const BusinessManagementSweden = lazy(() => import("../pages/Study Abroad/Sweden/BusinessManagement/BusinessManagement.jsx"));
const BBASweden = lazy(() => import("../pages/Study Abroad/Sweden/BBA/BBA.jsx"));
const BBSSweden = lazy(() => import("../pages/Study Abroad/Sweden/BBS/BBS.jsx"));
const MBASweden = lazy(() => import("../pages/Study Abroad/Sweden/MBA/MBA.jsx"));
const MBSSweden = lazy(() => import("../pages/Study Abroad/Sweden/MBS/MBS.jsx"));
const ExecutiveMBASweden = lazy(() => import("../pages/Study Abroad/Sweden/ExecutiveMBA/ExecutiveMBA.jsx"));
const InternationalBusinessSweden = lazy(() => import("../pages/Study Abroad/Sweden/InternationalBusiness/InternationalBusiness.jsx"));
const HospitalityManagementSweden = lazy(() => import("../pages/Study Abroad/Sweden/HospitalityManagement/HospitalityManagement.jsx"));
const ArchitectureSweden = lazy(() => import("../pages/Study Abroad/Sweden/Architecture/Architecture.jsx"));
const LawSweden = lazy(() => import("../pages/Study Abroad/Sweden/Law/Law.jsx"));
const LanguageCoursesSweden = lazy(() => import("../pages/Study Abroad/Sweden/LanguageCourses/LanguageCourses.jsx"));
const SummerCoursesSweden = lazy(() => import("../pages/Study Abroad/Sweden/SummerCourses/SummerCourses.jsx"));
const WinterCoursesSweden = lazy(() => import("../pages/Study Abroad/Sweden/WinterCourses/WinterCourses.jsx"));
const TestDetailPage = safeLazy(() => import("../pages/Tests/TestDetailPage.jsx"));



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
        element: <Navigate to="/study-abroad/usa/business-management" replace />,
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
        element: <Navigate to="/study-abroad/usa/business-management" replace />,
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
        element: <Navigate to="/study-abroad/usa/executive-mba" replace />,
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
        element: <Navigate to="/blog" replace />,
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
        element: <Navigate to="/study-abroad/finland/executive-mba" replace />,
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
        element: <Navigate to="/study-abroad/finland/business-management" replace />,
      },
      {
        path: "study-abroad/finland/accounting-finance",
        element: <Navigate to="/study-abroad/finland/business-management" replace />,
      },
      {
        path: "study-abroad/finland/hr-management",
        element: <Navigate to="/study-abroad/finland/business-management" replace />,
      },
      {
        path: "study-abroad/finland/other-courses",
        element: <Navigate to="/study-abroad/finland/business-management" replace />,
      },
      // Australia Routes
      {
        path: "study-abroad/australia/dentistry",
        element: <DentistryAustralia />,
      },
      {
        path: "study-abroad/australia/nursing",
        element: <NursingAustralia />,
      },
      {
        path: "study-abroad/australia/pharmacy",
        element: <PharmacyAustralia />,
      },
      {
        path: "study-abroad/australia/physiotherapy",
        element: <PhysiotherapyAustralia />,
      },
      {
        path: "study-abroad/australia/public-health",
        element: <PublicHealthAustralia />,
      },
      {
        path: "study-abroad/australia/biotechnology",
        element: <BiotechnologyAustralia />,
      },
      {
        path: "study-abroad/australia/ug/engineering",
        element: <UndergraduateEngineeringAustralia />,
      },
      {
        path: "study-abroad/australia/ug/computer-engineering",
        element: <ComputerEngineeringUGAustralia />,
      },
      {
        path: "study-abroad/australia/ug/mechanical-engineering",
        element: <MechanicalEngineeringUGAustralia />,
      },
      {
        path: "study-abroad/australia/ug/civil-engineering",
        element: <CivilEngineeringUGAustralia />,
      },
      {
        path: "study-abroad/australia/ug/electrical-engineering",
        element: <ElectricalEngineeringUGAustralia />,
      },
      {
        path: "study-abroad/australia/ug/electronics-communication",
        element: <ElectronicsCommunicationUGAustralia />,
      },
      {
        path: "study-abroad/australia/ug/chemical-engineering",
        element: <ChemicalEngineeringUGAustralia />,
      },
      {
        path: "study-abroad/australia/ug/aerospace-engineering",
        element: <AerospaceEngineeringUGAustralia />,
      },
      {
        path: "study-abroad/australia/ug/biomedical-engineering",
        element: <BiomedicalEngineeringUGAustralia />,
      },
      {
        path: "study-abroad/australia/ug/automobile-engineering",
        element: <AutomobileEngineeringUGAustralia />,
      },
      {
        path: "study-abroad/australia/pg/engineering",
        element: <PostgraduateEngineeringAustralia />,
      },
      {
        path: "study-abroad/australia/pg/computer-engineering",
        element: <ComputerEngineeringPGAustralia />,
      },
      {
        path: "study-abroad/australia/pg/mechanical-engineering",
        element: <MechanicalEngineeringPGAustralia />,
      },
      {
        path: "study-abroad/australia/pg/civil-engineering",
        element: <CivilEngineeringPGAustralia />,
      },
      {
        path: "study-abroad/australia/pg/electrical-engineering",
        element: <ElectricalEngineeringPGAustralia />,
      },
      {
        path: "study-abroad/australia/pg/electronics-communication",
        element: <ElectronicsCommunicationPGAustralia />,
      },
      {
        path: "study-abroad/australia/pg/chemical-engineering",
        element: <ChemicalEngineeringPGAustralia />,
      },
      {
        path: "study-abroad/australia/pg/aerospace-engineering",
        element: <AerospaceEngineeringPGAustralia />,
      },
      {
        path: "study-abroad/australia/pg/biomedical-engineering",
        element: <BiomedicalEngineeringPGAustralia />,
      },
      {
        path: "study-abroad/australia/pg/automobile-engineering",
        element: <AutomobileEngineeringPGAustralia />,
      },
      {
        path: "study-abroad/australia/computer-science",
        element: <ComputerScienceAustralia />,
      },
      {
        path: "study-abroad/australia/information-technology",
        element: <InformationTechnologyAustralia />,
      },
      {
        path: "study-abroad/australia/business-management",
        element: <BusinessManagementAustralia />,
      },
      {
        path: "study-abroad/australia/mba",
        element: <MBAAustralia />,
      },
      {
        path: "study-abroad/australia/executive-mba",
        element: <ExecutiveMBAAustralia />,
      },
      {
        path: "study-abroad/australia/bba",
        element: <BBAAustralia />,
      },
      {
        path: "study-abroad/australia/bbs",
        element: <BBSAustralia />,
      },
      {
        path: "study-abroad/australia/mbs",
        element: <MBSAustralia />,
      },
      {
        path: "study-abroad/australia/international-business",
        element: <InternationalBusinessAustralia />,
      },
      {
        path: "study-abroad/australia/marketing-management",
        element: <MarketingManagementAustralia />,
      },
      {
        path: "study-abroad/australia/hospitality-management",
        element: <HospitalityManagementAustralia />,
      },
      {
        path: "study-abroad/australia/architecture",
        element: <ArchitectureAustralia />,
      },
      {
        path: "study-abroad/australia/law",
        element: <LawAustralia />,
      },
      {
        path: "study-abroad/australia/language-courses",
        element: <LanguageCoursesAustralia />,
      },
      {
        path: "study-abroad/australia/summer-courses",
        element: <SummerCoursesAustralia />,
      },
      {
        path: "study-abroad/australia/winter-courses",
        element: <WinterCoursesAustralia />,
      },
      {
        path: "study-abroad/italy/dentistry",
        element: <DentistryAbroadItaly />,
      },
      {
        path: "study-abroad/italy/nursing",
        element: <NursingAbroadItaly />,
      },
      {
        path: "study-abroad/italy/pharmacy",
        element: <PharmacyAbroadItaly />,
      },
      {
        path: "study-abroad/italy/physiotherapy",
        element: <PhysiotherapyAbroadItaly />,
      },
      {
        path: "study-abroad/italy/public-health",
        element: <PublicHealthItaly />,
      },
      {
        path: "study-abroad/italy/biotechnology",
        element: <BiotechnologyItaly />,
      },
      {
        path: "study-abroad/italy/computer-science",
        element: <ComputerScienceItaly />,
      },
      {
        path: "study-abroad/italy/information-technology",
        element: <InformationTechnologyItaly />,
      },
      {
        path: "study-abroad/italy/ug/engineering",
        element: <UndergraduateEngineeringItaly />,
      },
      {
        path: "study-abroad/italy/ug/computer-engineering",
        element: <ComputerEngineeringUGItaly />,
      },
      {
        path: "study-abroad/italy/ug/mechanical-engineering",
        element: <MechanicalEngineeringUGItaly />,
      },
      {
        path: "study-abroad/italy/ug/civil-engineering",
        element: <CivilEngineeringUGItaly />,
      },
      {
        path: "study-abroad/italy/ug/electrical-engineering",
        element: <ElectricalEngineeringUGItaly />,
      },
      {
        path: "study-abroad/italy/ug/electronics-communication",
        element: <ElectronicsCommunicationUGItaly />,
      },
      {
        path: "study-abroad/italy/ug/chemical-engineering",
        element: <ChemicalEngineeringUGItaly />,
      },
      {
        path: "study-abroad/italy/ug/aerospace-engineering",
        element: <AerospaceEngineeringUGItaly />,
      },
      {
        path: "study-abroad/italy/ug/biomedical-engineering",
        element: <BiomedicalEngineeringUGItaly />,
      },
      {
        path: "study-abroad/italy/ug/automobile-engineering",
        element: <AutomobileEngineeringUGItaly />,
      },
      {
        path: "study-abroad/italy/pg/engineering",
        element: <PostgraduateEngineeringItaly />,
      },
      {
        path: "study-abroad/italy/pg/computer-engineering",
        element: <ComputerEngineeringPGItaly />,
      },
      {
        path: "study-abroad/italy/pg/mechanical-engineering",
        element: <MechanicalEngineeringPGItaly />,
      },
      {
        path: "study-abroad/italy/pg/civil-engineering",
        element: <CivilEngineeringPGItaly />,
      },
      {
        path: "study-abroad/italy/pg/electrical-engineering",
        element: <ElectricalEngineeringPGItaly />,
      },
      {
        path: "study-abroad/italy/pg/electronics-communication",
        element: <ElectronicsCommunicationPGItaly />,
      },
      {
        path: "study-abroad/italy/pg/chemical-engineering",
        element: <ChemicalEngineeringPGItaly />,
      },
      {
        path: "study-abroad/italy/pg/aerospace-engineering",
        element: <AerospaceEngineeringPGItaly />,
      },
      {
        path: "study-abroad/italy/pg/biomedical-engineering",
        element: <BiomedicalEngineeringPGItaly />,
      },
      {
        path: "study-abroad/italy/pg/automobile-engineering",
        element: <AutomobileEngineeringPGItaly />,
      },
      {
        path: "study-abroad/italy/business-management",
        element: <BusinessManagementItaly />,
      },
      {
        path: "study-abroad/italy/mba",
        element: <MBAItaly />,
      },
      {
        path: "study-abroad/italy/executive-mba",
        element: <ExecutiveMBAItaly />,
      },
      {
        path: "study-abroad/italy/bba",
        element: <BBAItaly />,
      },
      {
        path: "study-abroad/italy/bbs",
        element: <BBSItaly />,
      },
      {
        path: "study-abroad/italy/mbs",
        element: <MBSItaly />,
      },
      {
        path: "study-abroad/italy/international-business",
        element: <InternationalBusinessItaly />,
      },
      {
        path: "study-abroad/italy/hospitality-management",
        element: <HospitalityManagementItaly />,
      },
      {
        path: "study-abroad/italy/architecture",
        element: <ArchitectureItaly />,
      },
      {
        path: "study-abroad/italy/law",
        element: <LawItaly />,
      },
      {
        path: "study-abroad/italy/language-courses",
        element: <LanguageCoursesItaly />,
      },
      {
        path: "study-abroad/italy/summer-courses",
        element: <SummerCoursesItaly />,
      },
      {
        path: "study-abroad/italy/winter-courses",
        element: <WinterCoursesItaly />,
      },

      // Canada Routes
      {
        path: "study-abroad/canada/dentistry",
        element: <DentistryAbroadCanada />,
      },
      {
        path: "study-abroad/canada/nursing",
        element: <NursingAbroadCanada />,
      },
      {
        path: "study-abroad/canada/pharmacy",
        element: <PharmacyAbroadCanada />,
      },
      {
        path: "study-abroad/canada/physiotherapy",
        element: <PhysiotherapyAbroadCanada />,
      },
      {
        path: "study-abroad/canada/public-health",
        element: <PublicHealthCanada />,
      },
      {
        path: "study-abroad/canada/biotechnology",
        element: <BiotechnologyCanada />,
      },
      {
        path: "study-abroad/canada/computer-science",
        element: <ComputerScienceCanada />,
      },
      {
        path: "study-abroad/canada/information-technology",
        element: <InformationTechnologyCanada />,
      },
      {
        path: "study-abroad/canada/ug/engineering",
        element: <UndergraduateEngineeringCanada />,
      },
      {
        path: "study-abroad/canada/ug/computer-engineering",
        element: <ComputerEngineeringUGCanada />,
      },
      {
        path: "study-abroad/canada/ug/mechanical-engineering",
        element: <MechanicalEngineeringUGCanada />,
      },
      {
        path: "study-abroad/canada/ug/civil-engineering",
        element: <CivilEngineeringUGCanada />,
      },
      {
        path: "study-abroad/canada/ug/electrical-engineering",
        element: <ElectricalEngineeringUGCanada />,
      },
      {
        path: "study-abroad/canada/ug/electronics-communication",
        element: <ElectronicsCommunicationUGCanada />,
      },
      {
        path: "study-abroad/canada/ug/chemical-engineering",
        element: <ChemicalEngineeringUGCanada />,
      },
      {
        path: "study-abroad/canada/ug/aerospace-engineering",
        element: <AerospaceEngineeringUGCanada />,
      },
      {
        path: "study-abroad/canada/ug/biomedical-engineering",
        element: <BiomedicalEngineeringUGCanada />,
      },
      {
        path: "study-abroad/canada/ug/automobile-engineering",
        element: <AutomobileEngineeringUGCanada />,
      },
      {
        path: "study-abroad/canada/pg/engineering",
        element: <PostgraduateEngineeringCanada />,
      },
      {
        path: "study-abroad/canada/pg/computer-engineering",
        element: <ComputerEngineeringPGCanada />,
      },
      {
        path: "study-abroad/canada/pg/mechanical-engineering",
        element: <MechanicalEngineeringPGCanada />,
      },
      {
        path: "study-abroad/canada/pg/civil-engineering",
        element: <CivilEngineeringPGCanada />,
      },
      {
        path: "study-abroad/canada/pg/electrical-engineering",
        element: <ElectricalEngineeringPGCanada />,
      },
      {
        path: "study-abroad/canada/pg/electronics-communication",
        element: <ElectronicsCommunicationPGCanada />,
      },
      {
        path: "study-abroad/canada/pg/chemical-engineering",
        element: <ChemicalEngineeringPGCanada />,
      },
      {
        path: "study-abroad/canada/pg/aerospace-engineering",
        element: <AerospaceEngineeringPGCanada />,
      },
      {
        path: "study-abroad/canada/pg/biomedical-engineering",
        element: <BiomedicalEngineeringPGCanada />,
      },
      {
        path: "study-abroad/canada/pg/automobile-engineering",
        element: <AutomobileEngineeringPGCanada />,
      },
      {
        path: "study-abroad/canada/business-management",
        element: <BusinessManagementCanada />,
      },
      {
        path: "study-abroad/canada/mba",
        element: <MBACanada />,
      },
      {
        path: "study-abroad/canada/executive-mba",
        element: <ExecutiveMBACanada />,
      },
      {
        path: "study-abroad/canada/bba",
        element: <BBACanada />,
      },
      {
        path: "study-abroad/canada/bbs",
        element: <BBSCanada />,
      },
      {
        path: "study-abroad/canada/mbs",
        element: <MBSCanada />,
      },
      {
        path: "study-abroad/canada/international-business",
        element: <InternationalBusinessCanada />,
      },
      {
        path: "study-abroad/canada/marketing-management",
        element: <MarketingManagementCanada />,
      },
      {
        path: "study-abroad/canada/hospitality-management",
        element: <HospitalityManagementCanada />,
      },
      {
        path: "study-abroad/canada/architecture",
        element: <ArchitectureCanada />,
      },
      {
        path: "study-abroad/canada/law",
        element: <LawCanada />,
      },
      {
        path: "study-abroad/canada/language-courses",
        element: <LanguageCoursesCanada />,
      },
      {
        path: "study-abroad/canada/summer-courses",
        element: <SummerCoursesCanada />,
      },
      {
        path: "study-abroad/canada/winter-courses",
        element: <WinterCoursesCanada />,
      },

      // Spain Routes
      {
        path: "study-abroad/spain/dentistry",
        element: <DentistryAbroadSpain />,
      },
      {
        path: "study-abroad/spain/nursing",
        element: <NursingAbroadSpain />,
      },
      {
        path: "study-abroad/spain/pharmacy",
        element: <PharmacyAbroadSpain />,
      },
      {
        path: "study-abroad/spain/physiotherapy",
        element: <PhysiotherapyAbroadSpain />,
      },
      {
        path: "study-abroad/spain/public-health",
        element: <PublicHealthSpain />,
      },
      {
        path: "study-abroad/spain/biotechnology",
        element: <BiotechnologySpain />,
      },
      {
        path: "study-abroad/spain/computer-science",
        element: <ComputerScienceSpain />,
      },
      {
        path: "study-abroad/spain/information-technology",
        element: <InformationTechnologySpain />,
      },
      {
        path: "study-abroad/spain/ug/engineering",
        element: <UndergraduateEngineeringSpain />,
      },
      {
        path: "study-abroad/spain/ug/computer-engineering",
        element: <ComputerEngineeringUGSpain />,
      },
      {
        path: "study-abroad/spain/ug/mechanical-engineering",
        element: <MechanicalEngineeringUGSpain />,
      },
      {
        path: "study-abroad/spain/ug/civil-engineering",
        element: <CivilEngineeringUGSpain />,
      },
      {
        path: "study-abroad/spain/ug/electrical-engineering",
        element: <ElectricalEngineeringUGSpain />,
      },
      {
        path: "study-abroad/spain/ug/electronics-communication",
        element: <ElectronicsCommunicationUGSpain />,
      },
      {
        path: "study-abroad/spain/ug/chemical-engineering",
        element: <ChemicalEngineeringUGSpain />,
      },
      {
        path: "study-abroad/spain/ug/aerospace-engineering",
        element: <AerospaceEngineeringUGSpain />,
      },
      {
        path: "study-abroad/spain/ug/biomedical-engineering",
        element: <BiomedicalEngineeringUGSpain />,
      },
      {
        path: "study-abroad/spain/ug/automobile-engineering",
        element: <AutomobileEngineeringUGSpain />,
      },
      {
        path: "study-abroad/spain/pg/engineering",
        element: <PostgraduateEngineeringSpain />,
      },
      {
        path: "study-abroad/spain/pg/computer-engineering",
        element: <ComputerEngineeringPGSpain />,
      },
      {
        path: "study-abroad/spain/pg/mechanical-engineering",
        element: <MechanicalEngineeringPGSpain />,
      },
      {
        path: "study-abroad/spain/pg/civil-engineering",
        element: <CivilEngineeringPGSpain />,
      },
      {
        path: "study-abroad/spain/pg/electrical-engineering",
        element: <ElectricalEngineeringPGSpain />,
      },
      {
        path: "study-abroad/spain/pg/electronics-communication",
        element: <ElectronicsCommunicationPGSpain />,
      },
      {
        path: "study-abroad/spain/pg/chemical-engineering",
        element: <ChemicalEngineeringPGSpain />,
      },
      {
        path: "study-abroad/spain/pg/aerospace-engineering",
        element: <AerospaceEngineeringPGSpain />,
      },
      {
        path: "study-abroad/spain/pg/biomedical-engineering",
        element: <BiomedicalEngineeringPGSpain />,
      },
      {
        path: "study-abroad/spain/pg/automobile-engineering",
        element: <AutomobileEngineeringPGSpain />,
      },
      {
        path: "study-abroad/spain/business-management",
        element: <BusinessManagementSpain />,
      },
      {
        path: "study-abroad/spain/mba",
        element: <MBASpain />,
      },
      {
        path: "study-abroad/spain/executive-mba",
        element: <ExecutiveMBASpain />,
      },
      {
        path: "study-abroad/spain/bba",
        element: <BBASpain />,
      },
      {
        path: "study-abroad/spain/bbs",
        element: <BBSSpain />,
      },
      {
        path: "study-abroad/spain/mbs",
        element: <MBSSpain />,
      },
      {
        path: "study-abroad/spain/international-business",
        element: <InternationalBusinessSpain />,
      },
      {
        path: "study-abroad/spain/hospitality-management",
        element: <HospitalityManagementSpain />,
      },
      {
        path: "study-abroad/spain/architecture",
        element: <ArchitectureSpain />,
      },
      {
        path: "study-abroad/spain/law",
        element: <LawSpain />,
      },
      {
        path: "study-abroad/spain/language-courses",
        element: <LanguageCoursesSpain />,
      },
      {
        path: "study-abroad/spain/summer-courses",
        element: <SummerCoursesSpain />,
      },
      {
        path: "study-abroad/spain/winter-courses",
        element: <WinterCoursesSpain />,
      },

      // UK Routes
      {
        path: "study-abroad/uk/dentistry",
        element: <DentistryAbroadUK />,
      },
      {
        path: "study-abroad/uk/nursing",
        element: <NursingAbroadUK />,
      },
      {
        path: "study-abroad/uk/pharmacy",
        element: <PharmacyAbroadUK />,
      },
      {
        path: "study-abroad/uk/physiotherapy",
        element: <PhysiotherapyAbroadUK />,
      },
      {
        path: "study-abroad/uk/public-health",
        element: <PublicHealthUK />,
      },
      {
        path: "study-abroad/uk/biotechnology",
        element: <BiotechnologyUK />,
      },
      {
        path: "study-abroad/uk/computer-science",
        element: <ComputerScienceUK />,
      },
      {
        path: "study-abroad/uk/information-technology",
        element: <InformationTechnologyUK />,
      },
      {
        path: "study-abroad/uk/ug/engineering",
        element: <UndergraduateEngineeringUK />,
      },
      {
        path: "study-abroad/uk/ug/computer-engineering",
        element: <ComputerEngineeringUGUK />,
      },
      {
        path: "study-abroad/uk/ug/mechanical-engineering",
        element: <MechanicalEngineeringUGUK />,
      },
      {
        path: "study-abroad/uk/ug/civil-engineering",
        element: <CivilEngineeringUGUK />,
      },
      {
        path: "study-abroad/uk/ug/electrical-engineering",
        element: <ElectricalEngineeringUGUK />,
      },
      {
        path: "study-abroad/uk/ug/electronics-communication",
        element: <ElectronicsCommunicationUGUK />,
      },
      {
        path: "study-abroad/uk/ug/chemical-engineering",
        element: <ChemicalEngineeringUGUK />,
      },
      {
        path: "study-abroad/uk/ug/aerospace-engineering",
        element: <AerospaceEngineeringUGUK />,
      },
      {
        path: "study-abroad/uk/ug/biomedical-engineering",
        element: <BiomedicalEngineeringUGUK />,
      },
      {
        path: "study-abroad/uk/ug/automobile-engineering",
        element: <AutomobileEngineeringUGUK />,
      },
      {
        path: "study-abroad/uk/pg/engineering",
        element: <PostgraduateEngineeringUK />,
      },
      {
        path: "study-abroad/uk/pg/computer-engineering",
        element: <ComputerEngineeringPGUK />,
      },
      {
        path: "study-abroad/uk/pg/mechanical-engineering",
        element: <MechanicalEngineeringPGUK />,
      },
      {
        path: "study-abroad/uk/pg/civil-engineering",
        element: <CivilEngineeringPGUK />,
      },
      {
        path: "study-abroad/uk/pg/electrical-engineering",
        element: <ElectricalEngineeringPGUK />,
      },
      {
        path: "study-abroad/uk/pg/electronics-communication",
        element: <ElectronicsCommunicationPGUK />,
      },
      {
        path: "study-abroad/uk/pg/chemical-engineering",
        element: <ChemicalEngineeringPGUK />,
      },
      {
        path: "study-abroad/uk/pg/aerospace-engineering",
        element: <AerospaceEngineeringPGUK />,
      },
      {
        path: "study-abroad/uk/pg/biomedical-engineering",
        element: <BiomedicalEngineeringPGUK />,
      },
      {
        path: "study-abroad/uk/pg/automobile-engineering",
        element: <AutomobileEngineeringPGUK />,
      },
      {
        path: "study-abroad/uk/business-management",
        element: <BusinessManagementUK />,
      },
      {
        path: "study-abroad/uk/mba",
        element: <MBAUK />,
      },
      {
        path: "study-abroad/uk/executive-mba",
        element: <ExecutiveMBAUK />,
      },
      {
        path: "study-abroad/uk/bba",
        element: <BBAUK />,
      },
      {
        path: "study-abroad/uk/bbs",
        element: <BBSUK />,
      },
      {
        path: "study-abroad/uk/mbs",
        element: <MBSUK />,
      },
      {
        path: "study-abroad/uk/international-business",
        element: <InternationalBusinessUK />,
      },
      {
        path: "study-abroad/uk/marketing-management",
        element: <MarketingManagementUK />,
      },
      {
        path: "study-abroad/uk/hospitality-management",
        element: <HospitalityManagementUK />,
      },
      {
        path: "study-abroad/uk/architecture",
        element: <ArchitectureUK />,
      },
      {
        path: "study-abroad/uk/law",
        element: <LawUK />,
      },
      {
        path: "study-abroad/uk/language-courses",
        element: <LanguageCoursesUK />,
      },
      {
        path: "study-abroad/uk/summer-courses",
        element: <SummerCoursesUK />,
      },
      {
        path: "study-abroad/uk/winter-courses",
        element: <WinterCoursesUK />,
      },

      // Ireland Routes
      {
        path: "study-abroad/ireland/dentistry",
        element: <DentistryAbroadIreland />,
      },
      {
        path: "study-abroad/ireland/nursing",
        element: <NursingAbroadIreland />,
      },
      {
        path: "study-abroad/ireland/pharmacy",
        element: <PharmacyAbroadIreland />,
      },
      {
        path: "study-abroad/ireland/physiotherapy",
        element: <PhysiotherapyAbroadIreland />,
      },
      {
        path: "study-abroad/ireland/public-health",
        element: <PublicHealthIreland />,
      },
      {
        path: "study-abroad/ireland/biotechnology",
        element: <BiotechnologyIreland />,
      },
      {
        path: "study-abroad/ireland/ug/engineering",
        element: <UndergraduateEngineeringIreland />,
      },
      {
        path: "study-abroad/ireland/ug/computer-engineering",
        element: <ComputerEngineeringUGIreland />,
      },
      {
        path: "study-abroad/ireland/ug/civil-engineering",
        element: <CivilEngineeringUGIreland />,
      },
      {
        path: "study-abroad/ireland/ug/mechanical-engineering",
        element: <MechanicalEngineeringUGIreland />,
      },
      {
        path: "study-abroad/ireland/computer-science",
        element: <ComputerScienceIreland />,
      },
      {
        path: "study-abroad/ireland/information-technology",
        element: <InformationTechnologyIreland />,
      },
      {
        path: "study-abroad/ireland/ug/electrical-engineering",
        element: <ElectricalEngineeringUGIreland />,
      },
      {
        path: "study-abroad/ireland/ug/electronics-communication",
        element: <ElectronicsCommunicationUGIreland />,
      },
      {
        path: "study-abroad/ireland/ug/chemical-engineering",
        element: <ChemicalEngineeringUGIreland />,
      },
      {
        path: "study-abroad/ireland/ug/aerospace-engineering",
        element: <AerospaceEngineeringUGIreland />,
      },
      {
        path: "study-abroad/ireland/ug/biomedical-engineering",
        element: <BiomedicalEngineeringUGIreland />,
      },
      {
        path: "study-abroad/ireland/ug/automobile-engineering",
        element: <AutomobileEngineeringUGIreland />,
      },
      {
        path: "study-abroad/ireland/pg/engineering",
        element: <PostgraduateEngineeringIreland />,
      },
      {
        path: "study-abroad/ireland/pg/computer-engineering",
        element: <ComputerEngineeringPGIreland />,
      },
      {
        path: "study-abroad/ireland/pg/mechanical-engineering",
        element: <MechanicalEngineeringPGIreland />,
      },
      {
        path: "study-abroad/ireland/pg/civil-engineering",
        element: <CivilEngineeringPGIreland />,
      },
      {
        path: "study-abroad/ireland/pg/electrical-engineering",
        element: <ElectricalEngineeringPGIreland />,
      },
      {
        path: "study-abroad/ireland/pg/electronics-communication",
        element: <ElectronicsCommunicationPGIreland />,
      },
      {
        path: "study-abroad/ireland/pg/chemical-engineering",
        element: <ChemicalEngineeringPGIreland />,
      },
      {
        path: "study-abroad/ireland/pg/aerospace-engineering",
        element: <AerospaceEngineeringPGIreland />,
      },
      {
        path: "study-abroad/ireland/pg/biomedical-engineering",
        element: <BiomedicalEngineeringPGIreland />,
      },
      {
        path: "study-abroad/ireland/pg/automobile-engineering",
        element: <AutomobileEngineeringPGIreland />,
      },
      {
        path: "study-abroad/ireland/business-management",
        element: <BusinessManagementIreland />,
      },
      {
        path: "study-abroad/ireland/mba",
        element: <MBAIreland />,
      },
      {
        path: "study-abroad/ireland/executive-mba",
        element: <ExecutiveMBAIreland />,
      },
      {
        path: "study-abroad/ireland/bba",
        element: <BBAIreland />,
      },
      {
        path: "study-abroad/ireland/bbs",
        element: <BBSIreland />,
      },
      {
        path: "study-abroad/ireland/mbs",
        element: <MBSIreland />,
      },
      {
        path: "study-abroad/ireland/international-business",
        element: <InternationalBusinessIreland />,
      },
      {
        path: "study-abroad/ireland/marketing-management",
        element: <MarketingManagementIreland />,
      },
      {
        path: "study-abroad/ireland/hospitality-management",
        element: <HospitalityManagementIreland />,
      },
      {
        path: "study-abroad/ireland/architecture",
        element: <ArchitectureIreland />,
      },
      {
        path: "study-abroad/ireland/law",
        element: <LawIreland />,
      },
      {
        path: "study-abroad/ireland/language-courses",
        element: <LanguageCoursesIreland />,
      },
      {
        path: "study-abroad/ireland/summer-courses",
        element: <SummerCoursesIreland />,
      },
      {
        path: "study-abroad/ireland/winter-courses",
        element: <WinterCoursesIreland />,
      },

      // Study Abroad - France (42 Courses)
      {
        path: "study-abroad/france/dentistry",
        element: <DentistryAbroadFrance />,
      },
      {
        path: "study-abroad/france/nursing",
        element: <NursingAbroadFrance />,
      },
      {
        path: "study-abroad/france/pharmacy",
        element: <PharmacyAbroadFrance />,
      },
      {
        path: "study-abroad/france/physiotherapy",
        element: <PhysiotherapyAbroadFrance />,
      },
      {
        path: "study-abroad/france/public-health",
        element: <PublicHealthFrance />,
      },
      {
        path: "study-abroad/france/biotechnology",
        element: <BiotechnologyFrance />,
      },
      {
        path: "study-abroad/france/ug/engineering",
        element: <UndergraduateEngineeringFrance />,
      },
      {
        path: "study-abroad/france/ug/computer-engineering",
        element: <ComputerEngineeringUGFrance />,
      },
      {
        path: "study-abroad/france/ug/civil-engineering",
        element: <CivilEngineeringUGFrance />,
      },
      {
        path: "study-abroad/france/ug/mechanical-engineering",
        element: <MechanicalEngineeringUGFrance />,
      },
      {
        path: "study-abroad/france/computer-science",
        element: <ComputerScienceFrance />,
      },
      {
        path: "study-abroad/france/information-technology",
        element: <InformationTechnologyFrance />,
      },
      {
        path: "study-abroad/france/ug/electrical-engineering",
        element: <ElectricalEngineeringUGFrance />,
      },
      {
        path: "study-abroad/france/ug/electronics-communication",
        element: <ElectronicsCommunicationUGFrance />,
      },
      {
        path: "study-abroad/france/ug/chemical-engineering",
        element: <ChemicalEngineeringUGFrance />,
      },
      {
        path: "study-abroad/france/ug/aerospace-engineering",
        element: <AerospaceEngineeringUGFrance />,
      },
      {
        path: "study-abroad/france/ug/biomedical-engineering",
        element: <BiomedicalEngineeringUGFrance />,
      },
      {
        path: "study-abroad/france/ug/automobile-engineering",
        element: <AutomobileEngineeringUGFrance />,
      },
      {
        path: "study-abroad/france/pg/engineering",
        element: <PostgraduateEngineeringFrance />,
      },
      {
        path: "study-abroad/france/pg/computer-engineering",
        element: <ComputerEngineeringPGFrance />,
      },
      {
        path: "study-abroad/france/pg/mechanical-engineering",
        element: <MechanicalEngineeringPGFrance />,
      },
      {
        path: "study-abroad/france/pg/civil-engineering",
        element: <CivilEngineeringPGFrance />,
      },
      {
        path: "study-abroad/france/pg/electrical-engineering",
        element: <ElectricalEngineeringPGFrance />,
      },
      {
        path: "study-abroad/france/pg/electronics-communication",
        element: <ElectronicsCommunicationPGFrance />,
      },
      {
        path: "study-abroad/france/pg/chemical-engineering",
        element: <ChemicalEngineeringPGFrance />,
      },
      {
        path: "study-abroad/france/pg/aerospace-engineering",
        element: <AerospaceEngineeringPGFrance />,
      },
      {
        path: "study-abroad/france/pg/biomedical-engineering",
        element: <BiomedicalEngineeringPGFrance />,
      },
      {
        path: "study-abroad/france/pg/automobile-engineering",
        element: <AutomobileEngineeringPGFrance />,
      },
      {
        path: "study-abroad/france/business-management",
        element: <BusinessManagementFrance />,
      },
      {
        path: "study-abroad/france/mba",
        element: <MBAFrance />,
      },
      {
        path: "study-abroad/france/executive-mba",
        element: <ExecutiveMBAFrance />,
      },
      {
        path: "study-abroad/france/bba",
        element: <BBAFrance />,
      },
      {
        path: "study-abroad/france/bbs",
        element: <BBSFrance />,
      },
      {
        path: "study-abroad/france/mbs",
        element: <MBSFrance />,
      },
      {
        path: "study-abroad/france/international-business",
        element: <InternationalBusinessFrance />,
      },
      {
        path: "study-abroad/france/marketing-management",
        element: <MarketingManagementFrance />,
      },
      {
        path: "study-abroad/france/hospitality-management",
        element: <HospitalityManagementFrance />,
      },
      {
        path: "study-abroad/france/architecture",
        element: <ArchitectureFrance />,
      },
      {
        path: "study-abroad/france/law",
        element: <LawFrance />,
      },
      {
        path: "study-abroad/france/language-courses",
        element: <LanguageCoursesFrance />,
      },
      {
        path: "study-abroad/france/summer-courses",
        element: <SummerCoursesFrance />,
      },
      {
        path: "study-abroad/france/winter-courses",
        element: <WinterCoursesFrance />,
      },
      // Study Abroad - Germany (42 Courses)
      {
        path: "study-abroad/germany/dentistry",
        element: <DentistryAbroadGermany />,
      },
      {
        path: "study-abroad/germany/nursing",
        element: <NursingAbroadGermany />,
      },
      {
        path: "study-abroad/germany/pharmacy",
        element: <PharmacyAbroadGermany />,
      },
      {
        path: "study-abroad/germany/physiotherapy",
        element: <PhysiotherapyAbroadGermany />,
      },
      {
        path: "study-abroad/germany/public-health",
        element: <PublicHealthGermany />,
      },
      {
        path: "study-abroad/germany/biotechnology",
        element: <BiotechnologyGermany />,
      },
      {
        path: "study-abroad/germany/ug/engineering",
        element: <UndergraduateEngineeringGermany />,
      },
      {
        path: "study-abroad/germany/ug/computer-engineering",
        element: <ComputerEngineeringUGGermany />,
      },
      {
        path: "study-abroad/germany/ug/civil-engineering",
        element: <CivilEngineeringUGGermany />,
      },
      {
        path: "study-abroad/germany/ug/mechanical-engineering",
        element: <MechanicalEngineeringUGGermany />,
      },
      {
        path: "study-abroad/germany/computer-science",
        element: <ComputerScienceGermany />,
      },
      {
        path: "study-abroad/germany/information-technology",
        element: <InformationTechnologyGermany />,
      },
      {
        path: "study-abroad/germany/ug/electrical-engineering",
        element: <ElectricalEngineeringUGGermany />,
      },
      {
        path: "study-abroad/germany/ug/electronics-communication",
        element: <ElectronicsCommunicationUGGermany />,
      },
      {
        path: "study-abroad/germany/ug/chemical-engineering",
        element: <ChemicalEngineeringUGGermany />,
      },
      {
        path: "study-abroad/germany/ug/aerospace-engineering",
        element: <AerospaceEngineeringUGGermany />,
      },
      {
        path: "study-abroad/germany/ug/biomedical-engineering",
        element: <BiomedicalEngineeringUGGermany />,
      },
      {
        path: "study-abroad/germany/ug/automobile-engineering",
        element: <AutomobileEngineeringUGGermany />,
      },
      {
        path: "study-abroad/germany/pg/engineering",
        element: <PostgraduateEngineeringGermany />,
      },
      {
        path: "study-abroad/germany/pg/computer-engineering",
        element: <ComputerEngineeringPGGermany />,
      },
      {
        path: "study-abroad/germany/pg/mechanical-engineering",
        element: <MechanicalEngineeringPGGermany />,
      },
      {
        path: "study-abroad/germany/pg/civil-engineering",
        element: <CivilEngineeringPGGermany />,
      },
      {
        path: "study-abroad/germany/pg/electrical-engineering",
        element: <ElectricalEngineeringPGGermany />,
      },
      {
        path: "study-abroad/germany/pg/electronics-communication",
        element: <ElectronicsCommunicationPGGermany />,
      },
      {
        path: "study-abroad/germany/pg/chemical-engineering",
        element: <ChemicalEngineeringPGGermany />,
      },
      {
        path: "study-abroad/germany/pg/aerospace-engineering",
        element: <AerospaceEngineeringPGGermany />,
      },
      {
        path: "study-abroad/germany/pg/biomedical-engineering",
        element: <BiomedicalEngineeringPGGermany />,
      },
      {
        path: "study-abroad/germany/pg/automobile-engineering",
        element: <AutomobileEngineeringPGGermany />,
      },
      {
        path: "study-abroad/germany/business-management",
        element: <BusinessManagementGermany />,
      },
      {
        path: "study-abroad/germany/mba",
        element: <MBAGermany />,
      },
      {
        path: "study-abroad/germany/executive-mba",
        element: <ExecutiveMBAGermany />,
      },
      {
        path: "study-abroad/germany/bba",
        element: <BBAGermany />,
      },
      {
        path: "study-abroad/germany/bbs",
        element: <BBSGermany />,
      },
      {
        path: "study-abroad/germany/mbs",
        element: <MBSGermany />,
      },
      {
        path: "study-abroad/germany/international-business",
        element: <InternationalBusinessGermany />,
      },
      {
        path: "study-abroad/germany/marketing-management",
        element: <MarketingManagementGermany />,
      },
      {
        path: "study-abroad/germany/hospitality-management",
        element: <HospitalityManagementGermany />,
      },
      {
        path: "study-abroad/germany/architecture",
        element: <ArchitectureGermany />,
      },
      {
        path: "study-abroad/germany/law",
        element: <LawGermany />,
      },
      {
        path: "study-abroad/germany/language-courses",
        element: <LanguageCoursesGermany />,
      },
      {
        path: "study-abroad/germany/summer-courses",
        element: <SummerCoursesGermany />,
      },
      {
        path: "study-abroad/germany/winter-courses",
        element: <WinterCoursesGermany />,
      },
      // Study Abroad - Switzerland
      {
        path: "study-abroad/switzerland/dentistry",
        element: <DentistryAbroadSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/biotechnology",
        element: <BiotechnologySwitzerland />,
      },
      {
        path: "study-abroad/switzerland/nursing",
        element: <NursingAbroadSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/pharmacy",
        element: <PharmacyAbroadSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/physiotherapy",
        element: <PhysiotherapyAbroadSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/public-health",
        element: <PublicHealthSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/ug/engineering",
        element: <UndergraduateEngineeringSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/ug/aerospace-engineering",
        element: <AerospaceEngineeringUGSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/ug/automobile-engineering",
        element: <AutomobileEngineeringUGSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/ug/biomedical-engineering",
        element: <BiomedicalEngineeringUGSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/ug/chemical-engineering",
        element: <ChemicalEngineeringUGSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/ug/civil-engineering",
        element: <CivilEngineeringUGSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/ug/computer-engineering",
        element: <ComputerEngineeringUGSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/ug/electrical-engineering",
        element: <ElectricalEngineeringUGSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/ug/electronics-communication",
        element: <ElectronicsCommunicationUGSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/ug/mechanical-engineering",
        element: <MechanicalEngineeringUGSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/pg/engineering",
        element: <PostgraduateEngineeringSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/pg/aerospace-engineering",
        element: <AerospaceEngineeringPGSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/pg/automobile-engineering",
        element: <AutomobileEngineeringPGSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/pg/biomedical-engineering",
        element: <BiomedicalEngineeringPGSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/pg/chemical-engineering",
        element: <ChemicalEngineeringPGSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/pg/civil-engineering",
        element: <CivilEngineeringPGSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/pg/computer-engineering",
        element: <ComputerEngineeringPGSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/pg/electrical-engineering",
        element: <ElectricalEngineeringPGSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/pg/electronics-communication",
        element: <ElectronicsCommunicationPGSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/pg/mechanical-engineering",
        element: <MechanicalEngineeringPGSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/computer-science",
        element: <ComputerScienceSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/information-technology",
        element: <InformationTechnologySwitzerland />,
      },
      {
        path: "study-abroad/switzerland/business-management",
        element: <BusinessManagementSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/bba",
        element: <BBASwitzerland />,
      },
      {
        path: "study-abroad/switzerland/bbs",
        element: <BBSSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/mba",
        element: <MBASwitzerland />,
      },
      {
        path: "study-abroad/switzerland/mbs",
        element: <MBSSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/executive-mba",
        element: <ExecutiveMBASwitzerland />,
      },
      {
        path: "study-abroad/switzerland/international-business",
        element: <InternationalBusinessSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/hospitality-management",
        element: <HospitalityManagementSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/architecture",
        element: <ArchitectureSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/law",
        element: <LawSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/language-courses",
        element: <LanguageCoursesSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/summer-courses",
        element: <SummerCoursesSwitzerland />,
      },
      {
        path: "study-abroad/switzerland/winter-courses",
        element: <WinterCoursesSwitzerland />,
      },
      // Study Abroad - Mauritius
      {
        path: "study-abroad/mauritius/dentistry",
        element: <DentistryAbroadMauritius />,
      },
      {
        path: "study-abroad/mauritius/biotechnology",
        element: <BiotechnologyMauritius />,
      },
      {
        path: "study-abroad/mauritius/nursing",
        element: <NursingAbroadMauritius />,
      },
      {
        path: "study-abroad/mauritius/pharmacy",
        element: <PharmacyAbroadMauritius />,
      },
      {
        path: "study-abroad/mauritius/physiotherapy",
        element: <PhysiotherapyAbroadMauritius />,
      },
      {
        path: "study-abroad/mauritius/public-health",
        element: <PublicHealthMauritius />,
      },
      {
        path: "study-abroad/mauritius/ug/engineering",
        element: <UndergraduateEngineeringMauritius />,
      },
      {
        path: "study-abroad/mauritius/ug/aerospace-engineering",
        element: <AerospaceEngineeringUGMauritius />,
      },
      {
        path: "study-abroad/mauritius/ug/automobile-engineering",
        element: <AutomobileEngineeringUGMauritius />,
      },
      {
        path: "study-abroad/mauritius/ug/biomedical-engineering",
        element: <BiomedicalEngineeringUGMauritius />,
      },
      {
        path: "study-abroad/mauritius/ug/chemical-engineering",
        element: <ChemicalEngineeringUGMauritius />,
      },
      {
        path: "study-abroad/mauritius/ug/civil-engineering",
        element: <CivilEngineeringUGMauritius />,
      },
      {
        path: "study-abroad/mauritius/ug/computer-engineering",
        element: <ComputerEngineeringUGMauritius />,
      },
      {
        path: "study-abroad/mauritius/ug/electrical-engineering",
        element: <ElectricalEngineeringUGMauritius />,
      },
      {
        path: "study-abroad/mauritius/ug/electronics-communication",
        element: <ElectronicsCommunicationUGMauritius />,
      },
      {
        path: "study-abroad/mauritius/ug/mechanical-engineering",
        element: <MechanicalEngineeringUGMauritius />,
      },
      {
        path: "study-abroad/mauritius/pg/engineering",
        element: <PostgraduateEngineeringMauritius />,
      },
      {
        path: "study-abroad/mauritius/pg/aerospace-engineering",
        element: <AerospaceEngineeringPGMauritius />,
      },
      {
        path: "study-abroad/mauritius/pg/automobile-engineering",
        element: <AutomobileEngineeringPGMauritius />,
      },
      {
        path: "study-abroad/mauritius/pg/biomedical-engineering",
        element: <BiomedicalEngineeringPGMauritius />,
      },
      {
        path: "study-abroad/mauritius/pg/chemical-engineering",
        element: <ChemicalEngineeringPGMauritius />,
      },
      {
        path: "study-abroad/mauritius/pg/civil-engineering",
        element: <CivilEngineeringPGMauritius />,
      },
      {
        path: "study-abroad/mauritius/pg/computer-engineering",
        element: <ComputerEngineeringPGMauritius />,
      },
      {
        path: "study-abroad/mauritius/pg/electrical-engineering",
        element: <ElectricalEngineeringPGMauritius />,
      },
      {
        path: "study-abroad/mauritius/pg/electronics-communication",
        element: <ElectronicsCommunicationPGMauritius />,
      },
      {
        path: "study-abroad/mauritius/pg/mechanical-engineering",
        element: <MechanicalEngineeringPGMauritius />,
      },
      {
        path: "study-abroad/mauritius/computer-science",
        element: <ComputerScienceMauritius />,
      },
      {
        path: "study-abroad/mauritius/information-technology",
        element: <InformationTechnologyMauritius />,
      },
      {
        path: "study-abroad/mauritius/business-management",
        element: <BusinessManagementMauritius />,
      },
      {
        path: "study-abroad/mauritius/bba",
        element: <BBAMauritius />,
      },
      {
        path: "study-abroad/mauritius/bbs",
        element: <BBSMauritius />,
      },
      {
        path: "study-abroad/mauritius/mba",
        element: <MBAMauritius />,
      },
      {
        path: "study-abroad/mauritius/mbs",
        element: <MBSMauritius />,
      },
      {
        path: "study-abroad/mauritius/executive-mba",
        element: <ExecutiveMBAMauritius />,
      },
      {
        path: "study-abroad/mauritius/international-business",
        element: <InternationalBusinessMauritius />,
      },
      {
        path: "study-abroad/mauritius/hospitality-management",
        element: <HospitalityManagementMauritius />,
      },
      {
        path: "study-abroad/mauritius/architecture",
        element: <ArchitectureMauritius />,
      },
      {
        path: "study-abroad/mauritius/law",
        element: <LawMauritius />,
      },
      {
        path: "study-abroad/mauritius/language-courses",
        element: <LanguageCoursesMauritius />,
      },
      {
        path: "study-abroad/mauritius/summer-courses",
        element: <SummerCoursesMauritius />,
      },
      {
        path: "study-abroad/mauritius/winter-courses",
        element: <WinterCoursesMauritius />,
      },

      // Study Abroad - Denmark
      {
        path: "study-abroad/denmark/dentistry",
        element: <DentistryDenmark />,
      },
      {
        path: "study-abroad/denmark/biotechnology",
        element: <BiotechnologyDenmark />,
      },
      {
        path: "study-abroad/denmark/nursing",
        element: <NursingDenmark />,
      },
      {
        path: "study-abroad/denmark/pharmacy",
        element: <PharmacyDenmark />,
      },
      {
        path: "study-abroad/denmark/physiotherapy",
        element: <PhysiotherapyDenmark />,
      },
      {
        path: "study-abroad/denmark/public-health",
        element: <PublicHealthDenmark />,
      },
      {
        path: "study-abroad/denmark/ug/engineering",
        element: <UndergraduateEngineeringDenmark />,
      },
      {
        path: "study-abroad/denmark/ug/aerospace-engineering",
        element: <AerospaceEngineeringUGDenmark />,
      },
      {
        path: "study-abroad/denmark/ug/automobile-engineering",
        element: <AutomobileEngineeringUGDenmark />,
      },
      {
        path: "study-abroad/denmark/ug/biomedical-engineering",
        element: <BiomedicalEngineeringUGDenmark />,
      },
      {
        path: "study-abroad/denmark/ug/chemical-engineering",
        element: <ChemicalEngineeringUGDenmark />,
      },
      {
        path: "study-abroad/denmark/ug/civil-engineering",
        element: <CivilEngineeringUGDenmark />,
      },
      {
        path: "study-abroad/denmark/ug/computer-engineering",
        element: <ComputerEngineeringUGDenmark />,
      },
      {
        path: "study-abroad/denmark/ug/electrical-engineering",
        element: <ElectricalEngineeringUGDenmark />,
      },
      {
        path: "study-abroad/denmark/ug/electronics-communication",
        element: <ElectronicsCommunicationUGDenmark />,
      },
      {
        path: "study-abroad/denmark/ug/mechanical-engineering",
        element: <MechanicalEngineeringUGDenmark />,
      },
      {
        path: "study-abroad/denmark/pg/engineering",
        element: <PostgraduateEngineeringDenmark />,
      },
      {
        path: "study-abroad/denmark/pg/aerospace-engineering",
        element: <AerospaceEngineeringPGDenmark />,
      },
      {
        path: "study-abroad/denmark/pg/automobile-engineering",
        element: <AutomobileEngineeringPGDenmark />,
      },
      {
        path: "study-abroad/denmark/pg/biomedical-engineering",
        element: <BiomedicalEngineeringPGDenmark />,
      },
      {
        path: "study-abroad/denmark/pg/chemical-engineering",
        element: <ChemicalEngineeringPGDenmark />,
      },
      {
        path: "study-abroad/denmark/pg/civil-engineering",
        element: <CivilEngineeringPGDenmark />,
      },
      {
        path: "study-abroad/denmark/pg/computer-engineering",
        element: <ComputerEngineeringPGDenmark />,
      },
      {
        path: "study-abroad/denmark/pg/electrical-engineering",
        element: <ElectricalEngineeringPGDenmark />,
      },
      {
        path: "study-abroad/denmark/pg/electronics-communication",
        element: <ElectronicsCommunicationPGDenmark />,
      },
      {
        path: "study-abroad/denmark/pg/mechanical-engineering",
        element: <MechanicalEngineeringPGDenmark />,
      },
      {
        path: "study-abroad/denmark/computer-science",
        element: <ComputerScienceDenmark />,
      },
      {
        path: "study-abroad/denmark/information-technology",
        element: <InformationTechnologyDenmark />,
      },
      {
        path: "study-abroad/denmark/business-management",
        element: <BusinessManagementDenmark />,
      },
      {
        path: "study-abroad/denmark/bba",
        element: <BBADenmark />,
      },
      {
        path: "study-abroad/denmark/bbs",
        element: <BBSDenmark />,
      },
      {
        path: "study-abroad/denmark/mba",
        element: <MBADenmark />,
      },
      {
        path: "study-abroad/denmark/mbs",
        element: <MBSDenmark />,
      },
      {
        path: "study-abroad/denmark/executive-mba",
        element: <ExecutiveMBADenmark />,
      },
      {
        path: "study-abroad/denmark/international-business",
        element: <InternationalBusinessDenmark />,
      },
      {
        path: "study-abroad/denmark/hospitality-management",
        element: <HospitalityManagementDenmark />,
      },
      {
        path: "study-abroad/denmark/architecture",
        element: <ArchitectureDenmark />,
      },
      {
        path: "study-abroad/denmark/law",
        element: <LawDenmark />,
      },
      {
        path: "study-abroad/denmark/language-courses",
        element: <LanguageCoursesDenmark />,
      },
      {
        path: "study-abroad/denmark/summer-courses",
        element: <SummerCoursesDenmark />,
      },
      {
        path: "study-abroad/denmark/winter-courses",
        element: <WinterCoursesDenmark />,
      },

      // Study Abroad - Sweden
      {
        path: "study-abroad/sweden/dentistry",
        element: <DentistrySweden />,
      },
      {
        path: "study-abroad/sweden/biotechnology",
        element: <BiotechnologySweden />,
      },
      {
        path: "study-abroad/sweden/nursing",
        element: <NursingSweden />,
      },
      {
        path: "study-abroad/sweden/pharmacy",
        element: <PharmacySweden />,
      },
      {
        path: "study-abroad/sweden/physiotherapy",
        element: <PhysiotherapySweden />,
      },
      {
        path: "study-abroad/sweden/public-health",
        element: <PublicHealthSweden />,
      },
      {
        path: "study-abroad/sweden/ug/engineering",
        element: <UndergraduateEngineeringSweden />,
      },
      {
        path: "study-abroad/sweden/ug/aerospace-engineering",
        element: <AerospaceEngineeringUGSweden />,
      },
      {
        path: "study-abroad/sweden/ug/automobile-engineering",
        element: <AutomobileEngineeringUGSweden />,
      },
      {
        path: "study-abroad/sweden/ug/biomedical-engineering",
        element: <BiomedicalEngineeringUGSweden />,
      },
      {
        path: "study-abroad/sweden/ug/chemical-engineering",
        element: <ChemicalEngineeringUGSweden />,
      },
      {
        path: "study-abroad/sweden/ug/civil-engineering",
        element: <CivilEngineeringUGSweden />,
      },
      {
        path: "study-abroad/sweden/ug/computer-engineering",
        element: <ComputerEngineeringUGSweden />,
      },
      {
        path: "study-abroad/sweden/ug/electrical-engineering",
        element: <ElectricalEngineeringUGSweden />,
      },
      {
        path: "study-abroad/sweden/ug/electronics-communication",
        element: <ElectronicsCommunicationUGSweden />,
      },
      {
        path: "study-abroad/sweden/ug/mechanical-engineering",
        element: <MechanicalEngineeringUGSweden />,
      },
      {
        path: "study-abroad/sweden/pg/engineering",
        element: <PostgraduateEngineeringSweden />,
      },
      {
        path: "study-abroad/sweden/pg/aerospace-engineering",
        element: <AerospaceEngineeringPGSweden />,
      },
      {
        path: "study-abroad/sweden/pg/automobile-engineering",
        element: <AutomobileEngineeringPGSweden />,
      },
      {
        path: "study-abroad/sweden/pg/biomedical-engineering",
        element: <BiomedicalEngineeringPGSweden />,
      },
      {
        path: "study-abroad/sweden/pg/chemical-engineering",
        element: <ChemicalEngineeringPGSweden />,
      },
      {
        path: "study-abroad/sweden/pg/civil-engineering",
        element: <CivilEngineeringPGSweden />,
      },
      {
        path: "study-abroad/sweden/pg/computer-engineering",
        element: <ComputerEngineeringPGSweden />,
      },
      {
        path: "study-abroad/sweden/pg/electrical-engineering",
        element: <ElectricalEngineeringPGSweden />,
      },
      {
        path: "study-abroad/sweden/pg/electronics-communication",
        element: <ElectronicsCommunicationPGSweden />,
      },
      {
        path: "study-abroad/sweden/pg/mechanical-engineering",
        element: <MechanicalEngineeringPGSweden />,
      },
      {
        path: "study-abroad/sweden/computer-science",
        element: <ComputerScienceSweden />,
      },
      {
        path: "study-abroad/sweden/information-technology",
        element: <InformationTechnologySweden />,
      },
      {
        path: "study-abroad/sweden/business-management",
        element: <BusinessManagementSweden />,
      },
      {
        path: "study-abroad/sweden/bba",
        element: <BBASweden />,
      },
      {
        path: "study-abroad/sweden/bbs",
        element: <BBSSweden />,
      },
      {
        path: "study-abroad/sweden/mba",
        element: <MBASweden />,
      },
      {
        path: "study-abroad/sweden/mbs",
        element: <MBSSweden />,
      },
      {
        path: "study-abroad/sweden/executive-mba",
        element: <ExecutiveMBASweden />,
      },
      {
        path: "study-abroad/sweden/international-business",
        element: <InternationalBusinessSweden />,
      },
      {
        path: "study-abroad/sweden/hospitality-management",
        element: <HospitalityManagementSweden />,
      },
      {
        path: "study-abroad/sweden/architecture",
        element: <ArchitectureSweden />,
      },
      {
        path: "study-abroad/sweden/law",
        element: <LawSweden />,
      },
      {
        path: "study-abroad/sweden/language-courses",
        element: <LanguageCoursesSweden />,
      },
      {
        path: "study-abroad/sweden/summer-courses",
        element: <SummerCoursesSweden />,
      },
      {
        path: "study-abroad/sweden/winter-courses",
        element: <WinterCoursesSweden />,
      },

      // =====================================================================
      // TESTS & COMMON ONLINE EXAMS (Common to All Countries)
      // =====================================================================
      {
        path: "tests/:testId",
        element: <TestDetailPage />,
      },
      {
        path: "tests",
        element: <Navigate to="/tests/which-test" replace />,
      },
      {
        path: "online-exams",
        element: <Navigate to="/tests/which-test" replace />,
      
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
  "/study-abroad/usa/hospitality-management",
  "/study-abroad/usa/architecture",
  "/study-abroad/usa/law",
  "/study-abroad/usa/language-courses",
  "/study-abroad/usa/summer-courses",
  "/study-abroad/usa/winter-courses",
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
  "/study-abroad/australia/dentistry",
  "/study-abroad/australia/nursing",
  "/study-abroad/australia/pharmacy",
  "/study-abroad/australia/physiotherapy",
  "/study-abroad/australia/public-health",
  "/study-abroad/australia/biotechnology",
  "/study-abroad/australia/ug/engineering",
  "/study-abroad/australia/ug/computer-engineering",
  "/study-abroad/australia/ug/mechanical-engineering",
  "/study-abroad/australia/ug/civil-engineering",
  "/study-abroad/australia/ug/electrical-engineering",
  "/study-abroad/australia/ug/electronics-communication",
  "/study-abroad/australia/ug/chemical-engineering",
  "/study-abroad/australia/ug/aerospace-engineering",
  "/study-abroad/australia/ug/biomedical-engineering",
  "/study-abroad/australia/ug/automobile-engineering",
  "/study-abroad/australia/pg/engineering",
  "/study-abroad/australia/pg/computer-engineering",
  "/study-abroad/australia/pg/mechanical-engineering",
  "/study-abroad/australia/pg/civil-engineering",
  "/study-abroad/australia/pg/electrical-engineering",
  "/study-abroad/australia/pg/electronics-communication",
  "/study-abroad/australia/pg/chemical-engineering",
  "/study-abroad/australia/pg/aerospace-engineering",
  "/study-abroad/australia/pg/biomedical-engineering",
  "/study-abroad/australia/pg/automobile-engineering",
  "/study-abroad/australia/computer-science",
  "/study-abroad/australia/information-technology",
  "/study-abroad/australia/business-management",
  "/study-abroad/australia/mba",
  "/study-abroad/australia/executive-mba",
  "/study-abroad/australia/bba",
  "/study-abroad/australia/bbs",
  "/study-abroad/australia/mbs",
  "/study-abroad/australia/international-business",
  "/study-abroad/australia/marketing-management",
  "/study-abroad/australia/hospitality-management",
  "/study-abroad/australia/architecture",
  "/study-abroad/australia/law",
  "/study-abroad/australia/language-courses",
  "/study-abroad/australia/summer-courses",
  "/study-abroad/australia/winter-courses",
  "/study-abroad/italy/dentistry",
  "/study-abroad/italy/nursing",
  "/study-abroad/italy/pharmacy",
  "/study-abroad/italy/physiotherapy",
  "/study-abroad/italy/public-health",
  "/study-abroad/italy/biotechnology",
  "/study-abroad/italy/computer-science",
  "/study-abroad/italy/information-technology",
  "/study-abroad/italy/ug/engineering",
  "/study-abroad/italy/ug/computer-engineering",
  "/study-abroad/italy/ug/mechanical-engineering",
  "/study-abroad/italy/ug/civil-engineering",
  "/study-abroad/italy/ug/electrical-engineering",
  "/study-abroad/italy/ug/electronics-communication",
  "/study-abroad/italy/ug/chemical-engineering",
  "/study-abroad/italy/ug/aerospace-engineering",
  "/study-abroad/italy/ug/biomedical-engineering",
  "/study-abroad/italy/ug/automobile-engineering",
  "/study-abroad/italy/pg/engineering",
  "/study-abroad/italy/pg/computer-engineering",
  "/study-abroad/italy/pg/mechanical-engineering",
  "/study-abroad/italy/pg/civil-engineering",
  "/study-abroad/italy/pg/electrical-engineering",
  "/study-abroad/italy/pg/electronics-communication",
  "/study-abroad/italy/pg/chemical-engineering",
  "/study-abroad/italy/pg/aerospace-engineering",
  "/study-abroad/italy/pg/biomedical-engineering",
  "/study-abroad/italy/pg/automobile-engineering",
  "/study-abroad/italy/business-management",
  "/study-abroad/italy/mba",
  "/study-abroad/italy/executive-mba",
  "/study-abroad/italy/bba",
  "/study-abroad/italy/bbs",
  "/study-abroad/italy/mbs",
  "/study-abroad/italy/international-business",
  "/study-abroad/italy/hospitality-management",
  "/study-abroad/italy/architecture",
  "/study-abroad/italy/law",
  "/study-abroad/italy/language-courses",
  "/study-abroad/italy/summer-courses",
  "/study-abroad/italy/winter-courses",
  // Canada Routes
  "/study-abroad/canada/dentistry",
  "/study-abroad/canada/nursing",
  "/study-abroad/canada/pharmacy",
  "/study-abroad/canada/physiotherapy",
  "/study-abroad/canada/public-health",
  "/study-abroad/canada/biotechnology",
  "/study-abroad/canada/computer-science",
  "/study-abroad/canada/information-technology",
  "/study-abroad/canada/ug/engineering",
  "/study-abroad/canada/ug/computer-engineering",
  "/study-abroad/canada/ug/mechanical-engineering",
  "/study-abroad/canada/ug/civil-engineering",
  "/study-abroad/canada/ug/electrical-engineering",
  "/study-abroad/canada/ug/electronics-communication",
  "/study-abroad/canada/ug/chemical-engineering",
  "/study-abroad/canada/ug/aerospace-engineering",
  "/study-abroad/canada/ug/biomedical-engineering",
  "/study-abroad/canada/ug/automobile-engineering",
  "/study-abroad/canada/pg/engineering",
  "/study-abroad/canada/pg/computer-engineering",
  "/study-abroad/canada/pg/mechanical-engineering",
  "/study-abroad/canada/pg/civil-engineering",
  "/study-abroad/canada/pg/electrical-engineering",
  "/study-abroad/canada/pg/electronics-communication",
  "/study-abroad/canada/pg/chemical-engineering",
  "/study-abroad/canada/pg/aerospace-engineering",
  "/study-abroad/canada/pg/biomedical-engineering",
  "/study-abroad/canada/pg/automobile-engineering",
  "/study-abroad/canada/business-management",
  "/study-abroad/canada/mba",
  "/study-abroad/canada/executive-mba",
  "/study-abroad/canada/bba",
  "/study-abroad/canada/bbs",
  "/study-abroad/canada/mbs",
  "/study-abroad/canada/international-business",
  "/study-abroad/canada/marketing-management",
  "/study-abroad/canada/hospitality-management",
  "/study-abroad/canada/architecture",
  "/study-abroad/canada/law",
  "/study-abroad/canada/language-courses",
  "/study-abroad/canada/summer-courses",
  "/study-abroad/canada/winter-courses",
  // Spain Routes
  "/study-abroad/spain/dentistry",
  "/study-abroad/spain/nursing",
  "/study-abroad/spain/pharmacy",
  "/study-abroad/spain/physiotherapy",
  "/study-abroad/spain/public-health",
  "/study-abroad/spain/biotechnology",
  "/study-abroad/spain/computer-science",
  "/study-abroad/spain/information-technology",
  "/study-abroad/spain/ug/engineering",
  "/study-abroad/spain/ug/computer-engineering",
  "/study-abroad/spain/ug/mechanical-engineering",
  "/study-abroad/spain/ug/civil-engineering",
  "/study-abroad/spain/ug/electrical-engineering",
  "/study-abroad/spain/ug/electronics-communication",
  "/study-abroad/spain/ug/chemical-engineering",
  "/study-abroad/spain/ug/aerospace-engineering",
  "/study-abroad/spain/ug/biomedical-engineering",
  "/study-abroad/spain/ug/automobile-engineering",
  "/study-abroad/spain/pg/engineering",
  "/study-abroad/spain/pg/computer-engineering",
  "/study-abroad/spain/pg/mechanical-engineering",
  "/study-abroad/spain/pg/civil-engineering",
  "/study-abroad/spain/pg/electrical-engineering",
  "/study-abroad/spain/pg/electronics-communication",
  "/study-abroad/spain/pg/chemical-engineering",
  "/study-abroad/spain/pg/aerospace-engineering",
  "/study-abroad/spain/pg/biomedical-engineering",
  "/study-abroad/spain/pg/automobile-engineering",
  "/study-abroad/spain/business-management",
  "/study-abroad/spain/mba",
  "/study-abroad/spain/executive-mba",
  "/study-abroad/spain/bba",
  "/study-abroad/spain/bbs",
  "/study-abroad/spain/mbs",
  "/study-abroad/spain/international-business",
  "/study-abroad/spain/hospitality-management",
  "/study-abroad/spain/architecture",
  "/study-abroad/spain/law",
  "/study-abroad/spain/language-courses",
  "/study-abroad/spain/summer-courses",
  "/study-abroad/spain/winter-courses",
// UK Routes
  "/study-abroad/uk/dentistry",
  "/study-abroad/uk/nursing",
  "/study-abroad/uk/pharmacy",
  "/study-abroad/uk/physiotherapy",
  "/study-abroad/uk/public-health",
  "/study-abroad/uk/biotechnology",
  "/study-abroad/uk/computer-science",
  "/study-abroad/uk/information-technology",
  "/study-abroad/uk/ug/engineering",
  "/study-abroad/uk/ug/computer-engineering",
  "/study-abroad/uk/ug/mechanical-engineering",
  "/study-abroad/uk/ug/civil-engineering",
  "/study-abroad/uk/ug/electrical-engineering",
  "/study-abroad/uk/ug/electronics-communication",
  "/study-abroad/uk/ug/chemical-engineering",
  "/study-abroad/uk/ug/aerospace-engineering",
  "/study-abroad/uk/ug/biomedical-engineering",
  "/study-abroad/uk/ug/automobile-engineering",
  "/study-abroad/uk/pg/engineering",
  "/study-abroad/uk/pg/computer-engineering",
  "/study-abroad/uk/pg/mechanical-engineering",
  "/study-abroad/uk/pg/civil-engineering",
  "/study-abroad/uk/pg/electrical-engineering",
  "/study-abroad/uk/pg/electronics-communication",
  "/study-abroad/uk/pg/chemical-engineering",
  "/study-abroad/uk/pg/aerospace-engineering",
  "/study-abroad/uk/pg/biomedical-engineering",
  "/study-abroad/uk/pg/automobile-engineering",
  "/study-abroad/uk/business-management",
  "/study-abroad/uk/mba",
  "/study-abroad/uk/executive-mba",
  "/study-abroad/uk/bba",
  "/study-abroad/uk/bbs",
  "/study-abroad/uk/mbs",
  "/study-abroad/uk/international-business",
  "/study-abroad/uk/marketing-management",
  "/study-abroad/uk/hospitality-management",
  "/study-abroad/uk/architecture",
  "/study-abroad/uk/law",
  "/study-abroad/uk/language-courses",
  "/study-abroad/uk/summer-courses",
  "/study-abroad/uk/winter-courses",
// Ireland Routes
  "/study-abroad/ireland/dentistry",
  "/study-abroad/ireland/nursing",
  "/study-abroad/ireland/pharmacy",
  "/study-abroad/ireland/physiotherapy",
  "/study-abroad/ireland/public-health",
  "/study-abroad/ireland/biotechnology",
  "/study-abroad/ireland/ug/engineering",
  "/study-abroad/ireland/ug/computer-engineering",
  "/study-abroad/ireland/ug/civil-engineering",
  "/study-abroad/ireland/ug/mechanical-engineering",
  "/study-abroad/ireland/computer-science",
  "/study-abroad/ireland/information-technology",
  "/study-abroad/ireland/ug/electrical-engineering",
  "/study-abroad/ireland/ug/electronics-communication",
  "/study-abroad/ireland/ug/chemical-engineering",
  "/study-abroad/ireland/ug/aerospace-engineering",
  "/study-abroad/ireland/ug/biomedical-engineering",
  "/study-abroad/ireland/ug/automobile-engineering",
  "/study-abroad/ireland/pg/engineering",
  "/study-abroad/ireland/pg/computer-engineering",
  "/study-abroad/ireland/pg/mechanical-engineering",
  "/study-abroad/ireland/pg/civil-engineering",
  "/study-abroad/ireland/pg/electrical-engineering",
  "/study-abroad/ireland/pg/electronics-communication",
  "/study-abroad/ireland/pg/chemical-engineering",
  "/study-abroad/ireland/pg/aerospace-engineering",
  "/study-abroad/ireland/pg/biomedical-engineering",
  "/study-abroad/ireland/pg/automobile-engineering",
  "/study-abroad/ireland/business-management",
  "/study-abroad/ireland/mba",
  "/study-abroad/ireland/executive-mba",
  "/study-abroad/ireland/bba",
  "/study-abroad/ireland/bbs",
  "/study-abroad/ireland/mbs",
  "/study-abroad/ireland/international-business",
  "/study-abroad/ireland/marketing-management",
  "/study-abroad/ireland/hospitality-management",
  "/study-abroad/ireland/architecture",
  "/study-abroad/ireland/law",
  "/study-abroad/ireland/language-courses",
  "/study-abroad/ireland/summer-courses",
  "/study-abroad/ireland/winter-courses",

  // Study Abroad - France (42 Courses)
  "/study-abroad/france/dentistry",
  "/study-abroad/france/nursing",
  "/study-abroad/france/pharmacy",
  "/study-abroad/france/physiotherapy",
  "/study-abroad/france/public-health",
  "/study-abroad/france/biotechnology",
  "/study-abroad/france/ug/engineering",
  "/study-abroad/france/ug/computer-engineering",
  "/study-abroad/france/ug/civil-engineering",
  "/study-abroad/france/ug/mechanical-engineering",
  "/study-abroad/france/computer-science",
  "/study-abroad/france/information-technology",
  "/study-abroad/france/ug/electrical-engineering",
  "/study-abroad/france/ug/electronics-communication",
  "/study-abroad/france/ug/chemical-engineering",
  "/study-abroad/france/ug/aerospace-engineering",
  "/study-abroad/france/ug/biomedical-engineering",
  "/study-abroad/france/ug/automobile-engineering",
  "/study-abroad/france/pg/engineering",
  "/study-abroad/france/pg/computer-engineering",
  "/study-abroad/france/pg/mechanical-engineering",
  "/study-abroad/france/pg/civil-engineering",
  "/study-abroad/france/pg/electrical-engineering",
  "/study-abroad/france/pg/electronics-communication",
  "/study-abroad/france/pg/chemical-engineering",
  "/study-abroad/france/pg/aerospace-engineering",
  "/study-abroad/france/pg/biomedical-engineering",
  "/study-abroad/france/pg/automobile-engineering",
  "/study-abroad/france/business-management",
  "/study-abroad/france/mba",
  "/study-abroad/france/executive-mba",
  "/study-abroad/france/bba",
  "/study-abroad/france/bbs",
  "/study-abroad/france/mbs",
  "/study-abroad/france/international-business",
  "/study-abroad/france/marketing-management",
  "/study-abroad/france/hospitality-management",
  "/study-abroad/france/architecture",
  "/study-abroad/france/law",
  "/study-abroad/france/language-courses",
  "/study-abroad/france/summer-courses",
  "/study-abroad/france/winter-courses",
  // Study Abroad - Germany (42 Courses)
  "/study-abroad/germany/dentistry",
  "/study-abroad/germany/nursing",
  "/study-abroad/germany/pharmacy",
  "/study-abroad/germany/physiotherapy",
  "/study-abroad/germany/public-health",
  "/study-abroad/germany/biotechnology",
  "/study-abroad/germany/ug/engineering",
  "/study-abroad/germany/ug/computer-engineering",
  "/study-abroad/germany/ug/civil-engineering",
  "/study-abroad/germany/ug/mechanical-engineering",
  "/study-abroad/germany/computer-science",
  "/study-abroad/germany/information-technology",
  "/study-abroad/germany/ug/electrical-engineering",
  "/study-abroad/germany/ug/electronics-communication",
  "/study-abroad/germany/ug/chemical-engineering",
  "/study-abroad/germany/ug/aerospace-engineering",
  "/study-abroad/germany/ug/biomedical-engineering",
  "/study-abroad/germany/ug/automobile-engineering",
  "/study-abroad/germany/pg/engineering",
  "/study-abroad/germany/pg/computer-engineering",
  "/study-abroad/germany/pg/mechanical-engineering",
  "/study-abroad/germany/pg/civil-engineering",
  "/study-abroad/germany/pg/electrical-engineering",
  "/study-abroad/germany/pg/electronics-communication",
  "/study-abroad/germany/pg/chemical-engineering",
  "/study-abroad/germany/pg/aerospace-engineering",
  "/study-abroad/germany/pg/biomedical-engineering",
  "/study-abroad/germany/pg/automobile-engineering",
  "/study-abroad/germany/business-management",
  "/study-abroad/germany/mba",
  "/study-abroad/germany/executive-mba",
  "/study-abroad/germany/bba",
  "/study-abroad/germany/bbs",
  "/study-abroad/germany/mbs",
  "/study-abroad/germany/international-business",
  "/study-abroad/germany/marketing-management",
  "/study-abroad/germany/hospitality-management",
  "/study-abroad/germany/architecture",
  "/study-abroad/germany/law",
  "/study-abroad/germany/language-courses",
  "/study-abroad/germany/summer-courses",
  "/study-abroad/germany/winter-courses",

  // Study Abroad - Switzerland
  "/study-abroad/switzerland/dentistry",
  "/study-abroad/switzerland/biotechnology",
  "/study-abroad/switzerland/nursing",
  "/study-abroad/switzerland/pharmacy",
  "/study-abroad/switzerland/physiotherapy",
  "/study-abroad/switzerland/public-health",
  "/study-abroad/switzerland/ug/engineering",
  "/study-abroad/switzerland/ug/aerospace-engineering",
  "/study-abroad/switzerland/ug/automobile-engineering",
  "/study-abroad/switzerland/ug/biomedical-engineering",
  "/study-abroad/switzerland/ug/chemical-engineering",
  "/study-abroad/switzerland/ug/civil-engineering",
  "/study-abroad/switzerland/ug/computer-engineering",
  "/study-abroad/switzerland/ug/electrical-engineering",
  "/study-abroad/switzerland/ug/electronics-communication",
  "/study-abroad/switzerland/ug/mechanical-engineering",
  "/study-abroad/switzerland/pg/engineering",
  "/study-abroad/switzerland/pg/aerospace-engineering",
  "/study-abroad/switzerland/pg/automobile-engineering",
  "/study-abroad/switzerland/pg/biomedical-engineering",
  "/study-abroad/switzerland/pg/chemical-engineering",
  "/study-abroad/switzerland/pg/civil-engineering",
  "/study-abroad/switzerland/pg/computer-engineering",
  "/study-abroad/switzerland/pg/electrical-engineering",
  "/study-abroad/switzerland/pg/electronics-communication",
  "/study-abroad/switzerland/pg/mechanical-engineering",
  "/study-abroad/switzerland/computer-science",
  "/study-abroad/switzerland/information-technology",
  "/study-abroad/switzerland/business-management",
  "/study-abroad/switzerland/bba",
  "/study-abroad/switzerland/bbs",
  "/study-abroad/switzerland/mba",
  "/study-abroad/switzerland/mbs",
  "/study-abroad/switzerland/executive-mba",
  "/study-abroad/switzerland/international-business",
  "/study-abroad/switzerland/hospitality-management",
  "/study-abroad/switzerland/architecture",
  "/study-abroad/switzerland/law",
  "/study-abroad/switzerland/language-courses",
  "/study-abroad/switzerland/summer-courses",
  "/study-abroad/switzerland/winter-courses",

  // Tests & Common Online Exams (17 routes)
  "/tests/which-test",
  "/tests/ielts",
  "/tests/toefl",
  "/tests/duolingo",
  "/tests/pte",
  "/tests/oet",
  "/tests/france",
  "/tests/germany",
  "/tests/spanish",
  "/tests/gre",
  "/tests/gmat",
  "/tests/sat",
  "/tests/act",
  "/tests/cmat",
  "/tests/imat",
  "/tests/ucat",
  "/tests/mcat",


  "/terms-conditions",
  "/privacy-policy",
  "/cookies-policy",
  "/landingpage",
];
