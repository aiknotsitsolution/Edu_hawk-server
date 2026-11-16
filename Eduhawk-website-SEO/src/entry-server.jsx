import React from "react";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import store from "./store.js";
import MainLayout from "./pages/layouts/MainLayout.jsx";
import { Route, Routes, Navigate } from "react-router-dom";

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
import BlogDetail from "./pages/Component/BlogDetail.jsx";
import AllIndia from "./pages/Country/India/AllIndia.jsx";
import Landingpage from "./pages/Landingpage/Landingpage.jsx";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy.jsx";
import CookiesPolicy from "./pages/CookiesPolicy/CookiesPolicy.jsx";
import MbbsAbroad from "./pages/Study Abroad/USA/MbbsAbroad.jsx";
import MedicalAbroad from "./pages/Study Abroad/USA/MedicalAbroad.jsx";
import DentistryAbroad from "./pages/Study Abroad/USA/MBBS Abroad/DentistryAbroad.jsx";
import NursingAbroad from "./pages/Study Abroad/USA/MBBS Abroad/NursingAbroad.jsx";
import PharmacyAbroad from "./pages/Study Abroad/USA/MBBS Abroad/PharmacyAbroad.jsx";
import PhysiotherapyAbroad from "./pages/Study Abroad/USA/MBBS Abroad/PhysiotherapyAbroad.jsx";
import PublicHealthAbroad from "./pages/Study Abroad/USA/MBBS Abroad/PublicHealth.jsx";
import BiotechnologyAbroad from "./pages/Study Abroad/USA/MBBS Abroad/Biotechnology.jsx";
import Engineering from "./pages/Study Abroad/USA/Engineering.jsx";
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
import AccountingFinance from "./pages/Study Abroad/USA/AccountingFinance.jsx";
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
import ComputerScienceUSA from "./pages/Study Abroad/USA/ComputerScience/computer-science.jsx";
import InformationTechnologyUSA from "./pages/Study Abroad/USA/InformationTechnology/information-technology.jsx";

// Finland SSR Imports
import ArchitectureFinland from "./pages/Study Abroad/Finland/Architecture/architecture.jsx";
import BBAFinland from "./pages/Study Abroad/Finland/BBA/bba.jsx";
import BBSFinland from "./pages/Study Abroad/Finland/BBS/bbs.jsx";
import BusinessManagementFinland from "./pages/Study Abroad/Finland/BusinessManagement/business-management.jsx";
import ComputerScienceFinland from "./pages/Study Abroad/Finland/ComputerScience/computer-science.jsx";
import InformationTechnologyStandaloneFinland from "./pages/Study Abroad/Finland/InformationTechnology/information-technology.jsx";
import InformationTechnologyFinland from "./pages/Study Abroad/Finland/Engineering/InformationTechnology.jsx";
import PostgraduateEngineeringFinland from "./pages/Study Abroad/Finland/Engineering/pg/postgraduate.jsx";
import MastersinAerospaceEngineeringPGFinland from "./pages/Study Abroad/Finland/Engineering/pg/pages/AerospaceEngineering.jsx";
import MastersinAutomobileEngineeringPGFinland from "./pages/Study Abroad/Finland/Engineering/pg/pages/AutomobileEngineering.jsx";
import MastersinBiomedicalEngineeringPGFinland from "./pages/Study Abroad/Finland/Engineering/pg/pages/BiomedicalEngineering.jsx";
import MastersinChemicalEngineeringPGFinland from "./pages/Study Abroad/Finland/Engineering/pg/pages/ChemicalEngineering.jsx";
import MastersinCivilEngineeringPGFinland from "./pages/Study Abroad/Finland/Engineering/pg/pages/CivilEngineering.jsx";
import MastersinComputerEngineeringPGFinland from "./pages/Study Abroad/Finland/Engineering/pg/pages/ComputerEngineering.jsx";
import MastersinComputerScienceEngineeringPGFinland from "./pages/Study Abroad/Finland/Engineering/pg/pages/ComputerScienceEngineering.jsx";
import MastersinElectricalEngineeringPGFinland from "./pages/Study Abroad/Finland/Engineering/pg/pages/ElectricalEngineering.jsx";
import MastersinElectronicsEngineeringPGFinland from "./pages/Study Abroad/Finland/Engineering/pg/pages/ElectronicsCommunication.jsx";
import MastersinMechanicalEngineeringPGFinland from "./pages/Study Abroad/Finland/Engineering/pg/pages/MechanicalEngineering.jsx";
import AerospaceRelatedEngineeringUGFinland from "./pages/Study Abroad/Finland/Engineering/ug/pages/AerospaceEngineering.jsx";
import AutomobileEngineeringUGFinland from "./pages/Study Abroad/Finland/Engineering/ug/pages/AutomobileEngineering.jsx";
import BiomedicalEngineeringUGFinland from "./pages/Study Abroad/Finland/Engineering/ug/pages/BiomedicalEngineering.jsx";
import ChemicalEngineeringUGFinland from "./pages/Study Abroad/Finland/Engineering/ug/pages/ChemicalEngineering.jsx";
import CivilEngineeringUGFinland from "./pages/Study Abroad/Finland/Engineering/ug/pages/CivilEngineering.jsx";
import ComputerEngineeringUGFinland from "./pages/Study Abroad/Finland/Engineering/ug/pages/ComputerEngineering.jsx";
import ComputerScienceEngineeringUGFinland from "./pages/Study Abroad/Finland/Engineering/ug/pages/ComputerScienceEngineering.jsx";
import ElectricalEngineeringUGFinland from "./pages/Study Abroad/Finland/Engineering/ug/pages/ElectricalEngineering.jsx";
import ElectronicsEngineeringUGFinland from "./pages/Study Abroad/Finland/Engineering/ug/pages/ElectronicsCommunication.jsx";
import MechanicalEngineeringUGFinland from "./pages/Study Abroad/Finland/Engineering/ug/pages/MechanicalEngineering.jsx";
import BachelorsinEngineeringFinland from "./pages/Study Abroad/Finland/Engineering/ug/undergraduate.jsx";
import ExecutiveMBAFinland from "./pages/Study Abroad/Finland/ExecutiveMBA/executive-mba.jsx";
import HospitalityManagementFinland from "./pages/Study Abroad/Finland/HospitalityManagement/hospitality-management.jsx";
import InternationalBusinessFinland from "./pages/Study Abroad/Finland/InternationalBusiness/international-business.jsx";
import LanguageCoursesFinland from "./pages/Study Abroad/Finland/LanguageCourses/language-courses.jsx";
import LawFinland from "./pages/Study Abroad/Finland/Law/law.jsx";
import MBAFinland from "./pages/Study Abroad/Finland/MBA/mba.jsx";
import BiotechnologyFinland from "./pages/Study Abroad/Finland/MBBS Abroad/Biotechnology.jsx";
import DentistryFinland from "./pages/Study Abroad/Finland/MBBS Abroad/DentistryAbroad.jsx";
import NursingFinland from "./pages/Study Abroad/Finland/MBBS Abroad/NursingAbroad.jsx";
import PharmacyFinland from "./pages/Study Abroad/Finland/MBBS Abroad/PharmacyAbroad.jsx";
import PhysiotherapyFinland from "./pages/Study Abroad/Finland/MBBS Abroad/PhysiotherapyAbroad.jsx";
import PublicHealthFinland from "./pages/Study Abroad/Finland/MBBS Abroad/PublicHealth.jsx";
import MBSFinland from "./pages/Study Abroad/Finland/MBS/mbs.jsx";
import SummerCoursesFinland from "./pages/Study Abroad/Finland/SummerCourses/summer-courses.jsx";
import WinterCoursesFinland from "./pages/Study Abroad/Finland/WinterCourses/winter-courses.jsx";
import NursingAustralia from "./pages/Study Abroad/Australia/MBBS Abroad/NursingAbroad.jsx";
import DentistryAustralia from "./pages/Study Abroad/Australia/MBBS Abroad/DentistryAbroad.jsx";
import PharmacyAustralia from "./pages/Study Abroad/Australia/MBBS Abroad/PharmacyAbroad.jsx";
import PhysiotherapyAustralia from "./pages/Study Abroad/Australia/MBBS Abroad/PhysiotherapyAbroad.jsx";
import PublicHealthAustralia from "./pages/Study Abroad/Australia/MBBS Abroad/PublicHealth.jsx";
import BiotechnologyAustralia from "./pages/Study Abroad/Australia/MBBS Abroad/Biotechnology.jsx";
import UndergraduateEngineeringAustralia from "./pages/Study Abroad/Australia/Engineering/ug/undergraduate.jsx";
import ComputerEngineeringUGAustralia from "./pages/Study Abroad/Australia/Engineering/ug/pages/ComputerEngineering.jsx";
import MechanicalEngineeringUGAustralia from "./pages/Study Abroad/Australia/Engineering/ug/pages/MechanicalEngineering.jsx";
import CivilEngineeringUGAustralia from "./pages/Study Abroad/Australia/Engineering/ug/pages/CivilEngineering.jsx";
import ElectricalEngineeringUGAustralia from "./pages/Study Abroad/Australia/Engineering/ug/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationUGAustralia from "./pages/Study Abroad/Australia/Engineering/ug/pages/ElectronicsCommunication.jsx";
import ChemicalEngineeringUGAustralia from "./pages/Study Abroad/Australia/Engineering/ug/pages/ChemicalEngineering.jsx";
import AerospaceEngineeringUGAustralia from "./pages/Study Abroad/Australia/Engineering/ug/pages/AerospaceEngineering.jsx";
import BiomedicalEngineeringUGAustralia from "./pages/Study Abroad/Australia/Engineering/ug/pages/BiomedicalEngineering.jsx";
import AutomobileEngineeringUGAustralia from "./pages/Study Abroad/Australia/Engineering/ug/pages/AutomobileEngineering.jsx";
import PostgraduateEngineeringAustralia from "./pages/Study Abroad/Australia/Engineering/pg/postgraduate.jsx";
import ComputerEngineeringPGAustralia from "./pages/Study Abroad/Australia/Engineering/pg/pages/ComputerEngineering.jsx";
import MechanicalEngineeringPGAustralia from "./pages/Study Abroad/Australia/Engineering/pg/pages/MechanicalEngineering.jsx";
import CivilEngineeringPGAustralia from "./pages/Study Abroad/Australia/Engineering/pg/pages/CivilEngineering.jsx";
import ElectricalEngineeringPGAustralia from "./pages/Study Abroad/Australia/Engineering/pg/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationPGAustralia from "./pages/Study Abroad/Australia/Engineering/pg/pages/ElectronicsCommunication.jsx";
import ChemicalEngineeringPGAustralia from "./pages/Study Abroad/Australia/Engineering/pg/pages/ChemicalEngineering.jsx";
import AerospaceEngineeringPGAustralia from "./pages/Study Abroad/Australia/Engineering/pg/pages/AerospaceEngineering.jsx";
import BiomedicalEngineeringPGAustralia from "./pages/Study Abroad/Australia/Engineering/pg/pages/BiomedicalEngineering.jsx";
import AutomobileEngineeringPGAustralia from "./pages/Study Abroad/Australia/Engineering/pg/pages/AutomobileEngineering.jsx";
import ComputerScienceAustralia from "./pages/Study Abroad/Australia/ComputerScience/computer-science.jsx";
import InformationTechnologyAustralia from "./pages/Study Abroad/Australia/InformationTechnology/information-technology.jsx";
import BusinessManagementAustralia from "./pages/Study Abroad/Australia/BusinessManagement/business-management.jsx";
import MBAAustralia from "./pages/Study Abroad/Australia/MBA/mba.jsx";
import ExecutiveMBAAustralia from "./pages/Study Abroad/Australia/ExecutiveMBA/executive-mba.jsx";
import BBAAustralia from "./pages/Study Abroad/Australia/BBA/bba.jsx";
import BBSAustralia from "./pages/Study Abroad/Australia/BBS/bbs.jsx";
import MBSAustralia from "./pages/Study Abroad/Australia/MBS/mbs.jsx";
import InternationalBusinessAustralia from "./pages/Study Abroad/Australia/InternationalBusiness/international-business.jsx";
import MarketingManagementAustralia from "./pages/Study Abroad/Australia/MarketingManagement/marketing-management.jsx";
import HospitalityManagementAustralia from "./pages/Study Abroad/Australia/HospitalityManagement/hospitality-management.jsx";
import ArchitectureAustralia from "./pages/Study Abroad/Australia/Architecture/architecture.jsx";
import LawAustralia from "./pages/Study Abroad/Australia/Law/law.jsx";
import LanguageCoursesAustralia from "./pages/Study Abroad/Australia/LanguageCourses/language-courses.jsx";
import SummerCoursesAustralia from "./pages/Study Abroad/Australia/SummerCourses/summer-courses.jsx";
import WinterCoursesAustralia from "./pages/Study Abroad/Australia/WinterCourses/winter-courses.jsx";

// Italy Routes
import DentistryAbroadItaly from "./pages/Study Abroad/Italy/MBBS Abroad/DentistryAbroad.jsx";
import NursingAbroadItaly from "./pages/Study Abroad/Italy/MBBS Abroad/NursingAbroad.jsx";
import PharmacyAbroadItaly from "./pages/Study Abroad/Italy/MBBS Abroad/PharmacyAbroad.jsx";
import PhysiotherapyAbroadItaly from "./pages/Study Abroad/Italy/MBBS Abroad/PhysiotherapyAbroad.jsx";
import PublicHealthItaly from "./pages/Study Abroad/Italy/MBBS Abroad/PublicHealth.jsx";
import BiotechnologyItaly from "./pages/Study Abroad/Italy/MBBS Abroad/Biotechnology.jsx";
import ComputerScienceItaly from "./pages/Study Abroad/Italy/ComputerScience/computer-science.jsx";
import InformationTechnologyItaly from "./pages/Study Abroad/Italy/InformationTechnology/information-technology.jsx";
import UndergraduateEngineeringItaly from "./pages/Study Abroad/Italy/Engineering/ug/undergraduate.jsx";
import ComputerEngineeringUGItaly from "./pages/Study Abroad/Italy/Engineering/ug/pages/ComputerEngineering.jsx";
import MechanicalEngineeringUGItaly from "./pages/Study Abroad/Italy/Engineering/ug/pages/MechanicalEngineering.jsx";
import CivilEngineeringUGItaly from "./pages/Study Abroad/Italy/Engineering/ug/pages/CivilEngineering.jsx";
import ElectricalEngineeringUGItaly from "./pages/Study Abroad/Italy/Engineering/ug/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationUGItaly from "./pages/Study Abroad/Italy/Engineering/ug/pages/ElectronicsCommunication.jsx";
import ChemicalEngineeringUGItaly from "./pages/Study Abroad/Italy/Engineering/ug/pages/ChemicalEngineering.jsx";
import AerospaceEngineeringUGItaly from "./pages/Study Abroad/Italy/Engineering/ug/pages/AerospaceEngineering.jsx";
import BiomedicalEngineeringUGItaly from "./pages/Study Abroad/Italy/Engineering/ug/pages/BiomedicalEngineering.jsx";
import AutomobileEngineeringUGItaly from "./pages/Study Abroad/Italy/Engineering/ug/pages/AutomobileEngineering.jsx";
import PostgraduateEngineeringItaly from "./pages/Study Abroad/Italy/Engineering/pg/postgraduate.jsx";
import ComputerEngineeringPGItaly from "./pages/Study Abroad/Italy/Engineering/pg/pages/ComputerEngineering.jsx";
import MechanicalEngineeringPGItaly from "./pages/Study Abroad/Italy/Engineering/pg/pages/MechanicalEngineering.jsx";
import CivilEngineeringPGItaly from "./pages/Study Abroad/Italy/Engineering/pg/pages/CivilEngineering.jsx";
import ElectricalEngineeringPGItaly from "./pages/Study Abroad/Italy/Engineering/pg/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationPGItaly from "./pages/Study Abroad/Italy/Engineering/pg/pages/ElectronicsCommunication.jsx";
import ChemicalEngineeringPGItaly from "./pages/Study Abroad/Italy/Engineering/pg/pages/ChemicalEngineering.jsx";
import AerospaceEngineeringPGItaly from "./pages/Study Abroad/Italy/Engineering/pg/pages/AerospaceEngineering.jsx";
import BiomedicalEngineeringPGItaly from "./pages/Study Abroad/Italy/Engineering/pg/pages/BiomedicalEngineering.jsx";
import AutomobileEngineeringPGItaly from "./pages/Study Abroad/Italy/Engineering/pg/pages/AutomobileEngineering.jsx";
import BusinessManagementItaly from "./pages/Study Abroad/Italy/BusinessManagement/business-management.jsx";
import MBAItaly from "./pages/Study Abroad/Italy/MBA/mba.jsx";
import ExecutiveMBAItaly from "./pages/Study Abroad/Italy/ExecutiveMBA/executive-mba.jsx";
import BBAItaly from "./pages/Study Abroad/Italy/BBA/bba.jsx";
import BBSItaly from "./pages/Study Abroad/Italy/BBS/bbs.jsx";
import MBSItaly from "./pages/Study Abroad/Italy/MBS/mbs.jsx";
import InternationalBusinessItaly from "./pages/Study Abroad/Italy/InternationalBusiness/international-business.jsx";
import HospitalityManagementItaly from "./pages/Study Abroad/Italy/HospitalityManagement/hospitality-management.jsx";
import ArchitectureItaly from "./pages/Study Abroad/Italy/Architecture/architecture.jsx";
import LawItaly from "./pages/Study Abroad/Italy/Law/law.jsx";
import LanguageCoursesItaly from "./pages/Study Abroad/Italy/LanguageCourses/language-courses.jsx";
import SummerCoursesItaly from "./pages/Study Abroad/Italy/SummerCourses/summer-courses.jsx";
import WinterCoursesItaly from "./pages/Study Abroad/Italy/WinterCourses/winter-courses.jsx";

