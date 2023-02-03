import { Link } from 'react-router-dom';

import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images';
import config from '~/config';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search';
import ButtonCircle from '~/components/ButtonCircle';
import InputCircle from '~/components/InputCircle';
import ButtonSquare from '~/components/ButtonSquare';
import { useState } from 'react';

const menuData = [
    [
        {
            img: images.icons1,
            text: 'Đánh dấu chưa đọc',
            styleImg: {
                backgroundPosition: '-66px -88px',
                backgroundSize: '190px 204px',
                width: '20px',
                height: '20px',
            },
        },
        {
            img: images.icons1,
            text: 'Dùng thử Messenger dành cho Windows',
            styleImg: {
                backgroundPosition: '-104px -62px',
                backgroundSize: '190px 204px',
                width: '20px',
                height: '20px',
            },
        },
        {
            img: images.icons3,
            text: 'Tắt thông báo',
            styleImg: {
                backgroundPosition: '0px -262px',
                backgroundSize: '34px 774px',
                width: '20px',
                height: '20px',
            },
        },
        {
            img: images.icons3,
            text: 'Xem trang cá nhân',
            styleImg: {
                backgroundPosition: '0px -592px',
                backgroundSize: '34px 774px',
                width: '20px',
                height: '20px',
            },
        },
    ],
    [
        {
            img: images.icons3,
            text: 'Gọi thoại',
            styleImg: {
                backgroundPosition: '0px -570px',
                backgroundSize: '34px 774px',
                width: '20px',
                height: '20px',
            },
        },
        {
            img: images.icons3,
            text: 'Chat video',
            styleImg: {
                backgroundPosition: '0px -284px',
                backgroundSize: '34px 774px',
                width: '20px',
                height: '20px',
            },
        },
    ],
    [
        {
            img: images.icons3,
            text: 'Chặn',
            styleImg: {
                backgroundPosition: '0px -394px',
                backgroundSize: '34px 774px',
                width: '20px',
                height: '20px',
            },
        },
        {
            img: images.icons3,
            text: 'Lưu trữ đoạn chat',
            styleImg: {
                backgroundPosition: '0px -614px',
                backgroundSize: '34px 774px',
                width: '20px',
                height: '20px',
            },
        },
        {
            img: images.icons2,
            text: 'Xoá đoạn chat',
            styleImg: {
                backgroundPosition: '0px -1120px',
                backgroundSize: '26px 1412px',
                width: '20px',
                height: '20px',
            },
        },
    ],
];

const messageList = [
    {
        to: config.routes.home,
        sender: 'Hải Yến',
        message: 'Bạn: I love you ssssssss ssssss sssssssssss sssssssssssssss ssssssssssss',
        time: 'vài phút trước',
        img: images.accountAvatar,
        status: 'no-receive',
        online: true,
    },
    {
        to: config.routes.home,
        sender: 'Nguyễn Văn Huy',
        message: 'Ông trùm IT',
        time: '2 giờ',
        img: images.accountAvatar,
        status: 'no-seen',
        online: false,
    },
    {
        to: config.routes.home,
        sender: 'Nguyễn Duy Quang',
        message: 'Ông trùm bóc gạch',
        time: '1 ngày',
        img: images.accountAvatar,
        status: 'seen',
        online: true,
    },
    {
        to: config.routes.home,
        sender: 'Thu Chi',
        message: 'Bạn: Anh nhớ em lắm',
        time: '1 ngày',
        img: images.accountAvatar,
        status: 'received',
        online: false,
    },
    {
        to: config.routes.home,
        sender: 'Thanh Thảo',
        message: 'Bạn: Sao em không trả lời',
        time: '1 ngày',
        img: images.accountAvatar,
        status: 'received-seen',
        online: false,
    },
];

