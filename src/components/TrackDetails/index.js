import { IoCheckmark, IoCloseOutline } from "react-icons/io5"
import { Box, Typography, Stack } from "@mui/material"
import "./style.css"

const TrackDetails = ({ title, passed, date }) => {
    return (
        <Box display="flex" alignItems="center">
            <Box display="flex" alignItems="center" justifyContent="center">
                {
                    passed && passed ?
                        (title.toLowerCase() === "delivered") ?
                            (
                                <IoCheckmark style={{fontSize: "2rem", color: "#0DC242"}} />
                            )
                        :
                            (
                                <IoCheckmark style={{fontSize: "2rem", color: "#EB790F"}} />
                            )
                    :
                        (
                            <IoCloseOutline style={{fontSize: "2rem", color: "#f00"}} />
                        )
                }
            </Box>
            <Stack spacing={1} ml={3}>
                {
                    (title.toLowerCase() === "delivered") ?
                        (
                            <Typography sx={{flex: 1, color: "#0DC242"}}> { title && title } </Typography>
                        )
                    :
                        (
                            <Typography sx={{flex: 1, color: "#EB790F"}}> { title && title } </Typography>
                        )
                }
                <Typography sx={{flex: 1, color: "#333"}} fontSize={{xs: ".8rem", sm: ".9rem"}}> {date && date} </Typography>
            </Stack>
        </Box>
    )
}

export default TrackDetails
