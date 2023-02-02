import { Link } from 'react-router-dom';

const ButtonSquare = ({ to, href, children, primary, small, large, className, onClick, ...passProps }) => {
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
        <Comp className={classes.join(' ')} {...props}>
            {children}
        </Comp>
    );
};

export default ButtonSquare;
