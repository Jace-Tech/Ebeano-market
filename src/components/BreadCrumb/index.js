import { Box } from "@mui/material"
import { Link } from "react-router-dom"
import { IoCaretForwardSharp } from "react-icons/io5"
import "./style.css"

const BreadCrumb = ({breadcrumb}) => {
    const items = breadcrumb.split("/")
    return (
        <Box py={2}>
            <ul className="breadcrumbs">
                <li className="breadcrumbs-item">
                    <Link to="/" className="breadcrumbs-link text-hover">Home</Link>
                </li>

                {
                    items && items.map((item, index) => (
                        <>
                            <li className="breadcrumbs-divider">
                                <IoCaretForwardSharp />
                            </li>

                            <li className="breadcrumbs-item">
                                <Link to={`/${item}`} className="breadcrumbs-link text-hover">{item}</Link>
                            </li>
                        </>
                    ))
                }

            </ul>
        </Box>
    )
}

export default BreadCrumb
