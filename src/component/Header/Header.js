import classNames from 'classnames/bind';
import style from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/component/button/Button';
const cx = classNames.bind(style);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <img className={cx('logo-img')} src={images.logo} alt="Logo" />
                </div>
                <div className={cx('menu-nav')}>
                    <ul className={cx('menu-list')}>
                        <li className={cx('menu-item')}>
                            <Button to={'/'} className={cx('btn')}>
                                Home
                            </Button>
                        </li>
                        <li className={cx('menu-item')}>
                            <Button to={'/user'} className={cx('btn')}>
                                About Us
                            </Button>
                        </li>
                        <li className={cx('menu-item')}>
                            <Button to={'/contact'} className={cx('btn')}>
                                Contacts
                            </Button>
                        </li>
                    </ul>

                    <Button className={cx('btn')} primary disabled>
                        Order Now
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
