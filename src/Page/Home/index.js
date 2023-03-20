import classNames from 'classnames/bind';
import style from './HomePage.module.scss';
import Header from '~/component/Header';
import Slide from '~/component/Slide';
const cx = classNames.bind(style);

function HomePage() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Slide />
        </div>
    );
}

export default HomePage;
