import { Box } from "@mui/material"
import "./style.css"

const SideBarMenu = ({ title, children }) => {
    return (
        <Box my={4}>
            <h4 className="sidebar-title">{ title && title }</h4>
            <ul className="sidebar-menu">
                { children && children }
            </ul>
        </Box>
    )
}

export default SideBarMenu
