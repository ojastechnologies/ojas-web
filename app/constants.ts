import { FaWhatsapp } from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

// ─── Company Stats (single source of truth) ────────────────────────
export const COMPANY_STATS = {
    projectsDelivered: "150+",
    clientSatisfaction: "98%",
    yearsExperience: "5+",
    clients: "50+",
    teamSize: "20+",
    countries: "10+",
};

// ─── Social Links ──────────────────────────────────────────────────
export const SOCIAL_LINKS = [
    {
        name: "WhatsApp",
        Icon: FaWhatsapp,
        href: "https://wa.me/+9779841185541",
        color: "#25D366",
    },
];

// ─── Contact Info ──────────────────────────────────────────────────
export const CONTACT_INFO = [
    {
        icon: HiLocationMarker,
        title: "Our Office Location",
        content: "Tokha - 03, Kathmandu, Nepal",
        href: "https://goo.gl/maps/xyz",
    },
    {
        icon: HiPhone,
        title: "Call Us",
        content: "+977 9841185541",
        link: "tel:+9779841185541",
    },
    {
        icon: HiMail,
        title: "Mail Us",
        content: "contact@ojastech.io",
        link: "mailto:contact@ojastech.io",
    },
];

// ─── Company Email (used for contact form) ─────────────────────────
export const COMPANY_EMAIL = "contact@ojastech.io";

// ─── Navigation Items ──────────────────────────────────────────────
export const NAV_ITEMS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Features", href: "/#features" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/#contact" },
];

// ─── Services List ─────────────────────────────────────────────────
export const SERVICES_LIST = [
    "Web Development",
    "Mobile Application",
    "Desktop Application",
    "Graphics Design",
    "Digital Marketing",
    "SEO Optimization",
];
