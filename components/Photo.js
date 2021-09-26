import Image from "next/image";
import { SRLWrapper } from "simple-react-lightbox";

const Photo = ({ item }) => {
  return (
    <div>
      <h1 className="text-center text-4xl text-yellow-800 pt-4">
        {item.name} Photos
      </h1>
      <SRLWrapper>
        <div className="container mx-auto py-4  md:grid grid-cols-4 gap-2  ">
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
