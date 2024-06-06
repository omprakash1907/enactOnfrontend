'use client'
import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import '../../fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState([]);

  const toggleAsidePanel = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    try {
      fetch('http://localhost:3000/')
        .then((res) => res.json())
        .then((data) => {
          setProduct(data)
        })
    } catch (e) {
      console.log(e);
    }
  }, [product])

  return (
    <>

      <aside className={`aside-panel ${isOpen ? 'open' : 'closed'}  vh-100 position-fixed start-0 top-0 z-3`}>
        <a className={`bg-transparent ${isOpen ? '' : 'd-flex justify-content-center'}`} onClick={toggleAsidePanel}>
          {
            isOpen ? <img src='/Close.png' alt="close" className="img-fluid ps-4 py-4" /> : <img src="/menu.png" alt="close" className="img-fluid  py-4" />
          }
        </a>
        <div className={`h-35 ${isOpen ? '' : 'd-none'}`}>
          <img src="/logo.png" alt="img" className="img-fluid w-100" />
        </div>
        <div className={` vh-100 ${isOpen ? 'd-none' : 'd-flex  justify-content-center align-items-center'}`}>
          <img src="/logo.png" alt="img" className="rotate img-fluid w-100" />
        </div>
        <ul className={`lh-lg menu ${isOpen ? '' : 'd-none'}`}>
          <li><a href="" className="fs-4 theme-text">HOME</a></li>
          <li><a href="" className="fs-4 ">PRODUCTS</a></li>
          <li><a href="" className="fs-4 ">MEET CHEF MATT</a></li>
          <li><a href="" className="fs-4 ">FAQ</a></li>
          <li><a href="" className="fs-4 ">CONNECT WITH US</a></li>
        </ul>
      </aside>
      <div div className="vh-100 overflow-y-scroll overflow-x-hidden" >
        <section className="main-banner">
          <div className="container-fluid p-0">
            <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper banner-swiper ">
              <SwiperSlide>
                <div className="slide-1  " >
                  <div className="d-flex justify-content-center align-items-end h-100">
                    <div className="mb-10">
                      <button className="py-3 px-5 fs-3 bg-transparent text-white border-4 border-light fw-semibold">Meet Chef Matt</button>
                    </div>
                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-1 background"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-1 background"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-1 background"></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className="product-page bg-theme pb-5 pt-8 position-relative">
          <div className=" position-absolute leaf">
            <img src="/leaf.png" alt="leaf" className="img-fluid" />
          </div>
          <div className="container ms-auto me-0 position-relative">
            <div className="col-5">
              <h1 className="theme-text underline position-relative">CHEF MATT PRODUCTS</h1>
              <p className="mt-4 text-white me-4">Shop Gourmet Chef Quality products from the Chef Matt brand.
                Chef it yourself and Thank us later.</p>
            </div>
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                '@1.00': {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                '@1.50': {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper col-12"
            >
              {product.map((item) => {
                return (
                  <SwiperSlide key={item._id} className="text-center mx-auto">
                    <img src={item.productImgURL} alt="product" />
                    <h5 className="theme-text text-center">{item.name}</h5>
                    <div>
                      <span className="text-white text-decoration-line-through">{item.dummyprice}</span>
                      <span className="text-white ms-2">{item.price}</span>
                    </div>
                  </SwiperSlide>
                );
              })}
              <FontAwesomeIcon icon={faAnglesLeft} className="swiper-button-prev" />
              <FontAwesomeIcon icon={faAnglesRight} className="swiper-button-next" />
            </Swiper>
          </div>
        </section>
        <section className="shopnow bg-theme py-5">
          <div className="container ms-auto me-0  bg-white position-relative">
            <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper " style={{ height: '60vh' }}>
              <SwiperSlide>
                <div className="shop-slide background d-flex justify-content-center align-items-center">
                  <div className="d-flex flex-column justify-content-center text-center">
                    <h2 className="shop-underline d-inline-block position-relative">ONLINE ONLY</h2>
                    <div className="d-flex justify-content-center">
                      <p className="fs-4 col-8 mt-4">GET 20% OFF YOUR ORDER OF $50 OR MORE
                        Use code <strong>“Chef20”</strong></p>
                    </div>
                    <div>
                      <button className="py-2 px-5 fs-4 bg-transparent text-black border-3 border-black">Shop Now</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="shop-slide background d-flex justify-content-center align-items-center">
                  <div className="d-flex flex-column justify-content-center text-center">
                    <h2 className="shop-underline d-inline-block position-relative">ONLINE ONLY</h2>
                    <div className="d-flex justify-content-center">
                      <p className="fs-4 col-8 mt-4">GET 20% OFF YOUR ORDER OF $50 OR MORE
                        Use code <strong>“Chef20”</strong></p>
                    </div>
                    <div>
                      <button className="py-2 px-5 fs-4 bg-transparent text-black border-3 border-black">Shop Now</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="shop-slide background d-flex justify-content-center align-items-center">
                  <div className="d-flex flex-column justify-content-center text-center">
                    <h2 className="shop-underline d-inline-block position-relative">ONLINE ONLY</h2>
                    <div className="d-flex justify-content-center">
                      <p className="fs-4 col-8 mt-4">GET 20% OFF YOUR ORDER OF $50 OR MORE
                        Use code <strong>“Chef20”</strong></p>
                    </div>
                    <div>
                      <button className="py-2 px-5 fs-4 bg-transparent text-black border-3 border-black">Shop Now</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="shop-slide background d-flex justify-content-center align-items-center">
                  <div className="d-flex flex-column justify-content-center text-center">
                    <h2 className="shop-underline d-inline-block position-relative">ONLINE ONLY</h2>
                    <div className="d-flex justify-content-center">
                      <p className="fs-4 col-8 mt-4">GET 20% OFF YOUR ORDER OF $50 OR MORE
                        Use code <strong>“Chef20”</strong></p>
                    </div>
                    <div>
                      <button className="py-2 px-5 fs-4 bg-transparent text-black border-3 border-black">Shop Now</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className="subscribe pt-5 bg-theme">
          <div className="container mx-auto me-0 p-0">
            <div className="row">
              <div className="col-12">
                <div className="d-flex justify-content-between">
                  <div className="col-6 bg-white p-4">
                    <div className="d-flex justify-content-between">
                      <div className="col-7 d-flex flex-column">
                        <h3 className="fw-bold">SUBSCRIBE & SAVE</h3>
                        <p>Join Chef Matt’s Monthly Subscription and bring world class chef quality meals to your home.</p>
                      </div>
                      <div className="col-4">
                        <img src="/sub1.png" alt="product" className="img-fluid w-100" />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <img src="/sub2.png" alt="product" className="img-fluid w-100" />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-6">
                    <img src="/sub3.png" alt="product" className="img-fluid w-100" />
                  </div>
                  <div className="col-6">
                    <img src="/sub4.png" alt="product" className="img-fluid w-100" />
                  </div>
                </div>
                <div className="signup-bg p-5">
                  <h2 className="text-white text-decoration-underline">SIGN UP SPECIAL PROMOTIONS</h2>
                  <p className="text-white">Get exclusive deals you won’t find anywhere else straight to your inbox!</p>
                  <div className="d-flex">
                    <input type="email" name="email" placeholder="Enter email address" className="col-4 border-2 border-light px-2 py-2" />
                    <button className="text-white theme-btn px-5 ms-3 border-0 py-2">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 py-5 " style={{ borderBottom: '7px solid #D29A5A' }}>
              <div className="d-flex">
                <div className="col-4 d-flex justify-content-center align-items-start">
                  <img src="/icon1.png" alt="icon" className="img-fluid me-3" />
                  <div>
                    <p className="theme-text mb-2">FREE SHIPING WORLDWIDE</p>
                    <span className="text-white">Guaranteed Delivery</span>
                  </div>
                </div>
                <div className="col-4 d-flex justify-content-center align-items-start">
                  <img src="/icon2.png" alt="icon" className="img-fluid me-3" />
                  <div>
                    <p className="theme-text mb-2">24/7 CUSTOMER SERVICE</p>
                    <span className="text-white">Text Us 24/7 at 070-7782-9137</span>
                  </div>
                </div>
                <div className="col-4 d-flex justify-content-center align-items-start">
                  <img src="/icon3.png" alt="icon" className="img-fluid me-3" />
                  <div>
                    <p className="theme-text mb-2">QUALITY GUARANTEE!</p>
                    <span className="text-white">Send Within 30 Days</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img src="/logo.png" alt="logo" style={{marginTop: "-50px"}}  />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
