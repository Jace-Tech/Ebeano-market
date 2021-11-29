import {Box, IconButton, Fade, Tooltip} from "@mui/material"
import "./style.css"
import { MdFavoriteBorder } from "react-icons/md";


const Button = ({ handleFavorite, handleAddToCart }) => {
    return (
        <Box display="flex" alignItems="center">
            <button className="addBtn"  onClick={handleAddToCart}>
                Add to cart
            </button>
            <Box ml={1}>
                <Tooltip
                    sx={{color: "var(--primary)"}}
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 600 }}
                    title="Add to wishlist"
                >
                    <IconButton sx={{color: "var(--primary)"}} onClick={ handleFavorite}>
                        <MdFavoriteBorder />
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    )
}

export default Button
