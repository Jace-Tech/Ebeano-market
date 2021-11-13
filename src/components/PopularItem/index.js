import { useRef, useEffect } from "react"

import { Grid, Box, Typography, IconButton, Icon } from "@mui/material"
import Button from "../Button"
import "./style.css"



const PopularItem = ({image, name, price, handleFavorite, handleAddToCart}) => {

    return (
        <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box display="flex" sx={{alignItems: {xs: "center", lg: "start"}}}>
                <img src={image && image} alt={name && name} className="popular-img"/>
                <Box flex={1} ml={3} sx={{paddingY: {xs: 1}}}>
                    <Typography sx={{fontSize: {xs: "1.2rem"}, color: "#333", fontWeight: 500 }}>{ name && name }</Typography>
                    <Typography fontSize="1rem" sx={{ color: "#777", fontWeight: 400, marginTop: 1}}> &#8358; { price && price.toLocaleString() }</Typography>
                    <Box mt={1}>
                        <Button handleAddToCart={() => handleAddToCart(name)} handleFavorite={() => handleFavorite(name)} />
                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}

export default PopularItem
