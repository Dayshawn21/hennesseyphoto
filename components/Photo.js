import Image from "next/image";
import { SRLWrapper } from "simple-react-lightbox";

const Photo = ({ item }) => {
  return (
    <div>
      <h1 className="text-center text-4xl text-yellow-800 pt-4">
        {item.name} Photos
      </h1>
      <SRLWrapper>
        <div className="container sm:mx-4 py-4  md:grid grid-cols-4 gap-2  ">
          {item.photo.map((photos, index) => {
            return (
              <div key={index} className="h-64 w-auto relative">
                <Image
                  src={photos.url}
                  alt={item.name}
                  layout="fill"
                  objectFit="contain"
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
