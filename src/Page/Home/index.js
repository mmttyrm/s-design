import classNames from 'classnames/bind';
import style from './HomePage.module.scss';
import Header from '~/component/Header';
const cx = classNames.bind(style);

function HomePage() {
    return (
        <div className={cx('wrapper')}>
            <Header />
        </div>
    );
}

export default HomePage;
