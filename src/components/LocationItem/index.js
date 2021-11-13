import { Box, Typography } from "@mui/material"
import "./style.css"
import { Link } from "react-router-dom"


const LocationItem = ({image, location, sellers, link }) => {

    const responsive = {
        textAlign: {
            xs: "left",
        },
        color: "#fff",
        letterSpacing: 1
    }

    return (
        <Link to={link} className="location-item">
            <img src={image && image} alt={location} className="location-img" />
            <Box position="absolute" zIndex={2} bottom={0} left={0} width="100%" p={2}>
                <Typography fontSize={{xs: "1.2rem", md: "1.8rem"}} variant="h4" sx={{...responsive}}>{location && location}</Typography>
                <Typography variant="body1" sx={{...responsive, my: 1, fontWeight: 300, color: "#ccc"}}>Over {sellers && sellers.toLocaleString()} sellers</Typography>
            </Box>
        </Link>
    )
}

export default LocationItem
