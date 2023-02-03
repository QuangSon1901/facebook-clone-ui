import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';

const ButtonCircle = ({
    to,
    href,
    img,
    icon,
    size = 'xl',
    tippyContent,
    notifyBadge,
    children,
    className,
    hover,
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

    const renderIcon = (icon) => {
        return (
            <div className="button-circle__icon">
                <img src={icon} alt="" />
            </div>
        );
    };

    const renderImg = (img) => {
        return <div className="button-circle__img" style={{ backgroundImage: `url(${img})` }}></div>;
    };

    const classes = ['button-circle', className, size, hover && 'hover'];
    return tippyContent ? (
        <Tippy content={<span className="tippy-text">{tippyContent}</span>} delay={[200, 0]} arrow={false}>
            <Comp className={classes.join(' ')} {...props}>
                {icon && renderIcon(icon)}
                {img && renderImg(img)}
                {notifyBadge && <span className="button-circle__notify-badge">{notifyBadge}</span>}
            </Comp>
        </Tippy>
    ) : (
        <Comp className={classes.join(' ')} {...props}>
            {icon && renderIcon(icon)}
            {img && renderImg(img)}
            {notifyBadge && <span className="button-circle__notify-badge">{notifyBadge}</span>}
        </Comp>
    );
};

export default ButtonCircle;
