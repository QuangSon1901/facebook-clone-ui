import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Tippy from '@tippyjs/react/headless';
import { faBell, faMagnifyingGlass, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import config from '~/config';
import Image from '~/components/Image';

const Header = () => {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3, 4]);
        }, 0);
    }, []);
    return (
        <header className="header">
            <div className="header__inner">
                <Link to={config.routes.home} className="header__inner__logo">
                    <Image src={images.facebookLogin} alt="Logo Facebook" />
                </Link>
                <div className="header__inner__search">
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className="header__inner__search__result" tabIndex={-1} {...attrs}>
                                <PopperWrapper>
                                    <div className="header__inner__search__result__header">
                                        <span>Tìm kiếm gần đây</span>
                                        <Link to="/" className="header__inner__search__result__header__update">
                                            <span>Chỉnh sửa</span>
                                        </Link>
                                    </div>
                                    <div className="header__inner__search__result__body">
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                    </div>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <label htmlFor="search-input" className="header__inner__search__label">
                            <span>
                                <FontAwesomeIcon
                                    className="header__inner__search__label__icon"
                                    icon={faMagnifyingGlass}
                                />
                            </span>
                            <input id="search-input" placeholder="Tìm kiếm trên facebook" spellCheck="false" />
                        </label>
                    </Tippy>
                </div>

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
