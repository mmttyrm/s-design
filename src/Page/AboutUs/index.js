import style from './AboutUs.module.scss';
import classNames from 'classnames/bind';
import Header from '~/component/Header';
const cx = classNames.bind(style);
function AboutUs() {
    return (
        <div className={cx('wrapper')}>
            <Header />
        </div>
    );
}

export default AboutUs;
