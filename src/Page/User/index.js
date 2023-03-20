import classNames from 'classnames';
import style from './User.module.scss';
import Header from '~/component/Header';
const cx = classNames.bind(style);

function User() {
    return (
        <div className={cx('wrapper')}>
            <Header />
        </div>
    );
}

export default User;
