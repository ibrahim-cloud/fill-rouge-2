import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { backend_url } from "../../../server";

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-center px-4">
      <div>
        <Link to="/dashboard">
    
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center mr-4">
      
          <Link to={`/shop/${seller._id}`}>
            <img
              src={`${backend_url}${seller.avatar}`}
              alt=""
              className="w-[70px] h-[70px] rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
