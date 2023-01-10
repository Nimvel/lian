import s from './Portfolio.module.scss'

const Portfolio = () => {
    return (
        <div className={s.portfolio}>
            <div className={`content_header ${s.header}`}>
                <div className={`text_block text_1 ${s.latest_projects}`}>
                    <div className='text'>latest projects</div>
                </div>

                <div className={`middle_text  text_2 ${s.we_deliver_quality}`}>we deliver quality</div>
                <div className={`background ${s.img_1}`}></div>
            </div>

            <div className={s.navbar}>
                <div className='bold_text'>previous</div>
                <div className='bold_text'>next</div>
                <div className='bold_text'>show all</div>
            </div>

            <div className={s.info}>
                <div className={s.column_1}>
                    <p className={`large_text ${s.img_1}`}>Pereira Creative Agency</p>
                    <p className='plain_text'>Branding Design</p>
                    <p className='plain_text'>February 28, 2015</p>
                    <p className='plain_text'>324 likes</p>

                    <p className='plain_text'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.</p>

                    <p className='middle_text'>
                        Role On Project:
                    </p>
                    <p className='plain_text'>
                        Project Designer, Lead Designer, Markerting Head
                    </p>

                    <p className='middle_text'>
                        Tags:
                    </p>
                    <p className='plain_text'>
                        Mobile App, UI/UX design
                    </p>

                    <button>share</button>
                    <div className={s.icons}>

                    </div>
                </div>

                <div className={s.column_2}>
                    <div className={s.img_2} />
                    <div className={s.img_3} />
                    <div className={s.img_4} />
                    <div className={s.img_5} />
                </div>
            </div>

            <div className='central_text_block'>
                <div className='large_text'>Related Works</div>
                <p className='plain_text central_text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
            </div>

            <div className={`columns ${s.columns}`}>
                <div className='column_1'>
                    <div className={s.img_6}></div>
                </div>
                <div className='column_2'>
                    <div className={s.img_7}></div>
                </div>

                <div className='column_3'>
                    <div className={s.img_8}></div>
                </div>
            </div>

        </div>
    )
}

export default Portfolio