const actions = [
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
    {
        img: images.icons3,
        styleImg: {
            backgroundPosition: '0px -614px',
            backgroundSize: '34px 774px',
            width: '20px',
            height: '20px',
        },
        tippyContent: 'Xem tất cả trong Messenger',
    },
    {
        img: images.icons2,
        styleImg: {
            backgroundPosition: '0px -196px',
            backgroundSize: '26px 1412px',
            width: '20px',
            height: '20px',
        },
        tippyContent: 'Tạo phòng họp mặt mới',
    },
    {
        img: images.icons2,
        styleImg: {
            backgroundPosition: '0px -1276px',
            backgroundSize: '26px 1412px',
            width: '16px',
            height: '16px',
        },
        tippyContent: 'Tin nhắn mới',
    },
];

const Header = () => {
    const [messengerToggle, setMessengerToggle] = useState(false);
    const [menuOptionsMessage, setMenuOptionsMessage] = useState(null);
    return (
        <header className="header">
            <div className="header__inner">
                <Link to={config.routes.home} className="header__inner__logo">
                    <Image src={images.facebookLogin} alt="Logo Facebook" className="header__inner__logo__pc" />
                    <Image src={images.logoFBMobile} alt="Logo Facebook" className="header__inner__logo__mb" />
                    <ButtonCircle
                        icon={images.searchIcon}
                        className="header__inner__logo__mb"
                        style={{ backgroundColor: 'var(--bg-second)' }}
                        hover
                    />
                </Link>

                <Search />

                <div className="header__inner__actions">
                    <div>
                        <Tippy
                            interactive
                            visible={messengerToggle}
                            render={(attrs) => (
                                <PopperWrapper style={{ overflow: 'hidden' }}>
                                    <div className="header__inner__actions__messsage-wrapper">
                                        <div className="header__inner__actions__messsage-wrapper__main">
                                            <div>
                                                <div className="header__inner__actions__messsage-wrapper__main__header">
                                                    <div>
                                                        <h2 className="header__inner__actions__messsage-wrapper__main__header__title">
                                                            Chat
                                                        </h2>
                                                        <div className="header__inner__actions__messsage-wrapper__main__header__actions">
                                                            {actions &&
                                                                actions.length > 0 &&
                                                                actions.map((action, index) => (
                                                                    <ButtonCircle
                                                                        key={index}
                                                                        img={action.img}
                                                                        size="m"
                                                                        styleImg={action.styleImg}
                                                                        hover
                                                                        tippyContent={action.tippyContent}
                                                                    />
                                                                ))}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <InputCircle
                                                            size="m"
                                                            onChange={() => {
                                                                return;
                                                            }}
                                                            placeholder="Tìm kiếm trên Messenger"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="header__inner__actions__messsage-wrapper__main__messenger">
                                                    {messageList &&
                                                        messageList.length > 0 &&
                                                        messageList.map((messageItem, index) => {
                                                            const { to, sender, message, time, img, status, online } =
                                                                messageItem;
                                                            return (
                                                                <ButtonSquare
                                                                    key={index}
                                                                    to={to}
                                                                    large
                                                                    type={{
                                                                        type: 'messenger',
                                                                        options: {
                                                                            sizeImg: 'xxxl',
                                                                            sender,
                                                                            message,
                                                                            time,
                                                                            img,
                                                                            status,
                                                                            online,
                                                                        },
                                                                    }}
                                                                    menuOptions={{
                                                                        info: {},
                                                                        data: menuData,
                                                                        active: menuOptionsMessage === index,
                                                                        onActive: () =>
                                                                            menuOptionsMessage === index
                                                                                ? setMenuOptionsMessage(null)
                                                                                : setMenuOptionsMessage(index),
                                                                        onClose: () => setMenuOptionsMessage(null),
                                                                    }}
                                                                />
                                                            );
                                                        })}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="header__inner__actions__messsage-wrapper__footer">
                                            <Link to={config.routes.home}>Xem tất cả trong Messenger</Link>
                                        </div>
                                    </div>
                                </PopperWrapper>
                            )}
                            onClickOutside={() => setMessengerToggle(false)}
                        >
                            <div>
                                <ButtonCircle
                                    icon={images.messageIcon}
                                    hover
                                    notifyBadge="3"
                                    tippyContent="Messenger"
                                    active={true}
                                    style={{ backgroundColor: 'var(--bg-second)' }}
                                    onClick={() => setMessengerToggle(!messengerToggle)}
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
