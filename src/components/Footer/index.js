import { useState } from "react"
import { Box, Typography, Grid, IconButton } from "@mui/material"
import {Link} from "react-router-dom"
import {IoLogoLinkedin, IoLogoFacebook, IoLogoYoutube} from "react-icons/io5"
import BaseContainer from "../BaseContainer"
import "./style.css"


const Footer = () => {
    const [newsletter, setNewsletter] = useState("")

    return (
        <Box mt={5 * 2} py={5} sx={{backgroundColor: "#830D92"}}>
            <BaseContainer>
                <Box>
                    <Typography fontSize={{xs: "1.5rem", md: "2.5rem"}} sx={{textAlign: "center", fontWeight: 500, fontFamily: "Sen, sans-serif", color: "#fff"}}> Subscribe </Typography>
                    <Typography fontSize={{xs: ".9rem", md: "1rem"}} sx={{textAlign: "center", color: "#ccc", fontWeight: 400}}>Subscribe to our newsletter to get the latest <br /> offers, deals and updates</Typography>
                    <Box mt={2} display="flex" alignItems="center" justifyContent="center">
                        <div className="newsletter">
                            <input className="newsletter-input" placeholder="Enter your email" value={newsletter} onChange={e => setNewsletter(e.target.value)} />
                            <button className="addBtn">Subscribe</button>
                        </div>
                    </Box>
                </Box>

                <Box mt={4}>
                    <Grid container spacing={5} justifyContent="space-between">
                        <Grid item xs={12} md={6} lg={5}>
                            <Typography fontSize={{xs: ".9rem", md: "1rem"}} sx={{color: "#fafafa", fontWeight: 300, py: 1}}>
                                Our vision has been to take eCommerce to the next level in Nigeria and Africa at large, rendering core services and making life easier for the populace. We consider it a privilege to be able to to render these services.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={6} lg={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={6}>
                                    <Typography fontSize={{xs: "1.2rem", md: "1.5rem"}} sx={{color: "#fff", fontFamily: "Sen, sans-serif"}}>Navigation</Typography>
                                    <Box mt={1}>
                                        <ul className="footer-menu">
                                            <li className="footer-menu-tab">
                                                <Link to="/" className="footer-menu-link">About us</Link>
                                            </li>

                                            <li className="footer-menu-tab">
                                                <Link to="/" className="footer-menu-link">Contact us</Link>
                                            </li>

                                            <li className="footer-menu-tab">
                                                <Link to="/" className="footer-menu-link">Become an Ebeano affiliate</Link>
                                            </li>

                                            <li className="footer-menu-tab">
                                                <Link to="/" className="footer-menu-link">Sell on Ebeano</Link>
                                            </li>

                                            <li className="footer-menu-tab">
                                                <Link to="/" className="footer-menu-link">Categories</Link>
                                            </li>
                                        </ul>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={6} md={6}>
                                    <Typography fontSize={{xs: "1.2rem", md: "1.5rem"}} sx={{color: "#fff", fontFamily: "Sen, sans-serif"}}>Services</Typography>
                                    <Box mt={1}>
                                        <ul className="footer-menu">
                                            <li className="footer-menu-tab">
                                                <Link to="/marketplace" className="footer-menu-link">Marketplace</Link>
                                            </li>

                                            <li className="footer-menu-tab">
                                                <Link to="/" className="footer-menu-link">Real estate</Link>
                                            </li>

                                            <li className="footer-menu-tab">
                                                <Link to="/" className="footer-menu-link"> Hotel & airline bookings</Link>
                                            </li>

                                            <li className="footer-menu-tab">
                                                <Link to="/" className="footer-menu-link"> Ebeano pay</Link>
                                            </li>

                                            <li className="footer-menu-tab">
                                                <Link to="/" className="footer-menu-link">Airtime recharge</Link>
                                            </li>

                                            <li className="footer-menu-tab">
                                                <Link to="/" className="footer-menu-link">Education</Link>
                                            </li>

                                            <li className="footer-menu-tab">
                                                <Link to="/" className="footer-menu-link">Ebeano artisans</Link>
                                            </li>
                                        </ul>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

                <Box mt={3}>
                    <Box display="flex" alignItems="center" justifyContent={{xs: "start", sm: "center", md: "center"}}>
                        <Box mr={1}>
                            <IconButton sx={{fontSize:{xs: "1.5rem", md: "1.8rem"}, color: "#fff", transition: "color .5s", "&:hover": {color: "var(--primary)"}}}>
                                <IoLogoFacebook />
                            </IconButton>
                        </Box>

                        <Box mr={1}>
                            <IconButton sx={{fontSize:{xs: "1.5rem", md: "1.8rem"}, color: "#fff", transition: "color .5s", "&:hover": {color: "var(--primary)"}}}>
                                <IoLogoLinkedin />
                            </IconButton>
                        </Box>

                        <Box mr={1}>
                            <IconButton sx={{fontSize:{xs: "1.5rem", md: "1.8rem"}, color: "#fff", transition: "color .5s", "&:hover": {color: "var(--primary)"}}}>
                                <IoLogoYoutube />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box>
                        <a href="mailto:hello@ebeanomarket.com" className="footer-email-link">
                            <Typography components="a" sx={{color: "#fff", textAlign: {xs: "left", sm: "center", md: "center"}}} fontSize={{xs: ".85rem", md: ".95rem"}}>hello@ebeanomarket.com</Typography>
                        </a>
                    </Box>
                </Box>

                <Box mt={3}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography fontSize={{xs: ".85rem", md: ".9rem"}} sx={{color: "#fafafa", fontWeight: 300}}>&copy; Ebeanomarket, {new Date().getFullYear()}</Typography>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box display="flex" alignItems="center" justifyContent={{xs: "flex-start", md: "flex-end"}}>
                                <Link to="/" className="footer-botton-link footer-menu-link">Privacy policy </Link>
                                <div className="footer-divider"></div>
                                <Link to="/" className="footer-botton-link footer-menu-link">Terms of service </Link>
                                <div className="footer-divider"></div>
                                <Link to="/" className="footer-botton-link footer-menu-link">Disclaimer</Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </BaseContainer>
        </Box>
    )
}

export default Footer
