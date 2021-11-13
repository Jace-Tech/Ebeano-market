import { Typography, Box } from "@mui/material"
import { Link } from "react-router-dom"

import "./style.css"

const responsive = {
    textAlign: {
        xs: "left",
        md: "center"
    },
    color: "#fff",
    letterSpacing: 1
}

const MasonryItem = ({item, name, price, image, span, height, link}) => {
    return (
        <Link to={link && link} className="masonry-item" style={{height, gridColumn: span ? `span ${span }` : "auto" }}>
            <img loading="lazy" src={image} alt={name} />
            <Box position="absolute" zIndex={5} p={2} bottom={0} left={0} width="100%">
                <Typography fontSize={{xs: "1.3rem", md: "2rem"}} variant="h4" sx={{...responsive}}>{name && name}</Typography>
                <Typography variant="body1" sx={{...responsive, my: 1, fontWeight: 300, color: "#ccc"}}>Over {item && item.toLocaleString()} items</Typography>
                <Typography fontSize={{xs: ".7rem", md: ".85rem"}} variant="body2" sx={{...responsive, textTransform: "uppercase"}}>Starting from &#8358; {price && price.toLocaleString()} </Typography>
            </Box>
        </Link>
    )
}

export default MasonryItem
