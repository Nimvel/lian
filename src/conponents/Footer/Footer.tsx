import s from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.logo_block}>
                <div className={s.logo}></div>
            </div>

            <div className={s.icons_block}>
                <div className={s.icons}></div>
            </div>

            <div className={s.copyright_block}>
                <div className={s.copyright}>
                    ⓒ 2016 <span className={s.selected}>mulitix theme</span> by themeforces. all rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer