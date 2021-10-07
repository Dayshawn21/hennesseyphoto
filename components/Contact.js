import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="container mx-auto text-center ">
      <h1 className="text-yellow-800 text-4xl text-center">Book A Sesssion</h1>
      <div className="  grid grid-rows-5 gap-4 justify-around py-5">
        <div className="  flex items-center">
          <Image
            className="text-center"
            width={30}
            height={30}
            src="/image/placeholder.png"
          />
          <h2 className="pl-2"> Sacramento, CA</h2>
        </div>
        <div className="  flex items-center">
          <Image width={30} height={30} src="/image/email.png" />
          <a
            href="mailto: Hennessywilliamsphoto@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h2 className="pl-2"> Hennessywilliamsphoto@gmail.com</h2>
          </a>
        </div>
        <div className=" flex  items-center">
          <Image width={30} height={30} src="/image/phone.png" />
          <a href="tel:+17739970423" rel="noopener noreferrer" target="_blank">
            <h2 className="pl-2">773-997-0423</h2>
          </a>
        </div>
        <div className=" flex  items-center">
          <Image width={30} height={30} src="/image/facebook.png" />

          <a
            href="https://www.facebook.com/hennessywilliamsphotography/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            <h2 className="pl-2">hennessywilliamsphoto</h2>
          </a>
        </div>
        <div className=" flex  items-center">
          <Image width={30} height={30} src="/image/instagram.png" />
          <a
            href="https://www.instagram.com/hennessywilliamsphoto"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h2 className="pl-2">hennessywilliamsphoto</h2>
          </a>
        </div>

        <div className=" flex  items-center">
          <a
            className="appointlet-button"
            data-appointlet-modal
            href="https://appt.link/hennessy-williams-photography"
            style={{ backgroundColor: "#1e9bff" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a time
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
