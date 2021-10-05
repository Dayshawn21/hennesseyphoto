import { useState, useEffect } from "react";
import Head from "next/head";

import About from "../components/About";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Slideshow from "../components/Slideshow";
import { API_URL, GRAPH_URL } from "../url/url";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Get_Categories, Get_Images, Get_Slideshow } from "../queries/query";
import Testimonial from "../components/Test";
import timekit from "timekit-sdk";

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
mapboxgl.accessToken =
  "pk.eyJ1IjoiZGF5c2hhd24yMSIsImEiOiJja3Nqczgydm8wMGR0Mm9uMGZra3dsdWQ4In0.SRJo_b_HZGiN3EtvqSA4aw";

export default function Home({ categories, images, slideshows }) {
  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [lng, setLng] = useState(-121.49);
  const [lat, setLat] = useState(38.57);
  const [zoom, setZoom] = useState(10);
  useEffect(() => {
    setPageIsMounted(true);
    const map = new mapboxgl.Map({
      container: "my-map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []);
  useEffect(() => {
    var xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://10to8.com/pub-api/book-now-button/d389082e-debc-4cc8-a817-8e0b70f74c6e/"
    );
    xhr.send();
  }, []);
  return (
    <div>
      <Head>
        <title>Hennessy Williams Photography</title>
        <meta name="description" content="Generated by create next app" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
          rel="stylesheet"
        />
        <script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
          defer
        ></script>
        <script
          src="https://cdn.timekit.io/booking-js/v2/booking.min.js"
          defer
        ></script>
      </Head>

      <Slideshow slideshows={slideshows} />
      <About />
      <Gallery categories={categories} images={images} />
      <Testimonial />
      <div className="bg-gray-800 items-center py-5">
        <div className="  md:grid grid-cols-2  container mx-auto  text-white">
          <Contact />
          <div id="my-map" className="object-center" />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: `${API_URL}/graphql`,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({ query: Get_Categories }); // Get categories
  const { data: images } = await client.query({ query: Get_Images }); // Get images
  const { data: slideshows } = await client.query({ query: Get_Slideshow }); // Get images

  // return Products

  return {
    props: {
      categories: data.categories,
      images: images.galleries,
      slideshows: slideshows.slideshows,
    },
  };
};
