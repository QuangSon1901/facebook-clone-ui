import React from 'react';
import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';
import Header from '~/Layout/components/Header/Header';

const cx = classNames.bind(styles);

const MainLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                {/* <SideBar /> */}
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
};

export default MainLayout;
