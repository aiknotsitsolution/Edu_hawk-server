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

// Finland SSR Imports
import ArchitectureFinland from "./pages/Study Abroad/Finland/Architecture/architecture.jsx";
import BBAFinland from "./pages/Study Abroad/Finland/BBA/bba.jsx";
import BBSFinland from "./pages/Study Abroad/Finland/BBS/bbs.jsx";
import BusinessManagementFinland from "./pages/Study Abroad/Finland/BusinessManagement/business-management.jsx";
import InformationTechnologyFinland from "./pages/Study Abroad/Finland/Engineering/InformationTechnology.jsx";
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
              <Route path="study-abroad/finland/it" element={<InformationTechnologyFinland />} />
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