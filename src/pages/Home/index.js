import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images';
import ButtonCircle from '~/components/ButtonCircle';
import ButtonSquare from '~/components/ButtonSquare';
import config from '~/config';
import InputCircle from '~/components/InputCircle';
import HomeSidebar from './HomeSidebar';
import Posts, { PostsBody, PostsFooter, PostsHeader } from '~/components/Posts';
import { Link } from 'react-router-dom';

const sidebarMenuRight = [
    {
        title: 'Sinh nhật',
        data: [
            {
                to: config.routes.home,
                type: {
                    type: 'search',
                    options: {
                        title: 'Hôm nay là sinh nhật của Nguyễn Văn Huy',
                        img: images.icons7,
                        close: false,
                        styleImg: {
                            backgroundPosition: '0 0',
                            backgroundSize: '38px 378px',
                            width: '36px',
                            height: '36px',
                            WebkitFilter: 'unset',
                        },
                    },
                },
            },
        ],
    },
    {
        title: 'Người liên hệ',
        actions: [
            {
                img: images.icons1,
                styleImg: {
                    backgroundPosition: '-132px -110px',
                    backgroundSize: '190px 204px',
                    width: '20px',
                    height: '20px',
                },
                tippyContent: 'Tuỳ chọn',
            },
        ],
        data: [
            {
                to: config.routes.home,
                type: {
                    type: 'messenger',
                    options: {
                        sizeImg: 'l',
                        sender: 'Quang Nguyễn',
                        img: images.accountAvatar,
                        online: true,
                        font: 'bold',
                    },
                },
            },
        ],
    },
];

const sidebarMenuLeft = [
    {
        data: [
            {
                to: config.routes.home,
                type: {
                    type: 'search',
                    options: {
                        title: 'Sơn Đặng',
                        img: images.accountAvatar,
                        close: false,
                        font: 'bold',
                    },
                },
            },
            {
                to: config.routes.home,
                type: {
                    type: 'search',
                    options: {
                        title: 'Bạn bè',
                        img: images.icons4,
                        close: false,
                        font: 'bold',
                        styleImg: {
                            backgroundPosition: '0 -304px',
                            backgroundSize: '38px 570px',
                            width: '36px',
                            height: '36px',
                            WebkitFilter: 'unset',
                        },
                    },
                },
            },
            {
                to: config.routes.home,
                type: {
                    type: 'search',
                    options: {
                        title: 'Messenger',
                        img: images.icons5,
                        close: false,
                        font: 'bold',
                        styleImg: {
                            backgroundPosition: '0 -38px',
                            backgroundSize: '38px 270px',
                            width: '36px',
                            height: '36px',
                            WebkitFilter: 'unset',
                        },
                    },
                },
            },
            {
                to: config.routes.home,
                type: {
                    type: 'search',
                    options: {
                        title: 'Nhóm',
                        img: images.icons4,
                        close: false,
                        font: 'bold',
                        styleImg: {
                            backgroundPosition: '0 -76px',
                            backgroundSize: '38px 570px',
                            width: '36px',
                            height: '36px',
                            WebkitFilter: 'unset',
                        },
                    },
                },
            },
            {
                to: config.routes.home,
                type: {
                    type: 'search',
                    options: {
                        title: 'Watch',
                        img: images.icons4,
                        close: false,
                        font: 'bold',
                        styleImg: {
                            backgroundPosition: '0 -532px',
                            backgroundSize: '38px 570px',
                            width: '36px',
                            height: '36px',
                            WebkitFilter: 'unset',
                        },
                    },
                },
            },
        ],
    },
];

const caption = `<p>
..."Thật là thiếu hiểu biết nếu chúng ta cứ cầu xin Phật ban cho địa vị,
công danh, bạc tiền, tình ái – thứ mà Ngài đã buông bỏ từ lâu. Bởi thế,
thật là thiếu hiểu biết nếu chúng ta coi Đạo Phật là đạo của tín mộ, của
cầu nguyện, cầu cúng. Không! Đạo Phật là đạo của tỉnh thức, giác ngộ và
giải thoát với những giáo lý và phương pháp thực tập cụ thể giúp chúng
ta chuyển hóa khổ đau, chế tác hạnh phúc, vượt thoát sợ hãi của sinh,
tử, tiếp xúc được với Niết bàn trong giây phút hiện tại..."
</p>
<br />
<p>(Nhà báo Hoàng Anh Sướng.)</p>
<p>#14/01/2023(ÂL)</p>`;

