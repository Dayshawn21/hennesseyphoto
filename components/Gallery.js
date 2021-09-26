import React, { useState, useEffect } from "react";
import { SRLWrapper } from "simple-react-lightbox";

import Image from "next/image";

const Gallery = ({ images }) => {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.categories === tag));
  }, [tag]);

  return (
    <div className="bg-gray-800  text-white py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center">
          Lastest <span className="text-yellow-800"> Works</span>
        </h1>

        <div className="flex justify-around text-center  pt-4">
          <TagButton
            name="all"
            tagActive={tag === "all" ? true : false}
            handleSetTag={setTag}
          />{" "}
          <TagButton
            name="Family"
            tagActive={tag === "Family" ? true : false}
            handleSetTag={setTag}
          />{" "}
          <TagButton
            name="Portraits"
            tagActive={tag === "Portraits" ? true : false}
            handleSetTag={setTag}
          />{" "}
          <TagButton
            name="Sports"
            tagActive={tag === "Sports" ? true : false}
            handleSetTag={setTag}
          />
        </div>
        <SRLWrapper>
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 py-4  ">
            {filteredImages.map((image) => (
              <div key={image.id}>
                <Image
                  src={image.images.url}
                  width={250}
                  height={250}
                  alt={image.name}
                  srl_gallery_image="true"
                />
              </div>
            ))}
          </div>
        </SRLWrapper>
      </div>
    </div>
  );
};

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default Gallery;
