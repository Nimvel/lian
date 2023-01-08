import s from './About.module.scss'

const About = () => {
    return (
        <div className={s.about}>
            <div className={s.header}>
                <div className={`text_block ${s.about_the_agency}`}>
                    <div className='text'>about the agency</div>
                </div>

                <div className={`text_2 ${s.welcome_to_lian}`}>welcome to lian</div>
                <div className={s.img_1}></div>
            </div>

            <div className={s.block_1}>
                <div className={s.img_2}></div>
                <div>
                    <div className={`text_2`}>our story</div>
                    <p className='plain_text'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.
                    </p>

                    <p className='plain_text'>
                        Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
                        Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.
                    </p>
                    <div>
                        <div className={`text_2`}>our skills</div>
                        <div className='bold_text'>Photoshop</div>
                        <div className='skillbar'>
                            <div className={`line ${s.photoshop_line}`} />
                            <div className={`circle ${s.photoshop_circle}`} />
                            <div className={`${s.skill_value_block} ${s.photoshop_skill}`}>90%</div>
                        </div>

                        <div className='bold_text'>Branding</div>
                        <div className='skillbar'>
                            <div className={`line ${s.branding_line}`} />
                            <div className={`circle ${s.branding_circle}`} />
                            <div className={`${s.skill_value_block} ${s.branding_skill}`}>95%</div>
                        </div>

                        <div className='bold_text'>Photography</div>
                        <div className='skillbar'>
                            <div className={`line ${s.photography_line}`} />
                            <div className={`circle ${s.photography_circle}`} />
                            <div className={`${s.skill_value_block} ${s.photography_skill}`}>50%</div>
                        </div>

                        <div className='bold_text'>Web Design</div>
                        <div className='skillbar'>
                            <div className={`line ${s.design_line}`} />
                            <div className={`circle ${s.design_circle}`} />
                            <div className={`${s.skill_value_block} ${s.design_skill}`}>85%</div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={s.awesome_team_block}>

                <div className='large_text'>Awesome Team</div>
                <p className={`plain_text ${s.awesome_team_text}`}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.</p>
            </div>

            <div className={s.columns}>
                <div className={s.column_1}>
                    <div className={s.img_3}></div>
                    <p className='name'>Lian Joy</p>
                    <p className='bold_text'>CEO/Founder</p>
                    <p className={`plain_text ${s.plain_text}`}>
                        Lorem ipsum dolor sit amet, conse ctetuer adipi scing elit,
                        sed diam nonu mmy nibh euis mod tinci
                    </p>
                </div>
                <div className={s.column_2}>
                    <div className={s.img_4}></div>
                    <p className='name'>Albert Thanh</p>
                    <p className='bold_text'>CEO/Founder</p>
                    <p className={`plain_text ${s.plain_text}`}>
                        Lorem ipsum dolor sit amet, conse ctetuer adipi scing elit,
                        sed diam nonu mmy nibh euis mod tinci
                    </p>
                </div>

                <div className={s.column_3}>
                    <div className={s.img_5}></div>
                    <p className='name'>Jenn Pereira</p>
                    <p className='bold_text'>CEO/Founder</p>
                    <p className={`plain_text ${s.plain_text}`}>
                        Lorem ipsum dolor sit amet, conse ctetuer adipi scing elit,
                        sed diam nonu mmy nibh euis mod tinci
                    </p>
                </div>

            </div>

        </div>
    )
}

export default About