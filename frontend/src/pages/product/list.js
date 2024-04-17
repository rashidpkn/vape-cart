import {
  Box,
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Stack,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
// sections
import { ProductShopView } from 'src/sections/product/view';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import api from 'src/utils/api';
import { spacing } from '@mui/system';
import Pagination1 from '@mui/material/Pagination';

import { Link } from 'react-router-dom';
import { ProductTitle } from 'src/layouts/dashboard/config-navigation';
import AOS from 'aos';
import bg_1 from "src/assets/images/hero/bg_1.jpg";
import bg_2 from "src/assets/images/hero/bg_2.jpg";
import bg_3 from "src/assets/images/hero/bg_3.jpg";

import pagignation from '../components/pagignation';
import 'aos/dist/aos.css';

export default function ShopPage() {
  AOS.init();

  const [producsts, setProducsts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const [total, setTotal] = useState(0);

  const lastPostsIndex = currentPage * postsPerPage;
  const firstPostsIndex = lastPostsIndex - postsPerPage;
  const currentPosts = producsts.slice(firstPostsIndex, lastPostsIndex);

  const handleChange = (e, p) => {
    setCurrentPage(p);
  };

  useEffect(() => {
    api
      .get('products', {
        params: {
          perPage: 2000,
        },
      })
      .then((res) => {
        setProducsts(res.data.products);
        setTotal(res.data.count);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title> Product: Shop</title>
      </Helmet>

      {/* <ProductShopView /> */}
      <Container maxWidth="xl" sx={{ marginTop: '90px' }}>
        <Swiper
          pagination={{
            type: 'false',
          }}
          navigation
          modules={[Pagination, Navigation]}
          className="mySwiper"
          style={{ position: 'relative', width: '100%', height: '100%' }}
        >
          <SwiperSlide>
            <img
              src={bg_1}
              width={500}
              height={500}
              style={{
                width: '100%',
                height: '700px',
                objectFit: 'cover',
                backgroundPosition: 'center',
                objectPosition: '',
                position: 'relative',
              }}
              alt=""
            />
            <Typography
              data-aos="fade-up"
              data-aos-duration="2000"
              className="vertical_center bg_text"
              variant="h3"
              style={{
                width: '100%',
                textAlign: 'center',
                color: '#fff',
                textTransform: 'capitalize',
              }}
            >
              Discover vape essentials effortlessly—your one-stop shop for everything vape!
            </Typography>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={bg_2}
              width={500}
              height={500}
              style={{
                width: '100%',
                height: '700px',
                objectFit: 'cover',
                backgroundPosition: 'center',
                objectPosition: 'top',
                position: 'relative',
              }}
              alt=""
            />
            <Typography
              data-aos="fade-up"
              data-aos-duration="2000"
              className="vertical_center bg_text"
              variant="h3"
              style={{
                width: '100%',
                textAlign: 'center',
                color: '#000',
                textTransform: 'capitalize',
              }}
            >
              Vape made easy: Find your favorites in a snap!
            </Typography>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={bg_3}
              width={500}
              height={500}
              style={{
                width: '100%',
                height: '700px',
                objectFit: 'cover',
                backgroundPosition: 'center',
                objectPosition: 'top',
                position: 'relative',
              }}
              alt=""
            />
            <Typography
              data-aos="fade-up"
              data-aos-duration="2000"
              className="vertical_center bg_text"
              variant="h3"
              style={{
                width: '100%',
                textAlign: 'center',
                color: '#fff',
                textTransform: 'capitalize',
              }}
            >
              All your vape needs, one click away—simplicity meets selection!
            </Typography>
          </SwiperSlide>
        </Swiper>

        <Box>
          <Grid container spacing={3} sx={{ padding: '15px', marginTop: '-300px' }}>
            {[
              producsts.slice(0, 4),
              producsts.slice(4, 8),
              producsts.slice(8, 12),
              producsts.slice(12, 16),
            ].map((items, i) => (
              <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                <Card style={{ width: '100%', borderRadius: '0px', zIndex: '2' }}>
                  {/* Render only one title for each card */}
                  <Typography variant="h5" pl={2} py={1}>
                    {ProductTitle[i].title}
                  </Typography>
                  <Grid container spacing={2} px={2} pb={2}>
                    {items.map((item) => (
                      <Grid
                        item
                        xs={6}
                        component={Link}
                        to={`/product/${item.id}`}
                        key={item.id}
                        sx={{ width: '50%' }}
                      >
                        <Box style={{ width: '100%', cursor: 'pointer' }}>
                          <img
                            src={item.images[0]}
                            width="100%"
                            height={150}
                            style={{
                              width: '100%',
                              border: '1px solid #ccc',
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                            }}
                            alt=""
                          />
                          <Typography
                            variant="p"
                            className="product-name"
                            style={{ color: 'black', textDecoration: 'none' }}
                          >
                            {item.name.substring(0, 20)}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={3} style={{ padding: '20px', marginTop: '' }}>
            {currentPosts.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Link to={`/product/${item.id}`} key={item.id}>
                  <Card
                    sx={{ width: '100%', height: '100%', borderRadius: '0px', zIndex: '2' }}
                    key={item}
                  >
                    <CardContent>
                      <Box>
                        <img
                          src={item.images[0]}
                          width={150}
                          height={100}
                          style={{ width: '100%', height: '300px' }}
                          alt=""
                        />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ marginTop: '10px', textDecoration: 'none' }}>
                          {item.name}
                        </Typography>
                        {/* <Typography
                          variant="p"
                          sx={{ paddingBottom: '5px', fontStyle: 'italic', textDecoration: 'none' }}
                        >
                          {item.storeName}
                        </Typography>{' '} */}

                        <Typography
                          variant="p"
                          style={{ color: 'gray', marginTop: '15px', textDecoration: 'none' }}
                        >
                          <del>AED {item.regularPrice}</del>{' '}
                          <span
                            style={{ fontWeight: '700', color: '#000', textDecoration: 'none' }}
                          >
                            AED {item.salePrice}
                          </span>
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination1 count={Math.ceil(total / 4)} onChange={handleChange} />
          </div>
        </Box>

        <Typography variant="h3" sx={{ textAlign: 'center' }} pt={5} pb={2}>
          Best Sellers
        </Typography>
        <Box
          style={{
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '0px',
            paddingBottom: '50px',
          }}
        >
          <Slider {...settings} style={{ marginRight: '10px' }}>
            {[
              // {
              //   name: 'test',
              //   storeName: 'vap amzon',
              //   img: '/assets/images/banner/vaping_device.jpg',
              //   id: 1,
              // },
              // {
              //   name: 'test2',
              //   storeName: 'vap amzon',
              //   img: '/assets/images/banner/p2.jpg',
              //   id: 2,
              // },
              {
                name: 'Smok V8 X-Baby T6',
                storeName: 'vap amzon',
                img: '/assets/images/banner/p3.jpg',
                id: 3,
              },
              {
                name: 'Smok V8 X-Baby M2',
                storeName: 'vap amzon',
                img: '/assets/images/banner/p4.jpg',
                id: 4,
              },
              {
                name: 'Smok V8 X-Baby Q2',
                storeName: 'vap amzon',
                img: '/assets/images/banner/p5.jpg',
                id: 5,
              },
              {
                name: 'Smok V8 Baby X4',
                storeName: 'vap amzon',
                img: '/assets/images/banner/p6.jpg',
                id: 6,
              },
              {
                name: 'Smok V8 Baby T8',
                storeName: 'vap amzon',
                img: '/assets/images/banner/p7.jpg',
                id: 7,
              },
              {
                name: 'Smok V8 Baby - Q2',
                storeName: 'vap amzon',
                img: '/assets/images/banner/p8.jpg',
                id: 8,
              },
              {
                name: 'Smok V8 Baby M2',
                storeName: 'vap amzon',
                img: '/assets/images/banner/p9.jpg',
                id: 9,
              },
              {
                name: 'Smok V12 Prince - T10',
                storeName: 'vap amzon',
                img: '/assets/images/banner/p10.jpg',
                id: 10,
              },
            ].map((e) => (
              <Link to={`/product/${e.id}`} key={e.id} style={{ textDecoration: 'none' }}>
                <Card sx={{ width: '100%', height: '100%', borderRadius: '0px' }}>
                  <CardContent>
                    <Box>
                      <img
                        src={e.img}
                        width={150}
                        height={100}
                        style={{ width: '100%', height: '300px' }}
                        alt=""
                      />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ marginTop: '10px' }}>
                        {e.name}
                      </Typography>
                      {/* <Typography variant="p" sx={{ paddingBottom: '5px', fontStyle: 'italic' }}>
                        {e.storeName}
                      </Typography>{' '} */}

                      <Typography variant="p" style={{ color: 'gray', marginTop: '15px' }}>
                        <del>{e.regularPrice}₹ 549</del>{' '}
                        <span style={{ fontWeight: '700', color: '#000' }}>
                          {e.salePrice} ₹ 539
                        </span>
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </Slider>
        </Box>

        <Typography variant="h3" sx={{ textAlign: 'center' }} pb={2}>
          New Arrivals
        </Typography>
        <Box
          style={{
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '0px',
            paddingBottom: '100px',
          }}
        >
          <Slider {...settings} style={{ marginRight: '10px' }}>
            {[
              // {
              //   name: 'test',
              //   storeName: 'vap amzon',
              //   img: '/assets/images/banner/vaping_device.jpg',
              //   id: 1,
              // },
              // {
              //   name: 'test2',
              //   storeName: 'vap amzon',
              //   img: '/assets/images/banner/p2.jpg',
              //   id: 2,
              // },
              {
                name: 'Smok V8 X-Baby T6',
                storeName: 'vap amzon',
                img: '/assets/images/banner/p3.jpg',
                id: 3,
              },
              {
                name: 'Smok V8 X-Baby M2',
                storeName: 'vap amzon',
                img: '/assets/images/banner/p4.jpg',
                id: 4,
              },
              {
                name: 'Smok V8 X-Baby Q2',
                storeName: 'vap amzon',
                img: '/assets/images/banner/p5.jpg',
                id: 5,
              },
              {
                name: 'Smok V8 Baby X4',
                storeName: 'vap amzon',
                img: '/assets/images/banner/p6.jpg',
                id: 6,
              },
              {
                name: 'Smok V8 Baby T8',
                storeName: 'vap amzon',
                img: '/assets/images/banner/p7.jpg',
                id: 7,
              },
              {
                name: 'Smok V8 Baby - Q2',
                storeName: 'vap amzon',
                img: '/assets/images/banner/p8.jpg',
                id: 8,
              },
              {
                name: 'Smok V8 Baby M2',
                storeName: 'vap amzon',
                img: '/assets/images/banner/p9.jpg',
                id: 9,
              },
              {
                name: 'Smok V12 Prince - T10',
                storeName: 'vap amzon',
                img: '/assets/images/banner/p10.jpg',
                id: 10,
              },
            ].map((e) => (
              <Link to={`/product/${e.id}`} key={e.id} style={{ textDecoration: 'none' }}>
                <Card sx={{ width: '100%', height: '100%', borderRadius: '0px' }}>
                  <CardContent>
                    <Box>
                      <img
                        src={e.img}
                        width={150}
                        height={100}
                        style={{ width: '100%', height: '300px' }}
                        alt=""
                      />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ marginTop: '10px' }}>
                        {e.name}
                      </Typography>
                      {/* <Typography variant="p" sx={{ paddingBottom: '5px', fontStyle: 'italic' }}>
                        {e.storeName}
                      </Typography>{' '} */}

                      <Typography variant="p" style={{ color: 'gray', marginTop: '15px' }}>
                        <del>{e.regularPrice}₹ 549</del>{' '}
                        <span style={{ fontWeight: '700', color: '#000' }}>
                          {e.salePrice} ₹ 539
                        </span>
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </Slider>
        </Box>
      </Container>
    </>
  );
}
