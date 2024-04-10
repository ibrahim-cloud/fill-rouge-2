import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { getPromoProducts } from "../../../redux/actions/promoProducts";
import { backend_url } from "../../../server";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const dispatch = useDispatch();
  // const {promoProducts,isLoading} = useSelector((state) => console.log(state));
  const { promoProducts, isLoading } = useSelector((state) => state.promoProducts);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getPromoProducts());
  }, [dispatch]);

  return (
    <div className="flex justify-center ">
      {promoProducts ? (
        <div className="w-[98%] 1300px:grid 1300px:grid-cols-3 mt-9 ">
          {/* {promoProducts.products.length} */}
          <div className=" w-[95%] col-span-2 max-1300px:col-span-3 rounded-xl h-[auto] flex bg-[#F1634C] m-2">
            <div className="w-[45%] max-800px:w-[90%]  my-28 m-10">
              <h1 className="text-[65px] font-bold text-yellow-400">30%</h1>
              <h2 className="font-bold text-[35px] text-white">
                {t("HeroTitile1")}
              </h2>
              {/* <h3 className="text-[22px] text-white">             {promoProducts[3].description.length > 200 ? promoProducts[3].description.slice(0, 200) + "..." : promoProducts[3].description}
</h3> */}
              {/* <h4 className="text-[22px] text-white"> {t("HeroTitile1")}</h4> */}
              <h3 className="text-[22px] text-white">
                {" "}
                {t("HeroDescription")}
              </h3>

              <div>
                <Link to={`${`/product/${promoProducts[0]._id}`}`}>
                  <h1 className="bg-[#fff] w-[70%] p-3 justify-center rounded-md mt-8 text-[#F1634C] flex items-center">
                    {t("SeeMore")}
                  </h1>
                </Link>
              </div>
            </div>
            <div>
              <img
                src={`${backend_url}${
                  promoProducts[2].images && promoProducts[2].images[0]
                }`}
                alt=""
                loading="lazy"
                className="m-16  mt-[100px] max-800px:hidden  w-[502px]"
              />
              {/* <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="img" className="m-16 max-800px:hidden  w-[400px]" /> */}
            </div>
          </div>
          <div className="max-1300px:flex justify-center max-1300px:flex-wrap ">
            <div className=" w-[100%] max-1300px:w-[45%] max-800px:w-[100%]  rounded-2xl h-[auto] max-1300px:h[350px] p-6 my-5 sm:flex bg-[#fff] m-2">
              <div className=" max-sm:flex justify-center max-sm:w-[100%]">
                <img
                  src={`${backend_url}${
                    promoProducts[0].images && promoProducts[0].images[0]
                  }`}
                  alt=""
                  loading="lazy"
                  className="w-[90%] rounded-xl h-[170px] object-contain"
                />
              </div>
              <div className=" max-500px:w-[98%] m-4 mt-7">
                <h2 className="font-bold text-[20px] text-black">
                  {promoProducts[0].name.length > 70
                    ? promoProducts[0].name.slice(0, 70) + "..."
                    : promoProducts[0].name}{" "}
                </h2>
                <h3 className="text-[14px] text-[#797979]">
                  {" "}
                  {promoProducts[0].description.length > 70
                    ? promoProducts[0].description.slice(0, 70) + "..."
                    : promoProducts[1].description}
                </h3>
                <div>
                  <Link to={`${`/product/${promoProducts[1]._id}`}`}>
                    <h1 className="bg-[#F1634C] w-[90%] mt-3 p-3 justify-center rounded-md  text-[#FFF] flex items-center">
                      {t("SeeMore")}
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" w-[100%] max-1300px:w-[45%] max-800px:w-[100%]  rounded-2xl h-[auto] max-1300px:h[350px] p-6 my-5 sm:flex bg-[#fff] m-2">
              <div className=" max-sm:flex justify-center max-sm:w-[100%]">
                <img
                  src={`${backend_url}${
                    promoProducts[1].images && promoProducts[1].images[0]
                  }`}
                  alt=""
                  loading="lazy"
                  className="w-[90%] rounded-xl h-[170px] object-contain"
                />
              </div>
              <div className=" max-500px:w-[98%] m-4 mt-7">
                <h2 className="font-bold text-[20px] text-black">
                  {promoProducts[1].name.length > 70
                    ? promoProducts[1].name.slice(0, 70) + "..."
                    : promoProducts[1].name}{" "}
                </h2>
                <h3 className="text-[14px] text-[#797979]">
                  {" "}
                  {promoProducts[1].description.length > 70
                    ? promoProducts[1].description.slice(0, 70) + "..."
                    : promoProducts[1].description}
                </h3>
                <div>
                  <Link to={`${`/product/${promoProducts[1]._id}`}`}>
                    <h1 className="bg-[#F1634C] w-[90%] mt-3 p-3 justify-center rounded-md  text-[#FFF] flex items-center">
                      {t("SeeMore")}
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Hero;
