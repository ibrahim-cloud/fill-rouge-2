import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPromoProducts } from "../../../redux/actions/promoProducts";
import { deleteProduct } from "../../../redux/actions/promoProducts";
import Loader from "../../Layout/Loader";
import axios from "axios";
import { server } from "../../../server";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";
import styles from "../../../styles/styles";

const AllProducts = () => {
  const dispatch = useDispatch();
  // const [data, setData] = useState(state=> state.promoProducts);
  const { promoProducts } = useSelector((state) => state.promoProducts);

  const [productId, setProductId] = useState([]);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    dispatch(getPromoProducts());
  }, [dispatch]);
  const handleDelete = async (id) => {
    await axios
    .delete(`${server}/product/delete-promo-product/${id}`, { withCredentials: true })
    .then((res) => {
      toast.success(res.data.message);
    });
  dispatch(getPromoProducts());
  };
  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "Stock",
      headerName: "Stock",
      type: "number",
      minWidth: 80,
      flex: 0.5,
    },

    {
      field: "sold",
      headerName: "Sold out",
      type: "number",
      minWidth: 130,
      flex: 0.6,
    },
    {
      field: "Preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
            <Button onClick={() => setProductId(params.id) || setOpen(true)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];

  promoProducts &&
  promoProducts.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        price: "MAD " + item.discountPrice,
        Stock: item.stock,
        sold: item?.sold_out,
      });
    });

  return (
    <>
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
        <div>
        {open && (
          <div className="w-full fixed top-0 left-0 z-[999] bg-[#00000039] flex items-center justify-center h-screen">
            <div className="w-[95%] 800px:w-[40%] min-h-[20vh] bg-white rounded shadow p-5">
              <div className="w-full flex justify-end cursor-pointer">
                <RxCross1 size={25} onClick={() => setOpen(false)} />
              </div>
              <h3 className="text-[25px] text-center py-5 font-Poppins text-[#000000cb]">
                Are you sure you wanna delete this promo product ?
              </h3>
              <div className="w-full flex items-center justify-center">
                <div
                  className={`${styles.button} text-white text-[18px] !h-[42px] mr-4`}
                  onClick={() => setOpen(false)}
                >
                  cancel
                </div>
                <div
                  className={`${styles.button} text-white text-[18px] !h-[42px] ml-4`}
                  onClick={() =>  setOpen(false) || handleDelete(productId)}
                >
                  confirm
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
    </>
  );
};

export default AllProducts;
