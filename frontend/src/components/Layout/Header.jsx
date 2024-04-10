import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { categoriesData, productData } from "../../static/data";
import { useTranslation } from "react-i18next";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiFillFacebook,
  AiOutlineLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import Cart from "../cart/Cart";
import ProductCard from "../Route/ProductCard/ProductCard";
import Carousel from "react-multi-carousel";

import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";
import  logo  from "../../Assests/Logo.png";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};
const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
   const [searchKeyword, setSearchKeyword] = useState("");
   const [productFiltred, setProductFiltred] = useState("");
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    if (searchKeyword) {
      const filteredProducts = allProducts.filter((product) => {
        return (
          product.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchKeyword.toLowerCase())
        );
      });
      setProductFiltred(filteredProducts);
    }
  }, [searchKeyword]);
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div>
        <div className="bg-[#F1634C] hidden py-4  800px:flex items-center justify-center ">
          <div className=" w-[95%] flex   ">
            <div className="flex w-[30%] ">
              <input
                type="text"
                placeholder="Search for a product"
                value={searchKeyword}
                className="p-3 rounded-lg"
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
            </div>
            <div className="flex w-[40%] justify-center text-center  text-[#fff] ">
              {t("TheBestWayToBuildYourClotMarketplace")}
            </div>
            <div className="flex w-[30%] font-size justify-center ">
              <div className=" text-[#fff] flex items-center ml-5">
                <Link
                  to={"https://facebook.com/profile.php?id=100095508759370"}
                >
                  <AiFillFacebook size={25} className="cursor-pointer" />
                </Link>{" "}
              </div>
              <div className=" text-[#fff] flex items-center ml-5">
                <Link to={"https://www.linkedin.com/company/commerces-connect"}>
                  <AiOutlineLinkedin
                    size={25}
                    style={{ marginLeft: "15px", cursor: "pointer" }}
                  />
                </Link>{" "}
              </div>
              <div className=" text-[#fff] flex items-center ml-5">
                <Link
                  to={
                    "https://www.instagram.com/commercesconnect?igshid=NGVhN2U2NjQ0Yg%3D%3D"
                  }
                >
                  <AiFillInstagram
                    size={25}
                    style={{ marginLeft: "15px", cursor: "pointer" }}
                  />
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
        {searchKeyword ? (
          <div className="bg-white absolute border-2 shadow-2xl shadow-black p-5 z-30 800px:mt-[0px] mt-[150px] w-full h-[500PX] overflow ">
            <RxCross1
              size={30}
              className="ml-4 mt-5"
              onClick={() => setSearchKeyword("")}
            />
            <div className="flex justify-center  bg-white ">
              <Carousel responsive={responsive} className=" w-[85%] ">
                {productFiltred &&
                  productFiltred.map((i, index) => (
                    <div className="bg-white m-5  text-[#A3AEBE] font-bold text-center w-[98%]">
                      <ProductCard data={i} key={index} />
                    </div>
                  ))}
                {productFiltred && productFiltred.length === 0 ? (
                  <h1 className="text-center w-full pb-[100px] text-[20px]">
                    No products Found!
                  </h1>
                ) : null}
              </Carousel>
              ;
            </div>
          </div>
        ) : null}
        <div
          className={`${
            active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
          } transition hidden 800px:flex items-center justify-between w-full shadow-xl bg-[#fff]  text-[#797979] h-[90px]`}
        >
          <div
            className={`${styles.section} relative ${styles.noramlFlex} justify-between ]`}
          >
            {/* Logo */}
            <Link to="/">
              <img src={logo} alt="" className="w-[80px] h-[80px]" />
            </Link>

            {/* <span className="text-[#F1634C] text-[20px]  900px:ml-[0px]">  E-commerce-connect</span> */}
            {/* navitems */}
            <div className={`${styles.noramlFlex}`}>
              <Navbar active={activeHeading} />
            </div>

            <div className="flex">
              <div className={`${styles.noramlFlex}`}>
                <div
                  className="relative cursor-pointer mr-[15px]"
                  onClick={() => setOpenWishlist(true)}
                >
                  <AiOutlineHeart size={25} color="#A3AEBE" />
                  <span className="absolute right-0 top-0 rounded-full bg-[#F1634C] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                    {wishlist && wishlist.length}
                  </span>
                </div>
              </div>

              <div className={`${styles.noramlFlex}`}>
                <div
                  className="relative cursor-pointer mr-[15px]"
                  onClick={() => setOpenCart(true)}
                >
                  <AiOutlineShoppingCart size={25} color="#A3AEBE" />
                  <span className="absolute right-0 top-0 rounded-full bg-[#F1634C] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                    {cart && cart.length}
                  </span>
                </div>
              </div>

              <div className={`${styles.noramlFlex}`}>
                <div className="relative cursor-pointer mr-[15px]">
                  {isAuthenticated ? (
                    <Link to="/profile">
                      <img
                        src={`${backend_url}${user?.avatar}`}
                        className="w-[35px] h-[35px] rounded-full"
                        alt=""
                      />
                    </Link>
                  ) : (
                    <Link to="/login">
                      <CgProfile size={25} color="#A3AEBE" />
                    </Link>
                  )}
                </div>
              </div>
              <div className={`${styles.noramlFlex}`}>
                <div className={`${styles.button} w-[160px]`}>
                  <Link to={`${isSeller ? "/shop-create" : "/shop-create"}`}>
                    <h1 className="text-[#fff] flex items-center">
                      {isSeller ? t("GoDashboard") : t("BecomeSeller")}{" "}
                      <IoIosArrowForward className="ml-1" />
                    </h1>
                  </Link>
                  {/* <Link to={`${isSeller ? "/dashboard" : "/shop-create"}`}>
              <h1 className="text-[#fff] flex items-center">
                {isSeller ? "Go Dashboard" : "Become Seller"}{" "}
                <IoIosArrowForward className="ml-1" />
              </h1>
            </Link> */}
                </div>
              </div>

              {/* cart popup */}
              {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

              {/* wishlist popup */}
              {openWishlist ? (
                <Wishlist setOpenWishlist={setOpenWishlist} />
              ) : null}
            </div>
          </div>
        </div>

        {/* mobile header */}
        <div
          className={`${
            active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
          }
      w-full h-[100px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
        >
          <div className="w-full flex items-center justify-between">
            <div>
              <BiMenuAltLeft
                size={40}
                className="ml-4"
                onClick={() => setOpen(true)}
              />
            </div>
            <div>
              {/* Logo */}
              <Link to="/">
                <img src={logo} alt="" className="w-[95px] h-[95px]" />
              </Link>
            </div>
            <div>
              <div
                className="relative mr-[20px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart size={30} />
                <span class="absolute right-0 top-0 rounded-full bg-[#F1634C] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>
            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* wishlist popup */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>

          {/* header sidebar */}
          {open && (
            <div
              className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
            >
              <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
                <div className="w-full justify-between flex pr-3">
                  <div>
                    <div
                      className="relative mr-[15px]"
                      onClick={() => setOpenWishlist(true) || setOpen(false)}
                    >
                      <AiOutlineHeart size={30} className="mt-5 ml-3" />
                      <span class="absolute right-0 top-0 rounded-full bg-[#F1634C] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                        {wishlist && wishlist.length}
                      </span>
                    </div>
                  </div>
                  <RxCross1
                    size={30}
                    className="ml-4 mt-5"
                    onClick={() => setOpen(false)}
                  />
                </div>

                <div className="my-8 w-[92%] m-auto h-[40px relative]">
                  <input
                    type="text"
                    placeholder="Search for a product"
                    value={searchKeyword}
                    className="p-3 rounded-lg"
                    onChange={(e) => setSearchKeyword(e.target.value)}
                  />
                  {searchData && (
                    <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
                      {searchData.map((i) => {
                        const d = i.name;

                        const Product_name = d.replace(/\s+/g, "-");
                        return (
                          <Link to={`/product/${Product_name}`}>
                            <div className="flex items-center">
                              <img
                                src={i.image_Url[0].url}
                                alt=""
                                className="w-[50px] mr-2"
                              />
                              <h5>{i.name}</h5>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>

                <Navbar active={activeHeading} />
                <div className={`${styles.button} ml-4 !rounded-[4px]`}>
                  <Link to="/shop-create">
                    <h1 className="text-[#fff] flex items-center">
                      Become Seller <IoIosArrowForward className="ml-1" />
                    </h1>
                  </Link>
                </div>
                <br />
                <br />
                <br />

                <div className="flex w-full justify-center">
                  {isAuthenticated ? (
                    <div>
                      <Link to="/profile">
                        <img
                          src={`${backend_url}${user.avatar}`}
                          alt=""
                          className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                        />
                      </Link>
                    </div>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="text-[18px] pr-[10px] text-[#000000b7]"
                      >
                        Login /
                      </Link>
                      <Link
                        to="/sign-up"
                        className="text-[18px] text-[#000000b7]"
                      >
                        Sign up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
