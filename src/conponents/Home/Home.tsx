import s from './Home.module.scss'

const Home = () => {
    return (
        <div className={s.home}>
            <div className={s.background}></div>

            <div className={`text_block ${s.lian_creative_agency}`}>
                <div className='text'>lian creative agency</div>
            </div>

            <div className={`middle_text ${s.minimal_freelance_portfolio}`}>minimal freelance portfolio</div>

            <div className={s.navbar_block}>
                <div className={`navbar ${s.navbar}`}>
                    <span className='item'>all</span>
                    <span className='item'>logo</span>
                    <span className='item'>mobile app</span>
                    <span className='item'>wordpress</span>
                    <span className='item'>web design</span>
                    <span className='item'>ui/ix</span>
                    <span className='item'>branding</span>
                </div>
            </div>

            <div className={s.images}>

                <div className={s.column_1}>
                    <a><div className={s.img_1}></div></a>
                    <a><div className={s.img_2}></div></a>
                    <a><div className={s.img_3}></div></a>
                </div>

                <div className={s.column_2}>
                    <a><div className={s.img_4}></div></a>
                    <a><div className={s.img_5}></div></a>
                    <a><div className={s.img_6}></div></a>
                    <a><div className={s.img_7}></div></a>
                </div>

                <div className={s.column_3}>
                    <a><div className={s.img_8}></div></a>
                    <a><div className={s.img_9}></div></a>
                    <a><div className={s.img_10}></div></a>
                </div>
            </div>
            <button>LOAD MORE</button>
        </div>
    )
}

export default Home