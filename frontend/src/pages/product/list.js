import { Box, Typography, Grid, Container, Card, CardContent } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import api from 'src/utils/api';
import Pagination1 from '@mui/material/Pagination';

import { Link } from 'react-router-dom';
import AOS from 'aos';
import bg_1 from 'src/assets/images/hero/bg_1.jpg';
import bg_2 from 'src/assets/images/hero/bg_5.jpg';
import bg_3 from 'src/assets/images/hero/bg_3.jpg';

import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { _tags } from 'src/data/createProducts';

const card = _tags?.slice(0, 4);

export default function HomePage() {
  AOS.init();

  const [producsts, setProducsts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  const lastPostsIndex = currentPage * 4;
  const firstPostsIndex = lastPostsIndex - 4;
  const currentPosts = producsts?.slice(firstPostsIndex, lastPostsIndex);

  const handleChange = (e, p) => {
    setCurrentPage(p);
  };

  useEffect(() => {
    api
      .get('products', {
        params: {
          perPage: 2000,
          status: 'Published'
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
        <title>Home | Vape Monkey | Premium Vape Products</title>
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
                color: '#fff',
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
            {card
              ?.map((c) =>
                producsts
                  .reverse()
                  .filter((p) => p.tags.find((t) => t === c))?.slice(0, 4)
              )
              .map((items, i) => (
                <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                  <Card style={{ width: '100%', borderRadius: '0px', zIndex: '2' }}>
                    <Typography variant="h5" pl={2} py={1}>
                      {card[i]}
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
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
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
            {producsts.map((e) => (
              <Link to={`/product/${e.id}`} key={e.id} style={{ textDecoration: 'none' }}>
                <Card sx={{ width: '100%', height: '100%', borderRadius: '0px' }}>
                  <CardContent>
                    <Box>
                      <img
                        src={e.images[0]}
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

                      {/* <Typography variant="p" style={{ color: 'gray', marginTop: '15px' }}>
                        <del>AED {e.regularPrice}</del>{' '}
                        <span style={{ fontWeight: '700', color: '#000' }}>AED {e.salePrice}</span>
                      </Typography> */}
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
