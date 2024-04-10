import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../redux/actions/product";
import { categoriesData } from "../../static/data";
import { toast } from "react-toastify";
import Loader from "../Layout/Loader";
import { useTranslation } from "react-i18next";

const CreateProduct = () => {
        const { t } = useTranslation();
  const { seller } = useSelector((state) => state.seller);
  const { success, error } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const [hasDiscount, setHasDiscount] = useState(false);

  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState({title:null,id:null});
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [certificate, setCertificate] = useState(false);
  const [tags, setTags] = useState("");
  const [originalPrice, setOriginalPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [stock, setStock] = useState();
  const [typeofcertificate, setTypeofcertificate] = useState();
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success("Product created successfully!");
      window.location.reload();
    }
  }, [dispatch, error, success]);

  const handleImageChange = (e) => {
    e.preventDefault();

    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };
const handleDiscount = (e) => {
  setHasDiscount(!hasDiscount);
  setDiscountPrice("");
  setOriginalPrice("");
};
 const handleCategorie = (value)=>{
  category.title = categoriesData[value - 1].title 
  category.id = value 

    setCategory(category)
    setSelectedCategory(value)
    console.log(category);
  }

  const handleSubmit = (e) => {
    if (!discountPrice && originalPrice) {
      setDiscountPrice(originalPrice);
    }
    setLoading(true)


    e.preventDefault();

    const newForm = new FormData();

    images.forEach((image) => {
      newForm.append("images", image);
    });
    newForm.append("name", name);
    newForm.append("description", description);
    newForm.append("category", JSON.stringify(category));
    newForm.append("subCategory", subCategory);
    newForm.append("certificate", certificate);
    newForm.append("tags", tags);
    newForm.append("originalPrice", originalPrice);
    newForm.append("discountPrice", discountPrice);
    newForm.append("stock", stock);
    newForm.append("shopId", seller._id);
    dispatch(createProduct(newForm)).then((res)=>{
      setLoading(false)

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
        <div className="w-[90%] 800px:w-[50%] bg-white  shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
          <h5 className="text-[30px] font-Poppins text-center">
            Create Product
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
              {category.title}
              <select
                className="w-full mt-2 border h-[35px] rounded-[5px]"
                value={category.title}
                onChange={(e) => handleCategorie(e.target.value)}
              >
                <option value="Choose a category">Choose a category</option>
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
                Subcategory <span className="text-red-500">*</span>
              </label>
              <div>
                <select
                  className="w-full mt-2 border h-[35px] rounded-[5px]"
                  value={category}
                  onChange={(e) => setSubCategory(e.target.value)}
                >
                  <option value="Choose a category">Choose a category</option>
                  {categoriesData[selectedCategory - 1]
                    ? categoriesData[selectedCategory - 1].subcategories.map(
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
            {/* <div>
              <label className="pb-2">Original Price</label>
              <input
                type="number"
                name="price"
                onWheel={(e) => e.target.blur()}
                value={originalPrice}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setOriginalPrice(e.target.value)}
                placeholder="Enter your product price..."
              />
            </div>
            <br /> */}
            <div>
              <input type="checkbox" onChange={handleDiscount} />
              <label className="ml-3">do you have discount</label>
            </div>
            <br />
            <div>
              <label className="pb-2">
                {hasDiscount ? "Price (with discount)" : "Price"}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                onWheel={(e) => e.target.blur()}
                name="price"
                value={discountPrice}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setDiscountPrice(e.target.value)}
                placeholder="Enter your product price with discount..."
              />
            </div>
            <br />
            {hasDiscount ? (
              <>
                <div>
                  <label className="ml-3">original Price</label>

                  <input
                    type="number"
                    name="price"
                    onWheel={(e) => e.target.blur()}
                    value={originalPrice}
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    placeholder="Enter your product price..."
                  />
                </div>
                <br />
              </>
            ) : null}

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
                do you have certificate
              </label>
            </div>
            <br />
            {certificate ? (
              <>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={typeofcertificate}
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={(e) => setTypeofcertificate(e.target.value)}
                    placeholder="Enter your product name..."
                  />
                  <label className="ml-3">{t("Typeofcertificate")}</label>
                </div>

                <br />
              </>
            ) : null}

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
                <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
              </label>
              {images &&
                images.map((i) => (
                  <img
                    src={URL.createObjectURL(i)}
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
                value="Create"
                className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CreateProduct;