// Canada Routes
import DentistryAbroadCanada from "./pages/Study Abroad/Canada/MBBS Abroad/DentistryAbroad.jsx";
import NursingAbroadCanada from "./pages/Study Abroad/Canada/MBBS Abroad/NursingAbroad.jsx";
import PharmacyAbroadCanada from "./pages/Study Abroad/Canada/MBBS Abroad/PharmacyAbroad.jsx";
import PhysiotherapyAbroadCanada from "./pages/Study Abroad/Canada/MBBS Abroad/PhysiotherapyAbroad.jsx";
import PublicHealthCanada from "./pages/Study Abroad/Canada/MBBS Abroad/PublicHealth.jsx";
import BiotechnologyCanada from "./pages/Study Abroad/Canada/MBBS Abroad/Biotechnology.jsx";
import ComputerScienceCanada from "./pages/Study Abroad/Canada/ComputerScience/computer-science.jsx";
import InformationTechnologyCanada from "./pages/Study Abroad/Canada/InformationTechnology/information-technology.jsx";
import UndergraduateEngineeringCanada from "./pages/Study Abroad/Canada/Engineering/ug/undergraduate.jsx";
import ComputerEngineeringUGCanada from "./pages/Study Abroad/Canada/Engineering/ug/pages/ComputerEngineering.jsx";
import MechanicalEngineeringUGCanada from "./pages/Study Abroad/Canada/Engineering/ug/pages/MechanicalEngineering.jsx";
import CivilEngineeringUGCanada from "./pages/Study Abroad/Canada/Engineering/ug/pages/CivilEngineering.jsx";
import ElectricalEngineeringUGCanada from "./pages/Study Abroad/Canada/Engineering/ug/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationUGCanada from "./pages/Study Abroad/Canada/Engineering/ug/pages/ElectronicsCommunication.jsx";
import ChemicalEngineeringUGCanada from "./pages/Study Abroad/Canada/Engineering/ug/pages/ChemicalEngineering.jsx";
import AerospaceEngineeringUGCanada from "./pages/Study Abroad/Canada/Engineering/ug/pages/AerospaceEngineering.jsx";
import BiomedicalEngineeringUGCanada from "./pages/Study Abroad/Canada/Engineering/ug/pages/BiomedicalEngineering.jsx";
import AutomobileEngineeringUGCanada from "./pages/Study Abroad/Canada/Engineering/ug/pages/AutomobileEngineering.jsx";
import PostgraduateEngineeringCanada from "./pages/Study Abroad/Canada/Engineering/pg/postgraduate.jsx";
import ComputerEngineeringPGCanada from "./pages/Study Abroad/Canada/Engineering/pg/pages/ComputerEngineering.jsx";
import MechanicalEngineeringPGCanada from "./pages/Study Abroad/Canada/Engineering/pg/pages/MechanicalEngineering.jsx";
import CivilEngineeringPGCanada from "./pages/Study Abroad/Canada/Engineering/pg/pages/CivilEngineering.jsx";
import ElectricalEngineeringPGCanada from "./pages/Study Abroad/Canada/Engineering/pg/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationPGCanada from "./pages/Study Abroad/Canada/Engineering/pg/pages/ElectronicsCommunication.jsx";
import ChemicalEngineeringPGCanada from "./pages/Study Abroad/Canada/Engineering/pg/pages/ChemicalEngineering.jsx";
import AerospaceEngineeringPGCanada from "./pages/Study Abroad/Canada/Engineering/pg/pages/AerospaceEngineering.jsx";
import BiomedicalEngineeringPGCanada from "./pages/Study Abroad/Canada/Engineering/pg/pages/BiomedicalEngineering.jsx";
import AutomobileEngineeringPGCanada from "./pages/Study Abroad/Canada/Engineering/pg/pages/AutomobileEngineering.jsx";
import BusinessManagementCanada from "./pages/Study Abroad/Canada/BusinessManagement/business-management.jsx";
import MBACanada from "./pages/Study Abroad/Canada/MBA/mba.jsx";
import ExecutiveMBACanada from "./pages/Study Abroad/Canada/ExecutiveMBA/executive-mba.jsx";
import BBACanada from "./pages/Study Abroad/Canada/BBA/bba.jsx";
import BBSCanada from "./pages/Study Abroad/Canada/BBS/bbs.jsx";
import MBSCanada from "./pages/Study Abroad/Canada/MBS/mbs.jsx";
import InternationalBusinessCanada from "./pages/Study Abroad/Canada/InternationalBusiness/international-business.jsx";
import MarketingManagementCanada from "./pages/Study Abroad/Canada/MarketingManagement/marketing-management.jsx";
import HospitalityManagementCanada from "./pages/Study Abroad/Canada/HospitalityManagement/hospitality-management.jsx";
import ArchitectureCanada from "./pages/Study Abroad/Canada/Architecture/architecture.jsx";
import LawCanada from "./pages/Study Abroad/Canada/Law/law.jsx";
import LanguageCoursesCanada from "./pages/Study Abroad/Canada/LanguageCourses/language-courses.jsx";
import SummerCoursesCanada from "./pages/Study Abroad/Canada/SummerCourses/summer-courses.jsx";
import WinterCoursesCanada from "./pages/Study Abroad/Canada/WinterCourses/winter-courses.jsx";

