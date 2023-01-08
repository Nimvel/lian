import s from './Home.module.scss'

const Home = () => {
    return (
        <div className={s.home}>
            <div className={s.background}></div>

            <div className={`block_1 ${s.lian_creative_agency}`}>
                <div className='text_1'>lian creative agency</div>
            </div>

            <div className={`text_2 ${s.minimal_freelance_portfolio}`}>minimal freelance portfolio</div>
            
            <div className={s.navbar_block}>
            <div className={`navbar ${s.navbar}`}>
                <span className={s.item}>all</span>
                <span className={s.item}>logo</span>
                <span className={s.item}>mobile app</span>
                <span className={s.item}>wordpress</span>
                <span className={s.item}>web design</span>
                <span className={s.item}>ui/ix</span>
                <span className={s.item}>branding</span>
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