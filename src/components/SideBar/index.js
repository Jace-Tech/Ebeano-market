import { IconButton } from '@mui/material';
import { IoArrowBackSharp } from 'react-icons/io5';
import "./style.css"

const SideBar = ({ children, handleClose, isOpen }) => {

    return (
        <div className={`sidebar ${isOpen && "open"}`}>
            <div className="sidebar-inner">
                <div className="sidebar-header">
                    <IconButton onClick={handleClose}>
                        <IoArrowBackSharp />
                    </IconButton>
                </div>

                <div className="sidebar-content">
                    { children && children }
                </div>
            </div>
        </div>
    )
}

export default SideBar
