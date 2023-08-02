import React, { useState } from "react";

function Gallery() {
  const categories = [
    "All categories",
    "Shoes",
    "Bags",
    "Electronics",
    "Gaming",
  ];

  const images = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All categories");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="my-24 lg:my-28 px-4">
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`${
                selectedCategory === category
                  ? "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700"
                  : "text-gray-900 border border-white hover:border-gray-200 bg-white"
              } focus:ring-4 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((imageUrl, index) => (
            <div key={index}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-auto max-w-full rounded-lg"
                src={imageUrl}
                alt={`Image ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
