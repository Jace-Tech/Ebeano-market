import { Grid, Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import BlockButton from "../BlockButton"

import "./style.css"

const StockItem = ({image, product, stock, link, name}) => {
    return (
        <Grid item xs={12} md={6}>
            <div className="stock-item">
                <img src={ image && image } alt={product && product} />

                <div className="stock-content">
                    <Typography fontSize={{xs: "1.5rem", lg: "2.5rem"}} sx={{color: "#fff", fontFamily: "Sen, sans-serif"}}>{product && product}</Typography>
                    <Typography fontSize={{xs: ".9rem", lg: "1.1rem"}} sx={{color: "#fff", fontWeight: 300, mt: 1}}>Less than {stock && stock.toLocaleString()} left in stock</Typography>
                    <Box mt={2}>
                        <BlockButton link={link && link} type="light" text={name && name} />
                    </Box>
                </div>
            </div>
        </Grid>
    )
}

export default StockItem
