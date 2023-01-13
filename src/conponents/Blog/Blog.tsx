import { FC } from 'react'
import s from './Blog.module.scss'

type BlogPostProps = {
    withImage?: boolean
    small?: boolean
}

const BlogPost: FC<BlogPostProps> = ({ withImage, small}) => {
    let dimensions = withImage || small ? 'small' : 'large'

    return (
        <div>
            <p className='title'>
                {withImage 
                ? 'I am a Blog Post with an Awesome Image' 
                : 'I am a Blog Post Title'}
            </p>
            {/* <span className="material-symbols-outlined">person</span> */}
            <span className={s.data_text}>by Jenn Pereira</span>
            <p className={`${s.post_text} ${s[dimensions]}`}>
                {withImage
                    ? 'Proin semper suscipit magna, nec imperdiet lacus semper vitae. Sed hendrerit enim non justo posuere placerat eget purus mauris...'
                    : small
                    ? 'Phasellus et nisl tellus. Etiam facilisis eu nisi scelerisque faucibus. Proin semper suscipit magna, nec imperdiet lacus semper...'
                    : 'Phasellus et nisl tellus. Etiam facilisis eu nisi scelerisque faucibus. Proin semper suscipit magna, nec imperdiet lacus semper vitae. Sed hendrerit enim non justo posuere placerat eget purus mauris. Etiam facilisis eu nisi scelerisque faucibus...'}
            </p>
            {/* <span className="material-symbols-outlined">calendar_today</span> */}
            <span className={s.data_text}>on July 19, 2016</span>
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
                    {/* <button>wordpress</button> */}
                    <BlogPost />
                    <a>
                        <div className={s.img_2} />
                        <div className={s.post}>
                            <BlogPost small={true} />
                        </div>
                    </a>
                    <BlogPost withImage={true} />
                    <a>
                        <div className={s.img_3} />
                        <div className={s.post}>
                            <BlogPost small={true} />
                        </div>
                    </a>
                </div>

                <div className={s.column_2}>
                    <a><div className={s.img_4} /></a>
                    <BlogPost withImage={true} />
                    <a><div className={s.img_5} /></a>
                    <a><div className={s.img_6} /></a>
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
                <button>load more</button>

            </div>

        </div>
    )
}

export default Blog