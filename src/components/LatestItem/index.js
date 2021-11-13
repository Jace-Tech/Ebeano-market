import { Box, Typography } from "@mui/material"
import Button from "../Button"
import "./style.css"

const LatestItem = ({image, item,  name, price, handleFavorite, handleAddToCart}) => {
    return (
        <Box width="100%">
            <img src={image && image} alt={ name } className="latest-img" loading="lazy" />
            <Box mt={1}>
                <Typography fontSize="1.2rem" sx={{mb: 1}} > { name && name }</Typography>
                <Typography fontSize="1rem"> &#8358; { price && price.toLocaleString() }</Typography>
            </Box>
            <Box mt={1}>
                <Button handleFavorite={() => handleFavorite(item)} handleAddToCart={() => handleAddToCart(item)} />
            </Box>
        </Box>
    )
}

export default LatestItem
