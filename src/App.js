import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import HomeComponent from "./pages/Home"
import MarketPlace from "./pages/MarketPlace"
import Checkout from "./pages/Checkout"
import Cart from "./pages/Cart"
import Tracking from "./pages/Tracking"
import Category from "./pages/Category"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ErrorPage from "./pages/ErrorPage"
import ScrollTop from "./components/ScrollTop"
import GlobalContexts from "./contexts"

import "./App.css"
import "./assets/plugin/animate.css"

const App = () => {

    const routes = [
        {
            path: "/",
            component: HomeComponent
        },
        {
            path: "/marketplace",
            component: MarketPlace
        },
        {
            path: "/cart",
            component: Cart
        },
        {
            path: "/categories/:category",
            component: Category
        },
        {
            path: "/checkout",
            component: Checkout
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/register",
            component: Signup
        },
        {
            path: "/tracking",
            component: Tracking
        },
        {
            path: "*",
            component: ErrorPage
        },
    ]

    return (
        <Router>
            <GlobalContexts>
                <ScrollTop>
                    <Switch>
                        {
                            routes.map(({path, component}, index) => <Route key={index} path={path} component={component} exact />)
                        }
                    </Switch>
                </ScrollTop>
            </GlobalContexts>
        </Router>
    )
}

export default App
