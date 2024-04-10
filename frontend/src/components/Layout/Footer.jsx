import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";
import  logo  from "../../Assests/Logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t , i18n } = useTranslation();

  const changeLng = (lng) =>  i18n.changeLanguage(lng);


  return (
    <div className="bg-[#000] text-white">
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="" className="w-[95px] h-[95px]" />
          </Link>{" "}
          <br />
          <p>{t("Thehomeandelement")}</p>
          <div className="flex items-center mt-[15px]">
            <Link to={"https://facebook.com/profile.php?id=100095508759370"}>
              <AiFillFacebook size={25} className="cursor-pointer" />
            </Link>
            <Link to={"https://www.linkedin.com/company/commerces-connect"}>
              <AiOutlineLinkedin
                size={25}
                style={{ marginLeft: "15px", cursor: "pointer" }}
              />
            </Link>
            <Link
              to={
                "https://www.instagram.com/commercesconnect?igshid=NGVhN2U2NjQ0Yg%3D%3D"
              }
            >
              <AiFillInstagram
                size={25}
                style={{ marginLeft: "15px", cursor: "pointer" }}
              />
            </Link>
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">{t("company")}</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {t(link.name)}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {t(link.name)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="flex justify-between items-center 
         text-center p-3 text-white bg-[#F1634C] "
      >
        <span className="w-[50%]">{t("HajiriDev")}</span>
        <span className="w-[50%]">{t("Terms")}</span>
        <select
          className="text-black"
          id=""
          onChange={(e) => changeLng(e.target.value)}
        >
          <option value="en">english</option>
          <option value="fr">francais</option>
          <option value="ar">العربية</option>
          <option value="dr">الدارجة المغربية</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
