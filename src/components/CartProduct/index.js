import { useState } from "react"
import { Box, Typography, IconButton, Tooltip } from "@mui/material"
import { IoHeartOutline, IoTrash, IoAddCircle } from "react-icons/io5"
import Minus from "../../assets/minus.svg"

import "./style.css"
const CartProduct = ({ image, name, item, id, handleCheckItem, handleAddfavorite, handleDeleteItem, price, value }) => {
    const [quantity, setQuantity] = useState(value || 1)

    const onValueChange = () => {

    }

    const handleDecrease = () => {
        if(quantity > 1){
            setQuantity(prev => prev - 1)
        }
    }

    const handleIncrease = () => {
        setQuantity(prev => prev + 1)
    }

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" my={{xs: 4, md: 2}}>
            <Box display="flex" alignItems="center">
                <Box>
                    <img src={ image && image } alt="minus"  className="product-img" />
                </Box>
                <Box ml={2}>
                    <Typography fontSize={{xs: ".9rem", md: "1rem"}} sx={{ color: "#777", fontWeight: 400}}>{ name && name }</Typography>
                    <Typography mt={1} fontSize={{xs: ".8rem", md: ".9rem"}} sx={{ color: "#777", fontWeight: 400, display: {xs: "block", md: "none"}}}> &#8358; { price && price.toLocaleString() }</Typography>

                    <Box display={{xs: "flex", md: "none"}} mt={2} alignItems="center" justifyContent="flex-start">
                        <IconButton onClick={handleDecrease && handleDecrease} sx={{color: "var(--primary)"}}>
                            <img src={Minus} className="minusBtn" />
                        </IconButton>

                        <input onChange={ onValueChange && onValueChange }  value={quantity} className="cart-quantity" />

                        <IconButton onClick={handleIncrease && handleIncrease} sx={{color: "var(--primary)"}}>
                            <IoAddCircle />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <Box display="flex" alignItems="center" mt={2}>
                <button onClick={() => console.log("clicked") } className="checkout-btn">Checkout this item</button>

                <IconButton onClick={() =>  console.log("clicked") } sx={{color: "var(--primary)"}}>
                    <Tooltip title="Add to wishlist">
                        <IoHeartOutline />
                    </Tooltip>
                </IconButton>

                <IconButton onClick={() => handleDeleteItem && handleDeleteItem(id) } sx={{color: "var(--primary)"}}>
                    <Tooltip title="Remove Item">
                        <IoTrash />
                    </Tooltip>
                </IconButton>
            </Box>
        </Box>
    )
}

export default CartProduct
