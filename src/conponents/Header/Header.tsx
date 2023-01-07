import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logo}></div>

            <div className={s.navbar}>
                <span>
                <NavLink to='/home' className={linkActive => linkActive.isActive ? s.active : s.item} >
                home
                </NavLink>
        </span>
                <span>about</span>
                <span>portfolio</span>
                <span>blog</span>
                <span>contact</span>
            </div>
        </div>
    )
}

export default Header