// Spain Routes
import DentistryAbroadSpain from "./pages/Study Abroad/Spain/MBBS Abroad/DentistryAbroad.jsx";
import NursingAbroadSpain from "./pages/Study Abroad/Spain/MBBS Abroad/NursingAbroad.jsx";
import PharmacyAbroadSpain from "./pages/Study Abroad/Spain/MBBS Abroad/PharmacyAbroad.jsx";
import PhysiotherapyAbroadSpain from "./pages/Study Abroad/Spain/MBBS Abroad/PhysiotherapyAbroad.jsx";
import PublicHealthSpain from "./pages/Study Abroad/Spain/MBBS Abroad/PublicHealth.jsx";
import BiotechnologySpain from "./pages/Study Abroad/Spain/MBBS Abroad/Biotechnology.jsx";
import ComputerScienceSpain from "./pages/Study Abroad/Spain/ComputerScience/computer-science.jsx";
import InformationTechnologySpain from "./pages/Study Abroad/Spain/InformationTechnology/information-technology.jsx";
import UndergraduateEngineeringSpain from "./pages/Study Abroad/Spain/Engineering/ug/undergraduate.jsx";
import ComputerEngineeringUGSpain from "./pages/Study Abroad/Spain/Engineering/ug/pages/ComputerEngineering.jsx";
import MechanicalEngineeringUGSpain from "./pages/Study Abroad/Spain/Engineering/ug/pages/MechanicalEngineering.jsx";
import CivilEngineeringUGSpain from "./pages/Study Abroad/Spain/Engineering/ug/pages/CivilEngineering.jsx";
import ElectricalEngineeringUGSpain from "./pages/Study Abroad/Spain/Engineering/ug/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationUGSpain from "./pages/Study Abroad/Spain/Engineering/ug/pages/ElectronicsCommunication.jsx";
import ChemicalEngineeringUGSpain from "./pages/Study Abroad/Spain/Engineering/ug/pages/ChemicalEngineering.jsx";
import AerospaceEngineeringUGSpain from "./pages/Study Abroad/Spain/Engineering/ug/pages/AerospaceEngineering.jsx";
import BiomedicalEngineeringUGSpain from "./pages/Study Abroad/Spain/Engineering/ug/pages/BiomedicalEngineering.jsx";
import AutomobileEngineeringUGSpain from "./pages/Study Abroad/Spain/Engineering/ug/pages/AutomobileEngineering.jsx";
import PostgraduateEngineeringSpain from "./pages/Study Abroad/Spain/Engineering/pg/postgraduate.jsx";
import ComputerEngineeringPGSpain from "./pages/Study Abroad/Spain/Engineering/pg/pages/ComputerEngineering.jsx";
import MechanicalEngineeringPGSpain from "./pages/Study Abroad/Spain/Engineering/pg/pages/MechanicalEngineering.jsx";
import CivilEngineeringPGSpain from "./pages/Study Abroad/Spain/Engineering/pg/pages/CivilEngineering.jsx";
import ElectricalEngineeringPGSpain from "./pages/Study Abroad/Spain/Engineering/pg/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationPGSpain from "./pages/Study Abroad/Spain/Engineering/pg/pages/ElectronicsCommunication.jsx";
import ChemicalEngineeringPGSpain from "./pages/Study Abroad/Spain/Engineering/pg/pages/ChemicalEngineering.jsx";
import AerospaceEngineeringPGSpain from "./pages/Study Abroad/Spain/Engineering/pg/pages/AerospaceEngineering.jsx";
import BiomedicalEngineeringPGSpain from "./pages/Study Abroad/Spain/Engineering/pg/pages/BiomedicalEngineering.jsx";
import AutomobileEngineeringPGSpain from "./pages/Study Abroad/Spain/Engineering/pg/pages/AutomobileEngineering.jsx";
import BusinessManagementSpain from "./pages/Study Abroad/Spain/BusinessManagement/business-management.jsx";
import MBASpain from "./pages/Study Abroad/Spain/MBA/mba.jsx";
import ExecutiveMBASpain from "./pages/Study Abroad/Spain/ExecutiveMBA/executive-mba.jsx";
import BBASpain from "./pages/Study Abroad/Spain/BBA/bba.jsx";
import BBSSpain from "./pages/Study Abroad/Spain/BBS/bbs.jsx";
import MBSSpain from "./pages/Study Abroad/Spain/MBS/mbs.jsx";
import InternationalBusinessSpain from "./pages/Study Abroad/Spain/InternationalBusiness/international-business.jsx";
import HospitalityManagementSpain from "./pages/Study Abroad/Spain/HospitalityManagement/hospitality-management.jsx";
import ArchitectureSpain from "./pages/Study Abroad/Spain/Architecture/architecture.jsx";
import LawSpain from "./pages/Study Abroad/Spain/Law/law.jsx";
import LanguageCoursesSpain from "./pages/Study Abroad/Spain/LanguageCourses/language-courses.jsx";
import SummerCoursesSpain from "./pages/Study Abroad/Spain/SummerCourses/summer-courses.jsx";
import WinterCoursesSpain from "./pages/Study Abroad/Spain/WinterCourses/winter-courses.jsx";
// UK Routes
import DentistryAbroadUK from "./pages/Study Abroad/UK/MBBS Abroad/DentistryAbroad.jsx";
import NursingAbroadUK from "./pages/Study Abroad/UK/MBBS Abroad/NursingAbroad.jsx";
import PharmacyAbroadUK from "./pages/Study Abroad/UK/MBBS Abroad/PharmacyAbroad.jsx";
import PhysiotherapyAbroadUK from "./pages/Study Abroad/UK/MBBS Abroad/PhysiotherapyAbroad.jsx";
import PublicHealthUK from "./pages/Study Abroad/UK/MBBS Abroad/PublicHealth.jsx";
import BiotechnologyUK from "./pages/Study Abroad/UK/MBBS Abroad/Biotechnology.jsx";
import ComputerScienceUK from "./pages/Study Abroad/UK/ComputerScience/computer-science.jsx";
import InformationTechnologyUK from "./pages/Study Abroad/UK/InformationTechnology/information-technology.jsx";
import UndergraduateEngineeringUK from "./pages/Study Abroad/UK/Engineering/ug/undergraduate.jsx";
import ComputerEngineeringUGUK from "./pages/Study Abroad/UK/Engineering/ug/pages/ComputerEngineering.jsx";
import MechanicalEngineeringUGUK from "./pages/Study Abroad/UK/Engineering/ug/pages/MechanicalEngineering.jsx";
import CivilEngineeringUGUK from "./pages/Study Abroad/UK/Engineering/ug/pages/CivilEngineering.jsx";
import ElectricalEngineeringUGUK from "./pages/Study Abroad/UK/Engineering/ug/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationUGUK from "./pages/Study Abroad/UK/Engineering/ug/pages/ElectronicsCommunication.jsx";
import ChemicalEngineeringUGUK from "./pages/Study Abroad/UK/Engineering/ug/pages/ChemicalEngineering.jsx";
import AerospaceEngineeringUGUK from "./pages/Study Abroad/UK/Engineering/ug/pages/AerospaceEngineering.jsx";
import BiomedicalEngineeringUGUK from "./pages/Study Abroad/UK/Engineering/ug/pages/BiomedicalEngineering.jsx";
import AutomobileEngineeringUGUK from "./pages/Study Abroad/UK/Engineering/ug/pages/AutomobileEngineering.jsx";
import PostgraduateEngineeringUK from "./pages/Study Abroad/UK/Engineering/pg/postgraduate.jsx";
import ComputerEngineeringPGUK from "./pages/Study Abroad/UK/Engineering/pg/pages/ComputerEngineering.jsx";
import MechanicalEngineeringPGUK from "./pages/Study Abroad/UK/Engineering/pg/pages/MechanicalEngineering.jsx";
import CivilEngineeringPGUK from "./pages/Study Abroad/UK/Engineering/pg/pages/CivilEngineering.jsx";
import ElectricalEngineeringPGUK from "./pages/Study Abroad/UK/Engineering/pg/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationPGUK from "./pages/Study Abroad/UK/Engineering/pg/pages/ElectronicsCommunication.jsx";
import ChemicalEngineeringPGUK from "./pages/Study Abroad/UK/Engineering/pg/pages/ChemicalEngineering.jsx";
import AerospaceEngineeringPGUK from "./pages/Study Abroad/UK/Engineering/pg/pages/AerospaceEngineering.jsx";
import BiomedicalEngineeringPGUK from "./pages/Study Abroad/UK/Engineering/pg/pages/BiomedicalEngineering.jsx";
import AutomobileEngineeringPGUK from "./pages/Study Abroad/UK/Engineering/pg/pages/AutomobileEngineering.jsx";
import BusinessManagementUK from "./pages/Study Abroad/UK/BusinessManagement/business-management.jsx";
import MBAUK from "./pages/Study Abroad/UK/MBA/mba.jsx";
import ExecutiveMBAUK from "./pages/Study Abroad/UK/ExecutiveMBA/executive-mba.jsx";
import BBAUK from "./pages/Study Abroad/UK/BBA/bba.jsx";
import BBSUK from "./pages/Study Abroad/UK/BBS/bbs.jsx";
import MBSUK from "./pages/Study Abroad/UK/MBS/mbs.jsx";
import InternationalBusinessUK from "./pages/Study Abroad/UK/InternationalBusiness/international-business.jsx";
import MarketingManagementUK from "./pages/Study Abroad/UK/MarketingManagement/marketing-management.jsx";
import HospitalityManagementUK from "./pages/Study Abroad/UK/HospitalityManagement/hospitality-management.jsx";
import ArchitectureUK from "./pages/Study Abroad/UK/Architecture/architecture.jsx";
import LawUK from "./pages/Study Abroad/UK/Law/law.jsx";
import LanguageCoursesUK from "./pages/Study Abroad/UK/LanguageCourses/language-courses.jsx";
import SummerCoursesUK from "./pages/Study Abroad/UK/SummerCourses/summer-courses.jsx";
import WinterCoursesUK from "./pages/Study Abroad/UK/WinterCourses/winter-courses.jsx";
// Ireland Routes
import DentistryAbroadIreland from "./pages/Study Abroad/Ireland/MBBS Abroad/DentistryAbroad.jsx";
import NursingAbroadIreland from "./pages/Study Abroad/Ireland/MBBS Abroad/NursingAbroad.jsx";
import PharmacyAbroadIreland from "./pages/Study Abroad/Ireland/MBBS Abroad/PharmacyAbroad.jsx";
import PhysiotherapyAbroadIreland from "./pages/Study Abroad/Ireland/MBBS Abroad/PhysiotherapyAbroad.jsx";
import PublicHealthIreland from "./pages/Study Abroad/Ireland/MBBS Abroad/PublicHealth.jsx";
import BiotechnologyIreland from "./pages/Study Abroad/Ireland/MBBS Abroad/Biotechnology.jsx";
import UndergraduateEngineeringIreland from "./pages/Study Abroad/Ireland/Engineering/ug/undergraduate.jsx";
import ComputerEngineeringUGIreland from "./pages/Study Abroad/Ireland/Engineering/ug/pages/ComputerEngineering.jsx";
import CivilEngineeringUGIreland from "./pages/Study Abroad/Ireland/Engineering/ug/pages/CivilEngineering.jsx";
import MechanicalEngineeringUGIreland from "./pages/Study Abroad/Ireland/Engineering/ug/pages/MechanicalEngineering.jsx";
import ComputerScienceIreland from "./pages/Study Abroad/Ireland/ComputerScience/computer-science.jsx";
import InformationTechnologyIreland from "./pages/Study Abroad/Ireland/InformationTechnology/information-technology.jsx";
import ElectricalEngineeringUGIreland from "./pages/Study Abroad/Ireland/Engineering/ug/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationUGIreland from "./pages/Study Abroad/Ireland/Engineering/ug/pages/ElectronicsCommunication.jsx";
import ChemicalEngineeringUGIreland from "./pages/Study Abroad/Ireland/Engineering/ug/pages/ChemicalEngineering.jsx";
import AerospaceEngineeringUGIreland from "./pages/Study Abroad/Ireland/Engineering/ug/pages/AerospaceEngineering.jsx";
import BiomedicalEngineeringUGIreland from "./pages/Study Abroad/Ireland/Engineering/ug/pages/BiomedicalEngineering.jsx";
import AutomobileEngineeringUGIreland from "./pages/Study Abroad/Ireland/Engineering/ug/pages/AutomobileEngineering.jsx";
import PostgraduateEngineeringIreland from "./pages/Study Abroad/Ireland/Engineering/pg/postgraduate.jsx";
import ComputerEngineeringPGIreland from "./pages/Study Abroad/Ireland/Engineering/pg/pages/ComputerEngineering.jsx";
import MechanicalEngineeringPGIreland from "./pages/Study Abroad/Ireland/Engineering/pg/pages/MechanicalEngineering.jsx";
import CivilEngineeringPGIreland from "./pages/Study Abroad/Ireland/Engineering/pg/pages/CivilEngineering.jsx";
import ElectricalEngineeringPGIreland from "./pages/Study Abroad/Ireland/Engineering/pg/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationPGIreland from "./pages/Study Abroad/Ireland/Engineering/pg/pages/ElectronicsCommunication.jsx";
import ChemicalEngineeringPGIreland from "./pages/Study Abroad/Ireland/Engineering/pg/pages/ChemicalEngineering.jsx";
import AerospaceEngineeringPGIreland from "./pages/Study Abroad/Ireland/Engineering/pg/pages/AerospaceEngineering.jsx";
import BiomedicalEngineeringPGIreland from "./pages/Study Abroad/Ireland/Engineering/pg/pages/BiomedicalEngineering.jsx";
import AutomobileEngineeringPGIreland from "./pages/Study Abroad/Ireland/Engineering/pg/pages/AutomobileEngineering.jsx";
import BusinessManagementIreland from "./pages/Study Abroad/Ireland/BusinessManagement/business-management.jsx";
import MBAIreland from "./pages/Study Abroad/Ireland/MBA/mba.jsx";
import ExecutiveMBAIreland from "./pages/Study Abroad/Ireland/ExecutiveMBA/executive-mba.jsx";
import BBAIreland from "./pages/Study Abroad/Ireland/BBA/bba.jsx";
import BBSIreland from "./pages/Study Abroad/Ireland/BBS/bbs.jsx";
import MBSIreland from "./pages/Study Abroad/Ireland/MBS/mbs.jsx";
import InternationalBusinessIreland from "./pages/Study Abroad/Ireland/InternationalBusiness/international-business.jsx";
import MarketingManagementIreland from "./pages/Study Abroad/Ireland/MarketingManagement/marketing-management.jsx";
import HospitalityManagementIreland from "./pages/Study Abroad/Ireland/HospitalityManagement/hospitality-management.jsx";
import ArchitectureIreland from "./pages/Study Abroad/Ireland/Architecture/architecture.jsx";
import LawIreland from "./pages/Study Abroad/Ireland/Law/law.jsx";
import LanguageCoursesIreland from "./pages/Study Abroad/Ireland/LanguageCourses/language-courses.jsx";
import SummerCoursesIreland from "./pages/Study Abroad/Ireland/SummerCourses/summer-courses.jsx";
import WinterCoursesIreland from "./pages/Study Abroad/Ireland/WinterCourses/winter-courses.jsx";
// Study Abroad - France (42 Courses)
import DentistryAbroadFrance from "./pages/Study Abroad/France/MBBS Abroad/DentistryAbroad.jsx";
import NursingAbroadFrance from "./pages/Study Abroad/France/MBBS Abroad/NursingAbroad.jsx";
import PharmacyAbroadFrance from "./pages/Study Abroad/France/MBBS Abroad/PharmacyAbroad.jsx";
import PhysiotherapyAbroadFrance from "./pages/Study Abroad/France/MBBS Abroad/PhysiotherapyAbroad.jsx";
import PublicHealthFrance from "./pages/Study Abroad/France/MBBS Abroad/PublicHealth.jsx";
import BiotechnologyFrance from "./pages/Study Abroad/France/MBBS Abroad/Biotechnology.jsx";
import UndergraduateEngineeringFrance from "./pages/Study Abroad/France/Engineering/ug/undergraduate.jsx";
import ComputerEngineeringUGFrance from "./pages/Study Abroad/France/Engineering/ug/pages/ComputerEngineering.jsx";
import CivilEngineeringUGFrance from "./pages/Study Abroad/France/Engineering/ug/pages/CivilEngineering.jsx";
import MechanicalEngineeringUGFrance from "./pages/Study Abroad/France/Engineering/ug/pages/MechanicalEngineering.jsx";
import ComputerScienceFrance from "./pages/Study Abroad/France/ComputerScience/computer-science.jsx";
import InformationTechnologyFrance from "./pages/Study Abroad/France/InformationTechnology/information-technology.jsx";
import ElectricalEngineeringUGFrance from "./pages/Study Abroad/France/Engineering/ug/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationUGFrance from "./pages/Study Abroad/France/Engineering/ug/pages/ElectronicsCommunication.jsx";
import ChemicalEngineeringUGFrance from "./pages/Study Abroad/France/Engineering/ug/pages/ChemicalEngineering.jsx";
import AerospaceEngineeringUGFrance from "./pages/Study Abroad/France/Engineering/ug/pages/AerospaceEngineering.jsx";
import BiomedicalEngineeringUGFrance from "./pages/Study Abroad/France/Engineering/ug/pages/BiomedicalEngineering.jsx";
import AutomobileEngineeringUGFrance from "./pages/Study Abroad/France/Engineering/ug/pages/AutomobileEngineering.jsx";
import PostgraduateEngineeringFrance from "./pages/Study Abroad/France/Engineering/pg/postgraduate.jsx";
import ComputerEngineeringPGFrance from "./pages/Study Abroad/France/Engineering/pg/pages/ComputerEngineering.jsx";
import MechanicalEngineeringPGFrance from "./pages/Study Abroad/France/Engineering/pg/pages/MechanicalEngineering.jsx";
import CivilEngineeringPGFrance from "./pages/Study Abroad/France/Engineering/pg/pages/CivilEngineering.jsx";
import ElectricalEngineeringPGFrance from "./pages/Study Abroad/France/Engineering/pg/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationPGFrance from "./pages/Study Abroad/France/Engineering/pg/pages/ElectronicsCommunication.jsx";
import ChemicalEngineeringPGFrance from "./pages/Study Abroad/France/Engineering/pg/pages/ChemicalEngineering.jsx";
import AerospaceEngineeringPGFrance from "./pages/Study Abroad/France/Engineering/pg/pages/AerospaceEngineering.jsx";
import BiomedicalEngineeringPGFrance from "./pages/Study Abroad/France/Engineering/pg/pages/BiomedicalEngineering.jsx";
import AutomobileEngineeringPGFrance from "./pages/Study Abroad/France/Engineering/pg/pages/AutomobileEngineering.jsx";
import BusinessManagementFrance from "./pages/Study Abroad/France/BusinessManagement/business-management.jsx";
import MBAFrance from "./pages/Study Abroad/France/MBA/mba.jsx";
import ExecutiveMBAFrance from "./pages/Study Abroad/France/ExecutiveMBA/executive-mba.jsx";
import BBAFrance from "./pages/Study Abroad/France/BBA/bba.jsx";
import BBSFrance from "./pages/Study Abroad/France/BBS/bbs.jsx";
import MBSFrance from "./pages/Study Abroad/France/MBS/mbs.jsx";
import InternationalBusinessFrance from "./pages/Study Abroad/France/InternationalBusiness/international-business.jsx";
import MarketingManagementFrance from "./pages/Study Abroad/France/MarketingManagement/marketing-management.jsx";
import HospitalityManagementFrance from "./pages/Study Abroad/France/HospitalityManagement/hospitality-management.jsx";
import ArchitectureFrance from "./pages/Study Abroad/France/Architecture/architecture.jsx";
import LawFrance from "./pages/Study Abroad/France/Law/law.jsx";
import LanguageCoursesFrance from "./pages/Study Abroad/France/LanguageCourses/language-courses.jsx";
import SummerCoursesFrance from "./pages/Study Abroad/France/SummerCourses/summer-courses.jsx";
import WinterCoursesFrance from "./pages/Study Abroad/France/WinterCourses/winter-courses.jsx";
// Study Abroad - Germany (42 Courses)
import DentistryAbroadGermany from "./pages/Study Abroad/Germany/MBBS Abroad/DentistryAbroad.jsx";
import NursingAbroadGermany from "./pages/Study Abroad/Germany/MBBS Abroad/NursingAbroad.jsx";
import PharmacyAbroadGermany from "./pages/Study Abroad/Germany/MBBS Abroad/PharmacyAbroad.jsx";
import PhysiotherapyAbroadGermany from "./pages/Study Abroad/Germany/MBBS Abroad/PhysiotherapyAbroad.jsx";
import PublicHealthGermany from "./pages/Study Abroad/Germany/MBBS Abroad/PublicHealth.jsx";
import BiotechnologyGermany from "./pages/Study Abroad/Germany/MBBS Abroad/Biotechnology.jsx";
import UndergraduateEngineeringGermany from "./pages/Study Abroad/Germany/Engineering/ug/undergraduate.jsx";
import ComputerEngineeringUGGermany from "./pages/Study Abroad/Germany/Engineering/ug/pages/ComputerEngineering.jsx";
import CivilEngineeringUGGermany from "./pages/Study Abroad/Germany/Engineering/ug/pages/CivilEngineering.jsx";
import MechanicalEngineeringUGGermany from "./pages/Study Abroad/Germany/Engineering/ug/pages/MechanicalEngineering.jsx";
import ComputerScienceGermany from "./pages/Study Abroad/Germany/ComputerScience/ComputerScience.jsx";
import InformationTechnologyGermany from "./pages/Study Abroad/Germany/InformationTechnology/InformationTechnology.jsx";
import ElectricalEngineeringUGGermany from "./pages/Study Abroad/Germany/Engineering/ug/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationUGGermany from "./pages/Study Abroad/Germany/Engineering/ug/pages/ElectronicsCommunication.jsx";
import ChemicalEngineeringUGGermany from "./pages/Study Abroad/Germany/Engineering/ug/pages/ChemicalEngineering.jsx";
import AerospaceEngineeringUGGermany from "./pages/Study Abroad/Germany/Engineering/ug/pages/AerospaceEngineering.jsx";
import BiomedicalEngineeringUGGermany from "./pages/Study Abroad/Germany/Engineering/ug/pages/BiomedicalEngineering.jsx";
import AutomobileEngineeringUGGermany from "./pages/Study Abroad/Germany/Engineering/ug/pages/AutomobileEngineering.jsx";
import PostgraduateEngineeringGermany from "./pages/Study Abroad/Germany/Engineering/pg/postgraduate.jsx";
import ComputerEngineeringPGGermany from "./pages/Study Abroad/Germany/Engineering/pg/pages/ComputerEngineering.jsx";
import MechanicalEngineeringPGGermany from "./pages/Study Abroad/Germany/Engineering/pg/pages/MechanicalEngineering.jsx";
import CivilEngineeringPGGermany from "./pages/Study Abroad/Germany/Engineering/pg/pages/CivilEngineering.jsx";
import ElectricalEngineeringPGGermany from "./pages/Study Abroad/Germany/Engineering/pg/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationPGGermany from "./pages/Study Abroad/Germany/Engineering/pg/pages/ElectronicsCommunication.jsx";
import ChemicalEngineeringPGGermany from "./pages/Study Abroad/Germany/Engineering/pg/pages/ChemicalEngineering.jsx";
import AerospaceEngineeringPGGermany from "./pages/Study Abroad/Germany/Engineering/pg/pages/AerospaceEngineering.jsx";
import BiomedicalEngineeringPGGermany from "./pages/Study Abroad/Germany/Engineering/pg/pages/BiomedicalEngineering.jsx";
import AutomobileEngineeringPGGermany from "./pages/Study Abroad/Germany/Engineering/pg/pages/AutomobileEngineering.jsx";
import BusinessManagementGermany from "./pages/Study Abroad/Germany/BusinessManagement/BusinessManagement.jsx";
import MBAGermany from "./pages/Study Abroad/Germany/MBA/MBA.jsx";
import ExecutiveMBAGermany from "./pages/Study Abroad/Germany/ExecutiveMBA/ExecutiveMBA.jsx";
import BBAGermany from "./pages/Study Abroad/Germany/BBA/BBA.jsx";
import BBSGermany from "./pages/Study Abroad/Germany/BBS/BBS.jsx";
import MBSGermany from "./pages/Study Abroad/Germany/MBS/MBS.jsx";
import InternationalBusinessGermany from "./pages/Study Abroad/Germany/InternationalBusiness/InternationalBusiness.jsx";
import MarketingManagementGermany from "./pages/Study Abroad/Germany/MarketingManagement/MarketingManagement.jsx";
import HospitalityManagementGermany from "./pages/Study Abroad/Germany/HospitalityManagement/HospitalityManagement.jsx";
import ArchitectureGermany from "./pages/Study Abroad/Germany/Architecture/Architecture.jsx";
import LawGermany from "./pages/Study Abroad/Germany/Law/Law.jsx";
import LanguageCoursesGermany from "./pages/Study Abroad/Germany/LanguageCourses/LanguageCourses.jsx";
import SummerCoursesGermany from "./pages/Study Abroad/Germany/SummerCourses/SummerCourses.jsx";
import WinterCoursesGermany from "./pages/Study Abroad/Germany/WinterCourses/WinterCourses.jsx";
// Study Abroad - Switzerland
import DentistryAbroadSwitzerland from "./pages/Study Abroad/Switzerland/MBBS Abroad/DentistryAbroad.jsx";
import BiotechnologySwitzerland from "./pages/Study Abroad/Switzerland/MBBS Abroad/Biotechnology.jsx";
import NursingAbroadSwitzerland from "./pages/Study Abroad/Switzerland/MBBS Abroad/NursingAbroad.jsx";
import PharmacyAbroadSwitzerland from "./pages/Study Abroad/Switzerland/MBBS Abroad/PharmacyAbroad.jsx";
import PhysiotherapyAbroadSwitzerland from "./pages/Study Abroad/Switzerland/MBBS Abroad/PhysiotherapyAbroad.jsx";
import PublicHealthSwitzerland from "./pages/Study Abroad/Switzerland/MBBS Abroad/PublicHealth.jsx";
import UndergraduateEngineeringSwitzerland from "./pages/Study Abroad/Switzerland/Engineering/ug/undergraduate.jsx";
import AerospaceEngineeringUGSwitzerland from "./pages/Study Abroad/Switzerland/Engineering/ug/pages/AerospaceEngineering.jsx";
import AutomobileEngineeringUGSwitzerland from "./pages/Study Abroad/Switzerland/Engineering/ug/pages/AutomobileEngineering.jsx";
import BiomedicalEngineeringUGSwitzerland from "./pages/Study Abroad/Switzerland/Engineering/ug/pages/BiomedicalEngineering.jsx";
import ChemicalEngineeringUGSwitzerland from "./pages/Study Abroad/Switzerland/Engineering/ug/pages/ChemicalEngineering.jsx";
import CivilEngineeringUGSwitzerland from "./pages/Study Abroad/Switzerland/Engineering/ug/pages/CivilEngineering.jsx";
import ComputerEngineeringUGSwitzerland from "./pages/Study Abroad/Switzerland/Engineering/ug/pages/ComputerEngineering.jsx";
import ElectricalEngineeringUGSwitzerland from "./pages/Study Abroad/Switzerland/Engineering/ug/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationUGSwitzerland from "./pages/Study Abroad/Switzerland/Engineering/ug/pages/ElectronicsCommunication.jsx";
import MechanicalEngineeringUGSwitzerland from "./pages/Study Abroad/Switzerland/Engineering/ug/pages/MechanicalEngineering.jsx";
import PostgraduateEngineeringSwitzerland from "./pages/Study Abroad/Switzerland/Engineering/pg/postgraduate.jsx";
import AerospaceEngineeringPGSwitzerland from "./pages/Study Abroad/Switzerland/Engineering/pg/pages/AerospaceEngineering.jsx";
import AutomobileEngineeringPGSwitzerland from "./pages/Study Abroad/Switzerland/Engineering/pg/pages/AutomobileEngineering.jsx";
import BiomedicalEngineeringPGSwitzerland from "./pages/Study Abroad/Switzerland/Engineering/pg/pages/BiomedicalEngineering.jsx";
import ChemicalEngineeringPGSwitzerland from "./pages/Study Abroad/Switzerland/Engineering/pg/pages/ChemicalEngineering.jsx";
import CivilEngineeringPGSwitzerland from "./pages/Study Abroad/Switzerland/Engineering/pg/pages/CivilEngineering.jsx";
import ComputerEngineeringPGSwitzerland from "./pages/Study Abroad/Switzerland/Engineering/pg/pages/ComputerEngineering.jsx";
import ElectricalEngineeringPGSwitzerland from "./pages/Study Abroad/Switzerland/Engineering/pg/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationPGSwitzerland from "./pages/Study Abroad/Switzerland/Engineering/pg/pages/ElectronicsCommunication.jsx";
import MechanicalEngineeringPGSwitzerland from "./pages/Study Abroad/Switzerland/Engineering/pg/pages/MechanicalEngineering.jsx";
import ComputerScienceSwitzerland from "./pages/Study Abroad/Switzerland/ComputerScience/ComputerScience.jsx";
import InformationTechnologySwitzerland from "./pages/Study Abroad/Switzerland/InformationTechnology/InformationTechnology.jsx";
import BusinessManagementSwitzerland from "./pages/Study Abroad/Switzerland/BusinessManagement/BusinessManagement.jsx";
import BBASwitzerland from "./pages/Study Abroad/Switzerland/BBA/BBA.jsx";
import BBSSwitzerland from "./pages/Study Abroad/Switzerland/BBS/BBS.jsx";
import MBASwitzerland from "./pages/Study Abroad/Switzerland/MBA/MBA.jsx";
import MBSSwitzerland from "./pages/Study Abroad/Switzerland/MBS/MBS.jsx";
import ExecutiveMBASwitzerland from "./pages/Study Abroad/Switzerland/ExecutiveMBA/ExecutiveMBA.jsx";
import InternationalBusinessSwitzerland from "./pages/Study Abroad/Switzerland/InternationalBusiness/InternationalBusiness.jsx";
import HospitalityManagementSwitzerland from "./pages/Study Abroad/Switzerland/HospitalityManagement/HospitalityManagement.jsx";
import ArchitectureSwitzerland from "./pages/Study Abroad/Switzerland/Architecture/Architecture.jsx";
import LawSwitzerland from "./pages/Study Abroad/Switzerland/Law/Law.jsx";
import LanguageCoursesSwitzerland from "./pages/Study Abroad/Switzerland/LanguageCourses/LanguageCourses.jsx";
import SummerCoursesSwitzerland from "./pages/Study Abroad/Switzerland/SummerCourses/SummerCourses.jsx";
import WinterCoursesSwitzerland from "./pages/Study Abroad/Switzerland/WinterCourses/WinterCourses.jsx";

