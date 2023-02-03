import { Link } from 'react-router-dom';

import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images';
import config from '~/config';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search';
import ButtonCircle from '~/components/ButtonCircle';

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <Link to={config.routes.home} className="header__inner__logo">
                    <Image src={images.facebookLogin} alt="Logo Facebook" className="header__inner__logo__pc" />
                    <Image src={images.logoFBMobile} alt="Logo Facebook" className="header__inner__logo__mb" />
                    <ButtonCircle icon={images.searchIcon} className="header__inner__logo__mb" />
                </Link>

                <Search />

                <div className="header__inner__actions">
                    <div>
                        <Tippy
                            interactive
                            visible={true}
                            render={(attrs) => (
                                <div className="header__inner__actions__messsage-wrapper">
                                    <PopperWrapper>
                                        <div className="header__inner__actions__messsage-wrapper__main">
                                            <div className="header__inner__actions__messsage-wrapper__header">
                                                <div>
                                                    <h1 className="header__inner__actions__messsage-wrapper__header__title">
                                                        Chat
                                                    </h1>
                                                    <div className="header__inner__actions__messsage-wrapper__header__actions"></div>
                                                </div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="header__inner__actions__messsage-wrapper__footer">
                                            <Link to={config.routes.home}>Xem tất cả trong Messenger</Link>
                                        </div>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div>
                                <ButtonCircle
                                    icon={images.messageIcon}
                                    hover
                                    notifyBadge="3"
                                    tippyContent="Messenger"
                                    style={{ backgroundColor: 'var(--bg-second)' }}
                                />
                            </div>
                        </Tippy>
                    </div>
                    <ButtonCircle
                        icon={images.notificationIcon}
                        hover
                        notifyBadge="10"
                        tippyContent="Thông báo"
                        style={{ backgroundColor: 'var(--bg-second)' }}
                    />
                    <ButtonCircle img={images.accountAvatar} hover tippyContent="Tài khoản" />
                </div>
            </div>
        </header>
    );
};

export default Header;
