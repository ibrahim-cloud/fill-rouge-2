import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Layout/Header";

import Footer from "../components/Layout/Footer";
const Pricing = () => {
  const { t } = useTranslation();

  const ValideIcon = (className) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-label="Included in Free plan"
        className={`w-5 h-5 mx-auto ${className} `}
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  };

  return (
    <>
      {" "}
      <Header />
      <div className="w-11/12 mx-auto">
        {/* Section Pricing */}
        <section className=" mb-8 bg-white rounded-lg ">
          <div className="container mx-auto p-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th></th>
                  <th scope="col">
                    <h2 className="px-2 text-lg font-medium">
                      {t("Free pack")}
                    </h2>
                  </th>
                  <th scope="col">
                    <h2 className="px-2 text-lg font-medium">
                      {t("Bronze pack")}
                    </h2>
                  </th>
                  <th scope="col">
                    <h2 className="px-2 text-lg font-medium">
                      {t("Silver pack")}
                    </h2>
                  </th>
                  <th scope="col">
                    <h2 className="px-2 text-lg font-medium">
                      {t("Gold pack")}
                    </h2>
                  </th>
                </tr>
              </thead>
              <tbody className="space-y-6 text-center divide-y ">
                <tr>
                  <th scope="row" className="text-left">
                    <h3 className="py-3">{t("Platform Access")}</h3>
                  </th>
                  <td>
                    <span className="block text-sm">
                      <ValideIcon />
                    </span>
                  </td>
                  <td>
                    <span className="block text-sm">
                      <ValideIcon />
                    </span>
                  </td>
                  <td>
                    <span className="block text-sm">
                      <ValideIcon />
                    </span>
                  </td>
                  <td>
                    <span className="block text-sm">
                      <ValideIcon />
                    </span>
                  </td>
                </tr>

                <tr>
                  <th scope="row" className="text-left">
                    <h3 className="py-3">
                      {t("Distance Learning/Remote Training")}
                    </h3>
                  </th>
                  <td>
                    <span className="block text-sm">
                      <ValideIcon />
                    </span>
                  </td>
                  <td>
                    <span className="block text-sm">
                      <ValideIcon />
                    </span>
                  </td>
                  <td>
                    <span className="block text-sm">
                      <ValideIcon />
                    </span>
                  </td>
                  <td>
                    <span className="block text-sm">
                      <ValideIcon />
                    </span>
                  </td>
                </tr>

                <tr>
                  <th scope="row" className="text-left">
                    <h3 className="py-3"> {t("Support/Guidance")} </h3>
                  </th>
                  <td>
                    <div className="flex justify-center items-center">
                      <span className="flex text-sm">
                        <p className=" mr-2 font-medium ">3 {t("DAYS")}</p>{" "}
                        <ValideIcon />
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <span className="flex text-sm">
                        <p className=" mr-2 font-medium ">{t("All time")}</p>{" "}
                        <ValideIcon />
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <span className="flex text-sm">
                        <p className=" mr-2 font-medium ">{t("All time")}</p>{" "}
                        <ValideIcon />
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <span className="flex text-sm">
                        <p className=" mr-2 font-medium ">{t("All time")}</p>{" "}
                        <ValideIcon />
                      </span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row" className="text-left">
                    <h3 className="py-3">{t("Branding")}</h3>
                  </th>
                  <td></td>
                  <td>
                    <span className="block text-sm">
                      <ValideIcon />
                    </span>
                  </td>
                  <td>
                    <span className="block text-sm">
                      <ValideIcon />
                    </span>
                  </td>
                  <td>
                    <span className="block text-sm">
                      <ValideIcon />
                    </span>
                  </td>
                </tr>

                <tr>
                  <th scope="row" className="text-left">
                    <h3 className="py-3">{t("Store Management")}</h3>
                  </th>
                  <td></td>
                  <td></td>
                  <td>
                    <span className="block text-sm">
                      <ValideIcon />
                    </span>
                  </td>
                  <td>
                    <span className="block text-sm">
                      <ValideIcon />
                    </span>
                  </td>
                </tr>

                <tr>
                  <th scope="row" className="text-left">
                    <h3 className="py-3"> {t("Customer Support")} </h3>
                  </th>
                  <td>
                    <span className="block text-sm">
                      <ValideIcon />
                    </span>
                  </td>
                  <td>
                    <span className="block text-sm">
                      <ValideIcon />
                    </span>
                  </td>
                  <td>
                    <span className="block text-sm">
                      <ValideIcon />
                    </span>
                  </td>
                  <td>
                    <span className="block text-sm">
                      <ValideIcon />
                    </span>
                  </td>
                </tr>

                <tr>
                  <th scope="row" className="text-left">
                    <h3 className="py-3">{t("Social Media Management")}</h3>
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <span className="block text-sm">
                      <ValideIcon />
                    </span>
                  </td>
                </tr>

                <tr>
                  <th scope="row" className="text-left">
                    <h3 className="py-3">{t("Promotional Video")}</h3>
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <span className="block text-sm">
                      <ValideIcon />
                    </span>
                  </td>
                </tr>

                <tr>
                  <th scope="row" className="text-left">
                    <h3 className="py-3">{t("In-person Training")} </h3>
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <span className="block text-sm">
                      <ValideIcon />
                    </span>
                  </td>
                </tr>

                <tr>
                  <th scope="row" className="text-left">
                    <h3 className="py-3">{t("Ad Activation")}</h3>
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <span className="block text-sm">
                      <ValideIcon />
                    </span>
                  </td>
                </tr>

                <tr>
                  <th scope="row" className="text-left">
                    <h3 className="py-3"> {t("Platform Positioning")} </h3>
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <span className="block text-sm">
                      <ValideIcon />
                    </span>
                  </td>
                </tr>

                <tr>
                  <th
                    scope="row"
                    className=" bg-[#F1634C] rounded-lg text-white "
                  >
                    <h3 className="py-2 text-[1.1rem] ">{t("Monthly")} </h3>
                  </th>
                  <td>
                    <span className=" font-semibold ">0 Mad</span>
                  </td>
                  <td>
                    <span className="font-semibold">470 Mad</span>
                  </td>
                  <td>
                    <span className="font-semibold">4000 Mad</span>
                  </td>
                  <td>
                    <span className="font-semibold">4000 Mad</span>
                  </td>
                </tr>

                <tr>
                  <th
                    scope="row"
                    className=" bg-[#F1634C] rounded-lg text-white "
                  >
                    <h3 className="py-2 text-[1.1rem] "> {t("Annual")} </h3>
                  </th>
                  <td>
                    <span className=" font-semibold ">0 Mad</span>
                  </td>
                  <td>
                    <span className="font-semibold">49 Mad</span>
                  </td>
                  <td>
                    <span className="font-semibold">350 Mad</span>
                  </td>
                  <td>
                    <span className="font-semibold">600 Mad</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
