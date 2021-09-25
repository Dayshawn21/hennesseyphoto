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
          <h2 className="pl-2"> Hennessywilliamsphoto@gmail.com</h2>
        </div>
        <div className=" flex  items-center">
          <Image width={30} height={30} src="/image/phone.png" />
          <h2 className="pl-2">773-997-0423</h2>
        </div>
        <div className=" flex  items-center">
          <Image width={30} height={30} src="/image/facebook.png" />
          <h2 className="pl-2">hennessywilliamsphoto</h2>
        </div>
        <div className=" flex  items-center">
          <Image width={30} height={30} src="/image/instagram.png" />
          <h2 className="pl-2">hennessywilliamsphoto</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
