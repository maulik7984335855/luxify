import React, { useContext, useEffect, useRef } from "react";
import {  gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import products from '../assets/products.json'
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import {ReactTyped} from 'react-typed'



gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const { products } = useContext(AppContext);
  const tl = gsap.timeline();
  const redShoesBox = useRef();

  const heroDiv = useRef();
  const aboutImg = useRef();
  const arrivalRef = useRef();
  const latestImgRef = useRef();

  useEffect(() => {
    tl.from(heroDiv.current, {
      x: "-100%",
      duration: 2,
    });

    tl.from(redShoesBox.current, {
      y: "-100%",
      opacity: 0,
      duration: 2,
      ease: "elastic",
    });

    tl.from(aboutImg.current, {
      y: "-200%",
      opacity: 0,
      duration: 2,
      ease:"sine"
    });

    tl.from(arrivalRef.current, {
      y: "-300%",
      opacity: 0,
      duration: 2
      // ease: "sine",
    });

    tl.from(latestImgRef.current,{
      y:"200%",
      opacity:1,
      duration:1
    })
  }, []);

  return (
    <>
      <div
        className="herodiv  relative  container bg-[#000] h-screen  max-w-screen-2xl flex md:flex-row flex-col items-center justify-center px-3 md:px-10 mx-auto  mt-10 md:mt-16 "
        ref={heroDiv}
      >
        <div className="left  w-full md:w-1/2  flex flex-col gap-4 py-4">
          <div className="heading">
            <h1 className="font-bold text-5xl md:text-8xl">Winter</h1>
            <h2 className=" text-3xl md:text-7xl text-[#ce8080] ">
              Collection
            </h2>
          </div>
          <p className="collectionText text-md md:text-lg">
            Step into the season with our winter collection shoes, where warmth
            meets style in every step.
          </p>
          <a href="/products/search" className="text-black bg-[#ce8080] w-fit px-5 py-2 rounded-lg">
            Buy Now
          </a>
          <div className="collections flex gap-4 text-center text-xl">
            <div className="flex gap-2 flex-col text-[#63ece9] ">
              <span>90k+</span>
              <span>Collections</span>
            </div>
            <span style={{ border: "1px solid #ce8080" }}></span>
            <div className="flex gap-2 flex-col text-[#e13a7d]">
              <span>100k+</span>
              <span>Products</span>
            </div>
          </div>
        </div>
        <div
          className="right  text-right flex flex-col item-center space-y-8 justify-end offer-image w-full md:w-1/2 "
          ref={redShoesBox}
        >
          <div className=" shoesImg flex item-center justify-center mx-auto w-fit">
            <img
              src="https://res.cloudinary.com/dzwspepvg/image/upload/v1707273814/yirdeipefttoo2zvurq4.png"
              alt="popular"
              loading="lazy"
              className="  redShoes w-[240px]  md:w-[500px] text-center  "
              style={{
                transition: ".3s all ease-in",
                position: "relative",
                top: "0",
              }}
            />
          </div>
          <div
            className="arrow-box transparent-image flex items-center justify-center absolute md:top-64 md:right-20  top-[54%] right-[7%]  md:bottom-10"
            style={{ filter: "brightness(100)" }}
          >
            <img
              src="../../src/assets/arrow-X0QWedrf.png"
              className=" w-[100px]  md:w-[190px] hover:rotate-[-90deg] rotate-[30deg] md:rotate-[-140deg] hover:md:rotate-[-160deg] "
              alt="arrow"
              style={{ transition: ".4s all ease-in-out" }}
            />
          </div>
          <div className="offer-review-box text-[12px] md:text-[16px] text-center absolute top-[85%] md:top-[80%] right-4 top w-fit  ">
            <span>4.9 | ⭐⭐⭐⭐⭐</span>
            <p>200K+ TotalReview</p>
            <a  className="linkBtn text-[#ce8080] " href="/products/search">
              buy now
            </a>
          </div>
        </div>
      </div>

      <section className="about container bg-[#000] h-full md:h-screen pt-[60px] md:-mt-20   max-w-screen-2xl flex justify-center items-center">
        <div
          className="home-about-box flex md:flex-row flex-col items-center gap-6 bg-transparent md:bg-[#2f2e3e] rounded-lg p-7 justify-center"
          style={{ opacity: 1 }}
        >
          <div
            className="home-aboutimage rounded-xl order-1 md:order-0 "
            style={{
              background: "linear-gradient(brown, white)",
              opacity: 1,
              transform: "none",
            }}
            ref={aboutImg}
          >
            <img
              src="https://res.cloudinary.com/dzwspepvg/image/upload/v1707273827/uefsb56yaokbu8qh8p9d.png"
              alt="aboutImg"
              loading="lazy"
              className="md:w-[350px] w-[250px] hover:rotate-12 hover:scale-110"
              style={{ transition: "0.3s all ease-in" }}
            />
          </div>
          <div
            className="home-about-content space-y-5 md:space-y-8 order-0 md:order-1"
            style={{ opacity: 1, transform: "none" }}
          >
            <h2 className="text-3xl font-bold text-[#ce8080]">About Us</h2>
            <p className="text-md">
              Redefining fashion and functionality with our exclusive collection
              of premium quality shoes for trendsetters like you.
            </p>
            <div className="home-about-box-popularity space-y-3 md:space-y-4">
              <span className="flex gap-3 items-center">
                <div className="icons bg-[#ce8080] text-black text-2xl p-1 rounded-lg ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2A5.37 5.37 0 005.4 6.62C2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12a5.386 5.386 0 003.82 1.57c2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z" />
                  </svg>
                </div>
                <div className="description">
                  <span className="text-[20px] text-[#ce8080]">
                    Best Qaultiy Shoes
                  </span>
                  <p>
                    Our shoes are crafted with the finest materials and
                    attention to detail, durability, and style that lasts.
                  </p>
                </div>
              </span>
              <span className="flex gap-3 items-center">
                <div className="icons text-black bg-[#ce8080] text-2xl p-1 rounded-lg">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M403.3 32H285.1c-3.7 0-7.2 1.5-9.8 4.1L40.1 272.2c-10.8 10.8-10.8 28.4 0 39.2l111.5 112.5C162.4 434.7 179 440 195 426l231.9-232.3c2.6-2.6 4.1-6.1 4.1-9.8V59.7c0-15.3-12.4-27.7-27.7-27.7zm-45.9 107.5c-19.6 2.1-36-14.4-33.9-33.9 1.5-14.3 13-25.7 27.3-27.3 19.6-2.1 36 14.4 33.9 33.9-1.5 14.3-13 25.8-27.3 27.3z" />
                    <path d="M456 80.3V194c0 3.7-1.5 7.2-4.1 9.8L192.7 463l8.8 8.8c10.8 10.8 28.4 10.8 39.2 0l235.2-236.2c2.6-2.6 4.1-6.1 4.1-9.8V107.7c0-14-10.5-25.6-24-27.4z" />
                  </svg>
                </div>
                <div className="description">
                  <span className="text-[20px] text-[#ce8080]">
                    Best Fabric Used
                  </span>
                  <p>
                    We source only the highest quality fabrics for our products,
                    comfort and sustainability in our materials.
                  </p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="arrival container text-white bg-[#000] h-full md:h-auto max-w-screen-2xl px-3 md:px-10">
        <div className="flex justify-between items-center mb-10 text-[#ce8080]">
          <h2 className=" text-2xl md:text-3xl ">NEW ARRIVALS</h2>
          <a href="/products/search">MORE</a>
        </div>
        <div
          className="flex md:flex-row flex-col items-center flex-wrap justify-center gap-4 "
          ref={arrivalRef}
        >
          {products.slice(0, 4)?.map((product) => {
            return (
              <>
                <Link to={`/${product._id}`}>
                  <div className=" card bg-base-100 w-[230px] md:w-[260px]  h-auto shadow-xl pb-2">
                    <div
                      className="h-56  flex items-center justify-center"
                      style={{
                        background: `linear-gradient(${product?.color}, white)`,
                        opacity: 1,
                        transform: "none",
                        borderRadius: "20px",
                      }}
                    >
                      <img
                        src={product?.imgSrc[0]}
                        alt="Shoes"
                        className="w-[250px] hover:rotate-[10deg] hover:scale-105 "
                        style={{
                          transition: ".3s ease-in",
                        }}
                      />
                    </div>
                    <div className="card-body pb-1">
                      <div className="flex justify-between">
                        <h2 className="text-xl">
                          {product?.title.split(" ").slice(0, 1).join(" ") +
                            "..."}
                        </h2>
                        <span className="text-xl">
                          &#8377;{product?.currentPrice}
                        </span>
                      </div>

                      <p className="" style={{ whiteSpace: "nowrap" }}>
                        {product?.desc.split(" ").slice(0, 3).join(" ") + "..."}
                      </p>
                      <div className="flex items-center justify-center">
                        <button className="bg-[#ce8080] text-black w-48 rounded-xl px-2 py-1 ">
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </section>
      <section className="py-10 flex justify-center bg-[#000]">
        <Slider />
      </section>

      <section className="latest_products container pb-10 text-white bg-[#000] h-full md:h-auto max-w-screen-2xl px-3 md:px-10 flex justify-center items-center ">
        <div className="md:mt-16 mt-1 flex-col lg:flex-row flex justify-center  w-[80%] rounded-lg  items-center bg-transparent md:bg-[#2f2e3f]  ">
          <div className="left flex flex-col gap-5 w-full md:w-[60%]   md:p-5 ">
            <h2 className="md:text-3xl text-[25px]  text-[#ce8080]">
              
              <ReactTyped strings={["Latest & Treanding Products"]} typeSpeed={200} loop backSpeed={10} cursorChar="|" showCursor={true} />
            </h2>
            <div className="flex flex-col gap-5 md:gap-3 whitespace-nowrap">
              <span className="flex gap-4 items-center">
                <div className="icon text-24px md:text-[28px] text-red-600 ">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="red"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M13.867 9.75c-.246 -.48 -.708 -.769 -1.2 -.75h-1.334c-.736 0 -1.333 .67 -1.333 1.5c0 .827 .597 1.499 1.333 1.499h1.334c.736 0 1.333 .671 1.333 1.5c0 .828 -.597 1.499 -1.333 1.499h-1.334c-.492 .019 -.954 -.27 -1.2 -.75"></path>
                    <path d="M12 7v2"></path>
                    <path d="M12 15v2"></path>
                  </svg>
                </div>
                <div className="description text-[14px] md:text-xl">
                  Premium Quality Shoes
                </div>
              </span>
              <span className="flex gap-4 items-center">
                <div className="icons  text-24px md:text-[28px] text-green-600">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="green"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2A5.37 5.37 0 005.4 6.62C2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12a5.386 5.386 0 003.82 1.57c2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z"></path>
                  </svg>
                </div>
                <div className="description  text-[14px] md:text-xl">
                  <span>All-Inclusive Design</span>
                </div>
              </span>
              <span className="flex gap-4 items-center">
                <div className="icons text-24px md:text-[28px] text-slate-600 ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="blue"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M403.3 32H285.1c-3.7 0-7.2 1.5-9.8 4.1L40.1 272.2c-10.8 10.8-10.8 28.4 0 39.2l111.5 112.5C162.4 434.7 179 440 195 426l231.9-232.3c2.6-2.6 4.1-6.1 4.1-9.8V59.7c0-15.3-12.4-27.7-27.7-27.7zm-45.9 107.5c-19.6 2.1-36-14.4-33.9-33.9 1.5-14.3 13-25.7 27.3-27.3 19.6-2.1 36 14.4 33.9 33.9-1.5 14.3-13 25.8-27.3 27.3z"></path>
                    <path d="M456 80.3V194c0 3.7-1.5 7.2-4.1 9.8L192.7 463l8.8 8.8c10.8 10.8 28.4 10.8 39.2 0l235.2-236.2c2.6-2.6 4.1-6.1 4.1-9.8V107.7c0-14-10.5-25.6-24-27.4z"></path>
                  </svg>
                </div>
                <div className="description  text-[14px] md:text-xl">
                  <span>Exclusive Shoes Collection</span>
                </div>
              </span>
              <span className="flex gap-4 items-center">
                <div className="icons text-24px md:text-[28px] text-yellow-600">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="yellow"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"></path>
                  </svg>
                </div>
                <div className="description  text-[14px] md:text-xl">
                  <span>Best Quality Collection</span>
                </div>
              </span>
            </div>
          </div>
          <div
            className="right w-[100%] mt-5 md:mt-0  lg:w-[40%] bg-[#4c4d59] p-2 md:p-5 "
            style={{ borderRadius: "0 10px 10px 0" }}
            ref={latestImgRef}
          >
            <div
              className="popular-images flex flex-col lg:flex-row gap-3 items-center"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="small-images flex flex-row items-center justify-center flex-wrap lg:flex-col gap-3">
                <div
                  className="image-box"
                  style={{
                    background:
                      "linear-gradient(45deg, rgb(153, 81, 48), white)",
                    width: "64px",
                    borderRadius: "15px",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dzwspepvg/image/upload/v1707273827/uefsb56yaokbu8qh8p9d.png"
                    alt="smallImg1"
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      transition: ".3s all ease-in",
                    }}
                    className="hover:rotate-12 hover:scale-105"
                  />
                </div>
                <div
                  className="image-box"
                  style={{
                    background: "linear-gradient(45deg, rgb(6, 28, 15), white)",
                    width: "64px",
                    borderRadius: "15px",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dzwspepvg/image/upload/v1708055564/products/tlklunsunrn2kwodl5qx.png"
                    alt="smallImg2"
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      transition: ".3s all ease-in",
                    }}
                    className="hover:rotate-12 hover:scale-105"
                  />
                </div>
                <div
                  className="image-box"
                  style={{
                    background:
                      "linear-gradient(45deg, rgb(120, 13, 13), white)",
                    width: "64px",
                    borderRadius: "15px",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dzwspepvg/image/upload/v1707273814/yirdeipefttoo2zvurq4.png"
                    alt="smallImg3"
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      transition: ".3s all ease-in",
                    }}
                    className="hover:rotate-12 hover:scale-105"
                  />
                </div>
                <div
                  className="image-box"
                  style={{
                    background:
                      "linear-gradient(45deg, rgb(209, 188, 208), black)",
                    width: "64px",
                    borderRadius: "15px",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dzwspepvg/image/upload/v1707274074/kwf1rzngwhxpto3slllx.png"
                    alt="smallImg4"
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      transition: ".3s all ease-in",
                    }}
                    className="hover:rotate-12 hover:scale-105"
                  />
                </div>
              </div>
              <div className="main-image">
                <div
                  className="image-box w-fit md:w-[297px] "
                  style={{
                    background:
                      "linear-gradient(to top, rgb(230, 109, 18), white)",
                    borderRadius: 15,
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dzwspepvg/image/upload/v1708535415/products/tn0ejyctexes3deo7y2h.png"
                    alt="popularImg"
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      transition: ".3s all ease-in",
                    }}
                    className="hover:rotate-12 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <hr className="" />
      <section className="footer container pt-4 pb-10 text-white bg-[#000] h-full md:h-auto max-w-screen-2xl px-3 md:px-10 ">
        <div className="flex justify-around text-center gap-5 flex-col md:flex-row items-center w-[100%] ">
          <div className="left flex flex-col gap-5">
            <h2
              style={{
                letterSpacing: "3px",
                fontSize: "2.4rem",
                fontWeight: "300",
                color: "#ce8080",
              }}
            >
              LUXIFY
            </h2>
            <span>
              <p
                style={{
                  width: "200px",
                  fontSize: "15px",
                  textTransform: "capitalize",
                  textWrap: "wrap",
                  fontWeight: "200",
                }}
              >
                The Premium And Trendy Footwear With Unique Style
              </p>
            </span>
          </div>
          <div className="middle flex flex-col gap-5">
            <h2 className="text-[25px] font-[700]">FOLLOW US</h2>
            <span className="flex items-center justify-center gap-[10px] text-[25px] text-[#ce8080]">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 496 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </span>
          </div>
          <div className="right">
            <span className="flex gap-3 flex-col">
              <a href="/">Home</a>
              <a href="/products/search">Products</a>
              <a href="/about">About</a>
              <a href="/orders">Orders</a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
