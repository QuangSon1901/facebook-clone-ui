import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import ButtonCircle from '../ButtonCircle';
import Image from '../Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import config from '~/config';

const ButtonSquare = ({
    to,
    href,
    type = { type: 'normal', options: {} },
    children,
    primary,
    small,
    large,
    menuOptions,
    className,
    onClick,
    ...passProps
}) => {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = ['button-square', className, small && 'small', large && 'large', primary && 'primary'];

    return (
        <div className="button-square-menu">
            <Comp className={classes.join(' ')} {...props}>
                <div className="button-square__content">
                    {type.type === 'search' && <ButtonSearch options={type.options} />}
                    {type.type === 'messenger' && <ButtonMessenger options={type.options} />}
                    {type.type === 'tag' && children}
                </div>
            </Comp>
            {menuOptions && (
                <div className="button-square-menu__tippy">
                    <Tippy
                        interactive
                        visible={menuOptions.active}
                        placement="left"
                        render={(attrs) => (
                            <PopperWrapper style={{ minWidth: 'unset' }}>
                                <div className="button-square-menu__btn__menu">
                                    {menuOptions &&
                                        menuOptions.data.map((block, index) => (
                                            <div key={index} className="button-square-menu__btn__menu__block">
                                                {block.map((item, index2) => (
                                                    <ButtonSquare
                                                        key={index2}
                                                        to={config.routes.home}
                                                        large
                                                        style={{ padding: '4px' }}
                                                        type={{
                                                            type: 'search',
                                                            options: {
                                                                title: item.text,
                                                                img: item.img,
                                                                sizeImg: 's',
                                                                close: false,
                                                                styleImg: item.styleImg,
                                                            },
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        ))}
                                </div>
                            </PopperWrapper>
                        )}
                        onClickOutside={menuOptions.onClose}
                    >
                        <div className="button-square-menu__btn">
                            <ButtonCircle
                                img={images.icons1}
                                size="l"
                                whiteBtn
                                styleImg={{
                                    backgroundPosition: '-132px -110px',
                                    backgroundSize: '190px 204px',
                                    width: '20px',
                                    height: '20px',
                                }}
                                onClick={menuOptions.onActive}
                                hover
                            />
                        </div>
                    </Tippy>
                </div>
            )}
        </div>
    );
};

const ButtonSearch = ({ options }) => {
    const { sizeImg = 'l', more = '', title = '', img = '', close = true, styleImg } = options;
    return (
        <>
            <ButtonCircle img={img} size={sizeImg} styleImg={styleImg} />
            <div className="button-square__content__info">
                <div className="button-square__content__info__title">{title}</div>
                <div className="button-square__content__info__more">{more}</div>
            </div>
            {close && (
                <span className="button-square__content__close">
                    <ButtonCircle
                        img={images.icons1}
                        size="s"
                        styleImg={{
                            backgroundPosition: '-82px -172px',
                            backgroundSize: '190px 204px',
                            width: '12px',
                            height: '12px',
                        }}
                        hover
                    />
                </span>
            )}
        </>
    );
};

const ButtonMessenger = ({ options }) => {
    const { sizeImg = 'xxxl', message = '', sender = '', img = '', time, status = 'no-seen', online = false } = options;
    return (
        <>
            <ButtonCircle img={img} size={sizeImg} tickOnline={online} />
            <div className="button-square__content__info">
                <div className="button-square__content__info__sender">
                    {status === 'no-seen' ? <span style={{ fontWeight: '500' }}>{sender}</span> : sender}
                </div>
                <p className="button-square__content__info__message">
                    <span>
                        {status === 'no-seen' ? (
                            <span style={{ fontWeight: '500', color: 'var(--primary-color)' }}>{message}</span>
                        ) : (
                            message
                        )}
                    </span>
                    <span>&nbsp;&bull;&nbsp;{time}</span>
                </p>
            </div>
            <span className="button-square__content__status">
                {status === 'no-receive' && <Image src={images.notReceive} className="no-receive" />}
                {status === 'received' && <Image src={images.received} className="received" />}
                {status === 'received-seen' && <Image src={img} className="received-seen" />}
                {status === 'no-seen' && <span className="no-seen"></span>}
            </span>
        </>
    );
};

export default ButtonSquare;
