import { useContext } from "react"
import { Box, Grid, IconButton, Typography, Container } from "@mui/material"
import Masonry from '@mui/lab/Masonry';
import { IoArrowBackSharp, IoArrowForwardSharp, IoSearchOutline } from "react-icons/io5"

import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper-bundle.css'

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import BaseContainer from "../../components/BaseContainer"
import Section from "../../components/Section"
import LatestItem from "../../components/LatestItem"
import PopularItem from "../../components/PopularItem"
import MasonryItem from "../../components/MasonryItem"
import BlockButton from "../../components/BlockButton"
import LocationItem from "../../components/LocationItem"
import BrandItem from "../../components/BrandItem"
import StockItem from "../../components/StockItem"
import Seo from "../../components/Seo"


import { viewMore } from "../../components/Slider"
import { popularItems, masonryItems, latestItems, locationItems, brands, stockItems } from "../../apis/data"

import BG from "../../assets/marketBG.jpg"
import { ShopContext } from "../../contexts/Shop"
import { CartContext } from "../../contexts/Cart"
import '../Home/style.css'
import "./style.css"


const MarketPlace = () => {
    const { handleFavorite, handleAddToCart } = useContext(ShopContext)
    const { addItem } = useContext(CartContext)

    return (
        <Box>
            <Seo title="Ebeano Market | MarketPlace" />
            <Header mode="dark" isSticky={true} />

            <div className="bg-hero">
                <img src={BG} className="bg-img" alt="Background" />

                <Container maxWidth="md" sx={{zIndex: 5, position: "relative"}}>
                    <Box display="flex" alignItems="center" py={2} px={{xs: 2, md: 1}}  sx={{backgroundColor: "#fff", borderRadius: 2}}>
                        <Grid container colSpacing={1} rowSpacing={2} >
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <div className="form-group-mart border">
                                    <label htmlFor="state" className="mart-label">State</label>
                                    <select className="mart-select">
                                        <option value=''>Select a state</option>
                                    </select>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <div className="form-group-mart border border-mid">
                                    <label htmlFor="state" className="mart-label">mart</label>
                                    <select className="mart-select">
                                        <option value=''>Select a mart</option>
                                    </select>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <div className="form-group-mart border-top">
                                    <label htmlFor="state" className="mart-label">store</label>
                                    <select className="mart-select">
                                        <option value=''>Select a store</option>
                                    </select>
                                </div>
                            </Grid>

                            <Grid item xs={12} sx={{display: {xs: "flex", md: "none"}}}>
                                <Box display="flex" alignItems="center">
                                    <Box display="flex" alignItems="center">
                                        <button className="mart-search">search</button>
                                    </Box>

                                    <Box display="flex" alignItems="center">
                                        <button className="mart-search-outline">view all</button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>

                        <Box display={{xs: "none", md: "flex"}} alignItems="center">
                            <div className="form-group-mart">
                                <IconButton sx={{borderRadius: 2, backgroundColor: "var(--primary)", color: "#fff", "&:hover": {borderRadius: 2, backgroundColor: "var(--primary)", color: "#fff"}}}>
                                    <IoSearchOutline />
                                </IconButton>
                            </div>
                        </Box>
                    </Box>

                    <Box display={{ xs: "none", md: "block" }} position="relative" sx={{textAlign: "center" }} >
                        <Typography fontSize="1.2rem" sx={{textAlign: "center", letterSpacing: 1, textTransform: "uppercase", marginY: 3, color: "#fff", fontWeight: 600}}>Or</Typography>
                        <button className="view-all-btn text-hover text-underlined">View All</button>
                    </Box>
                </Container>
            </div>

            {/* TOP SELLING ITEMS */}
            <Section title="Top selling items" linkName="View all" link="/shop">
                <Grid container spacing={3} rowSpacing={4}>
                    {
                        popularItems.map(({name, price, image}, index) => <PopularItem key={index} name={name} price={price} image={image} handleFavorite={handleFavorite} handleAddToCart={handleAddToCart} />)
                    }
                </Grid>
            </Section>

            {/* PAGE TITLE */}
            <Box>
                <BaseContainer>
                    <Typography fontSize={{xs: "1.5rem", lg: "2.5rem" }} sx={{color: "#999", fontFamily: "Sen, sans-serif"}}>Featured Items</Typography>
                </BaseContainer>

                <Section title="Computer and accessories" linkName="View all" link="/">
                    <Grid container spacing={3} rowSpacing={4}>
                        {
                            popularItems.map(({name, price, image}, index) => <PopularItem key={index} name={name} price={price} image={image} handleFavorite={handleFavorite} handleAddToCart={handleAddToCart} />)
                        }
                    </Grid>
                </Section>
            </Box>

            {/* FASHION ITEMS */}
            <Section title="Fashion" link="/shop" linkName="View all">
                <Grid container spacing={3} rowSpacing={4}>
                    {
                        popularItems.map(({name, price, image}, index) => <PopularItem key={index} name={name} price={price} image={image} handleFavorite={handleFavorite} handleAddToCart={handleAddToCart} />)
                    }
                </Grid>
                <Box mt={5} display="flex" justifyContent="center" py={4}>
                    <Box width="100%">
                        <Box display={{xs: "none", lg: 'block'}} width="100%">
                            <Masonry sx={{width: "100%"}} columns={2} spacing={2}>
                                {
                                    masonryItems.map(({name, image, item, price, height, span, link}, index) => (
                                        <MasonryItem key={index} image={image} link={link} height={height} span={span} name={name} price={price} item={item}/>
                                    ))

                                }
                            </Masonry>
                        </Box>
                        <Box display={{xs: "grid", lg: "none"}} maxWidth="100%" sx={{gridTemplateColumns:{xs:  "repeat(2, 1fr)", md: "repeat(2, 1fr)"}, gridGap: 20, gridTemplateRows:"masonry", gridAutoFlow: 'dense'}}>
                            {
                                masonryItems.map(({name, image, item, price, height, span, link}, index) => (
                                    <MasonryItem key={index} image={image} link={link} height={height} span={span} name={name} price={price} item={item}/>
                                ))
                            }
                        </Box>
                        <Box mt={3} display="flex" justifyContent="center">
                            <BlockButton link="/" type={false} text="View all categories" />
                        </Box>
                    </Box>
                </Box>
            </Section>

            {/* LATEST ITEMS */}
            <Section title="Latest release" linkName="View all" link="/shop">
                <Box display={{xs: "none", sm: "none", md: "none", lg: "block"}}>
                    <Swiper {...viewMore} slidesPerView={5}>
                        {
                            latestItems.map(({name, image, price}, index) => (
                                <SwiperSlide key={index}>
                                    <LatestItem
                                        index={index}
                                        handleFavorite={handleFavorite}
                                        handleAddToCart={addItem}
                                        name={name}
                                        price={price}
                                        image={image}
                                    />
                                </SwiperSlide>
                            ))
                        }
                        <span className=".swiper-button-next swiper-smallBtn-next">
                            <IconButton sx={{fontSize: {xs: "1rem", md: "2rem"}, transition: "all .5s", color: "var(--primary)", backgroundColor: "rgba(255, 255, 255, .75)", "&:hover": {backgroundColor: "rgba(255, 255, 255, 1)"} }}>
                                <IoArrowForwardSharp />
                            </IconButton>
                        </span>

                        <span className=".swiper-button-prev swiper-smallBtn-prev">
                            <IconButton sx={{fontSize: {xs: "1rem", md: "2rem"}, transition: "all .5s", color: "var(--primary)", backgroundColor: "rgba(255, 255, 255, .75)", "&:hover": {backgroundColor: "rgba(255, 255, 255, 1)"} }}>
                                <IoArrowBackSharp />
                            </IconButton>
                        </span>
                    </Swiper>
                </Box>
                <Box display={{xs: "none", sm: "none", md: "block", lg: "none"}}>
                    <Swiper {...viewMore} slidesPerView={4}>
                        {
                            latestItems.map(({name, image, price}, index) => (
                                <SwiperSlide key={index}>
                                    <LatestItem
                                        index={index}
                                        handleFavorite={handleFavorite}
                                        handleAddToCart={addItem}
                                        name={name}
                                        price={price}
                                        image={image}
                                    />
                                </SwiperSlide>
                            ))
                        }
                        <span className=".swiper-button-next swiper-smallBtn-next">
                            <IconButton sx={{fontSize: {xs: "1rem", md: "2rem"}, transition: "all .5s", color: "var(--primary)", backgroundColor: "rgba(255, 255, 255, .75)", "&:hover": {backgroundColor: "rgba(255, 255, 255, 1)"} }}>
                                <IoArrowForwardSharp />
                            </IconButton>
                        </span>

                        <span className=".swiper-button-prev swiper-smallBtn-prev">
                            <IconButton sx={{fontSize: {xs: "1rem", md: "2rem"}, transition: "all .5s", color: "var(--primary)", backgroundColor: "rgba(255, 255, 255, .75)", "&:hover": {backgroundColor: "rgba(255, 255, 255, 1)"} }}>
                                <IoArrowBackSharp />
                            </IconButton>
                        </span>
                    </Swiper>
                </Box>
                <Box display={{xs: "none", sm: "block", md: "none", lg: "none"}}>
                    <Swiper {...viewMore} slidesPerView={3}>
                        {
                            latestItems.map(({name, image, price}, index) => (
                                <SwiperSlide key={index}>
                                    <LatestItem
                                        index={index}
                                        handleFavorite={handleFavorite}
                                        handleAddToCart={addItem}
                                        name={name}
                                        price={price}
                                        image={image}
                                    />
                                </SwiperSlide>
                            ))
                        }

                        <span className=".swiper-button-next swiper-smallBtn-next">
                            <IconButton sx={{fontSize: {xs: "1rem", md: "2rem"}, transition: "all .5s", color: "var(--primary)", backgroundColor: "rgba(255, 255, 255, .75)", "&:hover": {backgroundColor: "rgba(255, 255, 255, 1)"} }}>
                                <IoArrowForwardSharp />
                            </IconButton>
                        </span>

                        <span className=".swiper-button-prev swiper-smallBtn-prev">
                            <IconButton sx={{fontSize: {xs: "1rem", md: "2rem"}, transition: "all .5s", color: "var(--primary)", backgroundColor: "rgba(255, 255, 255, .75)", "&:hover": {backgroundColor: "rgba(255, 255, 255, 1)"} }}>
                                <IoArrowBackSharp />
                            </IconButton>
                        </span>
                    </Swiper>
                </Box>
                <Box display={{xs: "block", sm: "none", md: "none", lg: "none"}}>
                    <Swiper {...viewMore} slidesPerView={2}>
                        {
                            latestItems.map(({name, image, price}, index) => (
                                <SwiperSlide key={index}>
                                    <LatestItem
                                        index={index}
                                        handleFavorite={handleFavorite}
                                        handleAddToCart={addItem}
                                        name={name}
                                        price={price}
                                        image={image}
                                    />
                                </SwiperSlide>
                            ))
                        }
                        <span className=".swiper-button-next swiper-smallBtn-next">
                            <IconButton sx={{fontSize: {xs: "1rem", md: "2rem"}, transition: "all .5s", color: "var(--primary)", backgroundColor: "rgba(255, 255, 255, .75)", "&:hover": {backgroundColor: "rgba(255, 255, 255, 1)"} }}>
                                <IoArrowForwardSharp />
                            </IconButton>
                        </span>

                        <span className=".swiper-button-prev swiper-smallBtn-prev">
                            <IconButton sx={{fontSize: {xs: "1rem", md: "2rem"}, transition: "all .5s", color: "var(--primary)", backgroundColor: "rgba(255, 255, 255, .75)", "&:hover": {backgroundColor: "rgba(255, 255, 255, 1)"} }}>
                                <IoArrowBackSharp />
                            </IconButton>
                        </span>
                    </Swiper>
                </Box>
            </Section>

            {/* LOCATION */}
            <Section title="Shop from location" linkName="View all" link="/shop">
                <Box display={{xs: "none", sm: "none", md: "none", lg: "block" }}>
                    <Swiper {...viewMore} slidesPerView={4}>
                        {
                            locationItems.map(({location, link, image, sellers}, index) => (
                                <SwiperSlide key={index}>
                                    <LocationItem
                                        location={location}
                                        sellers={sellers}
                                        image={image}
                                        link={link}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Box>
                <Box display={{xs: "none", sm: "block", md: "block", lg: "none" }}>
                    <Swiper {...viewMore} slidesPerView={3}>
                        {
                            locationItems.map(({location, link, image, sellers}, index) => (
                                <SwiperSlide key={index}>
                                    <LocationItem
                                        location={location}
                                        sellers={sellers}
                                        image={image}
                                        link={link}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Box>
                <Box display={{xs: "block", sm: "none", md: "none", lg: "none" }}>
                    <Swiper {...viewMore} slidesPerView={2}>
                        {
                            locationItems.map(({location, link, image, sellers}, index) => (
                                <SwiperSlide key={index}>
                                    <LocationItem
                                        location={location}
                                        sellers={sellers}
                                        image={image}
                                        link={link}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Box>
            </Section>


            {/* BRANDS */}
            <Section title="Top sellers" linkName="View all top sellers" link="/shop">
                <Box display={{xs: "none", sm: "none", md: "none", lg: "block" }}>
                    <Swiper {...viewMore} slidesPerView={6}>
                        {
                            brands.map(({image, name, link}, index) => (
                                <SwiperSlide key={index}>
                                    <BrandItem
                                        image={image}
                                        link={link}
                                        name={name}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Box>

                <Box display={{xs: "none", sm: "none", md: "block", lg: "none" }}>
                    <Swiper {...viewMore} slidesPerView={4}>
                        {
                            brands.map(({image, name, link}, index) => (
                                <SwiperSlide key={index}>
                                    <BrandItem
                                        image={image}
                                        link={link}
                                        name={name}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Box>

                <Box display={{xs: "none", sm: "block", md: "none", lg: "none" }}>
                    <Swiper {...viewMore} slidesPerView={3}>
                        {
                            brands.map(({image, name, link}, index) => (
                                <SwiperSlide key={index}>
                                    <BrandItem
                                        image={image}
                                        link={link}
                                        name={name}
                                    />
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </Box>

                <Box display={{xs: "block", sm: "none", md: "none", lg: "none" }}>
                    <Swiper {...viewMore} slidesPerView={2}>
                        {
                            brands.map(({image, name, link}, index) => (
                                <SwiperSlide key={index}>
                                    <BrandItem
                                        image={image}
                                        link={link}
                                        name={name}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Box>

                <Box mt={5 * 2}>
                    <Grid container spacing={3}>
                        {
                            stockItems.map(({name, link, product, stock, image}, index) => (
                                <StockItem
                                    key={index}
                                    name={name}
                                    image={image}
                                    link={link}
                                    product={product}
                                    stock={stock}
                                />
                            ))
                        }
                    </Grid>
                </Box>
            </Section>

            <Footer />
        </Box>
    )
}

export default MarketPlace
