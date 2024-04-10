import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import { useTranslation } from "react-i18next";

const FeaturedProduct = () => {
  const {allProducts} = useSelector((state) => state.products);
  const { t } = useTranslation();

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>{t('FeaturedProducts')}</h1>
        </div>
        <div className="flex justify-center">
        <div className="flex justify-center flex-wrap">
        {
            allProducts && allProducts.length !== 0 &&(
              <>
               {allProducts && allProducts.map((i, index) => <ProductCard data={i} key={index} />)}
              </>
            )
           }
        </div>
      </div>
    </div>
    </div>
  );
};

export default FeaturedProduct;
