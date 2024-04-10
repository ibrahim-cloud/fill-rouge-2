import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProductById } from "../../redux/actions/product";
import { categoriesData } from "../../static/data";
import { toast } from "react-toastify";
import Loader from "../Layout/Loader";
import { backend_url , server } from "../../server";
import axios from "axios";
import { useTranslation } from "react-i18next";

const UpdateProduct = ({closeDialog}) => {
    const { t } = useTranslation();

  const { seller } = useSelector((state) => state.seller);
  const { success, error } = useSelector((state) => state.products);
  const { product } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [images, setImages] = useState(product?.images);
  const [name, setName] = useState(product?.name);
  const [description, setDescription] = useState(product?.description);
  const [category, setCategory] = useState( product? JSON.parse(product?.category) : null);
  const [selectedCategory, setSelectedCategory] = useState(product?.category?.id);
  const [subCategory, setSubCategory] = useState(product?.subCategory);
  const [certificate, setCertificate] = useState(product?.certificate);
  const [tags, setTags] = useState(product?.tags);
  const [originalPrice, setOriginalPrice] = useState(product?.originalPrice);
  const [discountPrice, setDiscountPrice] = useState(product?.discountPrice);
  const [stock, setStock] = useState(product?.stock);
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSubCategory(subCategory)
    // if (error) {
    //   toast.error(error);
    // }
    // if (success) {
    //   toast.success("Product created successfully!");
    //   navigate("/dashboard");
    //   // window.location.reload();
    // }
  }, [dispatch, error, success , subCategory]);
  const handleImageChange = async (e) => {
    setFile(true)
    e.preventDefault();
    let files = Array.from(e.target.files);
    setImages(files);
    console.log(files , images);


    images.forEach((image) => {
      console.log(image);
    })
    const newForm = new FormData();

    files.forEach((image) => {
      newForm.append("images", image);
    });
    const config = { headers: { "Content-Type": "multipart/form-data" } };

      await axios.post(`${server}/product/update-product-images/${product._id}`,
     newForm,
     config)
  };

  const handleCategorie = (value)=>{
    category.title = categoriesData[value - 1].title 
    category.id = value 
    setSubCategory(null)
    setSelectedCategory(null)
      setCategory(category)
      setSelectedCategory(value)
    }
  const handleSubmit = (e) => {
    setLoading(true)

    e.preventDefault();

    const newForm = new FormData();

    images.forEach((image) => {
      newForm.append("images", image);
    });
    newForm.append("name", name);
    newForm.append("description", description);
    newForm.append("category", category ? JSON.stringify(category) : null);
    newForm.append("subCategory", subCategory);
    newForm.append("certificate", certificate);
    newForm.append("tags", tags);
    newForm.append("originalPrice", originalPrice);
    newForm.append("discountPrice", discountPrice);
    newForm.append("stock", stock);
    newForm.append("shopId", seller._id);
    dispatch(updateProductById(product._id,newForm)).then((res)=>{
      closeDialog()
      setLoading(false)
      navigate("/dashboard");
      // window.location.reload();
    })
    .catch((e)=>{
      setLoading(false)
    })
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full fixed top-0 left-0 z-[999] bg-[#00000039] flex items-center justify-center h-screen">
          <div className="w-[90%] 800px:w-[50%] bg-white  shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
            <h5 className="text-[30px] font-Poppins text-center">
              Update Product
            </h5>
            {/* create product form */}
            <form onSubmit={handleSubmit}>
              <br />
              <div>
                <label className="pb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your product name..."
                />
              </div>
              <br />
              <div>
                <label className="pb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  cols="30"
                  required
                  rows="8"
                  type="text"
                  name="description"
                  value={description}
                  className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter your product description..."
                ></textarea>
              </div>
              <br />
              <div>
                <label className="pb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="catgorie"
                  className="w-full mt-2 border h-[35px] rounded-[5px]"
                  value={category?.id}
                  onChange={(e) => handleCategorie(e.target.value)}
                >
                  <option value={null}>Choise categories</option>
                  {categoriesData &&
                    categoriesData.map((i) => (
                      <option value={i.id} key={i.name}>
                        {t(i.name)}
                      </option>
                    ))}
                </select>
              </div>
              <br />

              <div>
                <label className="pb-2">
                  Subcategory {product?.subCategory}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div>
                  <select
                    name="subcatgorie"
                    className="w-full mt-2 border h-[35px] rounded-[5px]"
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                  >
                    {subCategory === null ? (
                      <option selected value={null}>
                        Choose a subCategory
                      </option>
                    ) : (
                      <option value={null}>Choose a subCategory</option>
                    )}
                    {categoriesData[category?.id - 1]
                      ? categoriesData[category?.id - 1].subcategories.map(
                          (i) => (
                            <option value={i} key={i}>
                              {t(i)}
                            </option>
                          )
                        )
                      : null}
                  </select>
                </div>
              </div>
              <br />
              <div>
                <label className="pb-2">Tags</label>
                <input
                  type="text"
                  name="tags"
                  value={tags}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="Enter your product tags..."
                />
              </div>
              <br />
              <div>
                <label className="pb-2">Original Price</label>
                <input
                  type="number"
                  name="price"
                  value={originalPrice}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={(e) => setOriginalPrice(e.target.value)}
                  placeholder="Enter your product price..."
                />
              </div>
              <br />
              <div>
                <label className="pb-2">
                  Price (With Discount) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="price"
                  value={discountPrice}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={(e) => setDiscountPrice(e.target.value)}
                  placeholder="Enter your product price with discount..."
                />
              </div>
              <br />
              <div>
                <label className="pb-2">
                  Product Stock <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="price"
                  value={stock}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={(e) => setStock(e.target.value)}
                  placeholder="Enter your product stock..."
                />
              </div>
              <br />
              <div>
                <input
                  type="checkbox"
                  onChange={(e) => setCertificate(!certificate)}
                />
                <label className="ml-3" for="ONSA">
                  do you have certificate of (Onsa)
                </label>
              </div>
              <br />
              <div>
                <label className="pb-2">
                  Upload Images <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  name=""
                  id="upload"
                  className="hidden"
                  multiple
                  onChange={handleImageChange}
                />
                <div className="w-full flex items-center flex-wrap">
                  <label htmlFor="upload">
                    <AiOutlinePlusCircle
                      size={30}
                      className="mt-3"
                      color="#555"
                    />
                  </label>
                  {images &&
                    images.map((i) => (
                      <img
                        src={file ? URL.createObjectURL(i) : backend_url + i}
                        key={i}
                        alt=""
                        loading="lazy"
                        className="h-[120px] w-[120px] object-cover m-2"
                      />
                    ))}
                </div>
                <br />
                <div>
                  <input
                    type="submit"
                    value="Update"
                    className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <input />
                  <button
                    type="submit"
                    onClick={closeDialog}
                    className=" cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    close
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateProduct;
