import { Link } from 'react-router-dom';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images';
import ButtonCircle from '~/components/ButtonCircle';
import ButtonSquare from '~/components/ButtonSquare';
import config from '~/config';
import InputCircle from '~/components/InputCircle';
import Image from '~/components/Image';

function Home() {
    return (
        <div className="home-page">
            <div className="home-page__body">
                <div className="home-page__body__sidebar">
                    <div className="home-page__body__sidebar__content">
                        <div className="home-page__body__sidebar__content__main">
                            <div className="home-page__body__sidebar__content__main__top">
                                <div className="home-page__body__sidebar__content__main__top__block">
                                    <div className="home-page__body__sidebar__content__main__block__top__body">
                                        <ButtonSquare
                                            to={config.routes.home}
                                            large
                                            style={{ backgroundColor: 'transparent' }}
                                            type={{
                                                type: 'search',
                                                options: {
                                                    title: 'Sơn Đặng',
                                                    img: images.accountAvatar,
                                                    close: false,
                                                    font: 'bold',
                                                },
                                            }}
                                        />
                                        <ButtonSquare
                                            to={config.routes.home}
                                            large
                                            style={{ backgroundColor: 'transparent' }}
                                            type={{
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
                                            }}
                                        />
                                        <ButtonSquare
                                            to={config.routes.home}
                                            large
                                            style={{ backgroundColor: 'transparent' }}
                                            type={{
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
                                            }}
                                        />
                                        <ButtonSquare
                                            to={config.routes.home}
                                            large
                                            style={{ backgroundColor: 'transparent' }}
                                            type={{
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
                                            }}
                                        />
                                        <ButtonSquare
                                            to={config.routes.home}
                                            large
                                            style={{ backgroundColor: 'transparent' }}
                                            type={{
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
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="home-page__body__sidebar__content__main__bottom">
                                <Link>Quyền riêng tư</Link>&nbsp;&bull;&nbsp;<Link>Điều khoản</Link>&nbsp;&bull;&nbsp;
                                <Link>Quảng cáo</Link>&nbsp;&bull;&nbsp;
                                <Link>Lựa chọn quảng cáo</Link>&nbsp;&bull;&nbsp;<Link>Cookie</Link>
                                &nbsp;&bull;&nbsp;<Link>Meta © 2023</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-page__body__content">
                    <div className="home-page__body__content__main">
                        <div className="home-page__body__content__main__block">
                            <PopperWrapper style={{ padding: '8px 16px' }} className="shadow-2">
                                <div className="home-page__body__content__main__block__card">
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
                                    <div className="home-page__body__content__main__block__card__actions">
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
                                            <span>Chỉnh sửa</span>
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
                                            <span>Chỉnh sửa</span>
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
                                            <span>Chỉnh sửa</span>
                                        </ButtonSquare>
                                    </div>
                                </div>
                            </PopperWrapper>
                        </div>
                    </div>
                </div>
                <div className="home-page__body__sidebar">
                    <div className="home-page__body__sidebar__content">
                        <div className="home-page__body__sidebar__content__main">
                            <div className="home-page__body__sidebar__content__main__top">
                                <div className="home-page__body__sidebar__content__main__top__block">
                                    <div className="home-page__body__sidebar__content__main__top__block__header">
                                        <h4>Sinh nhật</h4>
                                        <div className="home-page__body__sidebar__content__main__top__block__header__actions"></div>
                                    </div>
                                    <div className="home-page__body__sidebar__content__main__block__body">
                                        <ButtonSquare
                                            to={config.routes.home}
                                            large
                                            style={{ backgroundColor: 'transparent' }}
                                            type={{
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
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="home-page__body__sidebar__content__main__top__block">
                                    <div className="home-page__body__sidebar__content__main__top__block__header">
                                        <h4>Người liên hệ</h4>
                                        <div className="home-page__body__sidebar__content__main__top__block__header__actions">
                                            <ButtonCircle
                                                activeAni
                                                img={images.icons1}
                                                size="m"
                                                styleImg={{
                                                    backgroundPosition: '-132px -110px',
                                                    backgroundSize: '190px 204px',
                                                    width: '20px',
                                                    height: '20px',
                                                }}
                                                hover
                                                tippyContent="Tuỳ chọn"
                                            />
                                        </div>
                                    </div>
                                    <div className="home-page__body__sidebar__content__main__block__body">
                                        <ButtonSquare
                                            to={config.routes.home}
                                            small
                                            style={{ backgroundColor: 'transparent' }}
                                            type={{
                                                type: 'messenger',
                                                options: {
                                                    sizeImg: 'l',
                                                    sender: 'Quang Nguyễn',
                                                    img: images.accountAvatar,
                                                    online: true,
                                                    font: 'bold',
                                                },
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
