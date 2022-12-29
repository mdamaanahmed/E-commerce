import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/home.css'
import ts1 from '../../assets/images/t-s1.webp'
import ts2 from '../../assets/images/t-s2.webp'
import ts3 from '../../assets/images/t-s3.webp'
import ts4 from '../../assets/images/t-s4.webp'
import s1 from '../../assets/images/s1.webp'
import s2 from '../../assets/images/s2.webp'
import s3 from '../../assets/images/s3.png'
import s4 from '../../assets/images/s4.webp'
import shoe1 from '../../assets/images/shoe1.webp'
import shoe2 from '../../assets/images/shoe2.webp'
import shoe3 from '../../assets/images/shoe3.webp'
import shoe4 from '../../assets/images/shoe4.webp'
import w1 from '../../assets/images/w1.webp'
import w2 from '../../assets/images/w2.webp'
import w3 from '../../assets/images/w3.webp'
import w4 from '../../assets/images/w4.webp'
import b3 from '../../assets/images/b3.png'
import b4 from '../../assets/images/b4.png'
import b5 from '../../assets/images/b5.png'
import b6 from '../../assets/images/b6.png'
import b7 from '../../assets/images/b7.png'
import b8 from '../../assets/images/b8.png'
import b9 from '../../assets/images/b9.png'
import reco1 from '../../assets/images/reco1.jpg'
import reco2 from '../../assets/images/reco2.jpg'
import reco3 from '../../assets/images/reco3.jpg'
import reco4 from '../../assets/images/reco4.jpg'
import home_bg from '../../assets/images/home-bg.jpg'
import FeatureCard from '../components/FeatureCard'
import '../../assets/css/featureCard.css'
import TopRatedCard from '../components/TopRatedCard'
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { TiPlusOutline } from 'react-icons/ti';
import { TbTriangles } from 'react-icons/tb';
import { AppContext } from '../components/ContextProvider';

const Home = () => {
  const { productItems } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(productItems);
  }, [productItems])

  let showBuyPage = (id) => {
    navigate(`/buy/${id}`)
  };

  return (
    <>
      {/* hero section */}
      <section className="hero">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-12">
              <div className="content">
                <span></span>
                <img src={home_bg} alt="no home bg" />
                <div className="heading">
                  <h5>Clothes, Shoes, Accessories.</h5>
                  <h1>One online store for all your needs.</h1>
                  <p>find which is better for you....</p>
                  <Link to="/shop">
                    <button className="outline_button2">Explore Online Shop</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}

      {/* feature section */}
      <section className="feature">
        <div className="container">
          <div className="row">
            <div className="col-12 heading_design2 mt-2">
              <h1><span><TbTriangles /></span> <span><TiPlusOutline /></span> <span><TiPlusOutline /></span> Feature Products</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum atque.</p>
            </div>
              {
                products?.map((item, index) => {
                  return (
                    <FeatureCard key={index} showbuypage={() => showBuyPage(item._id)} img={item.image} title={item.name} company={item.brand} rating={item.stars} price={item.price} review={item.reviews} />
                  )
                }).slice(0, 8)
              }
          </div>
        </div>
      </section>
      {/* feature section end */}

      {/* brand section */}
      <section className="brand">
        <div className="img">
          <img src={b3} alt="" />
          <img src={b8} alt="" />
          <img src={b5} alt="" />
          <img src={b4} alt="" />
          <img src={b9} alt="" />
          <img src={b7} alt="" />
          <img src={b6} alt="" />
        </div>
      </section>
      {/* brand section end */}

      {/* top rated section */}
      <section className="top_rated">
        <div className="container">
          <div className="row">
            <div className="col-12 heading_design2">
              <h1><span><TbTriangles /></span> <span><TiPlusOutline /></span> <span><TiPlusOutline /></span> Top Rated</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum atque.</p>
            </div>
            <Swiper
              rewind={true}
              navigation={true}
              spaceBetween={20}
              slidesPerView={1}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                576: {
                  width: 540,
                  slidesPerView: 1,
                },
                768: {
                  width: 720,
                  slidesPerView: 2,
                },
                992: {
                  width: 960,
                  slidesPerView: 3,
                },
                1200: {
                  width: 1140,
                  slidesPerView: 4,
                },
                1400: {
                  width: 1320,
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide>
                <TopRatedCard title={'Casual'} s={s3} w={w2} ts={ts3} shoe={shoe2} reco1={reco1} reco2={reco2} reco3={reco3} reco4={reco4} heart={1576} />
              </SwiperSlide>
              <SwiperSlide>
                <TopRatedCard title={'Format'} s={s4} w={w3} ts={ts4} shoe={shoe1} reco1={reco2} reco2={reco4} reco3={reco1} reco4={reco1} heart={945} />
              </SwiperSlide>
              <SwiperSlide>
                <TopRatedCard title={'Casual'} s={s1} w={w1} ts={ts2} shoe={shoe4} reco1={reco4} reco2={reco3} reco3={reco1} reco4={reco2} heart={1484} />
              </SwiperSlide>
              <SwiperSlide>
                <TopRatedCard title={'Casual'} s={s2} w={w4} ts={ts1} shoe={shoe3} reco1={reco2} reco2={reco1} reco3={reco4} reco4={reco3} heart={2434} />
              </SwiperSlide>
              <SwiperSlide>
                <TopRatedCard title={'Formal'} s={s4} w={w2} ts={ts3} shoe={shoe1} reco1={reco3} reco2={reco1} reco3={reco2} reco4={reco1} heart={1534} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/* top rated section end */}
    </>
  )
}

export default Home