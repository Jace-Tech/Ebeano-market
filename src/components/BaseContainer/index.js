import { Box } from "@mui/material"

const BaseContainer = ({ children }) => {
    return (
        <Box mx="auto" maxWidth="xl" sx={{width: {xs: "95%", md: "90%"}, paddingX: {xs: 2, md: 0}}}>
            { children }
        </Box>
    )
}

export default BaseContainer
