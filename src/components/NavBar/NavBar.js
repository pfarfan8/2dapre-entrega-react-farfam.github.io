import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <link to='/'>
                <h3>Ecomerce</h3>
            </link>
            <div className="categories">
                <NavLink to {`/category/celular`} className={({isActivate}) => isActivate ? 'ActiveOption' : Option}/>
                <NavLink to {`/category/teblet`} className={({isActivate}) => isActivate ? 'ActiveOption' : Option}/>
                <NavLink to {`/category/notebook`}className={({isActivate}) => isActivate ? 'ActiveOption' : Option}/>
            </div>
        </nav>
    )
}

export default NavBar