import { useState } from "react";
import Image from "next/image";
import { SRLWrapper } from "simple-react-lightbox";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Photo = ({ item }) => {
  console.log(item);

  return (
    <div>
      <h1 className="text-center text-4xl text-yellow-800 pt-4">
        {item.name} Photos
      </h1>
      <SRLWrapper>
        <div className="container py-4  mx-auto md:grid grid-cols-4 gap-2  ">
          {item.photo.map((photos, index) => {
            return (
              <div key={index}>
                <Image
                  src={photos.url}
                  alt={item.name}
                  width={300}
                  height={250}
                  srl_gallery_image="true"
                />
              </div>
            );
          })}
        </div>
      </SRLWrapper>
    </div>
  );
};

export default Photo;
