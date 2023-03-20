import classNames from 'classnames';
import style from './User.module.scss';
const cx = classNames.bind(style);

function User() {
    return (
        <div className={cx('wrapper')}>
            <h1>User Name</h1>
        </div>
    );
}

export default User;
