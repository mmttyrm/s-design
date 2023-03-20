import classNames from 'classnames/bind';
import style from './Contact.module.scss';

const cx = classNames.bind(style);
function Contact() {
    return <div className={cx('wrapper')}>Contact</div>;
}

export default Contact;
