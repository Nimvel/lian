import s from './Contact.module.scss'

const Contact = () => {
    return (
        <div className={s.contact}>
            <div className='content_header'>
                <div className={`text_block text_1 ${s.get_in_touch}`}>
                    <div className='text'>get in touch</div>
                </div>

                <div className={`middle_text  text_2 ${s.contact_us_today}`}>contact us today</div>
                <div className={`background ${s.img_1}`}></div>
            </div>

            <div className={s.info}>
                <div className={s.column_1}>
                    <div className={s.large_text}>office info</div>
                    <p className='plain_text'>People Behind the Success of our Company</p>
                    <p className={s.border} />
                    <p className='plain_text'>
                        <b>Office Hours:</b>   Mon-Friday 8am - 10pm
                    </p>
                    <p className='plain_text'>
                        <b>Address:</b> Igbalangao, Bugasong, Antique
                    </p>
                    <p className='plain_text'>
                        <b>Tell:</b>  123-456-7890<br />
                        <b>Fax:</b>  123-456-7890
                    </p>
                </div>

                <div className={s.column_2}>
                    <input placeholder='Name' />
                    <input placeholder='Email' />
                    <textarea className={s.placeholder} placeholder='Message' />
                    <button>send message</button>
                </div>
            </div>

            <div className={s.img_2}>
                <div className={s.box}>
                    <p className={s.middle_text}>Mulitix Big Wordpress Theme</p>
                    <p className='plain_text'>110-00 Rockaway Blvd <br />
                        South Ozone Park, NY 11420</p>
                </div>
            </div>

            <div className='central_text_block'>
                <div className='large_text'>Our Values</div>
                <p className='plain_text central_text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.</p>
            </div>

            <div className={`columns ${s.columns}`}>
                <div className='column_1'>
                    <div className={s.img_3}></div>
                    <p className={`name ${s.title}`}>Who We Are</p>
                    <p className={`plain_text ${s.plain_text}`}>
                        Lorem ipsum dolor sit amet, conse ctetuer adipi scing elit,
                        sed diam nonu mmy nibh euis mod tinci
                    </p>
                </div>
                <div className='column_2'>
                    <div className={s.img_4}></div>
                    <p className={`name ${s.title}`}>Our Vision</p>
                    <p className={`plain_text ${s.plain_text}`}>
                        Lorem ipsum dolor sit amet, conse ctetuer adipi scing elit,
                        sed diam nonu mmy nibh euis mod tinci
                    </p>
                </div>

                <div className='column_3'>
                    <div className={s.img_5}></div>
                    <p className={`name ${s.title}`}>Our Mission</p>
                    <p className={`plain_text ${s.plain_text}`}>
                        Lorem ipsum dolor sit amet, conse ctetuer adipi scing elit,
                        sed diam nonu mmy nibh euis mod tinci
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Contact