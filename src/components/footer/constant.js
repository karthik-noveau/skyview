import { CgFacebook } from "react-icons/cg";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";

export const SOCIAL_MEDIA_LINKS = [
  { icon: <CgFacebook />, path: "https://www.facebook.com/profile.php?id=61557580209989" },
  { icon: <AiFillInstagram />, path: "https://www.instagram.com/woodhead_events/" },
  { icon: <BiLogoLinkedin />, path: "https://www.linkedin.com/company/103756365" },
  { icon: <RiTwitterXFill />, path: "https://x.com/woodheadevents" },
];

export const FOOTER_MENU_LINKS = [
  {
    title: "QUICK LINKS",
    links: [
      { name: "Home", path: "/home" },
      { name: "Story", path: "/story" },
      { name: "Portfolio", path: "/portfolio" },
      { name: "Contact us", path: "/connect" },
    ],
  },
  {
    title: "QUICK CONTACT",
    links: [
      { name: "Feel free to call" },
      { name: "+91 6380561849" },
      { name: "Connect us", path: "/connect" },
    ],
  },
  {
    title: "OUR ADDRESS",
    links: [
      { name: "S1, Second floor, Silverline Apartments" },
      { name: " 2nd Cross St, VGP Selva Nagar, Velachery," },
      { name: "Chennai, Tamil Nadu 600042" },
    ],
  },
];
