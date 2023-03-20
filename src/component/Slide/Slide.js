import style from './Slide.module.scss';
import classNames from 'classnames/bind';
import Button from '~/component/button/Button';

const cx = classNames.bind(style);
function Slide() {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('row')}>
                    <div className={cx('col-2')}>
                        <h3 className={cx('label-title')}>Label goes here</h3>
                        <h1 className={cx('title')}>Lorem Ipsum simply </h1>
                        <p className={cx('desc')}>
                            Welcome to Burger Bliss, where we take your cravings to a whole new
                            level! Our mouthwatering burgers are made from 100% beef and are served
                            on freshly baked buns.
                        </p>
                        <Button className={cx('btn')} outline>
                            Explore
                        </Button>
                    </div>
                    <div className={cx('col-2')}>
                        <img
                            className={cx('image-slide')}
                            src="http://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg"
                            title="image-slide"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Slide;
