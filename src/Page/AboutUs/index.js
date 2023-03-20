import style from './AboutUs.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);
function AboutUs() {
    return <div className={cx('wrapper')}></div>;
}

export default AboutUs;
