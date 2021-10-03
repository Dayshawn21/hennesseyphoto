import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className=" py-10 grid md:grid-cols-2 bg-gray-800  justify-items-center  text-white ">
      <div>
        <Image src="/image/hen.jpg" width={500} height={400} />
      </div>

      <div className=" container mx-auto py-6">
        <h1 className="text-4xl"> My Name is Hennessy Williams</h1>
        <h1 className="text-4xl">
          I am a <span className="text-yellow-800"> Photographer</span>
        </h1>
        <br />

        <p className="text-lg">
          Born and raised in the Southside of Chicago where my passion for
          photography bloomed. Being surrounded by such a culturally rich
          community capturing the moment came involuntary. At the age of 25, I
          now reside in Sacramento, California where I wish to continue to
          capture those precious moments in the Sunshine State.
        </p>
        <br />
        <p className="text-lg">
          One of the great peaks of my job is traveling to those locations that
          we hold close to us whether it is a wedding or your child’s 5th
          birthday party. I travel for projects if needed. I hope to capture
          timeless moments for my clients, so one day they can see that picture
          and be transported back to that joyous time, and show their children
          how small they used to be. A picture is not just a picture, it is a
          moment captured in time that has a story behind it. Let me capture
          that image for your precious memories.
        </p>
      </div>
    </div>
  );
};

export default About;
