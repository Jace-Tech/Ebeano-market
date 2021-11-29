import { Box, Typography } from "@mui/material"
import Seo from "../../components/Seo"

const ErrorPage = () => {

    return (
        <>
            <Seo title="Ebeano Market | 404 " />
            <Box display="flex" width="100%" height="100vh" alignItems="center" justifyContent="center">
                <Box mb={15}>
                    <Typography  fontSize={{xs: "6rem", sm: "7rem", md: "8rem", lg: "10rem"}} variant="h1" sx={{color: "#333", fontWeight: 700, fontFamily: "'Sen', Segeo UI, sans-serif", textAlign: "center"}}>404!</Typography>
                    <Typography sx={{color: "#999", textAlign: "center"}}>Page not found!</Typography>
                </Box>
            </Box>
        </>
    )
}


export default ErrorPage
