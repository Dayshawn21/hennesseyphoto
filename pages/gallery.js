import React, { useState, useEffect } from "react";
import { API_URL } from "../url/url";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { SRLWrapper } from "simple-react-lightbox";

import Image from "next/image";
import { Get_GalleyImages } from "../queries/query";

const Gallery = ({ categories, images }) => {
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
          My <span className="text-yellow-800"> Works</span>
        </h1>

        <div className="flex justify-around text-center  pt-4">
          <TagButton
            name="all"
            tagActive={tag === "all" ? true : false}
            handleSetTag={setTag}
          />{" "}
          <TagButton
            name="Men"
            tagActive={tag === "Men" ? true : false}
            handleSetTag={setTag}
          />{" "}
          <TagButton
            name="Women"
            tagActive={tag === "Women" ? true : false}
            handleSetTag={setTag}
          />{" "}
          <TagButton
            name="Children"
            tagActive={tag === "Children" ? true : false}
            handleSetTag={setTag}
          />
        </div>
        <SRLWrapper>
          <div className=" grid md:grid-cols-4 gap-2 py-4   ">
            {filteredImages.map((image) => (
              <div key={image.id} className="h-64 w-auto relative">
                <Image
                  src={image.images.url}
                  layout="fill"
                  objectFit="contain"
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

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: `${API_URL}/graphql`,
    cache: new InMemoryCache(),
  });

  const { data: images } = await client.query({ query: Get_GalleyImages }); // Get images

  // return Products

  return {
    props: {
      images: images.galleries,
    },
  };
}

export default Gallery;
