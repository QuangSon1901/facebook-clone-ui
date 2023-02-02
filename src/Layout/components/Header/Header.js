import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper/popper';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import AccountItem from '~/components/AccountItem/account_item';

const cx = classNames.bind(styles);

const Header = () => {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3, 4]);
        }, 0);
    }, []);
    return (
        <header className={cx('header')}>
            <div className={cx('header__inner')}>
                <Link to="/" className={cx('header__logo')}>
                    <img src={images.facebook_logo} alt="Logo Facebook" />
                </Link>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search__result')} tabIndex={-1} {...attrs}>
                            <PopperWrapper>
                                <div className={cx('search__result__header')}>
                                    <span>Tìm kiếm gần đây</span>
                                    <Link to="/" className={cx('search__result__header__update')}>
                                        <span>Chỉnh sửa</span>
                                    </Link>
                                </div>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('header__search')}>
                        <span>
                            <FontAwesomeIcon className={cx('header__search__icon')} icon={faMagnifyingGlass} />
                        </span>
                        <input placeholder="Tìm kiếm trên facebook" spellCheck="false" />
                    </div>
                </Tippy>
                <div className={cx('header__actions')}>
                    <div className={cx('header__actions__messager')}></div>
                    <div className={cx('header__actions__messager')}></div>
                    <div className={cx('header__actions__messager')}></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
