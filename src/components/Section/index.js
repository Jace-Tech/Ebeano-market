import { Box, Typography } from "@mui/material"
import BaseContainer from "../BaseContainer"
import { Link } from "react-router-dom"
import "./style.css"


const Section = ({ title, link, children, linkName, header }) => {
    return (
        <Box width="100%" py={5}>
            <BaseContainer>
                {header && header}
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography sx={{fontFamily: "Sen, sans-serif", fontSize: {xs: "1.5rem", md: "2rem"}, fontWeight: 600}}>{ title && title }</Typography>
                    <Link className="section-link text-hover" to={link}>
                        { linkName && linkName}
                    </Link>
                </Box>

                <Box mt={4}>
                    { children }
                </Box>
            </BaseContainer>
        </Box>
    )
}

export default Section
