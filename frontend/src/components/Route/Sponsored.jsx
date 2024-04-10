import React from "react";
import styles from "../../styles/styles";
import brand1  from "../../Assests/image/1.png"
import brand2  from "../../Assests/image/2.png"
import brand3  from "../../Assests/image/3.png"
import brand4  from "../../Assests/image/4.png"
import brand5  from "../../Assests/image/5.png"
import { useTranslation } from "react-i18next";


const Sponsored = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <div className=" flex justify-center ">
        <div className="w-[85%] font-bold text-[30px] " > {t('Choicebybrand') }<br /> <div className="bg-[#F1634C] h-2  w-[6%]"></div></div>
      </div>
      <div className="mt-9 flex justify-center ">
        <div className="flex justify-center flex-wrap">
          <div className="w-[250px] h-[250px] m-3 bg-white flex justify-center rounded-2xl shadow-sm p-3 relative cursor-pointer">
            <img
              src={brand1} 
              alt=""
              style={{ width: "150px", objectFit: "contain" }}

            />
          </div>
          <div className="w-[250px] h-[250px] m-3 bg-white flex justify-center rounded-2xl shadow-sm p-3 relative cursor-pointer">
            <img
              src={brand2} 
              alt=""
              style={{ width: "150px", objectFit: "contain" }}

            />
          </div>
          <div className="w-[250px] h-[250px] m-3 bg-white flex justify-center rounded-2xl shadow-sm p-3 relative cursor-pointer">
            <img
              src={brand3} 
               alt=""
              style={{ width: "150px", objectFit: "contain" }}

            />
          </div>
          <div className="w-[250px] h-[250px] m-3 bg-white flex justify-center rounded-2xl shadow-sm p-3 relative cursor-pointer">
            <img
             src={brand4} 
              alt=""
              style={{ width: "150px", objectFit: "contain" }}

            />
          </div>
          <div className="w-[250px] h-[250px] m-3 bg-white flex justify-center rounded-2xl shadow-sm p-3 relative cursor-pointer">
            <img
              src={brand5} 
               alt=""
              style={{ width: "150px", objectFit: "contain" }}

            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sponsored;
