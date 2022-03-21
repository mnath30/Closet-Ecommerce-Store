import logo from '../../asset/_Logo.png'
import { NavLink } from "react-router-dom";
import "./navbar.css"

const Navbar=()=>{
    return (
        <>
        <header>
            <nav className="navigation">
                <div className="nav-brand-logo">
                    <NavLink to="/">
                        <img className="nav-img" src={logo} alt="website logo"/>
                    </NavLink>
                </div>
                <div className="nav-main-options"> 
                    <ul className="nav-ul">
                        <li className="nav-li"><NavLink  className={(navData)=>navData.isActive?"nav-active":""} to="/product">MEN</NavLink></li>
                        <li className="nav-li"><NavLink to="/product" className={(navData)=>navData.isActive?"nav-active":""}>WOMEN</NavLink></li>
                        <li className="nav-li"><NavLink to="/product" className={(navData)=>navData.isActive?"nav-active":""}>KIDS</NavLink></li>
                    </ul>
                </div>
                <div className="nav-search">
                    <input className="nav-search-input" type="text" placeholder="Search..."/>
                    <button className="nav-search-btn"><i className="fas fa-search"></i></button>
                </div>
                <div className="nav-sub-options"> 
                    <ul className="nav-ul">
                        <li className="nav-li"><NavLink to="/profile" className={(navData)=>navData.isActive?"nav-active":""}><i className="fas fa-user"></i></NavLink></li>
                        <li className="nav-li"><NavLink to="/wishlist" className={(navData)=>navData.isActive?"nav-active":""}><i className="far fa-heart"></i></NavLink></li>
                        <li className="nav-li"><NavLink to="/cart" className={(navData)=>navData.isActive?"nav-active":""}><i className="fas fa-shopping-cart"></i></NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>    
        </>
    )
}
export {Navbar};