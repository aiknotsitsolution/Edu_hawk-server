import { createServer } from "vite";
import fs from "fs";
import path from "path";

// List of all 71 public static routes (excluding dynamic /blog/:slugOrId and paid noindex /landingpage)
const routes = [
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
  "/study-abroad/usa/computer-science",
  "/study-abroad/usa/information-technology",
  "/study-abroad/usa/ug/engineering",
  "/study-abroad/usa/pg/engineering",
  "/study-abroad/usa/engineering",
  "/study-abroad/usa/dentistry",
  "/study-abroad/usa/medical-abroad",
  "/study-abroad/usa/mbbs",
  "/study-abroad/usa/other-courses",
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
  "/study-abroad/language-courses",
  "/study-abroad/summer-courses",
  "/study-abroad/winter-courses",
  "/study-abroad/working-professionals",
  "/study-abroad/news",
  // Finland Routes
  "/study-abroad/finland/architecture",
  "/study-abroad/finland/bba",
  "/study-abroad/finland/bbs",
  "/study-abroad/finland/business-management",
  "/study-abroad/finland/computer-science",
  "/study-abroad/finland/information-technology",
  "/study-abroad/finland/engineering/information-technology",
  "/study-abroad/finland/it",
  "/study-abroad/finland/pg/aerospace-engineering",
  "/study-abroad/finland/pg/automobile-engineering",
  "/study-abroad/finland/pg/biomedical-engineering",
  "/study-abroad/finland/pg/chemical-engineering",
  "/study-abroad/finland/pg/civil-engineering",
  "/study-abroad/finland/pg/computer-engineering",
  "/study-abroad/finland/pg/computer-science",
  "/study-abroad/finland/pg/computer-science-engineering",
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
  "/study-abroad/finland/ug/computer-science-engineering",
  "/study-abroad/finland/ug/electrical-engineering",
  "/study-abroad/finland/ug/electronics-communication",
  "/study-abroad/finland/ug/mechanical-engineering",
  "/study-abroad/finland/ug/engineering",
  "/study-abroad/finland/engineering",
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

  // Study Abroad - Mauritius
  "/study-abroad/mauritius/dentistry",
  "/study-abroad/mauritius/biotechnology",
  "/study-abroad/mauritius/nursing",
  "/study-abroad/mauritius/pharmacy",
  "/study-abroad/mauritius/physiotherapy",
  "/study-abroad/mauritius/public-health",
  "/study-abroad/mauritius/ug/engineering",
  "/study-abroad/mauritius/ug/aerospace-engineering",
  "/study-abroad/mauritius/ug/automobile-engineering",
  "/study-abroad/mauritius/ug/biomedical-engineering",
  "/study-abroad/mauritius/ug/chemical-engineering",
  "/study-abroad/mauritius/ug/civil-engineering",
  "/study-abroad/mauritius/ug/computer-engineering",
  "/study-abroad/mauritius/ug/electrical-engineering",
  "/study-abroad/mauritius/ug/electronics-communication",
  "/study-abroad/mauritius/ug/mechanical-engineering",
  "/study-abroad/mauritius/pg/engineering",
  "/study-abroad/mauritius/pg/aerospace-engineering",
  "/study-abroad/mauritius/pg/automobile-engineering",
  "/study-abroad/mauritius/pg/biomedical-engineering",
  "/study-abroad/mauritius/pg/chemical-engineering",
  "/study-abroad/mauritius/pg/civil-engineering",
  "/study-abroad/mauritius/pg/computer-engineering",
  "/study-abroad/mauritius/pg/electrical-engineering",
  "/study-abroad/mauritius/pg/electronics-communication",
  "/study-abroad/mauritius/pg/mechanical-engineering",
  "/study-abroad/mauritius/computer-science",
  "/study-abroad/mauritius/information-technology",
  "/study-abroad/mauritius/business-management",
  "/study-abroad/mauritius/bba",
  "/study-abroad/mauritius/bbs",
  "/study-abroad/mauritius/mba",
  "/study-abroad/mauritius/mbs",
  "/study-abroad/mauritius/executive-mba",
  "/study-abroad/mauritius/international-business",
  "/study-abroad/mauritius/hospitality-management",
  "/study-abroad/mauritius/architecture",
  "/study-abroad/mauritius/law",
  "/study-abroad/mauritius/language-courses",
  "/study-abroad/mauritius/summer-courses",
  "/study-abroad/mauritius/winter-courses",

  // Study Abroad - Denmark
  "/study-abroad/denmark/dentistry",
  "/study-abroad/denmark/biotechnology",
  "/study-abroad/denmark/nursing",
  "/study-abroad/denmark/pharmacy",
  "/study-abroad/denmark/physiotherapy",
  "/study-abroad/denmark/public-health",
  "/study-abroad/denmark/ug/engineering",
  "/study-abroad/denmark/ug/aerospace-engineering",
  "/study-abroad/denmark/ug/automobile-engineering",
  "/study-abroad/denmark/ug/biomedical-engineering",
  "/study-abroad/denmark/ug/chemical-engineering",
  "/study-abroad/denmark/ug/civil-engineering",
  "/study-abroad/denmark/ug/computer-engineering",
  "/study-abroad/denmark/ug/electrical-engineering",
  "/study-abroad/denmark/ug/electronics-communication",
  "/study-abroad/denmark/ug/mechanical-engineering",
  "/study-abroad/denmark/pg/engineering",
  "/study-abroad/denmark/pg/aerospace-engineering",
  "/study-abroad/denmark/pg/automobile-engineering",
  "/study-abroad/denmark/pg/biomedical-engineering",
  "/study-abroad/denmark/pg/chemical-engineering",
  "/study-abroad/denmark/pg/civil-engineering",
  "/study-abroad/denmark/pg/computer-engineering",
  "/study-abroad/denmark/pg/electrical-engineering",
  "/study-abroad/denmark/pg/electronics-communication",
  "/study-abroad/denmark/pg/mechanical-engineering",
  "/study-abroad/denmark/computer-science",
  "/study-abroad/denmark/information-technology",
  "/study-abroad/denmark/business-management",
  "/study-abroad/denmark/bba",
  "/study-abroad/denmark/bbs",
  "/study-abroad/denmark/mba",
  "/study-abroad/denmark/mbs",
  "/study-abroad/denmark/executive-mba",
  "/study-abroad/denmark/international-business",
  "/study-abroad/denmark/hospitality-management",
  "/study-abroad/denmark/architecture",
  "/study-abroad/denmark/law",
  "/study-abroad/denmark/language-courses",
  "/study-abroad/denmark/summer-courses",
  "/study-abroad/denmark/winter-courses",

  // Study Abroad - Sweden
  "/study-abroad/sweden/dentistry",
  "/study-abroad/sweden/biotechnology",
  "/study-abroad/sweden/nursing",
  "/study-abroad/sweden/pharmacy",
  "/study-abroad/sweden/physiotherapy",
  "/study-abroad/sweden/public-health",
  "/study-abroad/sweden/ug/engineering",
  "/study-abroad/sweden/ug/aerospace-engineering",
  "/study-abroad/sweden/ug/automobile-engineering",
  "/study-abroad/sweden/ug/biomedical-engineering",
  "/study-abroad/sweden/ug/chemical-engineering",
  "/study-abroad/sweden/ug/civil-engineering",
  "/study-abroad/sweden/ug/computer-engineering",
  "/study-abroad/sweden/ug/electrical-engineering",
  "/study-abroad/sweden/ug/electronics-communication",
  "/study-abroad/sweden/ug/mechanical-engineering",
  "/study-abroad/sweden/pg/engineering",
  "/study-abroad/sweden/pg/aerospace-engineering",
  "/study-abroad/sweden/pg/automobile-engineering",
  "/study-abroad/sweden/pg/biomedical-engineering",
  "/study-abroad/sweden/pg/chemical-engineering",
  "/study-abroad/sweden/pg/civil-engineering",
  "/study-abroad/sweden/pg/computer-engineering",
  "/study-abroad/sweden/pg/electrical-engineering",
  "/study-abroad/sweden/pg/electronics-communication",
  "/study-abroad/sweden/pg/mechanical-engineering",
  "/study-abroad/sweden/computer-science",
  "/study-abroad/sweden/information-technology",
  "/study-abroad/sweden/business-management",
  "/study-abroad/sweden/bba",
  "/study-abroad/sweden/bbs",
  "/study-abroad/sweden/mba",
  "/study-abroad/sweden/mbs",
  "/study-abroad/sweden/executive-mba",
  "/study-abroad/sweden/international-business",
  "/study-abroad/sweden/hospitality-management",
  "/study-abroad/sweden/architecture",
  "/study-abroad/sweden/law",
  "/study-abroad/sweden/language-courses",
  "/study-abroad/sweden/summer-courses",
  "/study-abroad/sweden/winter-courses",

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
  "/cookies-policy"
];

