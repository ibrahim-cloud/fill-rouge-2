import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../static/data'
import styles from '../../styles/styles'
import { useTranslation } from "react-i18next";

const Navbar = ({active}) => {
  const { t } = useTranslation();
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
         {
            navItems && navItems.map((i,index) => (
                <div className="flex ">
                    <Link to={i.url}
                    className={`${active === index + 1 ? "text-[#F1634C]" : "text-black 800px:text-[#797979]"} pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
                    >
                    {t(i.title)}
                    </Link>
                </div>
            ))
         }
    </div>
  )
}

export default Navbar