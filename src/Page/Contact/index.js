import classNames from 'classnames/bind';
import style from './Contact.module.scss';
import Header from '~/component/Header';
const cx = classNames.bind(style);
function Contact() {
    return (
        <div className={cx('wrapper')}>
            <Header />
        </div>
    );
}

export default Contact;
