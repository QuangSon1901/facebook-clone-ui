import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';

const ButtonCircle = ({
    to,
    href,
    img,
    icon,
    tippyContent,
    children,
    small,
    large,
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

    const renderIcon = (icon) => {
        return (
            <span className="button-circle__icon">
                <img src={icon} alt="" />
            </span>
        );
    };

    const renderImg = (img) => {
        return <div className="button-circle__img" style={{ backgroundImage: `url(${img})` }}></div>;
    };

    const classes = ['button-circle', className, small && 'small', large && 'large'];
    return tippyContent ? (
        <Tippy content={<span className="tippy-text">{tippyContent}</span>} delay={[200, 0]} arrow={false}>
            <Comp className={classes.join(' ')} {...props}>
                {icon && renderIcon(icon)}
                {img && renderImg(img)}
            </Comp>
        </Tippy>
    ) : (
        <Comp className={classes.join(' ')} {...props}>
            {icon && renderIcon(icon)}
            {img && renderImg(img)}
        </Comp>
    );
};

export default ButtonCircle;
