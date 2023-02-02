import { Link } from 'react-router-dom';

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
                    <Image src={images.facebookLogin} alt="Logo Facebook" />
                </Link>

                <Search />

                <div className="header__inner__actions">
                    <ButtonCircle icon={images.messageIcon} tippyContent="Messenger" />
                    <ButtonCircle icon={images.notificationIcon} tippyContent="Thông báo" />
                    <ButtonCircle img={images.accountAvatar} tippyContent="Tài khoản" />
                </div>
            </div>
        </header>
    );
};

export default Header;
