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
              <h1>Hennessey Photos &copy; 2021 </h1>
            </a>
          </Link>
        </div>
        <div className="  flex  justify-end">
          <div className="px-2">
            <Image width={30} height={30} src="/image/email.png" />
          </div>
          <div className="px-2">
            <Image width={30} height={30} src="/image/phone.png" />
          </div>
          <div className="px-2">
            <Image width={30} height={30} src="/image/facebook.png" />
          </div>
          <div className="px-2">
            <Image width={30} height={30} src="/image/instagram.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