function Home() {
    return (
        <div className="home-page">
            <div className="home-page__body">
                <HomeSidebar data={sidebarMenuLeft}>
                    <div className="home-page__body__footer">
                        <Link>Quyền riêng tư</Link>&nbsp;&bull;&nbsp;<Link>Điều khoản</Link>&nbsp;&bull;&nbsp;
                        <Link>Quảng cáo</Link>&nbsp;&bull;&nbsp;
                        <Link>Lựa chọn quảng cáo</Link>&nbsp;&bull;&nbsp;<Link>Cookie</Link>
                        &nbsp;&bull;&nbsp;<Link>Meta © 2023</Link>
                    </div>
                </HomeSidebar>
                <div className="home-page__body__content">
                    <div className="home-page__body__content__main">
                        <div className="home-page__body__content__main__block">
                            <Posts>
                                <div className="home-page__body__content__main__block__card__content">
                                    <ButtonCircle img={images.accountAvatar} hover />
                                    <InputCircle
                                        style={{
                                            textAlign: 'left',
                                            display: 'block',
                                            color: 'var(--secondary-text)',
                                        }}
                                        type="button"
                                        value="Vũ ơi, bạn đang nghĩ gì thế?"
                                        width="100%"
                                        placeholder="Tìm kiếm trên Facebook"
                                    />
                                </div>
                                <div className="card__actions">
                                    <ButtonSquare
                                        to={config.routes.home}
                                        small
                                        type={{
                                            type: 'tag',
                                        }}
                                    >
                                        <ButtonCircle
                                            img={images.icons6}
                                            size="m"
                                            styleImg={{
                                                backgroundPosition: '0 -60px',
                                                backgroundSize: '34px 558px',
                                                width: '24px',
                                                height: '24px',
                                                WebkitFilter: 'unset',
                                            }}
                                        />
                                        <span className="card__actions__span">Video trực tiếp</span>
                                    </ButtonSquare>
                                    <ButtonSquare
                                        to={config.routes.home}
                                        small
                                        type={{
                                            type: 'tag',
                                        }}
                                    >
                                        <ButtonCircle
                                            img={images.icons6}
                                            size="m"
                                            styleImg={{
                                                backgroundPosition: '0 -242px',
                                                backgroundSize: '34px 558px',
                                                width: '24px',
                                                height: '24px',
                                                WebkitFilter: 'unset',
                                            }}
                                        />
                                        <span className="card__actions__span">Ảnh/Video</span>
                                    </ButtonSquare>
                                    <ButtonSquare
                                        to={config.routes.home}
                                        small
                                        type={{
                                            type: 'tag',
                                        }}
                                    >
                                        <ButtonCircle
                                            img={images.icons6}
                                            size="m"
                                            styleImg={{
                                                backgroundPosition: '0 -190px',
                                                backgroundSize: '34px 558px',
                                                width: '24px',
                                                height: '24px',
                                                WebkitFilter: 'unset',
                                            }}
                                        />
                                        <span className="card__actions__span">Cảm xúc/Hoạt động</span>
                                    </ButtonSquare>
                                </div>
                            </Posts>
                        </div>
                        <div className="home-page__body__content__main__block">
                            <Posts>
                                <PostsHeader
                                    avatar="https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-9/196485960_294333389038312_4022926651145846403_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=J34d2wKIoCkAX_TMfpv&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfDaWucngbFpd9ijJDadsLYKxnRWx8JzkBzpwVXUL6pH1g&oe=640821B0"
                                    poster="Lập Trình C, C++, C#, Java, Python, PHP"
                                    time="2 giờ"
                                    mode={images.publicIcon}
                                />
                                <PostsBody
                                    type="image"
                                    posts={{
                                        caption,
                                        images: [
                                            'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/328874180_1027386194884472_6759496070844373252_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rOEQYSdEWAAAX8lgM6u&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfAIvGOYywPJTGlKfjoRnDL0p6-2dQcg77vI6tJvVkBHxw&oe=63E57863',
                                        ],
                                    }}
                                />
                                <PostsFooter
                                    metaData={{
                                        emoijs: [
                                            {
                                                type: 'like',
                                                quantity: 30,
                                            },
                                            {
                                                type: 'heart',
                                                quantity: 40,
                                            },
                                        ],
                                        numOfEmojs: 70,
                                        numOfComment: 287,
                                        numOfShare: 925,
                                    }}
                                />
                            </Posts>
                        </div>
                        <div className="home-page__body__content__main__block">
                            <Posts>
                                <PostsHeader
                                    avatar="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/251742181_625639695458524_8462877496399400083_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Wzk6r6Tt2LgAX9zcael&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfDqHSK2j7ceMnA8VZnYvTlg--U_Bx_jpjGTL8_x7gsaNQ&oe=63E69CA3"
                                    poster="Girl 19"
                                    time="3 giờ"
                                    mode={images.publicIcon}
                                />
                                <PostsBody
                                    type="image"
                                    posts={{
                                        caption: '<p>So cute</p>',
                                        images: [
                                            'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/329259569_3350651721822708_1400078453783535036_n.jpg?stp=cp6_dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ZJX_gr38em8AX-aanaW&tn=Xl2eKUNrkfFh5amo&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfBkrsUZ6DjopVNlr1gN7fSnuh4-_hWC5JkGUkxdkSJR6A&oe=63E4D479',
                                        ],
                                    }}
                                />
                                <PostsFooter
                                    metaData={{
                                        emoijs: [
                                            {
                                                type: 'like',
                                                quantity: 3121,
                                            },
                                            {
                                                type: 'heart',
                                                quantity: 391,
                                            },
                                        ],
                                        numOfEmojs: 3512,
                                        numOfComment: 27,
                                        numOfShare: 6,
                                    }}
                                />
                            </Posts>
                        </div>
                    </div>
                </div>
                <HomeSidebar data={sidebarMenuRight} />
            </div>
        </div>
    );
}

export default Home;