// Study Abroad - Mauritius
import DentistryMauritius from "./pages/Study Abroad/Mauritius/MBBS Abroad/DentistryAbroad.jsx";
import BiotechnologyMauritius from "./pages/Study Abroad/Mauritius/MBBS Abroad/Biotechnology.jsx";
import NursingMauritius from "./pages/Study Abroad/Mauritius/MBBS Abroad/NursingAbroad.jsx";
import PharmacyMauritius from "./pages/Study Abroad/Mauritius/MBBS Abroad/PharmacyAbroad.jsx";
import PhysiotherapyMauritius from "./pages/Study Abroad/Mauritius/MBBS Abroad/PhysiotherapyAbroad.jsx";
import PublicHealthMauritius from "./pages/Study Abroad/Mauritius/MBBS Abroad/PublicHealth.jsx";
import UndergraduateEngineeringMauritius from "./pages/Study Abroad/Mauritius/Engineering/ug/undergraduate.jsx";
import AerospaceEngineeringUGMauritius from "./pages/Study Abroad/Mauritius/Engineering/ug/pages/AerospaceEngineering.jsx";
import AutomobileEngineeringUGMauritius from "./pages/Study Abroad/Mauritius/Engineering/ug/pages/AutomobileEngineering.jsx";
import BiomedicalEngineeringUGMauritius from "./pages/Study Abroad/Mauritius/Engineering/ug/pages/BiomedicalEngineering.jsx";
import ChemicalEngineeringUGMauritius from "./pages/Study Abroad/Mauritius/Engineering/ug/pages/ChemicalEngineering.jsx";
import CivilEngineeringUGMauritius from "./pages/Study Abroad/Mauritius/Engineering/ug/pages/CivilEngineering.jsx";
import ComputerEngineeringUGMauritius from "./pages/Study Abroad/Mauritius/Engineering/ug/pages/ComputerEngineering.jsx";
import ElectricalEngineeringUGMauritius from "./pages/Study Abroad/Mauritius/Engineering/ug/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationUGMauritius from "./pages/Study Abroad/Mauritius/Engineering/ug/pages/ElectronicsCommunication.jsx";
import MechanicalEngineeringUGMauritius from "./pages/Study Abroad/Mauritius/Engineering/ug/pages/MechanicalEngineering.jsx";
import PostgraduateEngineeringMauritius from "./pages/Study Abroad/Mauritius/Engineering/pg/postgraduate.jsx";
import AerospaceEngineeringPGMauritius from "./pages/Study Abroad/Mauritius/Engineering/pg/pages/AerospaceEngineering.jsx";
import AutomobileEngineeringPGMauritius from "./pages/Study Abroad/Mauritius/Engineering/pg/pages/AutomobileEngineering.jsx";
import BiomedicalEngineeringPGMauritius from "./pages/Study Abroad/Mauritius/Engineering/pg/pages/BiomedicalEngineering.jsx";
import ChemicalEngineeringPGMauritius from "./pages/Study Abroad/Mauritius/Engineering/pg/pages/ChemicalEngineering.jsx";
import CivilEngineeringPGMauritius from "./pages/Study Abroad/Mauritius/Engineering/pg/pages/CivilEngineering.jsx";
import ComputerEngineeringPGMauritius from "./pages/Study Abroad/Mauritius/Engineering/pg/pages/ComputerEngineering.jsx";
import ElectricalEngineeringPGMauritius from "./pages/Study Abroad/Mauritius/Engineering/pg/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationPGMauritius from "./pages/Study Abroad/Mauritius/Engineering/pg/pages/ElectronicsCommunication.jsx";
import MechanicalEngineeringPGMauritius from "./pages/Study Abroad/Mauritius/Engineering/pg/pages/MechanicalEngineering.jsx";
import ComputerScienceMauritius from "./pages/Study Abroad/Mauritius/ComputerScience/ComputerScience.jsx";
import InformationTechnologyMauritius from "./pages/Study Abroad/Mauritius/InformationTechnology/InformationTechnology.jsx";
import BusinessManagementMauritius from "./pages/Study Abroad/Mauritius/BusinessManagement/BusinessManagement.jsx";
import BBAMauritius from "./pages/Study Abroad/Mauritius/BBA/BBA.jsx";
import BBSMauritius from "./pages/Study Abroad/Mauritius/BBS/BBS.jsx";
import MBAMauritius from "./pages/Study Abroad/Mauritius/MBA/MBA.jsx";
import MBSMauritius from "./pages/Study Abroad/Mauritius/MBS/MBS.jsx";
import ExecutiveMBAMauritius from "./pages/Study Abroad/Mauritius/ExecutiveMBA/ExecutiveMBA.jsx";
import InternationalBusinessMauritius from "./pages/Study Abroad/Mauritius/InternationalBusiness/InternationalBusiness.jsx";
import HospitalityManagementMauritius from "./pages/Study Abroad/Mauritius/HospitalityManagement/HospitalityManagement.jsx";
import ArchitectureMauritius from "./pages/Study Abroad/Mauritius/Architecture/Architecture.jsx";
import LawMauritius from "./pages/Study Abroad/Mauritius/Law/Law.jsx";
import LanguageCoursesMauritius from "./pages/Study Abroad/Mauritius/LanguageCourses/LanguageCourses.jsx";
import SummerCoursesMauritius from "./pages/Study Abroad/Mauritius/SummerCourses/SummerCourses.jsx";
import WinterCoursesMauritius from "./pages/Study Abroad/Mauritius/WinterCourses/WinterCourses.jsx";

