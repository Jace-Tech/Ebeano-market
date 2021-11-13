import { Box, Typography } from "@mui/material"

const Category = ({name, image}) => {
    return (
        <Box mx={1} p={1.5} sx={{border: "2px solid #333", minWidth: 140, width: "fit-content", borderRadius: 2}} display="inline-flex" alignItems="center" justifyContent="space-evenly">
            <Typography sx={{fontSize: ".85rem", fontWeight: 500,  color: "#333"}}>{name && name}</Typography>
            <img src={image && image} alt={name && name} style={{display: "inline-block", marginLeft: 5, height: 30, objectFit: "contain"}} />
        </Box>
    )
}

export default Category
