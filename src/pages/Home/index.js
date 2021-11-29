import { useState, useContext } from "react"
import { Box, Grid, IconButton } from "@mui/material"

import Masonry from '@mui/lab/Masonry';
import Header from "../../components/Header"
import Hero from "../../components/Hero"
import Category from "../../components/Category"
import BaseContainer from "../../components/BaseContainer"
import Section from "../../components/Section"
import PopularItem from "../../components/PopularItem"
import MasonryItem from "../../components/MasonryItem"
import BlockButton from "../../components/BlockButton"
import LatestItem from "../../components/LatestItem"
import LocationItem from "../../components/LocationItem"
import BrandItem from "../../components/BrandItem"
import StockItem from "../../components/StockItem"
import Footer from "../../components/Footer"
import Seo from "../../components/Seo"

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"

import 'swiper/swiper-bundle.css'

import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5"
import {ShopContext} from "../../contexts/Shop"

import {  viewMore} from "../../components/Slider"
import { categories, popularItems, masonryItems, latestItems, locationItems, brands, stockItems, banners } from "../../apis/data"
import './style.css'


const Home = () => {
    const [mode, setMode] = useState("light")
    const [isSticky, setIsSticky] = useState(false)

    const {handleFavorite, handleAddToCart} = useContext(ShopContext)


    window.onscroll = (e) => {
        if (window.pageYOffset > 100) {
            setIsSticky(true)
            setMode("dark")
        }
        else{
            setIsSticky(false)
            setMode("light")
        }
    }

    SwiperCore.use([Navigation])

    const swiperOption = {
        loop: true,
        speed: 600,
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".slider-hero .swiper-button-next",
            prevEl: ".slider-hero .swiper-button-prev",
        },
    }


    return (
        <Box position="relative" sx={{overlowX: "hidden"}}>
            <Seo title="Ebeano Market | Home" />
            {/* HEADER */}
            <Header mode={mode} isSticky={isSticky} />

            {/* HERO */}
            <Box width="100%" height={{xs: 400, sm: 500, md: 600, lg: "100vh" }}>
                <Swiper className="slider-hero" {...swiperOption}>
                    {
                        banners.map(({image, name, title, per, price}, index) => (
                            <SwiperSlide key={index}>
                                <Hero
                                    name={name}
                                    image={image}
                                    per={per}
                                    title={title}
                                    price={price}
                                />
                            </SwiperSlide>
                        ))
                    }
                    <span className="swiper-next">
                        <IconButton sx={{fontSize: {xs: "1.5rem", md: "2.5rem"}, transition: "all .5s", color: "#fff", opacity: .5, "&:hover": {opacity: 1}}}>
                            <IoArrowForwardSharp />
                        </IconButton>
                    </span>

                    <span className="swiper-prev">
                        <IconButton sx={{fontSize: {xs: "1.5rem", md: "2.5rem"}, transition: "all .5s", color: "#fff", opacity: .5, "&:hover": {opacity: 1}}}>
                            <IoArrowBackSharp />
                        </IconButton>
                    </span>
                </Swiper>
            </Box>

            {/* CATEGORIES */}
            <Box py={3}>
                <BaseContainer>
                    <Box display={{xs: "none", sm: "none", md: "none", lg: "block"}} width="100%">
                        <Swiper {...viewMore} slidesPerView={7}>
                            {
                                categories.map(({name, link, image}, index) => (
                                    <SwiperSlide key={index}>
                                        <Category name={name} link={link} image={image}/>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </Box>

                    <Box display={{xs: "none", sm: "none", md: "block", lg: "none"}} width="100%">
                        <Swiper {...viewMore} slidesPerView={5}>
                            {
                                categories.map(({name, image}, index) => (
                                    <SwiperSlide key={index}>
                                        <Category name={name} image={image}/>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </Box>

                    <Box display={{xs: "none", sm: "block", md: "none", lg: "none"}} width="100%">
                        <Swiper {...viewMore} slidesPerView={4}>
                            {
                                categories.map(({name, image}, index) => (
                                    <SwiperSlide key={index}>
                                        <Category name={name} image={image}/>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </Box>
                    
                    <Box display={{xs: "block", sm: "none", md: "none", lg: "none"}} width="100%">
                        <Swiper {...viewMore} slidesPerView={2}>
                            {
                                categories.map(({name, image}, index) => (
                                    <SwiperSlide key={index}>
                                        <Category name={name} image={image}/>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </Box>
                </BaseContainer>
            </Box>

            {/* POPULAR ITEMS */}
            <Section title="Most popular picks" link="/" linkName="View all">
                <Grid container spacing={3} rowSpacing={4}>
                    {
                        popularItems.map(({name, price, image}, index) => <PopularItem key={index} name={name} price={price} image={image} handleFavorite={handleFavorite} handleAddToCart={handleAddToCart} />)
                    }
                </Grid>
                <Box mt={5} display="flex" justifyContent="center" py={4}>
                    <Box width="100%">
                        <Box display={{xs: "none", lg: 'block'}} width="100%">
                            <Masonry sx={{width: "100%"}} columns={2}  spacing={2}>
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
            <Section title="Latest release" linkName="View all" link="/">
                <Box display={{xs: "none", sm: "none", md: "none", lg: "block"}}>
                    <Swiper {...viewMore} slidesPerView={5}>
                        {
                            latestItems.map(({name, image, price}, index) => (
                                <SwiperSlide key={index}>
                                    <LatestItem
                                        handleFavorite={handleFavorite}
                                        handleAddToCart={handleAddToCart}
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
                                        handleFavorite={handleFavorite}
                                        handleAddToCart={handleAddToCart}
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
                                        handleFavorite={handleFavorite}
                                        handleAddToCart={handleAddToCart}
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
                                        handleFavorite={handleFavorite}
                                        handleAddToCart={handleAddToCart}
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
            <Section title="Shop from location" linkName="View all" link="/">
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
            <Section title="Top sellers" linkName="View all top sellers" link="/">
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

            {/* FOOTER */}
            <Footer />
        </Box>
    )
}

export default Home
