import { FC } from 'react'
import s from './Blog.module.scss'

type BlogPostProps = {
    withImage: boolean
}

const BlogPost: FC<BlogPostProps> = ({ withImage }) => {
    return (
        <div>
            <p className='title'>
                {withImage ? 'I am a Blog Post with an Awesome Image' : 'I am a Blog Post Title'}
            </p>
            <p className='?'>
                <span className="material-symbols-outlined">person</span>
                by Jenn Pereira</p>
            <p className='plain_text'>
                Phasellus et nisl tellus. Etiam facilisis eu nisi scelerisque faucibus.
                Proin semper suscipit magna, nec imperdiet lacus semper vitae.
                Sed hendrerit enim non justo posuere placerat eget purus mauris.
                {withImage ? '..' : 'Etiam facilisis eu nisi scelerisque faucibus...'}
            </p>
            <p className='?'>
                <span className="material-symbols-outlined">calendar_today</span>
                on July 19, 2016</p>
        </div>
    )
}

const Blog = () => {
    return (
        <div className={s.blog}>
            <div className='content_header'>
                <div className={`text_block text_1 ${s.news_about_lian}`}>
                    <div className='text'>news about lian</div>
                </div>

                <div className={`middle_text  text_2 ${s.latest_news}`}>latest news & insights</div>
                <div className={`background ${s.img_1}`}></div>
            </div>

            <div className={s.columns}>
                <div className={s.column_1}>
                    <button>wordpress</button>
                    <BlogPost withImage={false} />
                    <div className={s.img_2}></div>
                    <BlogPost withImage={true} />
                    <div className={s.img_3}></div>
                </div>
                <div className={s.column_2}>
                    <div className={s.img_4}></div>
                    <BlogPost withImage={true} />
                    <div className={s.img_5}></div>
                    <div className={s.img_6}></div>
                    <BlogPost withImage={true} />
                </div>

                <div className={s.column_3}>
                    <input className={s.search} placeholder='Search' />
                    <div className={s.recent_posts_block}>
                        <div className={s.title}>
                            <div className={`middle_text ${s.title_text}`}>recent posts</div>
                        </div>
                        <div className={s.post_block}>
                            <div className={s.img_1_1}></div>
                            <p className={s.post_title}>Lorem ipsum dolor sit amet, consec</p>
                            <p className='plain_text'>July 5, 2016</p>
                        </div>
                        <div className={s.post_block}>
                            <div className={s.img_1_2}></div>
                            <p className={s.post_title}>Ut wisi enim ad minim veniam, quis</p>
                            <p className='plain_text'>July 17, 2016</p>
                        </div>
                        <div className={s.post_block}>
                            <div className={s.img_1_3}></div>
                            <p className={s.post_title}>Aliquip ex ea commodo aliquam erat volutpat</p>
                            <p className='plain_text'>July 21, 2016</p>
                        </div>
                        <div className={s.post_block}>
                            <div className={s.img_1_4}></div>
                            <p className={s.post_title}>Ut wisi enim ad minim veniam, quis</p>
                            <p className='plain_text'>July 17, 2016</p>
                        </div>
                    </div>

                    <div className={s.popular_tags_block}>
                        <div className={s.title}>
                            <div className={`middle_text ${s.title_text}`}>popular tags</div>
                        </div>
                        <div className={s.tags}>
                            <span className={`plain_text ${s.tag}`}>construction</span>
                            <span className={`plain_text ${s.tag}`}>engineering</span>
                            <span className={`plain_text ${s.tag}`}>architecture</span>
                            <span className={`plain_text ${s.tag}`}>structural design</span>
                            <span className={`plain_text ${s.tag}`}>civil engineer</span>
                            <span className={`plain_text ${s.tag}`}>industrial</span>
                            <span className={`plain_text ${s.tag}`}>management</span>
                            <span className={`plain_text ${s.tag}`}>mechanical</span>

                        </div>
                    </div>

                    <div className={s.instagram_block}>
                        <div className={s.title}>
                            <div className={`middle_text ${s.title_text}`}>instagram</div>
                        </div>
                        <div className={s.images}>
                            <div className={s.img_2_1} />
                            <div className={s.img_2_2} />
                            <div className={s.img_2_3} />
                            <div className={s.img_2_4} />
                            <div className={s.img_2_5} />
                            <div className={s.img_2_6} />
                            <div className={s.img_2_7} />
                            <div className={s.img_2_8} />
                            <div className={s.img_2_9} />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Blog