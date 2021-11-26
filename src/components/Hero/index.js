import { Box, Typography, Icon, IconButton } from "@mui/material"
import { Link } from "react-router-dom"
import BaseContainer from "../BaseContainer"

import "./style.css"

const Hero = ({image, title, price, name, per}) => {
    return (
        <div className="hero">
            <img src={image && image} alt={title && title} className="hero-img" />

            <Box position="absolute" left={0} top={0} width="100%" height="100%" sx={{backgroundColor: "rgba(0, 0, 0, .4)"}}>
                <Box position="absolute" sx={{top: {xs: 100, sm: 120, md: 170, lg: 200}}} width="100%">
                    <BaseContainer>
                        <Box sx={{width: {xs: "100%", sm: "70%", md: "60%", lg: "50%"}}}>
                            <Typography sx={{fontFamily: "Sen, sans-serif", lineHeight: 1.3 , color: "#fff", fontWeight: 700, fontSize: {xs: "2.5rem", sm: "3rem", md: "3.5rem", lg:"4rem"} }}>{title && title}</Typography>

                            <Box display="flex" alignItems="center" mt={2}>
                                <Typography sx={{fontSize: {xs: "1.3rem", md: "2rem" }, fontFamily: "Yantramanav, sans-serif", fontWeight: 400, color: "#cacaca", marginRight: 3}}> &#8358; {price && price.toLocaleString()} {per && ` /${per}`} </Typography>
                                <IconButton sx={{color: "#eee", fontSize: {xs: "1.3rem", md: "2rem"} , transition: "all .5s", "&:hover": {color: "var(--primary)"}}}>
                                    <Icon>favorite_border</Icon>
                                </IconButton>
                            </Box>

                            <Box mt={3} display="flex" alignItems="center">
                                <Link to="" style={{textDecoration: "none"}} className="hero-btn">{name ? name : "buy now"}</Link>
                                <button className="hero-btn text">Add to Cart</button>
                            </Box>
                        </Box>
                    </BaseContainer>
                </Box>
            </Box>
        </div>
    )
}

export default Hero
