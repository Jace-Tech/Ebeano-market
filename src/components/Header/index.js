import { useState, useContext } from "react"
import {Box, Typography, Container, Icon, IconButton, Badge } from "@mui/material"
import { Link } from "react-router-dom"
import BaseContainer from "../BaseContainer"
import { HiMenuAlt1 } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { MdShoppingCart, MdFavorite } from "react-icons/md";

import { CartContext } from "../../contexts/Cart"

import Logo from "../../assets/logo.png"
import LogoDark from "../../assets/logo_dark.png"
import "./style.css"

const Header = ({mode, isSticky}) => {
    const [search, setSearch] = useState("")
    const { cart } = useContext(CartContext)

    const handleSearch = e => {

    }

    return (
        <Box position={isSticky ? "sticky" : "absolute"} sx={{backgroundColor: (mode !== 'dark') ? "transparent" : "rgba(255, 255, 255, 1)", boxShadow: (mode === 'dark') &&  "0 3px 8px rgba(0, 0, 0, .2)" , transition: "all .5s" , paddingY: {xs: 1, md: 1.5}}} width="100%" left={0} top={0} zIndex={1000}>
            <BaseContainer>
                <Box display="flex" alignItems="center" justifyContent="space-between" position="relative">
                    <Box display="flex" alignItems="center">
                        <Box mr={2} display={{xs: "block", lg: "none"}}>
                            <IconButton sx={{color: (mode !== 'dark') ? "#fff" : "#333", transition: "all .5s", fontSize: "2rem", "&:hover": {color: "var(--primary)"}}}>
                                <HiMenuAlt1 />
                            </IconButton>
                        </Box>

                        <Link to="/">
                            <img src={mode !== "dark" ? Logo : LogoDark} style={{width: 120, objectFit: "contain"}} alt="logo" loading="lazy" />
                        </Link>

                        <Box display="flex" alignItems="center" sx={{display: {xs: "none", sm: "none", md: "none", lg: "flex"}}} ml={5}>
                            <Link className={`nav-links ${(mode === 'dark') && "light"}`} to="/">
                                <Typography sx={{fontSize: ".95rem", fontWeight: 300}}>Contact us</Typography>
                            </Link>

                            <Link className={`nav-links ${(mode === 'dark') && "light"}`} to="/">
                                <Typography sx={{fontSize: ".95rem", fontWeight: 300}}>Sell on Ebeano</Typography>
                            </Link>

                            <Link className={`nav-links ${(mode === 'dark') && "light"}`} to="/">
                                <Typography sx={{fontSize: ".95rem", fontWeight: 300}}>Track order</Typography>
                            </Link>

                            <Link className={`nav-links ${(mode === 'dark') && "light"}`} to="/">
                                <Typography sx={{fontSize: ".95rem", fontWeight: 300}}>Login</Typography>
                            </Link>

                            <Link className={`nav-links ${(mode === 'dark') && "light"}`} to="/">
                                <Typography sx={{fontSize: ".95rem", fontWeight: 300}}>Register</Typography>
                            </Link>
                        </Box>
                    </Box>

                    <Box display="flex" alignItems="center" ml={4} sx={{flex: {xs: 0, sm: 1, md: 1}}}>
                        <Box flex="1" sx={{display: {xs: "none", sm: "block", md: "block"}}}>
                            <form className={`searchBox ${(mode === 'dark') && "light"}`}>
                                <input type="text" value={search} placeholder="Search for products, brands or categories" onChange={(e) => setSearch(e.target.value)} />
                                <button className={`search-btn ${(mode === 'dark') && "light"}`}>
                                    <IoSearchOutline className="header-icon-search" />
                                </button>
                            </form>
                        </Box>

                        <Box display="flex" ml={4}>
                            <Link to="/cart" className={`nav-options ${(mode === 'dark') && "light"}`}>
                                <Badge badgeContent={cart.length}>
                                    <MdShoppingCart className="header-icon-option" />
                                </Badge>
                                <Typography sx={{fontSize: ".7rem", fontWeight: 300}}>Cart</Typography>
                            </Link>

                            <Link to="/favorite" className={`nav-options ${(mode === 'dark') && "light"}`} style={{marginLeft: 10}}>
                                <Badge badgeContent={0}>
                                    <MdFavorite className="header-icon-option" />
                                </Badge>
                                <Typography sx={{fontSize: ".7rem", fontWeight: 300}}>WishList</Typography>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </BaseContainer>
        </Box>
    )
}

export default Header
