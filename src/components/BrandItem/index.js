import { Box } from "@mui/material"
import { Link } from "react-router-dom"

import "./style.css"

const BrandItem = ({image, link, name}) => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <Link to={link && link} className="brand-link">
                <img src={image && image} alt={name && name} className="brand-img" />
            </Link>
        </Box>
    )
}


export default BrandItem
