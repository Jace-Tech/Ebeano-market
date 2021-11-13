import OAuth from "./OAuth"
import Shop from "./Shop"
import SideBar from "./SideBar"
import Cart from "./Cart"

const GlobalContexts = ({children}) => {
    return (
        <OAuth>
            <Cart>
                <SideBar>
                    <Shop>
                        {children}
                    </Shop>
                </SideBar>
            </Cart>
        </OAuth>
    )
}

export default GlobalContexts
