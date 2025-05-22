import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt="product_image"
              />
            ))}
          </div>
          <div className="w-4 sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="product_img" />
          </div>
        </div>
        {/* product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="star icon" className="w-3.5" />
            <img src={assets.star_icon} alt="star icon" className="w-3.5" />
            <img src={assets.star_icon} alt="star icon" className="w-3.5" />
            <img src={assets.star_icon} alt="star icon" className="w-3.5" />
            <img
              src={assets.star_dull_icon}
              alt="star icon"
              className="w-3.5"
            />
            <p className="pl-2">(133)</p>
          </div>
          <p className="mt-5 text-xl font-medium">
            {productData.price} {currency}
          </p>
          <p className="mt-5 text text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 ${
                    item === size ? "bg-white" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>

          <hr className="mt-10 mb-8 sm:w-4/5" />

          <div className="text-sm text-gray-500 mt-5bflex flex-col gap-1">
            <p>Shop with confidence-100% genuine items.</p>
            <p>Pay at your doorstep with Cash on Delivery.</p>
            <p>Hassle-free returns & exchanges within 7 days.</p>
          </div>
        </div>
      </div>

{/* Description & Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>

        <div className="flex flex-col gap-4 border px-6 py-4 text-sm text-gray-500">
  <p>
    Our collection is designed to bring together comfort, durability, and everyday style for men, women, and kids. Whether you're shopping for casual t-shirts, versatile pants, or cozy jackets, each piece is made to adapt to your lifestyle with ease. We focus on quality fabrics and reliable fits that feel as good as they look, no matter the season.
  </p>
  <p>
    From weekday wear to weekend outings, our clothing is made to move with you — offering a mix of classic essentials and modern trends that are easy to mix and match. It’s fashion made simple, functional, and ready for whatever your day brings.
  </p>
</div>

      </div>

{/*  Display related products  */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
