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
import pagignation from '../components/pagignation';
import Pagination1 from '@mui/material/Pagination';

import vape_bg_2 from '/assets/images/hero/vape_bg_2.jpg';
import vape_bg_6 from '/assets/images/hero/vape_bg_6.jpg';
import vape_bg_7 from '/assets/images/hero/vape_bg_7.jpg';
import { Link } from 'react-router-dom';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'red',
//   ...theme.typography.body2,
//   padding: theme.spacing(0),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// ----------------------------------------------------------------------

export default function ShopPage() {
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
    api.get('products').then((res) => {
      setProducsts(res.data.products);
      setTotal(res.data.count);
    });
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
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
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          style={{ position: 'relative', width: '100%', height: '100%' }}
        >
          <SwiperSlide>
            <img
              src={vape_bg_2}
              width={500}
              height={500}
              style={{
                width: '100%',
                height: '700px',
                objectFit: 'cover',
                backgroundPosition: 'center',
                objectPosition: '',
              }}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={vape_bg_6}
              width={500}
              height={500}
              style={{
                width: '100%',
                height: '700px',
                objectFit: 'cover',
                backgroundPosition: 'center',
                objectPosition: 'top',
              }}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={vape_bg_7}
              width={500}
              height={500}
              style={{
                width: '100%',
                height: '700px',
                objectFit: 'cover',
                backgroundPosition: 'center',
                objectPosition: 'top',
              }}
              alt=""
            />
          </SwiperSlide>
        </Swiper>

        <Box>
          <Grid container spacing={3} sx={{ padding: '15px', marginTop: '-300px' }}>
            {[producsts.slice(0,4),producsts.slice(4,8),producsts.slice(8,12),producsts.slice(12,16)].map((items,i) => (
              <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                <Card style={{ width: '100%', borderRadius: '0px', zIndex: '2' }}>
                  <Grid container spacing={2} p={2} >
                    
                      {items.map(item=>(<Grid item xs={6} component={Link} to={`/product/${item.id}`} key={item.id} sx={{width:'50%'}}>
                      <Box style={{ width: '100%', cursor: 'pointer', }}>
                        <img
                          src={item.images[0]}
                          width={'100%'}
                          height={150}
                          style={{ width: '100%', border: '1px solid #ccc', backgroundSize: 'cover', backgroundPosition: 'center' }}
                          alt=""
                        />
                        <Typography variant="p" className="product-name" style={{ color: 'black', textDecoration: 'none' }}>
                          {item.name.substring(0,20)}
                          
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
                      <Typography variant="p" sx={{ paddingBottom: '5px', fontStyle: 'italic', textDecoration: 'none' }}>
                        {item.storeName}
                      </Typography>{' '}
                      <br />
                      <Typography variant="p" style={{ color: 'gray', marginTop: '15px', textDecoration: 'none' }}>
                        <del>{item.regularPrice}₹ 549</del>{' '}
                        <span style={{ fontWeight: '700', color: '#000', textDecoration: 'none' }}>
                          {item.salePrice} ₹ 539
                        </span>
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
                </Link>
              </Grid>
            ))}
          </Grid>

          <Pagination1 count={total / 20} onChange={handleChange} />
        </Box>

        {/* <Grid container style={{ marginTop: '50px' }}>
          <Grid item lg={3}>
            <Typography variant="h4" sx={{ padding: '10px 15px' }}>
              Top Categories
            </Typography>
            <Box>
              {producsts.map((item) => (
                <Box key={item}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      {item.name}
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul style={{ listStyleType: 'none', padding: '0px' }}>
                        <li>{item.name}</li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item lg={9}></Grid>
        </Grid> */}

        <Box style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '50px', paddingBottom: '100px' }}>
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
              <Link  to={`/product/${e.id}`} key={e.id} style={{ textDecoration: 'none'}}>
                 <Card
                  sx={{ width: '100%', height: '100%', borderRadius: '0px'}}
                >
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
                      <Typography variant="p" sx={{ paddingBottom: '5px', fontStyle: 'italic' }}>
                      {e.storeName}
                      </Typography>{' '}
                      <br />
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
