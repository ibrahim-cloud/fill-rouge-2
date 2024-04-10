import React from "react";
// import about from "../../../Assests/image/13.jpg";
// import P1 from "../../../Assests/image/G1.png";
// import P2 from "../../../Assests/image/G2.png";
// import P5 from "../../../Assests/image/G5.png";
// import P4 from "../../../Assests/image/g4.png";
// import P6 from "../../../Assests/image/g6.png";
// import P7 from "../../../Assests/image/g7.png";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div class="flex flex-col lg:flex-row justify-between gap-8">
          <div class="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
              {t("AboutCommerceConnectTitle")}
            </h1>
            <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">
              {t("AboutCommerceConnect")}
            </p>
          </div>
          <div class="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
              {t("OurGoalTitle")}
            </h1>
            <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">
              {t("OurGoal")}
            </p>
            <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
              {"WhyCommerceConnectTitle"}
            </h1>
            <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">
              {t("WhyCommerceConnect")}
            </p>
          </div>
          <div class="w-full lg:w-8/12">
            <img
              class="w-full h-full"
              src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
              alt="A group of People"
            />
          </div>
        </div>

        <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div class="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
              {t("OurTeamTitle")}
            </h1>
            <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">
              {t("OurTeam")}
            </p>
            <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
              {t("JoinUsTitle")}
            </h1>
            <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">
              {t("JoinUs")}
            </p>
          </div>
          <div class="w-full lg:w-8/12 lg:pt-8">
            <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div class="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  class="md:block hidden"
                  src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                  alt="Alexa featured Image"
                />
                <img
                  class="md:hidden block"
                  src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                  alt="Alexa featured Image"
                />
                <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                  Salma harcha
                </p>
              </div>
              <div class="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  class="md:block hidden"
                  src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                  alt="Olivia featured Image"
                />
                <img
                  class="md:hidden block"
                  src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                  alt="Olivia featured Image"
                />
                <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">sabrina</p>
              </div>
              <div class="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  class="md:block hidden"
                  src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                  alt="Liam featued Image"
                />
                <img
                  class="md:hidden block"
                  src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                  alt="Liam featued Image"
                />
                <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                  ibrahim hajiri
                </p>
              </div>
              <div class="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  class="md:block hidden"
                  src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                  alt="Elijah featured image"
                />
                <img
                  class="md:hidden block"
                  src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                  alt="Elijah featured image"
                />
                <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                  Elijah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    //  <>
    //    <div className=" flex justify-center mt-7 ">
    //      <div className="w-[85%] font-bold text-[30px] ">
    //        {" "}
    //        About us <br /> <div className="bg-[#F1634C] h-2  w-[6%]"></div>
    //      </div>
    //    </div>
    //    <div className="flex justify-center  ">
    //      <div className="w-[85%] flex ">
    //        <div className="p-9 w-[50%] flex justify-center">
    //          <img src={about} className="w-[70%]" loading="lazy" />
    //        </div>

    //        <div className="p-9 w-[50%] text-center font-medium text-[22px] flex items-center">
    //          We are on a very excited journey towards version 3.0 of this
    //          component which will be rewritten in hooks/context completely. It
    //          means smaller bundle size, performance improvement and easier
    //          customization of the component and so many more benefits. It would
    //          mean so much if you could provide help towards the further
    //          development of this project as we do this open source work in our
    //          own free time especially during this covid-19 crisis. If you are
    //          using this component seriously, please donate or talk to your
    //          manager as this project increases your income too. It will help us
    //          make releases, fix bugs, fulfill new feature requests faster and
    //          better. We are on a very excited journey towards version 3.0 of this
    //          component which will be rewritten in hooks/context completely. It
    //          means smaller bundle size, performance improvement and easier
    //          customization of the component and so many more benefits. It would
    //          mean so much if you could provide help towards the further
    //          development of this project as we do this open source work in our
    //          own free time especially during this covid-19 crisis. If you are
    //          using this component seriously, please donate or talk to your
    //          manager as this project increases your income too. It will help us
    //          make releases, fix bugs, fulfill new feature requests faster and
    //          better. We are on a very excited journey towards version 3.0 of this
    //          component which will be rewritten in hooks/context completely. It
    //          means smaller bundle size, performance improvement and easier
    //          customization of the component and so many more benefits. It would
    //          mean so much if you could provide help towards the further
    //          development of this project as we do this open source work in our
    //          own free time especially during this covid-19 crisis. If you are
    //          using this component seriously, please donate or talk to your
    //          manager as this project increases your income too. It will help us
    //          make releases, fix bugs, fulfill new feature requests faster and
    //          better. We are on a very excited journey towards version 3.0 of this
    //          component which will be rewritten in hooks/context completely. It
    //          means smaller bundle size, performance improvement and easier
    //          customization of the component and so many more benefits. It would
    //          mean so much if you could provide help towards the further
    //          development of this project as we do this open source work in our
    //          own free time especially during this covid-19 crisis. If you are
    //          using this component seriously, please donate or talk to your
    //          manager as this project increases your income too. It will help us
    //          make releases, fix bugs, fulfill new feature requests faster and
    //          better. We are on a very excited journey towards version 3.0 of this
    //          component which will be rewritten in hooks/context completely. It
    //          means smaller bundle size, performance improvement and easier
    //          customization of the component and so many more benefits. It would
    //          mean so much if you could provide help towards the further
    //          development of this project as we do this open source work in our
    //          own free time especially during this covid-19 crisis. If you are
    //          using this component seriously, please donate or talk to your
    //          manager as this project increases your income too. It will help us
    //          make releases, fix bugs, fulfill new feature requests faster and
    //          better. We are on a very excited journey towards version 3.0 of this
    //          component which will be rewritten in hooks/context completely. It
    //          means smaller bundle size, performance improvement and easier
    //          customization of the component and so many more benefits. It would
    //          mean so much if you could provide help towards the further
    //          development of this project as we do this open source work in our
    //          own free time especially during this covid-19 crisis. If you are
    //          using this component seriously, please donate or talk to your
    //          manager as this project increases your income too. It will help us
    //          make releases, fix bugs, fulfill new feature requests faster and
    //          better. We are on a very excited journey towards version 3.0 of this
    //          component which will be rewritten in hooks/context completely. It
    //          means smaller bundle size, performance improvement and easier
    //          customization of the component and so many more benefits. It would
    //          mean so much if you could provide help towards the further
    //          development of this project as we do this open source work in our
    //          own free time especially during this covid-19 crisis. If you are
    //          using this component seriously, please donate or talk to your
    //          manager as this project increases your income too. It will help us
    //          make releases, fix bugs, fulfill new feature requests faster and
    //          better. We are on a very excited journey towards version 3.0 of this
    //          component which will be rewritten in hooks/context completely. It
    //          means smaller bundle size, performance improvement and easier
    //          customization of the component and so many more benefits. It would
    //          mean so much if you could provide help towards the further
    //          development of this project as we do this open source work in our
    //          own free time especially during this covid-19 crisis. If you are
    //          using this component seriously, please donate or talk to your
    //          manager as this project increases your income too. It will help us
    //          make releases, fix bugs, fulfill new feature requests faster and
    //          better.
    //        </div>
    //      </div>
    //    </div>
    //    <div className="flex justify-center ">
    //      <div class="grid w-[85%] bg-white p-6 my-6 rounded-3xl  grid-flow-row-dense grid-cols-5 grid-rows-2 ...">
    //        <div className="col-span-2 bg-red-100">
    //          <img src={P1} loading="lazy" className="w-full h-[381px]" />{" "}
    //        </div>
    //        <div className="col-span-2  bg-red-700">
    //          <img src={P2} loading="lazy" className="w-full h-[381px]" />
    //        </div>

    //        <div className=" bg-red-400">
    //          <img src={P5} loading="lazy" className="w-full h-[381px]" />
    //        </div>
    //        <div className=" bg-red-300">
    //          <img src={P4} loading="lazy" className="w-full h-[381px]" />
    //        </div>
    //        <div className="col-span-2  bg-red-200">
    //          <img src={P7} loading="lazy" className="w-full h-[381px]" />
    //        </div>

    //        <div className="col-span-2 bg-red-600">
    //          <img src={P6} loading="lazy" className="w-full h-[381px]" />
    //        </div>
    //      </div>
    //    </div>
    //  </>
  );
};

export default AboutUs;