async function prerender() {
  // Suppress verbose React useLayoutEffect SSR warnings that overflow Windows console buffer
  const origError = console.error;
  console.error = (...args) => {
    if (typeof args[0] === "string" && args[0].includes("useLayoutEffect does nothing on the server")) {
      return;
    }
    origError(...args);
  };

  const distDir = path.join(process.cwd(), "dist");
  const templatePath = path.join(distDir, "index.html");
  const cleanTemplatePath = path.join(distDir, "template.html");

  if (!fs.existsSync(distDir) || !fs.existsSync(templatePath)) {
    console.error("❌ dist/index.html not found! Run 'npm run build' first.");
    process.exit(1);
  }

  // Preserve clean SPA shell template so subsequent runs don't accumulate injected tags
  if (!fs.existsSync(cleanTemplatePath)) {
    fs.copyFileSync(templatePath, cleanTemplatePath);
  }
  const baseTemplate = fs.readFileSync(cleanTemplatePath, "utf-8");

  console.log("🚀 Initializing Vite SSR renderer...");
  const vite = await createServer({
    root: process.cwd(),
    server: { middlewareMode: true },
    appType: "custom",
  });

  const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");

  console.log(`📄 Starting static HTML generation for ${routes.length} routes...`);

  let successCount = 0;
  let failCount = 0;
  const failures = [];

  const renderRoute = async (route) => {
    try {
      const { html, helmet } = await render(route);

      // Clean base template: remove default title, description, and any leftover SEO tags
      let pageHtml = baseTemplate;
      pageHtml = pageHtml.replace(/<title[^>]*>[\s\S]*?<\/title>/i, "");
      pageHtml = pageHtml.replace(/<meta\s+name="description"[\s\S]*?>/i, "");
      pageHtml = pageHtml.replace(/<meta\s+name="robots"[\s\S]*?>/gi, "");
      pageHtml = pageHtml.replace(/<link\s+rel="canonical"[\s\S]*?>/gi, "");
      pageHtml = pageHtml.replace(/<meta\s+property="og:[^"]*"[\s\S]*?>/gi, "");
      pageHtml = pageHtml.replace(/<meta\s+name="twitter:[^"]*"[\s\S]*?>/gi, "");

      // Assemble head tags directly from react-helmet-async SSR context
      const titleTag = helmet?.title?.toString() || "";
      const metaTags = helmet?.meta?.toString() || "";
      const linkTags = helmet?.link?.toString() || "";
      const scriptTags = helmet?.script?.toString() || "";

      const injectedTags = [titleTag, metaTags, linkTags, scriptTags].filter(Boolean).join("\n    ");

      // Inject tags right after <head>
      pageHtml = pageHtml.replace("<head>", `<head>\n    ${injectedTags}`);

      // Inject rendered body into <div id="root"></div>
      pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

      // Determine output directory & file path
      const routePath = route === "/" ? "" : route.replace(/^\//, "");
      const outputDir = path.join(distDir, routePath);
      const outputFile = path.join(outputDir, "index.html");

      if (route !== "/" && !fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      fs.writeFileSync(outputFile, pageHtml, "utf-8");
      successCount++;
      console.log(`✅ [${successCount}/${routes.length}] Generated: ${route} -> ${path.relative(distDir, outputFile)}`);
    } catch (err) {
      failCount++;
      failures.push({ route, error: err.message });
      console.error(`❌ Failed: ${route} - ${err.message}`);
    }
  };

  const startTime = Date.now();
  const CONCURRENCY = 4;
  for (let i = 0; i < routes.length; i += CONCURRENCY) {
    const chunk = routes.slice(i, i + CONCURRENCY);
    await Promise.all(chunk.map(renderRoute));
  }

  // Generate static 404.html using the existing NotFound component
  try {
    console.log("📄 Generating static 404.html error page...");
    const { html: notFoundHtml, helmet: notFoundHelmet } = await render("/404-page-not-found");

    let notFoundPage = baseTemplate;
    notFoundPage = notFoundPage.replace(/<title[^>]*>[\s\S]*?<\/title>/i, "");
    notFoundPage = notFoundPage.replace(/<meta\s+name="description"[\s\S]*?>/i, "");
    notFoundPage = notFoundPage.replace(/<meta\s+name="robots"[\s\S]*?>/gi, "");
    notFoundPage = notFoundPage.replace(/<link\s+rel="canonical"[\s\S]*?>/gi, "");
    notFoundPage = notFoundPage.replace(/<meta\s+property="og:[^"]*"[\s\S]*?>/gi, "");
    notFoundPage = notFoundPage.replace(/<meta\s+name="twitter:[^"]*"[\s\S]*?>/gi, "");

    const notFoundTitle = notFoundHelmet?.title?.toString() || "<title>Page Not Found (404) | Edu Hawk</title>";
    const notFoundMeta = notFoundHelmet?.meta?.toString() || '<meta name="robots" content="noindex, nofollow"/>';
    const notFoundLink = notFoundHelmet?.link?.toString() || "";
    const notFoundScript = notFoundHelmet?.script?.toString() || "";

    const injectedTags = [notFoundTitle, notFoundMeta, notFoundLink, notFoundScript].filter(Boolean).join("\n    ");

    notFoundPage = notFoundPage.replace("<head>", `<head>\n    ${injectedTags}`);
    notFoundPage = notFoundPage.replace('<div id="root"></div>', `<div id="root">${notFoundHtml}</div>`);

    const notFoundFile = path.join(distDir, "404.html");
    fs.writeFileSync(notFoundFile, notFoundPage, "utf-8");
    console.log("✅ Generated static 404 error page -> dist/404.html");
  } catch (err) {
    console.error("❌ Failed to generate 404.html:", err.message);
  }

  await vite.close();

  const durationSec = ((Date.now() - startTime) / 1000).toFixed(1);
  const mem = process.memoryUsage();
  console.log("\n==========================================");
  console.log(`🎉 Static prerender complete in ${durationSec}s!`);
  console.log(`✅ Successful: ${successCount}`);
  console.log(`❌ Failed:     ${failCount}`);
  console.log(`📊 Peak heapUsed: ${(mem.heapUsed / 1024 / 1024).toFixed(1)} MB`);
  console.log(`📊 Peak RSS:      ${(mem.rss / 1024 / 1024).toFixed(1)} MB`);
  console.log("==========================================");

  if (failures.length > 0) {
    console.error("\nFailed routes details:");
    failures.forEach((f) => console.error(`  - ${f.route}: ${f.error}`));
    process.exit(1);
  }
}

prerender().catch((err) => {
  console.error("Prerender fatal error:", err);
  process.exit(1);
});
