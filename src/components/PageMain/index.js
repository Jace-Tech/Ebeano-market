import { Box, Typography, Grid, IconButton } from "@mui/material"
import { IoOptionsSharp } from "react-icons/io5"
import "./style.css"


const PageMain = ({ children, title, hasSide, products, handleOpen }) => {
    return (
        <Box>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={10}>
                    <Box mb={3}>
                        <Typography fontSize={{xs: "1.5rem", md: "2rem"}} sx={{color: "#999", textTransform: "uppercase", fontFamily: "'Sen', Segeo UI, sans-serif"}}> {title && title }</Typography>
                        {
                            products && ( <Typography fontSize={{xs: ".9rem", md: "1rem"}} sx={{color: "#333", fontFamily: "Yantramanav, Segeo UI, sans-serif"}}>{ products.toLocaleString() } products found.</Typography> )
                        }
                    </Box>
                </Grid>

                {
                    hasSide && (
                        <Grid item xs={12} md={2}>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Box>
                                    <label htmlFor="sort" className="select-label">Sort</label>
                                    <select id="sort" className="pagemain-select">
                                        <option value="newest">Newest</option>
                                        <option value="popular">Popular</option>
                                    </select>
                                </Box>
                                <Box display={{xs: "flex", md: "none"}} alignItems="center" justifyContent="center">
                                    <IconButton sx={{fontSize: "1.5rem"}} onClick={handleOpen}>
                                        <IoOptionsSharp />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>
                    )
                }
            </Grid>

            <Box>
                { children }
            </Box>
        </Box>
    )
}

export default PageMain
