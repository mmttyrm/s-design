import classNames from 'classnames/bind';
import style from './button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);
function Button({
    to,
    href,
    primary = false,
    disabled = false,
    children,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    //Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    //

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
    });

    return (
        <Comp className={classes} {...props}>
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

export default Button;
