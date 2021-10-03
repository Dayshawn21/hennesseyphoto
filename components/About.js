import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className=" py-10 grid md:grid-cols-2 gap-1 justify-items-center content-center bg-black text-white">
      <div>
        <Image
          src="/image/hen.jpg"
          width={500}
          height={400}
          className="rounded-full"
        />
      </div>

      <div className="content-center container py-6">
        <h2 className="text-yellow-800 text-lg">About Me</h2>
        <h1 className="text-4xl"> My Name is Hennessy Williams</h1>
        <h1 className="text-4xl">
          I am a <span className="text-yellow-800"> Photographer</span>
        </h1>
        <br />

        <p className="text-lg">
          The world without photography will be meaningless to us if there is no
          light and color, which opens up our minds and expresses passion. My
          photos are inspired by light, color, creative perspective, techniques
          and personalities
        </p>
        <br />

        <div className="grid md:grid-cols-3 text-center divide-x-2  py-3 ">
          <div>
            <h2 className="text-yellow-800 text-3xl">140</h2>
            <h2 className="text-xl"> Finished Photosessions</h2>
          </div>
          <div>
            <h2 className="text-yellow-800 text-3xl">105</h2>
            <h2 className="text-xl"> Studio Sessions</h2>
          </div>
          <div>
            <h2 className="text-yellow-800 text-3xl">230</h2>
            <h2 className="text-xl"> Happy Clients</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
