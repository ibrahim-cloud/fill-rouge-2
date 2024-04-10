import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import ProductCard from "../Route/ProductCard/ProductCard";
import Pagination from '../Layout/pagination';
import { categoriesData } from "../../static/data.js";
import { useTranslation } from "react-i18next";

const Products = ( { allProducts }) => {
    const { t } = useTranslation();

    const [searchParams] = useSearchParams();
    const categoryData = searchParams.get("category");
    // const { allProducts, isLoading } = useSelector((state) => state.products);
    const [data, setData] = useState([]);
    const [priceForm, setPriceForm] = useState(null);
    const [priceTo, setPriceTo] = useState(null);
    const [selectedCategorie, setSelectedCategorie] = useState(null);
    const [subCategory, setSubCategory] = useState(null);
    const [category, setCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);
    // Calculate the index of the last post on the current page
    const indexOfLastPost = currentPage * postsPerPage;

    // Calculate the index of the first post on the current page
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    // Get the current posts to display
    const currentPosts =  data.slice(indexOfFirstPost, indexOfLastPost);
    // Change page
    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const handleCategorie = (e)=>{
        if (e.target.value === 'Others') {
            setCategory(null)
            setSubCategory(null)
        }else{
            setSubCategory(null)
            setCategory(e.target.value)

        }
    }
   const handleSubCategorie = (e)=>{
    if (e.target.value === null) {
        setSubCategory(null)
   }else{
    setSubCategory(e.target.value)
   }
   }
    useEffect(() => {
        let productFiltred = allProducts;
        // if(!category && !subCategory && !priceForm && !priceTo ){
        //     setData(allProducts)
        // }else{
        if(category){
             setSelectedCategorie(categoriesData.find((i)=>i.title === category ))
            if (productFiltred.length) {
                productFiltred = productFiltred && productFiltred.filter((i) => i.category === category);
            }
            // else{
            //     productFiltred = allProducts && allProducts.filter((i) => i.category === category)
            // }
        }
        if(subCategory){
            if (productFiltred.length) {
                productFiltred = productFiltred && productFiltred.filter((i) => i.subCategory === subCategory);
            }
            // else{
            //     productFiltred = allProducts && allProducts.filter((i) => i.subCategory === subCategory)
            // }
        }
        if (priceForm) {
            if (productFiltred.length) {
                productFiltred = productFiltred && productFiltred.filter((i) => i.discountPrice >= priceForm);
            }
            // else{
            //     productFiltred = allProducts && allProducts.filter((i) => i.discountPrice >= priceForm);
            // }
            
        }
        if (priceTo) {
            if (productFiltred.length) {
                productFiltred = productFiltred && productFiltred.filter((i) => i.discountPrice <= priceTo);
            }
            // else{
            //     productFiltred = allProducts && allProducts.filter((i) => i.discountPrice <= priceTo);
            // }
            
        }
        setData(productFiltred)
    // }
  
    }, [priceForm,category,priceTo ,subCategory]);

    return (
      <>
        <div>
          <Header activeHeading={3} />
          <br />
          <br />
          <div className="">
            {/* laptop filter */}

            <div className="   mx-5    mb-5 rounded-xl bg-white">
              {/* mobile filter */}

              <div class="flex p-4 flex-wrap">
                <div className=" p-2 ">
                  <h1 className="text-[15px] font-bold">{t("Pricerange")} </h1>
                  <input
                    type="text"
                    value={priceForm}
                    onChange={(e) => setPriceForm(e.target.value)}
                    placeholder={t("Pricefrom")}
                    className="border-2 w-[50%] p-1 rounded-lg mt-2 "
                  />
                  <input
                    type="text"
                    value={priceTo}
                    onChange={(e) => setPriceTo(e.target.value)}
                    placeholder={t("Priceto")}
                    className="border-2 w-[40%] mx-1 p-1 rounded-lg mt-2"
                  />
                </div>
                <div className=" p-2 ">
                  <label className="pb-2 font-bold">
                    {t("category")} <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full mt-2 border h-[35px] rounded-[5px]"
                    value={category}
                    onChange={handleCategorie}
                  >
                    <option value="Choose a category">
                      {t("Chooseacategory")}
                    </option>
                    {categoriesData &&
                      categoriesData.map((i) => (
                        <option value={i.name} key={i.id}>
                          {t(i.name)}
                        </option>
                      ))}
                  </select>
                </div>
                {selectedCategorie ? (
                  <div className=" p-2 ">
                    <label className="pb-2 font-bold">
                      {t("category")} <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full mt-2 border h-[35px] rounded-[5px]"
                      onChange={handleSubCategorie}
                    >
                      <option value={null}>{t("ChooseaSubcategory")}</option>
                      {categoriesData[selectedCategorie.id - 1]
                        ? categoriesData[
                            selectedCategorie.id - 1
                          ].subcategories.map((i) => (
                            <option value={i} key={i.id}>
                              {t(i)}
                            </option>
                          ))
                        : null}
                    </select>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            {/* mobile filter */}
            <div className=" w-[100%]">
              <div className="flex justify-center flex-wrap">
                {currentPosts &&
                  currentPosts.map((i, index) => (
                    <ProductCard data={i} key={index} />
                  ))}
              </div>
              {currentPosts && currentPosts.length === 0 ? (
                <h1 className="text-center w-full pb-[100px] text-[20px]">
                  {t("NoproductsFound")}
                </h1>
              ) : null}
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(data.length / postsPerPage)}
                onPageChange={onPageChange}
              />
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
};

export default Products;
