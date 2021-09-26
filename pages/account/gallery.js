import { useState, useRef } from "react";
import Image from "next/image";
import { getCookie } from "../../helper/index";
import React from "react";
import { API_URL } from "../../url/url";
import Photo from "../../components/Photo";

const Gallery = ({ customer }) => {
  console.log(customer);

  return (
    <div className="bg-gray-800">
      {customer.map((item) => (
        <Photo item={item} key={image.id} />
      ))}
    </div>
  );
};

export async function getServerSideProps({ req }) {
  const { token } = getCookie(req);

  const res = await fetch(`${API_URL}/customers/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const customer = await res.json();
  return {
    props: { customer },
  };
}
export default Gallery;