// Study Abroad - Denmark
import DentistryDenmark from "./pages/Study Abroad/Denmark/MBBS Abroad/DentistryAbroad.jsx";
import BiotechnologyDenmark from "./pages/Study Abroad/Denmark/MBBS Abroad/Biotechnology.jsx";
import NursingDenmark from "./pages/Study Abroad/Denmark/MBBS Abroad/NursingAbroad.jsx";
import PharmacyDenmark from "./pages/Study Abroad/Denmark/MBBS Abroad/PharmacyAbroad.jsx";
import PhysiotherapyDenmark from "./pages/Study Abroad/Denmark/MBBS Abroad/PhysiotherapyAbroad.jsx";
import PublicHealthDenmark from "./pages/Study Abroad/Denmark/MBBS Abroad/PublicHealth.jsx";
import UndergraduateEngineeringDenmark from "./pages/Study Abroad/Denmark/Engineering/ug/undergraduate.jsx";
import AerospaceEngineeringUGDenmark from "./pages/Study Abroad/Denmark/Engineering/ug/pages/AerospaceEngineering.jsx";
import AutomobileEngineeringUGDenmark from "./pages/Study Abroad/Denmark/Engineering/ug/pages/AutomobileEngineering.jsx";
import BiomedicalEngineeringUGDenmark from "./pages/Study Abroad/Denmark/Engineering/ug/pages/BiomedicalEngineering.jsx";
import ChemicalEngineeringUGDenmark from "./pages/Study Abroad/Denmark/Engineering/ug/pages/ChemicalEngineering.jsx";
import CivilEngineeringUGDenmark from "./pages/Study Abroad/Denmark/Engineering/ug/pages/CivilEngineering.jsx";
import ComputerEngineeringUGDenmark from "./pages/Study Abroad/Denmark/Engineering/ug/pages/ComputerEngineering.jsx";
import ElectricalEngineeringUGDenmark from "./pages/Study Abroad/Denmark/Engineering/ug/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationUGDenmark from "./pages/Study Abroad/Denmark/Engineering/ug/pages/ElectronicsCommunication.jsx";
import MechanicalEngineeringUGDenmark from "./pages/Study Abroad/Denmark/Engineering/ug/pages/MechanicalEngineering.jsx";
import PostgraduateEngineeringDenmark from "./pages/Study Abroad/Denmark/Engineering/pg/postgraduate.jsx";
import AerospaceEngineeringPGDenmark from "./pages/Study Abroad/Denmark/Engineering/pg/pages/AerospaceEngineering.jsx";
import AutomobileEngineeringPGDenmark from "./pages/Study Abroad/Denmark/Engineering/pg/pages/AutomobileEngineering.jsx";
import BiomedicalEngineeringPGDenmark from "./pages/Study Abroad/Denmark/Engineering/pg/pages/BiomedicalEngineering.jsx";
import ChemicalEngineeringPGDenmark from "./pages/Study Abroad/Denmark/Engineering/pg/pages/ChemicalEngineering.jsx";
import CivilEngineeringPGDenmark from "./pages/Study Abroad/Denmark/Engineering/pg/pages/CivilEngineering.jsx";
import ComputerEngineeringPGDenmark from "./pages/Study Abroad/Denmark/Engineering/pg/pages/ComputerEngineering.jsx";
import ElectricalEngineeringPGDenmark from "./pages/Study Abroad/Denmark/Engineering/pg/pages/ElectricalEngineering.jsx";
import ElectronicsCommunicationPGDenmark from "./pages/Study Abroad/Denmark/Engineering/pg/pages/ElectronicsCommunication.jsx";
import MechanicalEngineeringPGDenmark from "./pages/Study Abroad/Denmark/Engineering/pg/pages/MechanicalEngineering.jsx";
import ComputerScienceDenmark from "./pages/Study Abroad/Denmark/ComputerScience/ComputerScience.jsx";
import InformationTechnologyDenmark from "./pages/Study Abroad/Denmark/InformationTechnology/InformationTechnology.jsx";
import BusinessManagementDenmark from "./pages/Study Abroad/Denmark/BusinessManagement/BusinessManagement.jsx";
import BBADenmark from "./pages/Study Abroad/Denmark/BBA/BBA.jsx";
import BBSDenmark from "./pages/Study Abroad/Denmark/BBS/BBS.jsx";
import MBADenmark from "./pages/Study Abroad/Denmark/MBA/MBA.jsx";
import MBSDenmark from "./pages/Study Abroad/Denmark/MBS/MBS.jsx";
import ExecutiveMBADenmark from "./pages/Study Abroad/Denmark/ExecutiveMBA/ExecutiveMBA.jsx";
import InternationalBusinessDenmark from "./pages/Study Abroad/Denmark/InternationalBusiness/InternationalBusiness.jsx";
import HospitalityManagementDenmark from "./pages/Study Abroad/Denmark/HospitalityManagement/HospitalityManagement.jsx";
import ArchitectureDenmark from "./pages/Study Abroad/Denmark/Architecture/Architecture.jsx";
import LawDenmark from "./pages/Study Abroad/Denmark/Law/Law.jsx";
import LanguageCoursesDenmark from "./pages/Study Abroad/Denmark/LanguageCourses/LanguageCourses.jsx";
import SummerCoursesDenmark from "./pages/Study Abroad/Denmark/SummerCourses/SummerCourses.jsx";
import WinterCoursesDenmark from "./pages/Study Abroad/Denmark/WinterCourses/WinterCourses.jsx";
import TestDetailPage from "./pages/Tests/TestDetailPage.jsx";



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
              <Route path="mbbs-abroad/armenia" element={<Armernia />} />
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
              <Route path="blog/education-blog" element={<Navigate to="/blog" replace />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:slugOrId" element={<BlogDetail />} />
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
              <Route path="study-abroad/working-professionals" element={<ExecutiveMbaAbroad />} />
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
              {/* Finland SSR Routes */}
              <Route path="study-abroad/finland/architecture" element={<ArchitectureFinland />} />
              <Route path="study-abroad/finland/bba" element={<BBAFinland />} />
              <Route path="study-abroad/finland/bbs" element={<BBSFinland />} />
              <Route path="study-abroad/finland/business-management" element={<BusinessManagementFinland />} />
              <Route path="study-abroad/finland/computer-science" element={<ComputerScienceFinland />} />
              <Route path="study-abroad/finland/information-technology" element={<InformationTechnologyStandaloneFinland />} />
              <Route path="study-abroad/finland/it" element={<InformationTechnologyFinland />} />
              <Route path="study-abroad/finland/engineering/information-technology" element={<InformationTechnologyFinland />} />
              <Route path="study-abroad/finland/pg/engineering" element={<PostgraduateEngineeringFinland />} />
              <Route path="study-abroad/finland/pg/computer-science-engineering" element={<MastersinComputerScienceEngineeringPGFinland />} />
              <Route path="study-abroad/finland/ug/computer-science-engineering" element={<ComputerScienceEngineeringUGFinland />} />
              <Route path="study-abroad/finland/pg/aerospace-engineering" element={<MastersinAerospaceEngineeringPGFinland />} />
              <Route path="study-abroad/finland/pg/automobile-engineering" element={<MastersinAutomobileEngineeringPGFinland />} />
              <Route path="study-abroad/finland/pg/biomedical-engineering" element={<MastersinBiomedicalEngineeringPGFinland />} />
              <Route path="study-abroad/finland/pg/chemical-engineering" element={<MastersinChemicalEngineeringPGFinland />} />
              <Route path="study-abroad/finland/pg/civil-engineering" element={<MastersinCivilEngineeringPGFinland />} />
              <Route path="study-abroad/finland/pg/computer-engineering" element={<MastersinComputerEngineeringPGFinland />} />
              <Route path="study-abroad/finland/pg/computer-science" element={<MastersinComputerScienceEngineeringPGFinland />} />
              <Route path="study-abroad/finland/pg/electrical-engineering" element={<MastersinElectricalEngineeringPGFinland />} />
              <Route path="study-abroad/finland/pg/electronics-communication" element={<MastersinElectronicsEngineeringPGFinland />} />
              <Route path="study-abroad/finland/pg/mechanical-engineering" element={<MastersinMechanicalEngineeringPGFinland />} />
              <Route path="study-abroad/finland/ug/aerospace-engineering" element={<AerospaceRelatedEngineeringUGFinland />} />
              <Route path="study-abroad/finland/ug/automobile-engineering" element={<AutomobileEngineeringUGFinland />} />
              <Route path="study-abroad/finland/ug/biomedical-engineering" element={<BiomedicalEngineeringUGFinland />} />
              <Route path="study-abroad/finland/ug/chemical-engineering" element={<ChemicalEngineeringUGFinland />} />
              <Route path="study-abroad/finland/ug/civil-engineering" element={<CivilEngineeringUGFinland />} />
              <Route path="study-abroad/finland/ug/computer-engineering" element={<ComputerEngineeringUGFinland />} />
              <Route path="study-abroad/finland/ug/computer-science" element={<ComputerScienceEngineeringUGFinland />} />
              <Route path="study-abroad/finland/ug/electrical-engineering" element={<ElectricalEngineeringUGFinland />} />
              <Route path="study-abroad/finland/ug/electronics-communication" element={<ElectronicsEngineeringUGFinland />} />
              <Route path="study-abroad/finland/ug/mechanical-engineering" element={<MechanicalEngineeringUGFinland />} />
              <Route path="study-abroad/finland/ug/engineering" element={<BachelorsinEngineeringFinland />} />
              <Route path="study-abroad/finland/executive-mba" element={<ExecutiveMBAFinland />} />
              <Route path="study-abroad/finland/hospitality-management" element={<HospitalityManagementFinland />} />
              <Route path="study-abroad/finland/international-business" element={<InternationalBusinessFinland />} />
              <Route path="study-abroad/finland/language-courses" element={<LanguageCoursesFinland />} />
              <Route path="study-abroad/finland/law" element={<LawFinland />} />
              <Route path="study-abroad/finland/mba" element={<MBAFinland />} />
              <Route path="study-abroad/finland/biotechnology" element={<BiotechnologyFinland />} />
              <Route path="study-abroad/finland/dentistry" element={<DentistryFinland />} />
              <Route path="study-abroad/finland/nursing" element={<NursingFinland />} />
              <Route path="study-abroad/finland/pharmacy" element={<PharmacyFinland />} />
              <Route path="study-abroad/finland/physiotherapy" element={<PhysiotherapyFinland />} />
              <Route path="study-abroad/finland/public-health" element={<PublicHealthFinland />} />
              <Route path="study-abroad/finland/mbs" element={<MBSFinland />} />
              <Route path="study-abroad/finland/summer-courses" element={<SummerCoursesFinland />} />
              <Route path="study-abroad/finland/winter-courses" element={<WinterCoursesFinland />} />
              <Route path="study-abroad/finland/marketing-management" element={<Navigate to="/courses/marketing-management?country=finland" replace />} />
              <Route path="study-abroad/finland/accounting-finance" element={<Navigate to="/courses/accounting-finance?country=finland" replace />} />
              <Route path="study-abroad/finland/hr-management" element={<Navigate to="/study-abroad/finland/business-management" replace />} />
              <Route path="study-abroad/finland/other-courses" element={<Navigate to="/study-abroad/finland/business-management" replace />} />
              {/* Australia SSR Routes */}
              <Route path="study-abroad/australia/dentistry" element={<DentistryAustralia />} />
              <Route path="study-abroad/australia/nursing" element={<NursingAustralia />} />
              <Route path="study-abroad/australia/pharmacy" element={<PharmacyAustralia />} />
              <Route path="study-abroad/australia/physiotherapy" element={<PhysiotherapyAustralia />} />
              <Route path="study-abroad/australia/public-health" element={<PublicHealthAustralia />} />
              <Route path="study-abroad/australia/biotechnology" element={<BiotechnologyAustralia />} />
              <Route path="study-abroad/australia/ug/engineering" element={<UndergraduateEngineeringAustralia />} />
              <Route path="study-abroad/australia/ug/computer-engineering" element={<ComputerEngineeringUGAustralia />} />
              <Route path="study-abroad/australia/ug/mechanical-engineering" element={<MechanicalEngineeringUGAustralia />} />
              <Route path="study-abroad/australia/ug/civil-engineering" element={<CivilEngineeringUGAustralia />} />
              <Route path="study-abroad/australia/ug/electrical-engineering" element={<ElectricalEngineeringUGAustralia />} />
              <Route path="study-abroad/australia/ug/electronics-communication" element={<ElectronicsCommunicationUGAustralia />} />
              <Route path="study-abroad/australia/ug/chemical-engineering" element={<ChemicalEngineeringUGAustralia />} />
              <Route path="study-abroad/australia/ug/aerospace-engineering" element={<AerospaceEngineeringUGAustralia />} />
              <Route path="study-abroad/australia/ug/biomedical-engineering" element={<BiomedicalEngineeringUGAustralia />} />
              <Route path="study-abroad/australia/ug/automobile-engineering" element={<AutomobileEngineeringUGAustralia />} />
              <Route path="study-abroad/australia/pg/engineering" element={<PostgraduateEngineeringAustralia />} />
              <Route path="study-abroad/australia/pg/computer-engineering" element={<ComputerEngineeringPGAustralia />} />
              <Route path="study-abroad/australia/pg/mechanical-engineering" element={<MechanicalEngineeringPGAustralia />} />
              <Route path="study-abroad/australia/pg/civil-engineering" element={<CivilEngineeringPGAustralia />} />
              <Route path="study-abroad/australia/pg/electrical-engineering" element={<ElectricalEngineeringPGAustralia />} />
              <Route path="study-abroad/australia/pg/electronics-communication" element={<ElectronicsCommunicationPGAustralia />} />
              <Route path="study-abroad/australia/pg/chemical-engineering" element={<ChemicalEngineeringPGAustralia />} />
              <Route path="study-abroad/australia/pg/aerospace-engineering" element={<AerospaceEngineeringPGAustralia />} />
              <Route path="study-abroad/australia/pg/biomedical-engineering" element={<BiomedicalEngineeringPGAustralia />} />
              <Route path="study-abroad/australia/pg/automobile-engineering" element={<AutomobileEngineeringPGAustralia />} />
              <Route path="study-abroad/australia/computer-science" element={<ComputerScienceAustralia />} />
              <Route path="study-abroad/australia/information-technology" element={<InformationTechnologyAustralia />} />
              <Route path="study-abroad/australia/business-management" element={<BusinessManagementAustralia />} />
              <Route path="study-abroad/australia/mba" element={<MBAAustralia />} />
              <Route path="study-abroad/australia/executive-mba" element={<ExecutiveMBAAustralia />} />
              <Route path="study-abroad/australia/bba" element={<BBAAustralia />} />
              <Route path="study-abroad/australia/bbs" element={<BBSAustralia />} />
              <Route path="study-abroad/australia/mbs" element={<MBSAustralia />} />
              <Route path="study-abroad/australia/international-business" element={<InternationalBusinessAustralia />} />
              <Route path="study-abroad/australia/marketing-management" element={<MarketingManagementAustralia />} />
              <Route path="study-abroad/australia/hospitality-management" element={<HospitalityManagementAustralia />} />
              <Route path="study-abroad/australia/architecture" element={<ArchitectureAustralia />} />
              <Route path="study-abroad/australia/law" element={<LawAustralia />} />
              <Route path="study-abroad/australia/language-courses" element={<LanguageCoursesAustralia />} />
              <Route path="study-abroad/australia/summer-courses" element={<SummerCoursesAustralia />} />
              <Route path="study-abroad/australia/winter-courses" element={<WinterCoursesAustralia />} />
              <Route path="study-abroad/italy/dentistry" element={<DentistryAbroadItaly />} />
              <Route path="study-abroad/italy/nursing" element={<NursingAbroadItaly />} />
              <Route path="study-abroad/italy/pharmacy" element={<PharmacyAbroadItaly />} />
              <Route path="study-abroad/italy/physiotherapy" element={<PhysiotherapyAbroadItaly />} />
              <Route path="study-abroad/italy/public-health" element={<PublicHealthItaly />} />
              <Route path="study-abroad/italy/biotechnology" element={<BiotechnologyItaly />} />
              <Route path="study-abroad/italy/computer-science" element={<ComputerScienceItaly />} />
              <Route path="study-abroad/italy/information-technology" element={<InformationTechnologyItaly />} />
              <Route path="study-abroad/italy/ug/engineering" element={<UndergraduateEngineeringItaly />} />
              <Route path="study-abroad/italy/ug/computer-engineering" element={<ComputerEngineeringUGItaly />} />
              <Route path="study-abroad/italy/ug/mechanical-engineering" element={<MechanicalEngineeringUGItaly />} />
              <Route path="study-abroad/italy/ug/civil-engineering" element={<CivilEngineeringUGItaly />} />
              <Route path="study-abroad/italy/ug/electrical-engineering" element={<ElectricalEngineeringUGItaly />} />
              <Route path="study-abroad/italy/ug/electronics-communication" element={<ElectronicsCommunicationUGItaly />} />
              <Route path="study-abroad/italy/ug/chemical-engineering" element={<ChemicalEngineeringUGItaly />} />
              <Route path="study-abroad/italy/ug/aerospace-engineering" element={<AerospaceEngineeringUGItaly />} />
              <Route path="study-abroad/italy/ug/biomedical-engineering" element={<BiomedicalEngineeringUGItaly />} />
              <Route path="study-abroad/italy/ug/automobile-engineering" element={<AutomobileEngineeringUGItaly />} />
              <Route path="study-abroad/italy/pg/engineering" element={<PostgraduateEngineeringItaly />} />
              <Route path="study-abroad/italy/pg/computer-engineering" element={<ComputerEngineeringPGItaly />} />
              <Route path="study-abroad/italy/pg/mechanical-engineering" element={<MechanicalEngineeringPGItaly />} />
              <Route path="study-abroad/italy/pg/civil-engineering" element={<CivilEngineeringPGItaly />} />
              <Route path="study-abroad/italy/pg/electrical-engineering" element={<ElectricalEngineeringPGItaly />} />
              <Route path="study-abroad/italy/pg/electronics-communication" element={<ElectronicsCommunicationPGItaly />} />
              <Route path="study-abroad/italy/pg/chemical-engineering" element={<ChemicalEngineeringPGItaly />} />
              <Route path="study-abroad/italy/pg/aerospace-engineering" element={<AerospaceEngineeringPGItaly />} />
              <Route path="study-abroad/italy/pg/biomedical-engineering" element={<BiomedicalEngineeringPGItaly />} />
              <Route path="study-abroad/italy/pg/automobile-engineering" element={<AutomobileEngineeringPGItaly />} />
              <Route path="study-abroad/italy/business-management" element={<BusinessManagementItaly />} />
              <Route path="study-abroad/italy/mba" element={<MBAItaly />} />
              <Route path="study-abroad/italy/executive-mba" element={<ExecutiveMBAItaly />} />
              <Route path="study-abroad/italy/bba" element={<BBAItaly />} />
              <Route path="study-abroad/italy/bbs" element={<BBSItaly />} />
              <Route path="study-abroad/italy/mbs" element={<MBSItaly />} />
              <Route path="study-abroad/italy/international-business" element={<InternationalBusinessItaly />} />
              <Route path="study-abroad/italy/hospitality-management" element={<HospitalityManagementItaly />} />
              <Route path="study-abroad/italy/architecture" element={<ArchitectureItaly />} />
              <Route path="study-abroad/italy/law" element={<LawItaly />} />
              <Route path="study-abroad/italy/language-courses" element={<LanguageCoursesItaly />} />
              <Route path="study-abroad/italy/summer-courses" element={<SummerCoursesItaly />} />
              <Route path="study-abroad/italy/winter-courses" element={<WinterCoursesItaly />} />
              {/* Canada Routes */}
              <Route path="study-abroad/canada/dentistry" element={<DentistryAbroadCanada />} />
              <Route path="study-abroad/canada/nursing" element={<NursingAbroadCanada />} />
              <Route path="study-abroad/canada/pharmacy" element={<PharmacyAbroadCanada />} />
              <Route path="study-abroad/canada/physiotherapy" element={<PhysiotherapyAbroadCanada />} />
              <Route path="study-abroad/canada/public-health" element={<PublicHealthCanada />} />
              <Route path="study-abroad/canada/biotechnology" element={<BiotechnologyCanada />} />
              <Route path="study-abroad/canada/computer-science" element={<ComputerScienceCanada />} />
              <Route path="study-abroad/canada/information-technology" element={<InformationTechnologyCanada />} />
              <Route path="study-abroad/canada/ug/engineering" element={<UndergraduateEngineeringCanada />} />
              <Route path="study-abroad/canada/ug/computer-engineering" element={<ComputerEngineeringUGCanada />} />
              <Route path="study-abroad/canada/ug/mechanical-engineering" element={<MechanicalEngineeringUGCanada />} />
              <Route path="study-abroad/canada/ug/civil-engineering" element={<CivilEngineeringUGCanada />} />
              <Route path="study-abroad/canada/ug/electrical-engineering" element={<ElectricalEngineeringUGCanada />} />
              <Route path="study-abroad/canada/ug/electronics-communication" element={<ElectronicsCommunicationUGCanada />} />
              <Route path="study-abroad/canada/ug/chemical-engineering" element={<ChemicalEngineeringUGCanada />} />
              <Route path="study-abroad/canada/ug/aerospace-engineering" element={<AerospaceEngineeringUGCanada />} />
              <Route path="study-abroad/canada/ug/biomedical-engineering" element={<BiomedicalEngineeringUGCanada />} />
              <Route path="study-abroad/canada/ug/automobile-engineering" element={<AutomobileEngineeringUGCanada />} />
              <Route path="study-abroad/canada/pg/engineering" element={<PostgraduateEngineeringCanada />} />
              <Route path="study-abroad/canada/pg/computer-engineering" element={<ComputerEngineeringPGCanada />} />
              <Route path="study-abroad/canada/pg/mechanical-engineering" element={<MechanicalEngineeringPGCanada />} />
              <Route path="study-abroad/canada/pg/civil-engineering" element={<CivilEngineeringPGCanada />} />
              <Route path="study-abroad/canada/pg/electrical-engineering" element={<ElectricalEngineeringPGCanada />} />
              <Route path="study-abroad/canada/pg/electronics-communication" element={<ElectronicsCommunicationPGCanada />} />
              <Route path="study-abroad/canada/pg/chemical-engineering" element={<ChemicalEngineeringPGCanada />} />
              <Route path="study-abroad/canada/pg/aerospace-engineering" element={<AerospaceEngineeringPGCanada />} />
              <Route path="study-abroad/canada/pg/biomedical-engineering" element={<BiomedicalEngineeringPGCanada />} />
              <Route path="study-abroad/canada/pg/automobile-engineering" element={<AutomobileEngineeringPGCanada />} />
              <Route path="study-abroad/canada/business-management" element={<BusinessManagementCanada />} />
              <Route path="study-abroad/canada/mba" element={<MBACanada />} />
              <Route path="study-abroad/canada/executive-mba" element={<ExecutiveMBACanada />} />
              <Route path="study-abroad/canada/bba" element={<BBACanada />} />
              <Route path="study-abroad/canada/bbs" element={<BBSCanada />} />
              <Route path="study-abroad/canada/mbs" element={<MBSCanada />} />
              <Route path="study-abroad/canada/international-business" element={<InternationalBusinessCanada />} />
              <Route path="study-abroad/canada/marketing-management" element={<MarketingManagementCanada />} />
              <Route path="study-abroad/canada/hospitality-management" element={<HospitalityManagementCanada />} />
              <Route path="study-abroad/canada/architecture" element={<ArchitectureCanada />} />
              <Route path="study-abroad/canada/law" element={<LawCanada />} />
              <Route path="study-abroad/canada/language-courses" element={<LanguageCoursesCanada />} />
              <Route path="study-abroad/canada/summer-courses" element={<SummerCoursesCanada />} />
              <Route path="study-abroad/canada/winter-courses" element={<WinterCoursesCanada />} />
              {/* Spain Routes */}
              <Route path="study-abroad/spain/dentistry" element={<DentistryAbroadSpain />} />
              <Route path="study-abroad/spain/nursing" element={<NursingAbroadSpain />} />
              <Route path="study-abroad/spain/pharmacy" element={<PharmacyAbroadSpain />} />
              <Route path="study-abroad/spain/physiotherapy" element={<PhysiotherapyAbroadSpain />} />
              <Route path="study-abroad/spain/public-health" element={<PublicHealthSpain />} />
              <Route path="study-abroad/spain/biotechnology" element={<BiotechnologySpain />} />
              <Route path="study-abroad/spain/computer-science" element={<ComputerScienceSpain />} />
              <Route path="study-abroad/spain/information-technology" element={<InformationTechnologySpain />} />
              <Route path="study-abroad/spain/ug/engineering" element={<UndergraduateEngineeringSpain />} />
              <Route path="study-abroad/spain/ug/computer-engineering" element={<ComputerEngineeringUGSpain />} />
              <Route path="study-abroad/spain/ug/mechanical-engineering" element={<MechanicalEngineeringUGSpain />} />
              <Route path="study-abroad/spain/ug/civil-engineering" element={<CivilEngineeringUGSpain />} />
              <Route path="study-abroad/spain/ug/electrical-engineering" element={<ElectricalEngineeringUGSpain />} />
              <Route path="study-abroad/spain/ug/electronics-communication" element={<ElectronicsCommunicationUGSpain />} />
              <Route path="study-abroad/spain/ug/chemical-engineering" element={<ChemicalEngineeringUGSpain />} />
              <Route path="study-abroad/spain/ug/aerospace-engineering" element={<AerospaceEngineeringUGSpain />} />
              <Route path="study-abroad/spain/ug/biomedical-engineering" element={<BiomedicalEngineeringUGSpain />} />
              <Route path="study-abroad/spain/ug/automobile-engineering" element={<AutomobileEngineeringUGSpain />} />
              <Route path="study-abroad/spain/pg/engineering" element={<PostgraduateEngineeringSpain />} />
              <Route path="study-abroad/spain/pg/computer-engineering" element={<ComputerEngineeringPGSpain />} />
              <Route path="study-abroad/spain/pg/mechanical-engineering" element={<MechanicalEngineeringPGSpain />} />
              <Route path="study-abroad/spain/pg/civil-engineering" element={<CivilEngineeringPGSpain />} />
              <Route path="study-abroad/spain/pg/electrical-engineering" element={<ElectricalEngineeringPGSpain />} />
              <Route path="study-abroad/spain/pg/electronics-communication" element={<ElectronicsCommunicationPGSpain />} />
              <Route path="study-abroad/spain/pg/chemical-engineering" element={<ChemicalEngineeringPGSpain />} />
              <Route path="study-abroad/spain/pg/aerospace-engineering" element={<AerospaceEngineeringPGSpain />} />
              <Route path="study-abroad/spain/pg/biomedical-engineering" element={<BiomedicalEngineeringPGSpain />} />
              <Route path="study-abroad/spain/pg/automobile-engineering" element={<AutomobileEngineeringPGSpain />} />
              <Route path="study-abroad/spain/business-management" element={<BusinessManagementSpain />} />
              <Route path="study-abroad/spain/mba" element={<MBASpain />} />
              <Route path="study-abroad/spain/executive-mba" element={<ExecutiveMBASpain />} />
              <Route path="study-abroad/spain/bba" element={<BBASpain />} />
              <Route path="study-abroad/spain/bbs" element={<BBSSpain />} />
              <Route path="study-abroad/spain/mbs" element={<MBSSpain />} />
              <Route path="study-abroad/spain/international-business" element={<InternationalBusinessSpain />} />
              <Route path="study-abroad/spain/hospitality-management" element={<HospitalityManagementSpain />} />
              <Route path="study-abroad/spain/architecture" element={<ArchitectureSpain />} />
              <Route path="study-abroad/spain/law" element={<LawSpain />} />
              <Route path="study-abroad/spain/language-courses" element={<LanguageCoursesSpain />} />
              <Route path="study-abroad/spain/summer-courses" element={<SummerCoursesSpain />} />
              <Route path="study-abroad/spain/winter-courses" element={<WinterCoursesSpain />} />
              {/* UK Routes */}
              <Route path="study-abroad/uk/dentistry" element={<DentistryAbroadUK />} />
              <Route path="study-abroad/uk/nursing" element={<NursingAbroadUK />} />
              <Route path="study-abroad/uk/pharmacy" element={<PharmacyAbroadUK />} />
              <Route path="study-abroad/uk/physiotherapy" element={<PhysiotherapyAbroadUK />} />
              <Route path="study-abroad/uk/public-health" element={<PublicHealthUK />} />
              <Route path="study-abroad/uk/biotechnology" element={<BiotechnologyUK />} />
              <Route path="study-abroad/uk/computer-science" element={<ComputerScienceUK />} />
              <Route path="study-abroad/uk/information-technology" element={<InformationTechnologyUK />} />
              <Route path="study-abroad/uk/ug/engineering" element={<UndergraduateEngineeringUK />} />
              <Route path="study-abroad/uk/ug/computer-engineering" element={<ComputerEngineeringUGUK />} />
              <Route path="study-abroad/uk/ug/mechanical-engineering" element={<MechanicalEngineeringUGUK />} />
              <Route path="study-abroad/uk/ug/civil-engineering" element={<CivilEngineeringUGUK />} />
              <Route path="study-abroad/uk/ug/electrical-engineering" element={<ElectricalEngineeringUGUK />} />
              <Route path="study-abroad/uk/ug/electronics-communication" element={<ElectronicsCommunicationUGUK />} />
              <Route path="study-abroad/uk/ug/chemical-engineering" element={<ChemicalEngineeringUGUK />} />
              <Route path="study-abroad/uk/ug/aerospace-engineering" element={<AerospaceEngineeringUGUK />} />
              <Route path="study-abroad/uk/ug/biomedical-engineering" element={<BiomedicalEngineeringUGUK />} />
              <Route path="study-abroad/uk/ug/automobile-engineering" element={<AutomobileEngineeringUGUK />} />
              <Route path="study-abroad/uk/pg/engineering" element={<PostgraduateEngineeringUK />} />
              <Route path="study-abroad/uk/pg/computer-engineering" element={<ComputerEngineeringPGUK />} />
              <Route path="study-abroad/uk/pg/mechanical-engineering" element={<MechanicalEngineeringPGUK />} />
              <Route path="study-abroad/uk/pg/civil-engineering" element={<CivilEngineeringPGUK />} />
              <Route path="study-abroad/uk/pg/electrical-engineering" element={<ElectricalEngineeringPGUK />} />
              <Route path="study-abroad/uk/pg/electronics-communication" element={<ElectronicsCommunicationPGUK />} />
              <Route path="study-abroad/uk/pg/chemical-engineering" element={<ChemicalEngineeringPGUK />} />
              <Route path="study-abroad/uk/pg/aerospace-engineering" element={<AerospaceEngineeringPGUK />} />
              <Route path="study-abroad/uk/pg/biomedical-engineering" element={<BiomedicalEngineeringPGUK />} />
              <Route path="study-abroad/uk/pg/automobile-engineering" element={<AutomobileEngineeringPGUK />} />
              <Route path="study-abroad/uk/business-management" element={<BusinessManagementUK />} />
              <Route path="study-abroad/uk/mba" element={<MBAUK />} />
              <Route path="study-abroad/uk/executive-mba" element={<ExecutiveMBAUK />} />
              <Route path="study-abroad/uk/bba" element={<BBAUK />} />
              <Route path="study-abroad/uk/bbs" element={<BBSUK />} />
              <Route path="study-abroad/uk/mbs" element={<MBSUK />} />
              <Route path="study-abroad/uk/international-business" element={<InternationalBusinessUK />} />
              <Route path="study-abroad/uk/marketing-management" element={<MarketingManagementUK />} />
              <Route path="study-abroad/uk/hospitality-management" element={<HospitalityManagementUK />} />
              <Route path="study-abroad/uk/architecture" element={<ArchitectureUK />} />
              <Route path="study-abroad/uk/law" element={<LawUK />} />
              <Route path="study-abroad/uk/language-courses" element={<LanguageCoursesUK />} />
              <Route path="study-abroad/uk/summer-courses" element={<SummerCoursesUK />} />
              <Route path="study-abroad/uk/winter-courses" element={<WinterCoursesUK />} />

              {/* Ireland Routes */}
              <Route path="study-abroad/ireland/dentistry" element={<DentistryAbroadIreland />} />
              <Route path="study-abroad/ireland/nursing" element={<NursingAbroadIreland />} />
              <Route path="study-abroad/ireland/pharmacy" element={<PharmacyAbroadIreland />} />
              <Route path="study-abroad/ireland/physiotherapy" element={<PhysiotherapyAbroadIreland />} />
              <Route path="study-abroad/ireland/public-health" element={<PublicHealthIreland />} />
              <Route path="study-abroad/ireland/biotechnology" element={<BiotechnologyIreland />} />
              <Route path="study-abroad/ireland/ug/engineering" element={<UndergraduateEngineeringIreland />} />
              <Route path="study-abroad/ireland/ug/computer-engineering" element={<ComputerEngineeringUGIreland />} />
              <Route path="study-abroad/ireland/ug/civil-engineering" element={<CivilEngineeringUGIreland />} />
              <Route path="study-abroad/ireland/ug/mechanical-engineering" element={<MechanicalEngineeringUGIreland />} />
              <Route path="study-abroad/ireland/computer-science" element={<ComputerScienceIreland />} />
              <Route path="study-abroad/ireland/information-technology" element={<InformationTechnologyIreland />} />
              <Route path="study-abroad/ireland/ug/electrical-engineering" element={<ElectricalEngineeringUGIreland />} />
              <Route path="study-abroad/ireland/ug/electronics-communication" element={<ElectronicsCommunicationUGIreland />} />
              <Route path="study-abroad/ireland/ug/chemical-engineering" element={<ChemicalEngineeringUGIreland />} />
              <Route path="study-abroad/ireland/ug/aerospace-engineering" element={<AerospaceEngineeringUGIreland />} />
              <Route path="study-abroad/ireland/ug/biomedical-engineering" element={<BiomedicalEngineeringUGIreland />} />
              <Route path="study-abroad/ireland/ug/automobile-engineering" element={<AutomobileEngineeringUGIreland />} />
              <Route path="study-abroad/ireland/pg/engineering" element={<PostgraduateEngineeringIreland />} />
              <Route path="study-abroad/ireland/pg/computer-engineering" element={<ComputerEngineeringPGIreland />} />
              <Route path="study-abroad/ireland/pg/mechanical-engineering" element={<MechanicalEngineeringPGIreland />} />
              <Route path="study-abroad/ireland/pg/civil-engineering" element={<CivilEngineeringPGIreland />} />
              <Route path="study-abroad/ireland/pg/electrical-engineering" element={<ElectricalEngineeringPGIreland />} />
              <Route path="study-abroad/ireland/pg/electronics-communication" element={<ElectronicsCommunicationPGIreland />} />
              <Route path="study-abroad/ireland/pg/chemical-engineering" element={<ChemicalEngineeringPGIreland />} />
              <Route path="study-abroad/ireland/pg/aerospace-engineering" element={<AerospaceEngineeringPGIreland />} />
              <Route path="study-abroad/ireland/pg/biomedical-engineering" element={<BiomedicalEngineeringPGIreland />} />
              <Route path="study-abroad/ireland/pg/automobile-engineering" element={<AutomobileEngineeringPGIreland />} />
              <Route path="study-abroad/ireland/business-management" element={<BusinessManagementIreland />} />
              <Route path="study-abroad/ireland/mba" element={<MBAIreland />} />
              <Route path="study-abroad/ireland/executive-mba" element={<ExecutiveMBAIreland />} />
              <Route path="study-abroad/ireland/bba" element={<BBAIreland />} />
              <Route path="study-abroad/ireland/bbs" element={<BBSIreland />} />
              <Route path="study-abroad/ireland/mbs" element={<MBSIreland />} />
              <Route path="study-abroad/ireland/international-business" element={<InternationalBusinessIreland />} />
              <Route path="study-abroad/ireland/marketing-management" element={<MarketingManagementIreland />} />
              <Route path="study-abroad/ireland/hospitality-management" element={<HospitalityManagementIreland />} />
              <Route path="study-abroad/ireland/architecture" element={<ArchitectureIreland />} />
              <Route path="study-abroad/ireland/law" element={<LawIreland />} />
              <Route path="study-abroad/ireland/language-courses" element={<LanguageCoursesIreland />} />
              <Route path="study-abroad/ireland/summer-courses" element={<SummerCoursesIreland />} />
              <Route path="study-abroad/ireland/winter-courses" element={<WinterCoursesIreland />} />
        {/* Study Abroad - France (42 Courses) */}
        <Route path="study-abroad/france/dentistry" element={<DentistryAbroadFrance />} />
        <Route path="study-abroad/france/nursing" element={<NursingAbroadFrance />} />
        <Route path="study-abroad/france/pharmacy" element={<PharmacyAbroadFrance />} />
        <Route path="study-abroad/france/physiotherapy" element={<PhysiotherapyAbroadFrance />} />
        <Route path="study-abroad/france/public-health" element={<PublicHealthFrance />} />
        <Route path="study-abroad/france/biotechnology" element={<BiotechnologyFrance />} />
        <Route path="study-abroad/france/ug/engineering" element={<UndergraduateEngineeringFrance />} />
        <Route path="study-abroad/france/ug/computer-engineering" element={<ComputerEngineeringUGFrance />} />
        <Route path="study-abroad/france/ug/civil-engineering" element={<CivilEngineeringUGFrance />} />
        <Route path="study-abroad/france/ug/mechanical-engineering" element={<MechanicalEngineeringUGFrance />} />
        <Route path="study-abroad/france/computer-science" element={<ComputerScienceFrance />} />
        <Route path="study-abroad/france/information-technology" element={<InformationTechnologyFrance />} />
        <Route path="study-abroad/france/ug/electrical-engineering" element={<ElectricalEngineeringUGFrance />} />
        <Route path="study-abroad/france/ug/electronics-communication" element={<ElectronicsCommunicationUGFrance />} />
        <Route path="study-abroad/france/ug/chemical-engineering" element={<ChemicalEngineeringUGFrance />} />
        <Route path="study-abroad/france/ug/aerospace-engineering" element={<AerospaceEngineeringUGFrance />} />
        <Route path="study-abroad/france/ug/biomedical-engineering" element={<BiomedicalEngineeringUGFrance />} />
        <Route path="study-abroad/france/ug/automobile-engineering" element={<AutomobileEngineeringUGFrance />} />
        <Route path="study-abroad/france/pg/engineering" element={<PostgraduateEngineeringFrance />} />
        <Route path="study-abroad/france/pg/computer-engineering" element={<ComputerEngineeringPGFrance />} />
        <Route path="study-abroad/france/pg/mechanical-engineering" element={<MechanicalEngineeringPGFrance />} />
        <Route path="study-abroad/france/pg/civil-engineering" element={<CivilEngineeringPGFrance />} />
        <Route path="study-abroad/france/pg/electrical-engineering" element={<ElectricalEngineeringPGFrance />} />
        <Route path="study-abroad/france/pg/electronics-communication" element={<ElectronicsCommunicationPGFrance />} />
        <Route path="study-abroad/france/pg/chemical-engineering" element={<ChemicalEngineeringPGFrance />} />
        <Route path="study-abroad/france/pg/aerospace-engineering" element={<AerospaceEngineeringPGFrance />} />
        <Route path="study-abroad/france/pg/biomedical-engineering" element={<BiomedicalEngineeringPGFrance />} />
        <Route path="study-abroad/france/pg/automobile-engineering" element={<AutomobileEngineeringPGFrance />} />
        <Route path="study-abroad/france/business-management" element={<BusinessManagementFrance />} />
        <Route path="study-abroad/france/mba" element={<MBAFrance />} />
        <Route path="study-abroad/france/executive-mba" element={<ExecutiveMBAFrance />} />
        <Route path="study-abroad/france/bba" element={<BBAFrance />} />
        <Route path="study-abroad/france/bbs" element={<BBSFrance />} />
        <Route path="study-abroad/france/mbs" element={<MBSFrance />} />
        <Route path="study-abroad/france/international-business" element={<InternationalBusinessFrance />} />
        <Route path="study-abroad/france/marketing-management" element={<MarketingManagementFrance />} />
        <Route path="study-abroad/france/hospitality-management" element={<HospitalityManagementFrance />} />
        <Route path="study-abroad/france/architecture" element={<ArchitectureFrance />} />
        <Route path="study-abroad/france/law" element={<LawFrance />} />
        <Route path="study-abroad/france/language-courses" element={<LanguageCoursesFrance />} />
        <Route path="study-abroad/france/summer-courses" element={<SummerCoursesFrance />} />
        <Route path="study-abroad/france/winter-courses" element={<WinterCoursesFrance />} />
        {/* Study Abroad - Germany (42 Courses) */}
        <Route path="study-abroad/germany/dentistry" element={<DentistryAbroadGermany />} />
        <Route path="study-abroad/germany/nursing" element={<NursingAbroadGermany />} />
        <Route path="study-abroad/germany/pharmacy" element={<PharmacyAbroadGermany />} />
        <Route path="study-abroad/germany/physiotherapy" element={<PhysiotherapyAbroadGermany />} />
        <Route path="study-abroad/germany/public-health" element={<PublicHealthGermany />} />
        <Route path="study-abroad/germany/biotechnology" element={<BiotechnologyGermany />} />
        <Route path="study-abroad/germany/ug/engineering" element={<UndergraduateEngineeringGermany />} />
        <Route path="study-abroad/germany/ug/computer-engineering" element={<ComputerEngineeringUGGermany />} />
        <Route path="study-abroad/germany/ug/civil-engineering" element={<CivilEngineeringUGGermany />} />
        <Route path="study-abroad/germany/ug/mechanical-engineering" element={<MechanicalEngineeringUGGermany />} />
        <Route path="study-abroad/germany/computer-science" element={<ComputerScienceGermany />} />
        <Route path="study-abroad/germany/information-technology" element={<InformationTechnologyGermany />} />
        <Route path="study-abroad/germany/ug/electrical-engineering" element={<ElectricalEngineeringUGGermany />} />
        <Route path="study-abroad/germany/ug/electronics-communication" element={<ElectronicsCommunicationUGGermany />} />
        <Route path="study-abroad/germany/ug/chemical-engineering" element={<ChemicalEngineeringUGGermany />} />
        <Route path="study-abroad/germany/ug/aerospace-engineering" element={<AerospaceEngineeringUGGermany />} />
        <Route path="study-abroad/germany/ug/biomedical-engineering" element={<BiomedicalEngineeringUGGermany />} />
        <Route path="study-abroad/germany/ug/automobile-engineering" element={<AutomobileEngineeringUGGermany />} />
        <Route path="study-abroad/germany/pg/engineering" element={<PostgraduateEngineeringGermany />} />
        <Route path="study-abroad/germany/pg/computer-engineering" element={<ComputerEngineeringPGGermany />} />
        <Route path="study-abroad/germany/pg/mechanical-engineering" element={<MechanicalEngineeringPGGermany />} />
        <Route path="study-abroad/germany/pg/civil-engineering" element={<CivilEngineeringPGGermany />} />
        <Route path="study-abroad/germany/pg/electrical-engineering" element={<ElectricalEngineeringPGGermany />} />
        <Route path="study-abroad/germany/pg/electronics-communication" element={<ElectronicsCommunicationPGGermany />} />
        <Route path="study-abroad/germany/pg/chemical-engineering" element={<ChemicalEngineeringPGGermany />} />
        <Route path="study-abroad/germany/pg/aerospace-engineering" element={<AerospaceEngineeringPGGermany />} />
        <Route path="study-abroad/germany/pg/biomedical-engineering" element={<BiomedicalEngineeringPGGermany />} />
        <Route path="study-abroad/germany/pg/automobile-engineering" element={<AutomobileEngineeringPGGermany />} />
        <Route path="study-abroad/germany/business-management" element={<BusinessManagementGermany />} />
        <Route path="study-abroad/germany/mba" element={<MBAGermany />} />
        <Route path="study-abroad/germany/executive-mba" element={<ExecutiveMBAGermany />} />
        <Route path="study-abroad/germany/bba" element={<BBAGermany />} />
        <Route path="study-abroad/germany/bbs" element={<BBSGermany />} />
        <Route path="study-abroad/germany/mbs" element={<MBSGermany />} />
        <Route path="study-abroad/germany/international-business" element={<InternationalBusinessGermany />} />
        <Route path="study-abroad/germany/marketing-management" element={<MarketingManagementGermany />} />
        <Route path="study-abroad/germany/hospitality-management" element={<HospitalityManagementGermany />} />
        <Route path="study-abroad/germany/architecture" element={<ArchitectureGermany />} />
        <Route path="study-abroad/germany/law" element={<LawGermany />} />
        <Route path="study-abroad/germany/language-courses" element={<LanguageCoursesGermany />} />
        <Route path="study-abroad/germany/summer-courses" element={<SummerCoursesGermany />} />
        <Route path="study-abroad/germany/winter-courses" element={<WinterCoursesGermany />} />

        {/* Study Abroad - Switzerland */}
        <Route path="study-abroad/switzerland/dentistry" element={<DentistryAbroadSwitzerland />} />
        <Route path="study-abroad/switzerland/biotechnology" element={<BiotechnologySwitzerland />} />
        <Route path="study-abroad/switzerland/nursing" element={<NursingAbroadSwitzerland />} />
        <Route path="study-abroad/switzerland/pharmacy" element={<PharmacyAbroadSwitzerland />} />
        <Route path="study-abroad/switzerland/physiotherapy" element={<PhysiotherapyAbroadSwitzerland />} />
        <Route path="study-abroad/switzerland/public-health" element={<PublicHealthSwitzerland />} />
        <Route path="study-abroad/switzerland/ug/engineering" element={<UndergraduateEngineeringSwitzerland />} />
        <Route path="study-abroad/switzerland/ug/aerospace-engineering" element={<AerospaceEngineeringUGSwitzerland />} />
        <Route path="study-abroad/switzerland/ug/automobile-engineering" element={<AutomobileEngineeringUGSwitzerland />} />
        <Route path="study-abroad/switzerland/ug/biomedical-engineering" element={<BiomedicalEngineeringUGSwitzerland />} />
        <Route path="study-abroad/switzerland/ug/chemical-engineering" element={<ChemicalEngineeringUGSwitzerland />} />
        <Route path="study-abroad/switzerland/ug/civil-engineering" element={<CivilEngineeringUGSwitzerland />} />
        <Route path="study-abroad/switzerland/ug/computer-engineering" element={<ComputerEngineeringUGSwitzerland />} />
        <Route path="study-abroad/switzerland/ug/electrical-engineering" element={<ElectricalEngineeringUGSwitzerland />} />
        <Route path="study-abroad/switzerland/ug/electronics-communication" element={<ElectronicsCommunicationUGSwitzerland />} />
        <Route path="study-abroad/switzerland/ug/mechanical-engineering" element={<MechanicalEngineeringUGSwitzerland />} />
        <Route path="study-abroad/switzerland/pg/engineering" element={<PostgraduateEngineeringSwitzerland />} />
        <Route path="study-abroad/switzerland/pg/aerospace-engineering" element={<AerospaceEngineeringPGSwitzerland />} />
        <Route path="study-abroad/switzerland/pg/automobile-engineering" element={<AutomobileEngineeringPGSwitzerland />} />
        <Route path="study-abroad/switzerland/pg/biomedical-engineering" element={<BiomedicalEngineeringPGSwitzerland />} />
        <Route path="study-abroad/switzerland/pg/chemical-engineering" element={<ChemicalEngineeringPGSwitzerland />} />
        <Route path="study-abroad/switzerland/pg/civil-engineering" element={<CivilEngineeringPGSwitzerland />} />
        <Route path="study-abroad/switzerland/pg/computer-engineering" element={<ComputerEngineeringPGSwitzerland />} />
        <Route path="study-abroad/switzerland/pg/electrical-engineering" element={<ElectricalEngineeringPGSwitzerland />} />
        <Route path="study-abroad/switzerland/pg/electronics-communication" element={<ElectronicsCommunicationPGSwitzerland />} />
        <Route path="study-abroad/switzerland/pg/mechanical-engineering" element={<MechanicalEngineeringPGSwitzerland />} />
        <Route path="study-abroad/switzerland/computer-science" element={<ComputerScienceSwitzerland />} />
        <Route path="study-abroad/switzerland/information-technology" element={<InformationTechnologySwitzerland />} />
        <Route path="study-abroad/switzerland/business-management" element={<BusinessManagementSwitzerland />} />
        <Route path="study-abroad/switzerland/bba" element={<BBASwitzerland />} />
        <Route path="study-abroad/switzerland/bbs" element={<BBSSwitzerland />} />
        <Route path="study-abroad/switzerland/mba" element={<MBASwitzerland />} />
        <Route path="study-abroad/switzerland/mbs" element={<MBSSwitzerland />} />
        <Route path="study-abroad/switzerland/executive-mba" element={<ExecutiveMBASwitzerland />} />
        <Route path="study-abroad/switzerland/international-business" element={<InternationalBusinessSwitzerland />} />
        <Route path="study-abroad/switzerland/hospitality-management" element={<HospitalityManagementSwitzerland />} />
        <Route path="study-abroad/switzerland/architecture" element={<ArchitectureSwitzerland />} />
        <Route path="study-abroad/switzerland/law" element={<LawSwitzerland />} />
        <Route path="study-abroad/switzerland/language-courses" element={<LanguageCoursesSwitzerland />} />
        <Route path="study-abroad/switzerland/summer-courses" element={<SummerCoursesSwitzerland />} />
        <Route path="study-abroad/switzerland/winter-courses" element={<WinterCoursesSwitzerland />} />

        {/* Study Abroad - Mauritius */}
        <Route path="study-abroad/mauritius/dentistry" element={<DentistryMauritius />} />
        <Route path="study-abroad/mauritius/biotechnology" element={<BiotechnologyMauritius />} />
        <Route path="study-abroad/mauritius/nursing" element={<NursingMauritius />} />
        <Route path="study-abroad/mauritius/pharmacy" element={<PharmacyMauritius />} />
        <Route path="study-abroad/mauritius/physiotherapy" element={<PhysiotherapyMauritius />} />
        <Route path="study-abroad/mauritius/public-health" element={<PublicHealthMauritius />} />
        <Route path="study-abroad/mauritius/ug/engineering" element={<UndergraduateEngineeringMauritius />} />
        <Route path="study-abroad/mauritius/ug/aerospace-engineering" element={<AerospaceEngineeringUGMauritius />} />
        <Route path="study-abroad/mauritius/ug/automobile-engineering" element={<AutomobileEngineeringUGMauritius />} />
        <Route path="study-abroad/mauritius/ug/biomedical-engineering" element={<BiomedicalEngineeringUGMauritius />} />
        <Route path="study-abroad/mauritius/ug/chemical-engineering" element={<ChemicalEngineeringUGMauritius />} />
        <Route path="study-abroad/mauritius/ug/civil-engineering" element={<CivilEngineeringUGMauritius />} />
        <Route path="study-abroad/mauritius/ug/computer-engineering" element={<ComputerEngineeringUGMauritius />} />
        <Route path="study-abroad/mauritius/ug/electrical-engineering" element={<ElectricalEngineeringUGMauritius />} />
        <Route path="study-abroad/mauritius/ug/electronics-communication" element={<ElectronicsCommunicationUGMauritius />} />
        <Route path="study-abroad/mauritius/ug/mechanical-engineering" element={<MechanicalEngineeringUGMauritius />} />
        <Route path="study-abroad/mauritius/pg/engineering" element={<PostgraduateEngineeringMauritius />} />
        <Route path="study-abroad/mauritius/pg/aerospace-engineering" element={<AerospaceEngineeringPGMauritius />} />
        <Route path="study-abroad/mauritius/pg/automobile-engineering" element={<AutomobileEngineeringPGMauritius />} />
        <Route path="study-abroad/mauritius/pg/biomedical-engineering" element={<BiomedicalEngineeringPGMauritius />} />
        <Route path="study-abroad/mauritius/pg/chemical-engineering" element={<ChemicalEngineeringPGMauritius />} />
        <Route path="study-abroad/mauritius/pg/civil-engineering" element={<CivilEngineeringPGMauritius />} />
        <Route path="study-abroad/mauritius/pg/computer-engineering" element={<ComputerEngineeringPGMauritius />} />
        <Route path="study-abroad/mauritius/pg/electrical-engineering" element={<ElectricalEngineeringPGMauritius />} />
        <Route path="study-abroad/mauritius/pg/electronics-communication" element={<ElectronicsCommunicationPGMauritius />} />
        <Route path="study-abroad/mauritius/pg/mechanical-engineering" element={<MechanicalEngineeringPGMauritius />} />
        <Route path="study-abroad/mauritius/computer-science" element={<ComputerScienceMauritius />} />
        <Route path="study-abroad/mauritius/information-technology" element={<InformationTechnologyMauritius />} />
        <Route path="study-abroad/mauritius/business-management" element={<BusinessManagementMauritius />} />
        <Route path="study-abroad/mauritius/bba" element={<BBAMauritius />} />
        <Route path="study-abroad/mauritius/bbs" element={<BBSMauritius />} />
        <Route path="study-abroad/mauritius/mba" element={<MBAMauritius />} />
        <Route path="study-abroad/mauritius/mbs" element={<MBSMauritius />} />
        <Route path="study-abroad/mauritius/executive-mba" element={<ExecutiveMBAMauritius />} />
        <Route path="study-abroad/mauritius/international-business" element={<InternationalBusinessMauritius />} />
        <Route path="study-abroad/mauritius/hospitality-management" element={<HospitalityManagementMauritius />} />
        <Route path="study-abroad/mauritius/architecture" element={<ArchitectureMauritius />} />
        <Route path="study-abroad/mauritius/law" element={<LawMauritius />} />
        <Route path="study-abroad/mauritius/language-courses" element={<LanguageCoursesMauritius />} />
        <Route path="study-abroad/mauritius/summer-courses" element={<SummerCoursesMauritius />} />
        <Route path="study-abroad/mauritius/winter-courses" element={<WinterCoursesMauritius />} />

        {/* Study Abroad - Denmark */}
        <Route path="study-abroad/denmark/dentistry" element={<DentistryDenmark />} />
        <Route path="study-abroad/denmark/biotechnology" element={<BiotechnologyDenmark />} />
        <Route path="study-abroad/denmark/nursing" element={<NursingDenmark />} />
        <Route path="study-abroad/denmark/pharmacy" element={<PharmacyDenmark />} />
        <Route path="study-abroad/denmark/physiotherapy" element={<PhysiotherapyDenmark />} />
        <Route path="study-abroad/denmark/public-health" element={<PublicHealthDenmark />} />
        <Route path="study-abroad/denmark/ug/engineering" element={<UndergraduateEngineeringDenmark />} />
        <Route path="study-abroad/denmark/ug/aerospace-engineering" element={<AerospaceEngineeringUGDenmark />} />
        <Route path="study-abroad/denmark/ug/automobile-engineering" element={<AutomobileEngineeringUGDenmark />} />
        <Route path="study-abroad/denmark/ug/biomedical-engineering" element={<BiomedicalEngineeringUGDenmark />} />
        <Route path="study-abroad/denmark/ug/chemical-engineering" element={<ChemicalEngineeringUGDenmark />} />
        <Route path="study-abroad/denmark/ug/civil-engineering" element={<CivilEngineeringUGDenmark />} />
        <Route path="study-abroad/denmark/ug/computer-engineering" element={<ComputerEngineeringUGDenmark />} />
        <Route path="study-abroad/denmark/ug/electrical-engineering" element={<ElectricalEngineeringUGDenmark />} />
        <Route path="study-abroad/denmark/ug/electronics-communication" element={<ElectronicsCommunicationUGDenmark />} />
        <Route path="study-abroad/denmark/ug/mechanical-engineering" element={<MechanicalEngineeringUGDenmark />} />
        <Route path="study-abroad/denmark/pg/engineering" element={<PostgraduateEngineeringDenmark />} />
        <Route path="study-abroad/denmark/pg/aerospace-engineering" element={<AerospaceEngineeringPGDenmark />} />
        <Route path="study-abroad/denmark/pg/automobile-engineering" element={<AutomobileEngineeringPGDenmark />} />
        <Route path="study-abroad/denmark/pg/biomedical-engineering" element={<BiomedicalEngineeringPGDenmark />} />
        <Route path="study-abroad/denmark/pg/chemical-engineering" element={<ChemicalEngineeringPGDenmark />} />
        <Route path="study-abroad/denmark/pg/civil-engineering" element={<CivilEngineeringPGDenmark />} />
        <Route path="study-abroad/denmark/pg/computer-engineering" element={<ComputerEngineeringPGDenmark />} />
        <Route path="study-abroad/denmark/pg/electrical-engineering" element={<ElectricalEngineeringPGDenmark />} />
        <Route path="study-abroad/denmark/pg/electronics-communication" element={<ElectronicsCommunicationPGDenmark />} />
        <Route path="study-abroad/denmark/pg/mechanical-engineering" element={<MechanicalEngineeringPGDenmark />} />
        <Route path="study-abroad/denmark/computer-science" element={<ComputerScienceDenmark />} />
        <Route path="study-abroad/denmark/information-technology" element={<InformationTechnologyDenmark />} />
        <Route path="study-abroad/denmark/business-management" element={<BusinessManagementDenmark />} />
        <Route path="study-abroad/denmark/bba" element={<BBADenmark />} />
        <Route path="study-abroad/denmark/bbs" element={<BBSDenmark />} />
        <Route path="study-abroad/denmark/mba" element={<MBADenmark />} />
        <Route path="study-abroad/denmark/mbs" element={<MBSDenmark />} />
        <Route path="study-abroad/denmark/executive-mba" element={<ExecutiveMBADenmark />} />
        <Route path="study-abroad/denmark/international-business" element={<InternationalBusinessDenmark />} />
        <Route path="study-abroad/denmark/hospitality-management" element={<HospitalityManagementDenmark />} />
        <Route path="study-abroad/denmark/architecture" element={<ArchitectureDenmark />} />
        <Route path="study-abroad/denmark/law" element={<LawDenmark />} />
        <Route path="study-abroad/denmark/language-courses" element={<LanguageCoursesDenmark />} />
        <Route path="study-abroad/denmark/summer-courses" element={<SummerCoursesDenmark />} />
        <Route path="study-abroad/denmark/winter-courses" element={<WinterCoursesDenmark />} />

        
        {/* USA Routes */}
        <Route path="study-abroad/usa/computer-science" element={<ComputerScienceUSA />} />
        <Route path="study-abroad/usa/information-technology" element={<InformationTechnologyUSA />} />
        <Route path="study-abroad/usa/ug/engineering" element={<UndergraduateEngineering />} />
        <Route path="study-abroad/usa/pg/engineering" element={<PostgraduateEngineering />} />
        <Route path="study-abroad/usa/engineering" element={<Engineering />} />
        <Route path="study-abroad/usa/dentistry" element={<DentistryAbroad />} />
        <Route path="study-abroad/usa/nursing" element={<NursingAbroad />} />
        <Route path="study-abroad/usa/pharmacy" element={<PharmacyAbroad />} />
        <Route path="study-abroad/usa/physiotherapy" element={<PhysiotherapyAbroad />} />
        <Route path="study-abroad/usa/public-health" element={<PublicHealthAbroad />} />
        <Route path="study-abroad/usa/biotechnology" element={<BiotechnologyAbroad />} />
        <Route path="study-abroad/usa/medical-abroad" element={<MedicalAbroad />} />
        <Route path="study-abroad/usa/mbbs" element={<MbbsAbroad />} />
        <Route path="study-abroad/usa/business-management" element={<BusinessManagementAbroad />} />
        <Route path="study-abroad/usa/mba" element={<MbaAbroad />} />
        <Route path="study-abroad/usa/executive-mba" element={<ExecutiveMbaAbroad />} />
        <Route path="study-abroad/usa/bba" element={<BbaAbroad />} />
        <Route path="study-abroad/usa/bbs" element={<BbsAbroad />} />
        <Route path="study-abroad/usa/mbs" element={<MbsAbroad />} />
        <Route path="study-abroad/usa/international-business" element={<InternationalBusinessAbroad />} />
        <Route path="study-abroad/usa/marketing-management" element={<MarketingManagementAbroad />} />
        <Route path="study-abroad/usa/hospitality-management" element={<HospitalityManagementAbroad />} />
        <Route path="study-abroad/usa/architecture" element={<ArchitectureAbroad />} />
        <Route path="study-abroad/usa/law" element={<LawAbroad />} />
        <Route path="study-abroad/usa/language-courses" element={<LanguageCoursesAbroad />} />
        <Route path="study-abroad/usa/summer-courses" element={<SummerCoursesAbroad />} />
        <Route path="study-abroad/usa/winter-courses" element={<WinterCoursesAbroad />} />
        <Route path="study-abroad/usa/ug/computer-engineering" element={<ComputerEngineeringUG />} />
        <Route path="study-abroad/usa/ug/mechanical-engineering" element={<MechanicalEngineeringUG />} />
        <Route path="study-abroad/usa/ug/civil-engineering" element={<CivilEngineeringUG />} />
        <Route path="study-abroad/usa/ug/electrical-engineering" element={<ElectricalEngineeringUG />} />
        <Route path="study-abroad/usa/ug/electronics-communication" element={<ElectronicsCommunicationUG />} />
        <Route path="study-abroad/usa/ug/chemical-engineering" element={<ChemicalEngineeringUG />} />
        <Route path="study-abroad/usa/ug/aerospace-engineering" element={<AerospaceEngineeringUG />} />
        <Route path="study-abroad/usa/ug/biomedical-engineering" element={<BiomedicalEngineeringUG />} />
        <Route path="study-abroad/usa/ug/automobile-engineering" element={<AutomobileEngineeringUG />} />
        <Route path="study-abroad/usa/pg/computer-engineering" element={<ComputerEngineeringPG />} />
        <Route path="study-abroad/usa/pg/mechanical-engineering" element={<MechanicalEngineeringPG />} />
        <Route path="study-abroad/usa/pg/civil-engineering" element={<CivilEngineeringPG />} />
        <Route path="study-abroad/usa/pg/electrical-engineering" element={<ElectricalEngineeringPG />} />
        <Route path="study-abroad/usa/pg/electronics-communication" element={<ElectronicsCommunicationPG />} />
        <Route path="study-abroad/usa/pg/chemical-engineering" element={<ChemicalEngineeringPG />} />
        <Route path="study-abroad/usa/pg/aerospace-engineering" element={<AerospaceEngineeringPG />} />
        <Route path="study-abroad/usa/pg/biomedical-engineering" element={<BiomedicalEngineeringPG />} />
        <Route path="study-abroad/usa/pg/automobile-engineering" element={<AutomobileEngineeringPG />} />

        {/* Tests & Common Online Exams (Common to All Countries) */}
        <Route path="tests/:testId" element={<TestDetailPage />} />
        <Route path="tests" element={<TestDetailPage />} />

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