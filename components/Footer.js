import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-around px-4 py-4 bg-black text-white  ">
        <div>
          <Link href={`/`}>
            <a>
              <h1>Hennessy Williams Photography &copy; 2021 </h1>
            </a>
          </Link>
        </div>
        <div className="  flex  justify-end">
          <div className="px-2">
            <a
              href="mailto: Hennessywilliamsphoto@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image width={30} height={30} src="/image/email.png" />
            </a>
          </div>
          <div className="px-2">
            <a
              href="tel:+17739970423"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image width={30} height={30} src="/image/phone.png" />
            </a>
          </div>
          <div className="px-2">
            <a
              href="https://www.facebook.com/hennessywilliamsphotography/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image width={30} height={30} src="/image/facebook.png" />
            </a>
          </div>
          <div className="px-2">
            <a
              href="https://www.instagram.com/hennessywilliamsphoto"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image width={30} height={30} src="/image/instagram.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
