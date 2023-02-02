import { Link } from 'react-router-dom';

import images from '~/assets/images';

import config from '~/config';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search';

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <Link to={config.routes.home} className="header__inner__logo">
                    <Image src={images.facebookLogin} alt="Logo Facebook" />
                </Link>

                <Search />

                <div className="header__inner__actions">
                    <div className="header__inner__actions__button">
                        <span className="header__inner__actions__button__icon">
                            <img src={images.messageIcon} alt="" />
                        </span>
                    </div>
                    <div className="header__inner__actions__button">
                        <span className="header__inner__actions__button__icon">
                            <img src={images.notificationIcon} alt="" />
                        </span>
                    </div>
                    <div className="header__inner__actions__button">
                        <div
                            className="header__inner__actions__button__img"
                            style={{ backgroundImage: `url(${images.accountAvatar})` }}
                        ></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
