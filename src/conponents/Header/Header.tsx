import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logo}></div>

            <div className={`navbar ${s.navbar}`}>
                <span>
                    <NavLink to='/home' className={linkActive => linkActive.isActive ? 'active' : 'item'} >
                        home
                    </NavLink>
                </span>
                <span>
                    <NavLink to='/about' className={linkActive => linkActive.isActive ? 'active' : 'item'} >
                        about
                    </NavLink>
                </span>
                <span><NavLink to='/portfolio' className={linkActive => linkActive.isActive ? 'active' : 'item'} >
                    portfolio
                </NavLink></span>
                <span>
                    <NavLink to='/blog' className={linkActive => linkActive.isActive ? 'active' : 'item'} >
                        blog
                    </NavLink>
                </span>
                <span>
                    <NavLink to='/contact' className={linkActive => linkActive.isActive ? 'active' : 'item'} >
                        contact
                    </NavLink>
                </span>
            </div>
        </div>
    )
}

export default Header